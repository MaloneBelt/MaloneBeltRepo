# Plan de salida en vivo inicial — malonebelt.com

> **Objetivo:** publicar la primera versión en vivo de la plataforma (modo *coming soon*)
> en la infraestructura del cliente: código en el **GitHub del cliente**, despliegue en el
> **Vercel del cliente** y el dominio **malonebelt.com** (GoDaddy) apuntando al despliegue.
>
> **Fecha del plan:** 26 de julio de 2026
> **Alcance:** solo la salida inicial con la página `/coming-soon`. La activación del sitio
> completo (catálogo, about, contacto) queda documentada como reversión en la Fase 5.

---

## Qué se lanza

La app está en **modo launch** (`launchMode = true` en `src/data/launch.ts`):

- Todas las rutas (`/`, `/products`, `/products/[slug]`, `/about`, `/contact`) responden
  **307 (redirect temporal, no cacheado)** hacia `/coming-soon`.
- Navbar y footer ocultos en todo el sitio.
- `/coming-soon` muestra: pill "Coming soon", titular "Our site is undergoing construction…",
  y el logo completo del cliente (con teléfono, mail y web) sobre placa blanca, con la foto
  de conveyor belts de fondo.
- Favicon: emblema del logo final (`src/app/icon.png` + `src/app/favicon.ico`).
- Sin backend: el despliegue **no necesita variables de entorno ni base de datos** (Phase 1).

**Reversión futura:** cambiar `launchMode` a `false`, commit y push — nada más.

---

## Estado de cuentas y accesos (verificado 26/07/2026)

| Servicio | Cuenta activa en Chrome | Estado |
|---|---|---|
| GoDaddy | Acceso delegado a la cuenta del cliente (Brian Murray, cliente Nº 729201902), dominio **malonebelt.com** | ✅ Listo |
| GitHub | `AlejandroHernandez1802` (cuenta personal del desarrollador) | ⚠️ Falta iniciar sesión en la cuenta del cliente para crear el repo |
| Vercel | `alejandroherqui-5191` (cuenta Hobby personal) | ⚠️ El cliente ya tiene cuenta Vercel; falta iniciar sesión con ella |

> **Importante:** los inicios de sesión y cualquier manejo de credenciales los realiza
> Alejandro manualmente. Verificar SIEMPRE en qué cuenta se está antes de crear el repo o
> importar el proyecto, para no publicar por accidente en las cuentas personales.

---

## Fase 0 — Preparación del código (local)

1. **Decidir sobre `robots: noindex`** en `src/app/coming-soon/page.tsx` *(decisión del cliente)*:
   - Mantenerlo → el dominio no aparecerá en Google durante la fase coming-soon.
   - Quitarlo → la página splash será indexable desde el día 1.
2. **Revisar qué se versiona antes del push al cliente:**
   - `Design ideas/` (propuestas internas de diseño): añadir a `.gitignore` o mover fuera del
     repo — no debería llegar al repo del cliente.
   - Confirmar que `.env` está en `.gitignore` (no hay secretos en Phase 1, pero por higiene).
   - `docs/` sí se versiona (documentación del proyecto).
3. **Commit final** en `master` con todo el trabajo pendiente (hay ~25 archivos modificados/
   nuevos sin commitear: modo launch, logos finales, coming-soon, datos de contacto, etc.).
4. **Verificación local:**
   ```bash
   npm run lint          # sin errores
   npm run build         # compila y genera las 17 rutas
   npx next start -p 3105
   curl -sI http://localhost:3105/ | head -3          # → 307 /coming-soon
   curl -sI http://localhost:3105/coming-soon | head -3   # → 200
   ```

---

## Fase 1 — Código al GitHub del cliente

*Decisión acordada: repo **nuevo** en la cuenta del cliente (no transferencia del repo personal).*

1. En Chrome, **cerrar sesión de la cuenta personal de GitHub e iniciar sesión con la cuenta
   del cliente** (paso manual de Alejandro).
2. Crear el repositorio: `github.com/new`
   - Nombre sugerido: `malone-road-belt`
   - Visibilidad: **Private**
   - Sin README/gitignore/licencia inicial (el repo local ya los trae — evita conflictos de push).
3. **Agregar a `AlejandroHernandez1802` como colaborador** (Settings → Collaborators) para
   poder seguir desarrollando sin usar la sesión del cliente.
4. Desde el repo local, añadir el remote del cliente y hacer push (la URL exacta la da GitHub
   al crear el repo):
   ```bash
   git remote add client https://github.com/<cuenta-cliente>/malone-road-belt.git
   git push client master
   ```
   Se conserva `origin` (repo personal) como respaldo del desarrollador.
5. Verificar en GitHub que el último commit visible es el commit de la Fase 0.

---

## Fase 2 — Despliegue en el Vercel del cliente

*El cliente ya tiene cuenta Vercel.*

1. En Chrome, **cerrar sesión de Vercel personal e iniciar sesión con la cuenta del cliente**
   (paso manual de Alejandro).
