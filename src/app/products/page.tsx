import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BeltMatch } from "@/components/mrb/belt-match";
import { CtaBand } from "@/components/mrb/cta-band";
import { ProductCard } from "@/components/mrb/product-card";
import { SectionHeading } from "@/components/mrb/section-heading";
import { products, specializedBelts } from "@/data/products";
import { searchProducts } from "@/lib/search";

export const metadata: Metadata = {
  title: "Products",
  description:
    "OEM-spec conveyor belts for mobile crushing, screening and recycling equipment: endless belts, ZIP CLIP®, EP multi-ply, ToughFlex®, Ripstop and cleated belts.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; mode?: string }>;
}) {
  const { q, mode } = await searchParams;
  const query = (q ?? "").trim();
  const results = query ? searchProducts(query) : null;

  return (
    <>
      {/* Products header + search + catalog — one continuous dark zone
          (client-assigned); the specialized section below is white */}
      <div className="border-b border-petrol-800 bg-linear-135 from-petrol-800 to-petrol-900">
      <section className="container-shell pt-14 lg:pt-16">
        <SectionHeading
          tone="inverse"
          eyebrow="Products"
          title="Belts built to your machine's spec."
          lead="Every belt is cross-referenced to your machine or OEM part number and manufactured to DIN 22102. No pricing games — send us the spec and we quote it straight."
        />
        {/* key remounts the client component when the URL query changes, so
            the input always reflects the current search (e.g. Clear search) */}
        <BeltMatch
          key={`${query}|${mode}`}
          className="mt-8 max-w-2xl"
          defaultQuery={query}
          defaultMode={mode === "part" ? "part" : "machine"}
        />

        {/* Search results */}
        {results && (
          <div className="mt-12 pb-14 lg:pb-16">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-h3 font-extrabold text-white">
                {results.length === 0
                  ? `No exact match for “${query}”`
                  : `${results.length} ${results.length === 1 ? "match" : "matches"} for “${query}”`}
              </h2>
              <Link
                href="/products"
                className="text-sm font-semibold text-petrol-200 hover:text-white"
              >
                Clear search
              </Link>
            </div>

            {results.length === 0 ? (
              <div className="mt-6 flex max-w-2xl flex-col items-start gap-4 rounded-lg border border-line bg-surface p-6">
                <SearchX
                  className="size-7 text-petrol-500"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-body-muted">
                  Our cross-reference desk confirms every fit by hand — if your
                  machine or part number isn&apos;t matched here yet, send it
                  over and we&apos;ll come back with the exact spec, usually
                  within the hour.
                </p>
                <Button asChild variant="secondary">
                  <Link href="/contact">Request a quote</Link>
                </Button>
              </div>
            ) : (
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {results.map(({ product, reasons }) => (
                  <div key={product.slug} className="flex flex-col">
                    <ProductCard
                      headerLabel={product.sku}
                      partNumber={product.sku}
                      title={product.name}
                      image={product.images.hero}
                      specs={product.specs.slice(0, 3)}
                      availability={product.availability}
                      ctaHref={`/products/${product.slug}`}
                      ctaVariant="secondary"
                    />
                    <p className="mt-2 text-[13px] font-semibold text-petrol-200">
                      {reasons[0]}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Full range — continues the dark zone opened by the header section */}
      <section className={results ? "border-t border-white/10" : undefined}>
        <div
          className={
            results
              ? "container-shell py-14 lg:py-16"
              : "container-shell pb-14 lg:pb-16"
          }
        >
          {results && (
            <SectionHeading
              tone="inverse"
              eyebrow="Full range"
              title="Browse every belt."
            />
          )}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                headerLabel={product.sku}
                partNumber={product.sku}
                title={product.name}
                image={product.images.hero}
                specs={product.specs.slice(0, 3)}
                availability={product.availability}
                ctaHref={`/products/${product.slug}`}
                ctaVariant="secondary"
              />
            ))}
          </div>
        </div>
      </section>

      </div>

      {/* Specialized belts teaser — white section (client-assigned), between
          the dark catalog zone above and the dark CtaBand below */}
      <section>
        <div className="container-shell py-14 lg:py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Specialized belts"
              title="Exceptional applications, covered."
              lead="Heat, deep cold, flame or oil — specialized cover compounds are quoted case by case against your application survey."
            />
            <Button asChild variant="secondary">
              <Link href="/contact">Talk to us</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specializedBelts.map((belt) => (
              <div
                key={belt.id}
                className="flex flex-col items-start rounded-lg border border-line bg-surface p-5 shadow-xs"
              >
                <div className="relative size-14">
                  <Image
                    src={belt.icon.src}
                    alt={belt.icon.alt}
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-4 font-display text-base font-extrabold text-ink-2">
                  {belt.name}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-body-muted">
                  {belt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
