import type { MetadataRoute } from "next";

import { products } from "@/data/products";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/products`, priority: 0.9 },
    ...products.map((product) => ({
      url: `${site.url}/products/${product.slug}`,
      priority: 0.8,
    })),
    { url: `${site.url}/contact`, priority: 0.7 },
  ];
}
