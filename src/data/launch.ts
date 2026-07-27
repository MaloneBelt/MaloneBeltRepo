/* LAUNCH MODE — temporary "coming soon" cutover for the first live release.

   true  → the site serves only /coming-soon: every other route (home,
           products, about, contact) 307-redirects there, and the navbar
           and footer are hidden.
   false → full site restored: navbar, footer and all pages back.

   To revert, flip this flag to false and rebuild/redeploy. Nothing else
   needs to change. Kept dependency-free because next.config.ts imports it. */
export const launchMode = true;
