import type { NextConfig } from "next";

import { launchMode } from "./src/data/launch";
import { stagingMode } from "./src/data/staging";

const nextConfig: NextConfig = {
  /* Staging only: the image optimizer fetches source images without
     forwarding request headers, so every optimized image would 401 against
     the Basic Auth gate. Serving /public as-is keeps images working *and*
     protected — at the cost of no WebP/AVIF/srcset there. */
  images: stagingMode ? { unoptimized: true } : undefined,

  async headers() {
    if (!stagingMode) return [];
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
    ];
  },

  async redirects() {
    /* redirects() runs before middleware, so on staging a stray
       launchMode=true would send / → /en/coming-soon *without* passing the
       Basic Auth gate. stagingMode short-circuits that structurally. */
    if (stagingMode || !launchMode) {
      return [];
    }
    /* Temporary (307, uncached) redirects — see src/data/launch.ts. Pages
       live under /en|/pt (bare paths are locale-prefixed by middleware),
       so both the bare and prefixed forms funnel to the locale's
       coming-soon splash. */
    return [
      ...["/", "/products", "/products/:slug", "/about", "/contact"].map(
        (source) => ({
          source,
          destination: "/en/coming-soon",
          permanent: false,
        })
      ),
      ...[
        "/:locale(en|pt)",
        "/:locale(en|pt)/products",
        "/:locale(en|pt)/products/:slug",
        "/:locale(en|pt)/about",
        "/:locale(en|pt)/contact",
      ].map((source) => ({
        source,
        destination: "/:locale/coming-soon",
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
