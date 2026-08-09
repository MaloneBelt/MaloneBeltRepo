import type { MetadataRoute } from "next";

import { site } from "@/data/site";
import { stagingMode } from "@/data/staging";

export default function robots(): MetadataRoute.Robots {
  /* Staging must never be crawled: disallow everything and announce no
     sitemap (which would point at production URLs — see src/data/site.ts). */
  if (stagingMode) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
