import {
  applicationPt,
  availabilityPt,
  beltFormatPt,
  categoryPt,
  productPt,
  specLabelPt,
  specValuePt,
  specializedPt,
} from "@/i18n/catalog-pt";
import type { Locale } from "@/i18n/config";
import type { BeltFormat, SpecializedBelt } from "@/data/products";
import type { Category, Product, ProductSpec } from "@/types/product";

/* Catalog localization: EN data in src/data/* is the source of truth;
   Portuguese overlays replace the prose fields and map spec labels,
   applications and availability chips. Unknown strings fall back to EN. */

function localizeSpecs(specs: ProductSpec[], locale: Locale): ProductSpec[] {
  if (locale === "en") return specs;
  return specs.map((spec) => ({
    label: specLabelPt[spec.label] ?? spec.label,
    value: specValuePt[spec.value] ?? spec.value,
  }));
}

function localizeApplications(apps: string[], locale: Locale): string[] {
  if (locale === "en") return apps;
  return apps.map((a) => applicationPt[a] ?? a);
}

export function localizeCategory(category: Category, locale: Locale): Category {
  if (locale === "en") return category;
  const o = categoryPt[category.slug];
  return {
    ...category,
    ...(o?.name && { name: o.name }),
    ...(o?.subtitle && { subtitle: o.subtitle }),
    ...(o?.family && { family: o.family }),
    ...(o?.tagline && { tagline: o.tagline }),
    ...(o?.description && { description: o.description }),
    ...(o?.features && { features: o.features }),
    applications: localizeApplications(category.applications, locale),
  };
}

export function localizeProduct(product: Product, locale: Locale): Product {
  if (locale === "en") return product;
  const o = productPt[product.slug];
  return {
    ...product,
    ...(o?.name && { name: o.name }),
    ...(o?.tagline && { tagline: o.tagline }),
    ...(o?.description && { description: o.description }),
    ...(o?.features && { features: o.features }),
    specs: localizeSpecs(product.specs, locale),
    applications: localizeApplications(product.applications, locale),
    availability: {
      ...product.availability,
      label: availabilityPt[product.availability.label] ?? product.availability.label,
    },
  };
}

export function localizeBeltFormat(format: BeltFormat, locale: Locale): BeltFormat {
  if (locale === "en") return format;
  const o = beltFormatPt[format.id];
  return o ? { ...format, name: o.name, description: o.description } : format;
}

export function localizeSpecialized(
  belt: SpecializedBelt,
  locale: Locale
): SpecializedBelt {
  if (locale === "en") return belt;
  const o = specializedPt[belt.id];
  return o ? { ...belt, name: o.name, description: o.description } : belt;
}
