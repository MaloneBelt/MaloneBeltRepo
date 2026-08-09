import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CategoryShowcase } from "@/components/mrb/category-showcase";
import { ProductCard } from "@/components/mrb/product-card";
import { ProductGallery } from "@/components/mrb/product-gallery";
import { SectionHeading } from "@/components/mrb/section-heading";
import { SpecList } from "@/components/mrb/spec-row";
import { StateChip } from "@/components/mrb/state-chip";
import { categories, getCategory } from "@/data/categories";
import {
  getCategoryProducts,
  getPrimaryCategory,
  getProduct,
  getRelatedProducts,
  products,
} from "@/data/products";
import { isLocale, l, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { localizeCategory, localizeProduct } from "@/i18n/localize";

/* One flat namespace under /products: a slug is either a category (rendered
   as the brochure-style range page) or a product (rendered as the standard
   detail page). Category slugs and product slugs never collide. */
export function generateStaticParams() {
  return [
    ...categories.map((category) => ({ slug: category.slug })),
    ...products.map((product) => ({ slug: product.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const category = getCategory(slug);
  if (category) {
    const c = localizeCategory(category, locale);
    return {
      title: `${c.name} ${c.subtitle}`,
      description: `${c.tagline} ${c.description[0]}`,
    };
  }
  const product = getProduct(slug);
  if (!product) return {};
  const p = localizeProduct(product, locale);
  return {
    title: p.name,
    description: `${p.tagline} ${p.description[0]}`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDictionary(locale);

  const category = getCategory(slug);
  if (category) {
    return (
      <CategoryShowcase
        category={category}
        products={getCategoryProducts(category.slug)}
        locale={locale}
      />
    );
  }

  const product = getProduct(slug);
  if (!product) notFound();

  const p = localizeProduct(product, locale);
  const primaryCategory = getPrimaryCategory(product);
  const localizedPrimary = primaryCategory
    ? localizeCategory(primaryCategory, locale)
    : undefined;
  const related = getRelatedProducts(product).map((r) =>
    localizeProduct(r, locale)
  );

  return (
    <>
      {/* Detail — dark zone (client-assigned) */}
      <section className="border-b border-petrol-800 bg-linear-135 from-petrol-800 to-petrol-900">
        <div className="container-shell py-10 lg:py-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-petrol-200">
            <li>
              <Link href={l(locale, "/")} className="hover:text-white">
                {dict.common.home}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" strokeWidth={2} />
            </li>
            <li>
              <Link href={l(locale, "/products")} className="hover:text-white">
                {dict.common.products}
              </Link>
            </li>
            {localizedPrimary && (
              <>
                <li aria-hidden="true">
                  <ChevronRight className="size-3.5" strokeWidth={2} />
                </li>
                <li>
                  <Link
                    href={l(locale, `/products/${localizedPrimary.slug}`)}
                    className="hover:text-white"
                  >
                    {localizedPrimary.name}
                  </Link>
                </li>
              </>
            )}
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" strokeWidth={2} />
            </li>
            <li aria-current="page" className="font-semibold text-white">
              {p.name}
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <ProductGallery images={[p.images.hero, ...p.images.gallery]} />

          {/* Summary */}
          <div>
            <Badge variant="mono">{p.sku}</Badge>
            <h1 className="mt-3 font-display text-h2 leading-[1.1] font-black tracking-tight text-white lg:text-[2.5rem]">
              {p.name}
            </h1>
            <p className="mt-3 text-lead text-petrol-200">{p.tagline}</p>

            <div className="mt-5">
              {p.availability.status === "in-stock" ? (
                <StateChip variant="stock">{p.availability.label}</StateChip>
              ) : (
                <Badge variant="neutral">{p.availability.label}</Badge>
              )}
            </div>

            <div className="mt-6 rounded-lg border border-line bg-surface p-5">
              <SpecList specs={p.specs} />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild variant="primary" size="lg">
                <Link href={l(locale, `/contact?product=${p.slug}`)}>
                  {dict.common.requestQuote}
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="border-white/25 text-petrol-100 hover:border-white/60 hover:text-white"
              >
                <Link href={l(locale, "/contact?urgency=down-now")}>
                  {dict.common.machineDownNow}
                </Link>
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
              {dict.productPage.aboutThisBelt}
            </h2>
            {p.description.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 leading-relaxed text-body-muted"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-2">
              {p.standards.map((standard) => (
                <Badge key={standard} variant="mono">
                  {standard}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-h3 font-extrabold text-ink-2">
              {dict.productPage.whyItWins}
            </h2>
            <ul className="mt-4 space-y-3">
              {p.features.map((feature) => (
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
              {dict.productPage.applications}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.applications.map((application) => (
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
            eyebrow={dict.productPage.relatedEyebrow}
            title={dict.productPage.relatedTitle}
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
                ctaLabel={dict.common.viewProduct}
                ctaHref={l(locale, `/products/${relatedProduct.slug}`)}
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
