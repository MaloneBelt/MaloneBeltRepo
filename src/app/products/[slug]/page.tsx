import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/mrb/product-card";
import { ProductGallery } from "@/components/mrb/product-gallery";
import { SectionHeading } from "@/components/mrb/section-heading";
import { SpecList } from "@/components/mrb/spec-row";
import { StateChip } from "@/components/mrb/state-chip";
import { getProduct, getRelatedProducts, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.tagline} ${product.description[0]}`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      {/* Detail — dark zone (client-assigned) */}
      <section className="border-b border-petrol-800 bg-linear-135 from-petrol-800 to-petrol-900">
        <div className="container-shell py-10 lg:py-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-petrol-200">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" strokeWidth={2} />
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" strokeWidth={2} />
            </li>
            <li aria-current="page" className="font-semibold text-white">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <ProductGallery
            images={[product.images.hero, ...product.images.gallery]}
          />

          {/* Summary */}
          <div>
            <Badge variant="mono">{product.sku}</Badge>
            <h1 className="mt-3 font-display text-h2 leading-[1.1] font-black tracking-tight text-white lg:text-[2.5rem]">
              {product.name}
            </h1>
            <p className="mt-3 text-lead text-petrol-200">{product.tagline}</p>

            <div className="mt-5">
              {product.availability.status === "in-stock" ? (
                <StateChip variant="stock">
                  {product.availability.label}
                </StateChip>
              ) : (
                <Badge variant="neutral">{product.availability.label}</Badge>
              )}
            </div>

            <div className="mt-6 rounded-lg border border-line bg-surface p-5">
              <SpecList specs={product.specs} />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild variant="primary" size="lg">
                <Link href={`/contact?product=${product.slug}`}>
                  Request a quote
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="border-white/25 text-petrol-100 hover:border-white/60 hover:text-white"
              >
                <Link href="/contact?urgency=down-now">Machine down now?</Link>
              </Button>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Description + features — white layer between the two dark zones */}
      <section>
        <div className="container-shell grid gap-10 py-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-h3 font-extrabold text-ink-2">
              About this belt
            </h2>
            {product.description.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 leading-relaxed text-body-muted"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-2">
              {product.standards.map((standard) => (
                <Badge key={standard} variant="mono">
                  {standard}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-h3 font-extrabold text-ink-2">
              Why it wins
            </h2>
            <ul className="mt-4 space-y-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check
                    className="mt-0.5 size-[17px] shrink-0 text-stock"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span className="text-ink-2">{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-caption font-bold tracking-eyebrow uppercase text-body-muted">
              Applications
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.applications.map((application) => (
                <Badge key={application} variant="neutral">
                  {application}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related — dark zone (client-assigned) */}
      {related.length > 0 && (
        <section className="border-t border-petrol-800 bg-linear-135 from-petrol-800 to-petrol-900">
          <div className="container-shell py-14 lg:py-16">
          <SectionHeading
            tone="inverse"
            eyebrow="Related"
            title="Also worth a look."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.slug}
                headerLabel={relatedProduct.sku}
                partNumber={relatedProduct.sku}
                title={relatedProduct.name}
                image={relatedProduct.images.hero}
                specs={relatedProduct.specs.slice(0, 2)}
                availability={relatedProduct.availability}
                ctaHref={`/products/${relatedProduct.slug}`}
                ctaVariant="secondary"
              />
            ))}
          </div>
          </div>
        </section>
      )}
    </>
  );
}
