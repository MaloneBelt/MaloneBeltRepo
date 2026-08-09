/* STAGING MODE — private client-preview deployment, resolved per environment.

   true  → the deployment is the shared staging environment: every request
           must pass HTTP Basic Auth (src/middleware.ts), robots.txt
           disallows everything, the sitemap is empty, all responses carry
           X-Robots-Tag: noindex and images are served unoptimized
           (next.config.ts) so they work behind the auth gate.
   false → normal deployment (production / local dev): none of the above
           applies; the staging code paths are inert.

   Driven by NEXT_PUBLIC_STAGING_MODE, read at build time (next.config.ts,
   robots.ts and sitemap.ts import this module, so the value is baked into
   each deployment):

     "true"                → true   staging gate active
     unset / anything else → false  fail-safe: production never gates

   NEXT_PUBLIC_ on purpose: only those variables are inlined at build time,
   and this flag must also be readable from next.config.ts. It is NOT a
   secret — it reveals that the site is gated, never how. The credential
   lives separately in STAGING_BASIC_AUTH ("user:password"), a server-only
   variable that never reaches the browser. Kept dependency-free because
   next.config.ts imports it. */
export const stagingMode = process.env.NEXT_PUBLIC_STAGING_MODE === "true";
