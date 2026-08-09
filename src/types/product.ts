export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductSpec {
  label: string;
  value: string; // rendered in IBM Plex Mono
}

export type BuyingMoment = "down-now" | "planned";

/* A category groups the products the customer can actually buy. Two kinds:
   the Cleatpro X™-style application ranges (Stonecleat Pro™, ROADCLEAT™)
   whose products are cleat patterns, and the core catalog ranges (Conveyor
   Belts, Heavy-Duty & Specialized) whose products are belt constructions
   and supply formats. Category pages render the brochure-style view. */
export interface Category {
  slug: string;
  code: string; // range code, e.g. "MB-SP" — rendered in IBM Plex Mono
  name: string; // masthead name, e.g. "Stonecleat Pro™"
  subtitle: string; // e.g. "Aggregate Cleated Belts"
  family: string; // badge label, e.g. "Cleatpro X™ cleated range"
  tagline: string;
  description: string[]; // paragraphs
  features: string[];
  specs: ProductSpec[]; // range-level spec sheet
  applications: string[];
  images: {
    hero: ProductImage;
    gallery: ProductImage[];
  };
}

export interface Product {
  slug: string;
  categories: string[]; // category slugs; the first one is the primary
  sku: string; // rendered in IBM Plex Mono
  name: string;
  tagline: string;
  description: string[]; // paragraphs
  features: string[];
  specs: ProductSpec[];
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
  featured: boolean; // shown on the home page
  related: string[]; // slugs
}
