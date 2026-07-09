import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/mrb/cta-band";
import { ProductCard } from "@/components/mrb/product-card";
import { SectionHeading } from "@/components/mrb/section-heading";
import { products, specializedBelts } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "OEM-spec conveyor belts for mobile crushing, screening and recycling equipment: endless belts, ZIP CLIP®, EP multi-ply, ToughFlex®, Ripstop and cleated belts.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="container-shell py-14 lg:py-16">
        <SectionHeading
          eyebrow="Products"
          title="Belts built to your machine's spec."
          lead="Every belt is cross-referenced to your machine or OEM part number and manufactured to DIN 22102. No pricing games — send us the spec and we quote it straight."
        />

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
      </section>

      {/* Specialized belts teaser */}
      <section className="border-y border-line bg-surface/60">
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