2. **Conectar GitHub del cliente con Vercel**: en el import, Vercel pedirá instalar la
   **Vercel GitHub App** en la cuenta del cliente — autorizar acceso (puede limitarse solo al
   repo `malone-road-belt`).
3. **Importar el proyecto**: Dashboard → *Add New… → Project* → seleccionar
   `malone-road-belt`.
   - Framework: Next.js (autodetectado). Build `npm run build`, install `npm install` — no cambiar nada.
   - **Variables de entorno: ninguna** (Phase 1 no tiene backend ni DB).
4. **Deploy** y esperar el build (~1–2 min).
5. **Validar en la URL temporal** `https://malone-road-belt-<hash>.vercel.app`:
   - [ ] `/` redirige (307) a `/coming-soon`
   - [ ] `/products`, `/about`, `/contact` también redirigen
   - [ ] La página muestra logo completo, pill y titular; sin navbar ni footer
   - [ ] Favicon del emblema visible en la pestaña
   - [ ] Imagen de fondo nítida; prueba en móvil (responsive)

> A partir de aquí, cada `git push client master` despliega automáticamente a producción.

---

## Fase 3 — Dominio GoDaddy → Vercel

1. En el proyecto de Vercel (cuenta del cliente): *Settings → Domains* → añadir:
   - `malonebelt.com` (dominio principal)
   - `www.malonebelt.com` (configurar como **redirect** al apex — recomendación estándar)
2. Vercel mostrará los registros DNS requeridos. Valores típicos (usar **los que Vercel
   indique en pantalla**, que prevalecen sobre estos):
   - Apex `@` → registro **A** → `76.76.21.21`
   - `www` → registro **CNAME** → `cname.vercel-dns.com`
3. En GoDaddy (acceso delegado ya activo):
   [DNS de malonebelt.com](https://dcc.godaddy.com/control/dnsmanagement?domainName=malonebelt.com)
   - Editar el registro **A** de `@` (GoDaddy trae uno de "parking" — reemplazarlo por el de Vercel).
   - Crear/editar el **CNAME** de `www` hacia el valor de Vercel.
   - **Eliminar redirecciones/forwarding** de GoDaddy si existen (Domain → Forwarding).
   - ⚠️ **NO tocar registros MX ni TXT existentes**: el dominio tiene productos de correo en
     GoDaddy ("Correo electrónico y Office") y modificarlos rompería el email del cliente.
   - ⚠️ El dominio aparece asociado a un "sitio en construcción" del website builder de
     GoDaddy — al cambiar el registro A dejará de servirse; no desactivar nada más.
4. Volver a Vercel → Domains: esperar a que valide los registros (minutos a ~1 h por
   propagación DNS; máximo teórico 24–48 h). Vercel emite el **certificado SSL
   automáticamente** al validar.

---

## Fase 4 — Verificación end-to-end

```bash
curl -sI https://malonebelt.com | head -5            # 307 → /coming-soon
curl -sI https://malonebelt.com/coming-soon | head -3 # 200
curl -sI https://www.malonebelt.com | head -3         # redirect a apex
curl -sI https://malonebelt.com/about | head -3       # 307 → /coming-soon
```

En navegador:
- [ ] `https://malonebelt.com` carga la página coming-soon con **candado SSL válido**
- [ ] Favicon del emblema en la pestaña
- [ ] Prueba desde el móvil (datos móviles, no solo WiFi — valida propagación DNS real)
- [ ] Los datos del logo (270-777-7727 / sales@malonebelt.com / MaloneBelt.com) se leen bien

---

## Fase 5 — Post-salida: reversión y siguientes pasos

**Activar el sitio completo cuando el cliente apruebe:**
1. `src/data/launch.ts` → `launchMode = false`
2. Commit + `git push client master` → Vercel despliega automáticamente el sitio completo
   (navbar, footer y todas las páginas vuelven; no hay nada más que revertir).

**Rollback de emergencia:** Vercel → Deployments → *…* sobre el deploy anterior →
**Instant Rollback** (segundos, sin rebuild).

**Pendientes tras la salida:**
- Decisión SEO: quitar `noindex` de coming-soon (si se mantuvo) o al activar el sitio completo.
- Sitemap: hoy lista todas las rutas (inofensivo con redirects); opcional condicionarlo a `launchMode`.
- Confirmar con el cliente el prefijo internacional del teléfono (se asumió `+1` en `phoneHref`).
- Phase 2 (backend/DB) requerirá base de datos y variables de entorno en Vercel — fuera de este alcance.

---

## Riesgos y precauciones

| Riesgo | Mitigación |
|---|---|
| Desplegar/crear el repo en la cuenta personal por accidente | Verificar el avatar/nombre de cuenta activo en GitHub y Vercel antes de cada fase |
| Romper el correo del cliente al editar DNS | No tocar MX/TXT; solo el A del apex y el CNAME de www |
| Redirects cacheados que dificulten la reversión | Ya mitigado: se usan 307 temporales (nunca cambiar a `permanent: true` durante esta fase) |
| Material interno en el repo del cliente | Excluir `Design ideas/` antes del push (Fase 0) |
| DNS tarda en propagar | Planificar la ventana de salida; validar con `curl` y datos móviles |
