import type { MetadataRoute } from "next";

import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { site } from "@/data/site";
import { stagingMode } from "@/data/staging";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  /* site.url is hardcoded to production, so a staging sitemap would list
     production URLs — and staging must not be indexed at all. */
  if (stagingMode) return [];
  return locales.flatMap((locale) => {
    const base = `${site.url}/${locale}`;
    return [
      { url: base, priority: 1 },
      { url: `${base}/products`, priority: 0.9 },
      ...categories.map((category) => ({
        url: `${base}/products/${category.slug}`,
        priority: 0.85,
      })),
      ...products.map((product) => ({
        url: `${base}/products/${product.slug}`,
        priority: 0.8,
      })),
      { url: `${base}/contact`, priority: 0.7 },
      { url: `${base}/about`, priority: 0.6 },
    ];
  });
}
