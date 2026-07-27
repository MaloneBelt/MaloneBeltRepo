# Plan — API del proyecto + frontend conectado

> Estado: **pendiente de ejecución** (aprobado como plan, sin cambios aplicados aún).
> Alcance confirmado: catálogo y búsqueda desde BD, leads persistidos, carrito y checkout guest con UI nueva. Sin pasarela de pago (las órdenes quedan `PENDING`); precios/stock de variantes son placeholders sembrados; productos made-to-order no son comprables (CTA de cotización).

## Contexto

La BD Postgres (docker) ya está migrada con el modelo completo (`prisma/schema.prisma`, ver `docs/data-model.md`) pero está vacía; el frontend lee catálogo/búsqueda de archivos TS (`src/data/*.ts`) y el quote form no persiste. Este plan crea la API y conecta el frontend, respetando las reglas del proyecto: **sin server actions** (route handlers), **Zustand** para estado global de cliente, **react-hook-form + zod** en formularios, un solo CTA marigold por vista, dinero en centavos enteros.

Patrón de datos: las páginas de servidor consultan Prisma directamente a través de una capa de servicios; los route handlers `/api` sirven mutaciones y componentes cliente (quote form, carrito, checkout).

## Hechos técnicos verificados

- Prisma 7: `new PrismaClient({ adapter: new PrismaPg({ connectionString }) })`; `@prisma/adapter-pg` NO está instalado. `prisma.config.ts` soporta `migrations.seed`.
- Next 16: route handlers sin caché por defecto; `cookies()` es async y `.set/.delete` solo se permite en route handlers; `params`/`searchParams` son Promises; sin `cacheComponents`, las páginas prerenderizan en build ⇒ **`npm run build` requerirá la BD encendida**.
- In-stock: endless-belt, zip-clip, ep-multi-ply; made-to-order: toughflex, ripstop, cleated-chevron.
- `quote-form.tsx` importa `products` directamente (debe pasar a prop para no arrastrar el catálogo TS al bundle cliente).

## Implementación (orden de ejecución)

### 1. Dependencias y config
- `npm install @prisma/adapter-pg zustand` + `npm install -D tsx`.
- `prisma.config.ts`: añadir `migrations: { seed: "tsx prisma/seed.ts" }`. Script npm `"db:seed": "prisma db seed"`.

### 2. `src/lib/db.ts` — singleton Prisma
Cache en `globalThis` (hot-reload de dev seguro) con adapter `PrismaPg` y `process.env.DATABASE_URL`.

### 3. Seed — `prisma/seed.ts` (idempotente; imports RELATIVOS `../src/data/*`)
- Products: upsert por `slug` (mapear tipo UI → enums); images/specs con deleteMany + createMany; segunda pasada para `related: { set: [...] }`.
- Variantes: upsert por `sku`. Cada producto recibe una **variante canónica cuyo SKU es su código de `mbPartNumbers`** (p. ej. `MB-4471-EP`) — es lo que enlaza la búsqueda por número de parte, `MachineFit.variantId` y `OemPartNumber.variantId`.
  - In-stock: canónica + 2 variantes dimensionales (SKU sufijado, p. ej. `MB-6120-EB-800-6300`), precios placeholder 38 000–125 000 centavos escalados por área, `stockQty` 4–12, `lowStockAt` 2, formato por familia (`ENDLESS`, `ZIP_CLIP`).
  - Made-to-order: solo canónica con `priceCents: null`, `stockQty: 0`, `leadTimeDays: 10`, `format: OPEN_LENGTH`.
- Machines: upsert por `slug`; fits por `@@unique([machineId, productId, position])` con `variantId` = canónica; `OemPartNumber` upsert por `code` → canónica.

### 4. Tipos y servicios (`import "server-only"` en todos los servicios)
- `src/types/commerce.ts`: `CartDTO`, `CartItemDTO`, `VariantDTO` (compartidos server/cliente).
- `src/lib/services/errors.ts`: `ServiceError` con `code` (`VARIANT_NOT_FOUND | NOT_PURCHASABLE | INSUFFICIENT_STOCK | EMPTY_CART`…).
- `src/lib/services/products.ts`: `toUiProduct` (filas BD → tipo `Product` de `src/types/product.ts`: hero por `isHero`, availability enum→literal + label, related→slugs) y `getProducts / getProduct / getFeaturedProducts / getProductsBySlugs / getProductSlugs / getProductVariants`.
- Búsqueda: extraer el core puro a `src/lib/search-core.ts` (`searchProductsCore(query, dataset)` con `dataset = { products, machines, partNumberIndex }` — lógica y reasons actuales intactas) + `src/lib/services/search.ts` que carga el dataset desde BD (products mapeados, machines+fits, índice con SKUs de variantes y códigos OEM) y delega. Eliminar `src/lib/search.ts` y actualizar el import en `src/app/products/page.tsx`.
- `src/lib/services/cart.ts`: `getCart / addItem / updateItemQty / removeItem / deleteCart` sobre `Cart.sessionId`, con guards de stock y de "comprable".
- `src/lib/services/orders.ts`: `createOrder` (§6) y `getOrderByNumber`.
- `src/lib/services/leads.ts`: `createLead` (urgency → enum; opcionales vacíos → null).

