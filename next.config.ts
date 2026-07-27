import type { NextConfig } from "next";

import { launchMode } from "./src/data/launch";

const nextConfig: NextConfig = {
  async redirects() {
    if (!launchMode) {
      return [];
    }
    /* Temporary (307, uncached) redirects — see src/data/launch.ts. */
    return ["/", "/products", "/products/:slug", "/about", "/contact"].map(
      (source) => ({
        source,
        destination: "/coming-soon",
        permanent: false,
      })
    );
  },
};

export default nextConfig;
