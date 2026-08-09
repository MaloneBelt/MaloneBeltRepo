import type { NextConfig } from "next";

import { launchMode } from "./src/data/launch";

const nextConfig: NextConfig = {
  async redirects() {
    if (!launchMode) {
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
