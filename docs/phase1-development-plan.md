# Plan — Fase 1: Sitio web Malone Road Belt (MRB)

## Contexto

Fase 1 del proyecto MRB: un sitio corporativo premium para vender conveyor belts (inspirado en smileymonroe.com), que sienta la base frontend para el e-commerce de fases futuras. Según el timeline (`Functional docs/Project structure`) incluye: Home/Landing, showcase de productos, página de contacto con quote-request form, y branding. El design system v2 "Petrol" ya está construido y aprobado (`Design/Design system`): tokens CSS, 9 componentes de referencia, logos SVG y un hero HTML de blueprint.

**Decisiones confirmadas con el usuario:**
- Código en `Code/mrb-project/` (Next.js 15 App Router + TypeScript + Tailwind v4 + shadcn/ui)
- Contenido en inglés
- Productos: listado `/products` + detalle `/products/[slug]` (6 productos)
- Prisma/PostgreSQL: solo scaffold (schema `Lead`, sin conexión ni backend); formularios UI-only; contenido de productos en archivos TypeScript

Rutas abreviadas: `DS` = `Design/Design system`, `IMG` = `Code/Product images` (relativas a la raíz del proyecto MRB).

## Integración design system ↔ Tailwind v4 ↔ shadcn

- **Tailwind v4 CSS-first** (sin `tailwind.config.ts`). Los tokens DS ya son custom properties → encajan directo en `@theme inline`.
- **Vendorizar tokens**: copiar `DS/tokens/{colors,typography,spacing}.css` verbatim a `src/app/styles/tokens/` (eliminando aliases legacy `--grape-*`). NO copiar `fonts.css`: las fuentes van con `next/font/google` (Archivo, Inter, IBM Plex Mono) y un override en `globals.css` que reapunta `--font-display/--font-body/--font-data` a las variables de next/font.
- **`globals.css`**: `@import "tailwindcss"` + tokens + bloque `@theme inline` que mapea:
  - Colores de marca: `--color-petrol-50..900`, `--color-marigold`, `--color-canvas`, `--color-ink-2`, `--color-line`, verdes/rojos semánticos.
  - Variables shadcn apuntando a tokens DS: `--color-background: var(--canvas)`, `--color-primary: var(--marigold)`, `--color-primary-foreground: var(--ink-2)` (ink sobre marigold, **nunca blanco**), `--color-ring: var(--petrol-500)`, etc.
  - Radios (sm 8 / md 12 / lg 16 / xl 20 / `--radius-track` 999px), sombras petrol, `--spacing-nav: 68px`, utilidad `container-shell` (max 1180px), keyframes `roll` y `pulse` con guard `prefers-reduced-motion`.
- **Colisión `--muted`**: el DS usa `--muted` como color de texto; shadcn como superficie. Borrar los defaults `:root`/`.dark` que genere `shadcn init` y mapear solo en `@theme`: `--color-muted: var(--petrol-50)` (superficie) y `--color-muted-foreground: var(--muted)` (token DS). Sin dark mode en Fase 1.
- Reglas de adherencia DS: sin hex crudo, sin px arbitrarios, solo las 3 fuentes, iconos `lucide-react` stroke 2–2.5, sin emojis, **un solo CTA marigold por vista**.

## Estructura del proyecto

```
Code/mrb-project/
├── components.json / .env.example (DATABASE_URL placeholder)
├── prisma/schema.prisma              # solo scaffold: model Lead
├── public/
│   ├── brand/                        # 4 SVGs de DS/assets/
│   └── products/<slug>/*.png         # ~20 PNGs de IMG + formats/
└── src/
    ├── app/
    │   ├── layout.tsx  page.tsx  globals.css  not-found.tsx  icon.svg
    │   ├── styles/tokens/{colors,typography,spacing}.css
    │   ├── products/page.tsx  products/[slug]/page.tsx
    │   ├── contact/page.tsx
    │   └── sitemap.ts  robots.ts
    ├── components/ui/                # shadcn (button/input adaptados a marca)
    ├── components/mrb/               # componentes de marca
    ├── data/products.ts  data/site.ts
    ├── lib/utils.ts  lib/validators/quote.ts
    └── types/product.ts
```

## Modelo de datos de productos (`src/types/product.ts` + `src/data/products.ts`)

```ts
interface Product {
  slug, sku, name, tagline: string
  description: string[]; features: string[]
  specs: { label, value }[]           // value en IBM Plex Mono
  applications: string[]; standards: string[]   // DIN 22102, ISO 10247...
  images: { hero: ProductImage; gallery: ProductImage[] }
  availability: { status: 'in-stock' | 'made-to-order'; label: string }
  buyingMoment: 'down-now' | 'planned'
  featured: boolean; related: string[]
}
```

**6 productos** (imágenes de `IMG/`, ver `product-images-catalog.txt`):