### 5. Route handlers (`src/app/api/`) — zod `safeParse`; errores tipados → status HTTP
| Ruta | Método | Respuesta |
|---|---|---|
| `/api/quote` | POST (`quoteSchema` existente) | 201 `{id}`; 400 validación |
| `/api/cart` | GET | 200 CartDTO (vacío sin cookie; NO crea cookie) |
| `/api/cart/items` | POST (`addToCartSchema {variantId, qty 1..99}`) | 201 CartDTO; crea cookie `mrb_cart` (httpOnly, lax, 30 días) solo aquí; 404/409 |
| `/api/cart/items/[itemId]` | PATCH (`updateCartItemSchema`) / DELETE | 200 CartDTO; 404 si no es del carrito de la sesión; 409 insufficient-stock |
| `/api/checkout` | POST (`checkoutSchema`) | 201 `{orderNumber, totalCents}` + borra cookie; 409 empty-cart / insufficient-stock |

- Helper `src/lib/cart-cookie.ts`: `readCartSessionId()` / `ensureCartSessionId()` (esta última solo desde route handlers).
- Validadores nuevos: `src/lib/validators/cart.ts` y `src/lib/validators/checkout.ts` (email, phone?, shipName, shipCompany?, shipLine1, shipLine2?, shipCity, shipRegion?, shipPostalCode, shipCountry default "GB").

### 6. Transacción de checkout (`createOrder`)
Dentro de `prisma.$transaction(async tx => …)`:
1. Cargar carrito por sessionId (vacío → `EMPTY_CART`; ítem sin precio o inactivo → `NOT_PURCHASABLE`).
2. Anti-oversell atómico por ítem: `updateMany({ where: { id, stockQty: { gte: qty } }, data: { stockQty: { decrement: qty } } })`; `count === 0` lanza `INSUFFICIENT_STOCK` (rollback total).
3. Número `MRB-YYYY-NNNNN` por `count(startsWith prefijo)+1`; el guard real es el unique de `Order.number` con retry ×3 ante `P2002`.
4. `order.create` estado `PENDING` con snapshot de dirección y `OrderItems` (`productName`, `variantSku`, `unitPriceCents`, `qty`); totales desde BD, nunca del cliente.
5. `StockMovement` por ítem (reason `ORDER`, delta −qty, orderId).
6. Borrar cart + items. Sin fila `Payment` (no hay pasarela).

### 7. Frontend
- **Store** `src/stores/cart-store.ts` (Zustand): `{status, cart, count, hydrate(), addItem, updateItem, removeItem, reset}`; las mutaciones reemplazan `cart` con el CartDTO que devuelve la API (sin optimismo — mantiene honestos los errores de stock); `hydrate()` con guard `status === "idle"`; el badge no renderiza hasta `ready` (evita hydration mismatch).
- **Componentes nuevos** (`src/components/mrb/`):
  - `cart-indicator.tsx` — ShoppingCart + badge (tokens petrol, NO marigold), montado en `site-header.tsx`.
  - `add-to-cart.tsx` — selector de variante (`formatPrice` desde nuevo `src/lib/format.ts`, Intl en-GB), stepper qty ≤ min(99, stock), botón primary, estados éxito/error inline.
  - `cart-view.tsx` — líneas con imagen/SKU/dimensiones, editar qty, eliminar, subtotal, primary "Proceed to checkout", empty state.
  - `checkout-form.tsx` — RHF + zod, secciones Contact y Delivery, resumen desde el store, primary "Place order"; 201 → `reset()` + push `/checkout/success?number=…`; 409 → alerta + re-hydrate.
- **Páginas**: `products/[slug]` a servicios (`generateStaticParams` async, `revalidate = 300`); si hay variante con precio, `<AddToCart/>` es el único marigold y "Request a quote" pasa a secondary; si no, layout actual. `products/page` y home a servicios (home/contact `revalidate = 300`). `contact/page` pasa `productOptions` al `QuoteForm` (que deja de importar products y hace `fetch POST /api/quote`). Nuevas: `/cart`, `/checkout`, `/checkout/success` (lee `searchParams.number`; muestra datos mínimos). `sitemap.ts` async con `getProductSlugs()`.
- `src/data/products.ts` / `machines.ts` permanecen como fuente del seed + contenido estático (`beltFormats`, `specializedBelts`, `site`); limpiar helpers sin uso (grep antes de borrar).

### 8. Documentación
Actualizar `CLAUDE.md` (comando seed, requisito de BD encendida para build, patrón servicios vs `/api`) y `docs/data-model.md` (estado del seed).

## Verificación

1. `docker compose up -d` + `npx prisma migrate status`; `npm run db:seed` **dos veces** (idempotencia) y revisar en Studio.
2. `npm run build` con BD arriba (esperado: `[slug]` SSG, `/products` dinámica) + `npm run lint`.
3. Curl con cookie jar: GET `/api/cart` vacío sin Set-Cookie → POST item (201 + cookie httpOnly) → PATCH qty excesiva (409) → PATCH válido → DELETE → POST `/api/checkout` válido (201 `MRB-2026-00001`; verificar en Studio: Order `PENDING` + snapshots + StockMovement −qty + carrito borrado; con qty > stock → 409 sin decremento parcial). POST `/api/quote` inválido (400 con errores de campo) y válido (201 + fila Lead).
4. Navegador: búsqueda "Chieftain" y "MB-4471-EP" con reasons; flujo add-to-cart (ep-multi-ply) → badge → /cart → /checkout → success; toughflex sin UI de compra; quote form en éxito y en error (offline).
5. Auditoría de diseño por vista nueva: exactamente un CTA marigold (detalle: Add to cart; cart: Proceed to checkout; checkout: Place order; success: ninguno), solo tokens del DS, iconos lucide.

## Riesgos aceptados

- El build requiere la BD encendida (documentado; palanca futura: `force-dynamic` por página).
- `/checkout/success?number=…` es adivinable (números secuenciales) → mostrar datos mínimos; revisar cuando haya auth.
- Números de orden por count+1: protegidos por el unique + retry ante P2002.
