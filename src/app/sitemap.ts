import type { MetadataRoute } from "next";

import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { site } from "@/data/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
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
