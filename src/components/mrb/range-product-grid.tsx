"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ProductCard } from "@/components/mrb/product-card";
import { l, type Locale } from "@/i18n/config";
import type { Product } from "@/types/product";

const ALL = "all";

/* The in-range product grid of the CategoryShowcase, with a radio filter so
   the visitor can jump straight to one pattern instead of scanning the whole
   grid. Products arrive already localized; the filter is skipped for ranges
   with a single belt. Styled for the dark brochure canvas the showcase
   paints. */
export function RangeProductGrid({
  products,
  locale,
  labels,
}: {
  products: Product[];
  locale: Locale;
  labels: { legend: string; all: string; viewProduct: string };
}) {
  const [selected, setSelected] = useState(ALL);
  const visible =
    selected === ALL ? products : products.filter((p) => p.slug === selected);

  return (
    <div>
      {products.length > 1 && (
        <fieldset className="mt-8">
          <legend className="font-display text-sm font-bold tracking-[2px] text-navy-200 uppercase">
            {labels.legend}
          </legend>
          <RadioGroup
            value={selected}
            onValueChange={setSelected}
            className="mt-4 flex flex-wrap gap-x-6 gap-y-3"
          >
            {[
              { value: ALL, label: labels.all },
              ...products.map((p) => ({ value: p.slug, label: p.name })),
            ].map((option) => (
              <div key={option.value} className="flex items-center gap-2">
                <RadioGroupItem
                  value={option.value}
                  id={`range-filter-${option.value}`}
                  className="border-white/40 text-orange focus-visible:border-white/70 focus-visible:ring-white/30 [&_svg]:fill-orange [&_svg]:text-orange"
                />
                <Label
                  htmlFor={`range-filter-${option.value}`}
                  className="cursor-pointer text-sm font-medium text-navy-100"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </fieldset>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <ProductCard
            key={product.slug}
            headerLabel={product.sku}
            partNumber={product.sku}
            title={product.name}
            images={[product.images.hero, ...product.images.gallery]}
            specs={product.specs.slice(0, 3)}
            availability={product.availability}
            ctaLabel={labels.viewProduct}
            ctaHref={l(locale, `/products/${product.slug}`)}
            ctaVariant="secondary"
          />
        ))}
      </div>
    </div>
  );
}