| slug | Producto | Imagen hero |
|---|---|---|
| `endless-belt` | Endless Belt Ready to Fit | p02-endless-belt-loop.png (+rolls, splice p17) |
| `zip-clip` | ZIP CLIP Mechanically Fastened (buying moment: down-now) | p02-zip-clip-belt-loop.png (+p32, p24) |
| `ep-multi-ply` | EP Multi-Ply Conveyor Belt | p20-ep-multi-ply-conveyor-photo.png (+p04 anatomy) |
| `toughflex` | ToughFlex (4x vida vs EP) | p22-toughflex-weave-illustration.png (+p26) |
| `ripstop` | Ripstop | p23-ripstop-construction.png |
| `cleated-chevron` | Cleated & Chevron Belts | p28-cleated-belt-chevron-photo.png (+sidewall, p63, p34) |

Stripped Belt y Cut Length → sección "Choose your format" del home (renders p02). Iconos specialized (p29/p30) → teaser "Specialized belts" en /products sin detalle.

## Componentes de marca (`src/components/mrb/`)

Adaptar `DS/components/**/*.jsx` (inline styles) a Tailwind sobre los tokens — no copiar tal cual:

- `ui/button.tsx` (reemplazo shadcn+CVA): variantes primary (marigold/ink, font-display 800), secondary (ghost petrol), ghost, dark, danger; todas `rounded-track`.
- `ui/input.tsx`: pill 999px, h-12, focus `--focus-ring`.
- `mrb/`: `state-chip` (stock verde / down rojo con pulse), `spec-row` (`<dl>`, valor mono), `eyebrow`, `belt-vis` (decorativo aria-hidden), `product-card` (header gradiente petrol-900 + belt-vis + spec rows + footer con StateChip y CTA; prop para respetar un-marigold-por-vista), `belt-match` (client: Tabs "By machine / By OEM part #" + input pill + CTA "Find my belt" → push a /products), `conveyor-strip` (marquee 22s, `motion-reduce:animate-none`), `site-header` (sticky frosted 68px, lockup, botón rojo pulsante "Machine down now?" → /contact?urgency=down, menú móvil), `site-footer` (fondo ink, lockup reversed), `quote-form` (RHF + Zod), `section-heading`, `trust-row`, `cta-band`.

## Etapas de implementación

1. **Scaffold**: `npx create-next-app@latest . --typescript --eslint --tailwind --app --src-dir --import-alias "@/*" --turbopack` dentro de `Code/mrb-project` → `npx shadcn@latest init` → `shadcn add button badge input label textarea select radio-group tabs form separator` → `npm i react-hook-form zod @hookform/resolvers lucide-react`.
2. **Tokens y tema**: copiar tokens y SVGs, reescribir `globals.css`, `next/font` en layout. Checkpoint visual con swatches en dev server.
3. **Componentes base**: button/input de marca → state-chip, spec-row, eyebrow, belt-vis → product-card, belt-match.
4. **Layout global**: site-header, site-footer, conveyor-strip.
5. **Home** (blueprint: `DS/uploads/malone-road-belt-landing-hero.html`, con colores petrol v2, NO los morados v1 de ese archivo): hero 2 cols (eyebrow + H1 "Keep the line moving." + BeltMatch + trust row | ProductCard resultado) → conveyor strip → "How it works" 3 pasos → 4 productos destacados → "Choose your format" → sección About `#about` (uptime pitch + stats mono) → CTA band dual (planned verde / down-now rojo).
6. **/products**: grid de ProductCards desde `data/products.ts` + teaser specialized.
7. **/products/[slug]**: `generateStaticParams` + `generateMetadata` + `notFound()`; breadcrumb → galería + specs/StateChip/CTA "Request a quote" → features → applications → standards → relacionados.
8. **/contact**: quote-form (name, company, email, phone, urgency RadioGroup down/planned, product Select preseleccionado por `?product=`, beltWidth/Length, message) — validación Zod client-side, éxito inline con `aria-live`, **sin fetch**. Columna lateral con teléfono grande en mono.
9. **Pulido**: Metadata API (template `%s · Malone Road Belt`), OpenGraph, sitemap/robots/icon, skip-link, alt texts, focus visible, responsive (375/768/1280), reduced-motion, `next/image` con `sizes`.
10. **Prisma scaffold**: `npm i -D prisma && npm i @prisma/client`, escribir `prisma/schema.prisma` a mano (model `Lead` con urgency/status enums espejando el schema Zod), `.env.example`. NO ejecutar migrate; validar con `npx prisma validate`.

## Verificación

- `npm run lint`, `npx tsc --noEmit`, `npm run build` (confirmar los 6 slugs como SSG), `npx prisma validate`.
- Adherencia DS: grep de hex crudo y `[Npx]` arbitrarios en `src/` → 0 hits; revisar un-marigold-por-vista y texto ink sobre marigold en cada página.
- Manual en dev: las 4 rutas + 404 en 375/768/1280; reduced-motion (strip estática, sin pulses); navegación por teclado; form valida y muestra éxito sin requests de red.
- Lighthouse en build de producción: ≥90 Performance, ≥95 A11y/SEO en Home y detail.
- Comparación visual del hero contra `DS/uploads/malone-road-belt-landing-hero.html`.
