export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductSpec {
  label: string;
  value: string; // rendered in IBM Plex Mono
}

export type BuyingMoment = "down-now" | "planned";

export interface Product {
  slug: string;
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
