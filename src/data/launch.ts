/* LAUNCH MODE — "coming soon" cutover, resolved per deployment environment.

   true  → the site serves only /coming-soon: every other route (home,
           products, about, contact) 307-redirects there, and the navbar
           and footer are hidden.
   false → full site restored: navbar, footer and all pages back.

   Driven by NEXT_PUBLIC_LAUNCH_MODE, read at build time (next.config.ts
   imports this module, so the value is baked into each deployment):

     unset / anything else → true   fail-safe: production stays on the splash
                                    even if someone forgets to set the var
     "false"               → false  full site — set this on Preview only

   In Vercel: Settings → Environment Variables → NEXT_PUBLIC_LAUNCH_MODE
   = "false" scoped to Preview. Leave Production unset until go-live.
   Locally it comes from .env. Kept dependency-free because next.config.ts
   imports it. */
export const launchMode = process.env.NEXT_PUBLIC_LAUNCH_MODE !== "false";
