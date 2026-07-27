# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

This project runs Next.js 16 (App Router). Route `params` are a `Promise` and must be awaited (see `src/app/products/[slug]/page.tsx`). When unsure about an API, check `node_modules/next/dist/docs/` rather than assuming.

## Commands

```bash
npm run dev                # dev server at http://localhost:3000
npm run build              # production build (also the de-facto type check)
npm run lint               # eslint (flat config, eslint-config-next)

docker compose up -d       # local PostgreSQL (postgres:17, db/user/pass: mrb)
npx prisma migrate dev     # apply/create migrations (needs the DB running)
npx prisma generate        # regenerate client after schema changes
npx prisma studio          # DB browser; needs the DB container running.
                           # Serves on a per-run port it prints (not :5555)
```

There is no test runner configured. Prisma 7 convention: the datasource `url` lives in `prisma.config.ts` (which loads `.env` via dotenv), NOT in `schema.prisma`. Note: `node`/`npm` may not be on this machine's default PATH — Claude Code bundles them at `~/.local/node/bin`; Docker may not be installed at all.

## What this is

Phase 1 of the Malone Road Belt (MRB) marketing site: a static, content-driven corporate site (home, product listing/detail, contact with quote form). English content. The full plan (in Spanish) is in `docs/phase1-development-plan.md`.

**Phase 1 boundary — no backend.** There are no API routes and no database connection. The quote form (`src/components/mrb/quote-form.tsx`) is UI-only: client-side Zod validation (`src/lib/validators/quote.ts`) and an inline success state, no network request. Its payload shape deliberately mirrors the `Lead` model in `prisma/schema.prisma` so Phase 2 can persist leads without reshaping — keep the Zod schema and Prisma model in sync if either changes.

## Documentation

Project documentation lives in `docs/`. New docs (plans, decisions, guides) go there — not in the repo root. See `docs/phase1-development-plan.md` for detailed implementation phases and roadmap, and `docs/data-model.md` for the Phase 2 data model (entities, design decisions, migration path).

## Architecture

- **Content lives in TypeScript, not a CMS.** Products are defined in `src/data/products.ts` (typed by `src/types/product.ts`); site-wide copy/nav/contact info in `src/data/site.ts`. `/products/[slug]` pages are statically generated from this array via `generateStaticParams`. Adding a product = adding an entry there plus images under `public/products/<slug>/`.
- **Components** split into `src/components/ui/` (shadcn/ui, new-york style, adapted to the brand) and `src/components/mrb/` (brand components: header, footer, product card, quote form, etc.). Import alias `@/*` → `src/*`.
- **Server components by default**; only interactive pieces (e.g. the quote form, which reads `useSearchParams` for `?product=` and `?urgency=down-now` prefills) are `"use client"`.
- **Search (BeltMatch)**: the search box submits to `/products?q=…&mode=machine|part`; results are computed server-side in `src/lib/search.ts` over the TS catalog plus the machine/OEM cross-reference in `src/data/machines.ts` (whose shape mirrors the `Machine`/`MachineFit`/`OemPartNumber` Prisma models, so Phase 2 swaps in DB queries behind the same signature).

## Design system ("Petrol")

Tailwind v4 CSS-first — there is **no `tailwind.config.ts`**. All theming happens in CSS:

- Token values live only in `src/app/styles/tokens/{colors,typography,spacing}.css` (vendored verbatim from the design system — don't edit values there).
- `src/app/globals.css` maps tokens to Tailwind utilities and shadcn semantic variables in an `@theme inline` block. New design values go through this pipeline, not inline.
- Fonts come exclusively from `next/font/google` in `src/app/layout.tsx`: Archivo (display), Inter (body), IBM Plex Mono (data/specs). `globals.css` repoints the DS font tokens at the next/font variables.

Hard rules from the design system:

- No raw hex colors and no arbitrary pixel values in components — use token-backed utilities.
- **One marigold (primary) CTA per view.** Text on marigold is ink (`--color-primary-foreground: var(--ink-2)`), never white.
- `--muted` collision: the DS uses `--muted` as a *text* color, shadcn as a *surface*. In `@theme`, `--color-muted` is the petrol-50 surface and `--color-muted-foreground` is the DS text token; use `text-body-muted` for muted text.
- Icons are `lucide-react`, stroke 2–2.5. No emojis in UI copy.
- No dark mode in Phase 1.
- **No beige, no petrol-50 surfaces (client direction, July 2026).** The warm-bone canvas is retired: `--canvas`/`--surface-page` are repointed to white in `globals.css` (token files stay vendored verbatim — don't edit them). Sections are either white or the dark `bg-linear-135 from-petrol-800 to-petrol-900` gradient with inverse text (`SectionHeading`, `TrustRow`, `SpecList` take `tone="inverse"`); info surfaces on white sections (spec panel, contact card, home stats, BeltMatch rail/chips) also use the dark gradient. Client-assigned section colors — home: hero dark → strip → How it works white → Choose your format dark → About white → CtaBand dark; products: header+search+catalog dark → Specialized belts white → CtaBand dark; about: hero+story merged dark → How we work white → CtaBand dark (layered); contact: entirely dark, quote form on a white card; product detail: detail dark → About this belt white → Related dark (gallery is the interactive `ProductGallery` client component). The ProductCard header is `bg-petrol-300` with petrol-900 text (must contrast against the dark section backgrounds the cards sit on). Alternation is the rule: two dark blocks never sit adjacent (the hero/ConveyorStrip pairing is the one deliberate exception). petrol-50 may only appear as tiny accents (mono badge chips, transient hover/focus tints) — never as a content background. Never reintroduce `bg-surface/60` bands or the beige canvas value.

## Rules
- No uses server actions, usa route handlers
- Para manejo de estado global usa Zustand
- Para formulario usa react-hook-form y zod
