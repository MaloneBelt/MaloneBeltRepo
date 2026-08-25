/* LAUNCH MODE — "coming soon" cutover, resolved per deployment environment.

   true  → the site serves only /coming-soon: every other route (home,
           products, about, contact) 307-redirects there, and the navbar
           and footer are hidden.
   false → full site restored: navbar, footer and all pages back.

   Driven by NEXT_PUBLIC_LAUNCH_MODE, read at build time (next.config.ts
   imports this module, so the value is baked into each deployment):

     "true"                → true   splash-only (pre-launch freeze)
     unset / anything else → false  full site

   The site went live on 25 Aug 2026, so the default flipped: the full site
   is the normal state everywhere, and the splash is opt-in (set the var to
   "true" in Vercel only if the client ever needs to freeze the site behind
   the coming-soon page again). Kept dependency-free because next.config.ts
   imports it. */
export const launchMode = process.env.NEXT_PUBLIC_LAUNCH_MODE === "true";
