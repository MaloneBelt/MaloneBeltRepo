import {
  applicationPt,
  availabilityPt,
  beltFormatPt,
  categoryPt,
  productPt,
  specLabelPt,
  specValuePt,
  specializedPt,
  type CategoryOverlay,
  type ProductOverlay,
} from "@/i18n/catalog-pt";
import {
  applicationEs,
  availabilityEs,
  beltFormatEs,
  categoryEs,
  productEs,
  specLabelEs,
  specValueEs,
  specializedEs,
} from "@/i18n/catalog-es";
import type { Locale } from "@/i18n/config";
import type { BeltFormat, SpecializedBelt } from "@/data/products";
import type { Category, Product, ProductSpec } from "@/types/product";

/* Catalog localization: EN data in src/data/* is the source of truth;
   per-locale overlays (catalog-pt.ts / catalog-es.ts) replace the prose
   fields and map spec labels, applications and availability chips.
   Unknown strings fall back to EN. */

interface CatalogOverlay {
  category: Record<string, CategoryOverlay>;
  product: Record<string, ProductOverlay>;
  specLabel: Record<string, string>;
  specValue: Record<string, string>;
  application: Record<string, string>;
  availability: Record<string, string>;
  beltFormat: Record<string, { name: string; description: string }>;
  specialized: Record<string, { name: string; description: string }>;
}

const overlays: Record<Exclude<Locale, "en">, CatalogOverlay> = {
  pt: {
    category: categoryPt,
    product: productPt,
    specLabel: specLabelPt,
    specValue: specValuePt,
    application: applicationPt,
    availability: availabilityPt,
    beltFormat: beltFormatPt,
    specialized: specializedPt,
  },
  es: {
    category: categoryEs,
    product: productEs,
    specLabel: specLabelEs,
    specValue: specValueEs,
    application: applicationEs,
    availability: availabilityEs,
    beltFormat: beltFormatEs,
    specialized: specializedEs,
  },
};

function getOverlay(locale: Locale): CatalogOverlay | null {
  return locale === "en" ? null : overlays[locale];
}

function localizeSpecs(specs: ProductSpec[], overlay: CatalogOverlay): ProductSpec[] {
  return specs.map((spec) => ({
    label: overlay.specLabel[spec.label] ?? spec.label,
    value: overlay.specValue[spec.value] ?? spec.value,
  }));
}

function localizeApplications(apps: string[], overlay: CatalogOverlay): string[] {
  return apps.map((a) => overlay.application[a] ?? a);
}

export function localizeCategory(category: Category, locale: Locale): Category {
  const overlay = getOverlay(locale);
  if (!overlay) return category;
  const o = overlay.category[category.slug];
  return {
    ...category,
    ...(o?.name && { name: o.name }),
    ...(o?.subtitle && { subtitle: o.subtitle }),
    ...(o?.family && { family: o.family }),
    ...(o?.tagline && { tagline: o.tagline }),
    ...(o?.description && { description: o.description }),
    ...(o?.features && { features: o.features }),
    applications: localizeApplications(category.applications, overlay),
  };
}

export function localizeProduct(product: Product, locale: Locale): Product {
  const overlay = getOverlay(locale);
  if (!overlay) return product;
  const o = overlay.product[product.slug];
  return {
    ...product,
    ...(o?.name && { name: o.name }),
    ...(o?.tagline && { tagline: o.tagline }),
    ...(o?.description && { description: o.description }),
    ...(o?.features && { features: o.features }),
    specs: localizeSpecs(product.specs, overlay),
    applications: localizeApplications(product.applications, overlay),
    availability: {
      ...product.availability,
      label:
        overlay.availability[product.availability.label] ??
        product.availability.label,
    },
  };
}

export function localizeBeltFormat(format: BeltFormat, locale: Locale): BeltFormat {
  const overlay = getOverlay(locale);
  if (!overlay) return format;
  const o = overlay.beltFormat[format.id];
  return o ? { ...format, name: o.name, description: o.description } : format;
}

export function localizeSpecialized(
  belt: SpecializedBelt,
  locale: Locale
): SpecializedBelt {
  const overlay = getOverlay(locale);
  if (!overlay) return belt;
  const o = overlay.specialized[belt.id];
  return o ? { ...belt, name: o.name, description: o.description } : belt;
}
