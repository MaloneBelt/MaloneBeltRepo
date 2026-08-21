export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductSpec {
  label: string;
  value: string; // rendered in IBM Plex Mono
}

export type BuyingMoment = "down-now" | "planned";

/* A category groups the products the customer can actually buy. Three kinds:
   the core catalog ranges (Standard, Heavy-Duty & Specialized) whose products
   are belt constructions, the Cleatpro X™-style application range (Incline)
   whose products are cleat patterns, and link-only tiles (Custom / Special)
   that send the visitor somewhere else instead of a range page. */
export interface Category {
  slug: string;
  code: string; // range code, e.g. "MB-IN" — rendered in IBM Plex Mono
  name: string; // masthead name, e.g. "Incline"
  subtitle: string; // e.g. "Aggregate Cleated Belts"
  family: string; // badge label, e.g. "Cleatpro X™ cleated range"
  tagline: string;
  description: string[]; // paragraphs
  features: string[];
  applications: string[];
  images: {
    hero: ProductImage;
    gallery: ProductImage[];
  };
  /* Link-only categories: the tile links here instead of the range page and
     no range page is generated (visiting the slug redirects here). */
  href?: string;
}

export interface Product {
  slug: string;
  categories: string[]; // category slugs; the first one is the primary
  sku: string; // rendered in IBM Plex Mono
  name: string;
  tagline: string;
  description: string[]; // paragraphs
  features: string[];
  specs: ProductSpec[]; // the first 3 entries are the card spec rows
  applications: string[];
  standards: string[];
  images: {
    hero: ProductImage;
    gallery: ProductImage[];
  };
  availability: {
    status: "in-stock" | "made-to-order";
    label: string;
  };
  buyingMoment: BuyingMoment;
  related: string[]; // slugs
}
