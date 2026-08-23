import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Flame,
  SearchX,
  Snowflake,
  ThermometerSun,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { BeltMatch } from "@/components/mrb/belt-match";
import { CategoryCard } from "@/components/mrb/category-card";
import { ProductCard } from "@/components/mrb/product-card";
import { SectionHeading } from "@/components/mrb/section-heading";
import { categories } from "@/data/categories";
import { getCategoryProducts, specializedBelts } from "@/data/products";
import { isLocale, l, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import {
  localizeCategory,
  localizeProduct,
  localizeSpecialized,
} from "@/i18n/localize";
import { searchCategories, searchProducts } from "@/lib/search";

const SPECIALIZED_ICONS = {
  heat: ThermometerSun,
  cold: Snowflake,
  flame: Flame,
  oil: Droplets,
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  return {
    title: dict.productsPage.metaTitle,
    description: dict.productsPage.metaDescription,
  };
}

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string; mode?: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDictionary(locale);

  const { q, mode } = await searchParams;
  const query = (q ?? "").trim();
  const results = query ? searchProducts(query) : null;
  const categoryMatches = query ? searchCategories(query) : null;
  const matchCount = (results?.length ?? 0) + (categoryMatches?.length ?? 0);

  return (
    <>
      {/* The whole products page is one continuous dark canvas (client
          direction, Aug 2026): header + search + catalog + specialized
          teaser, no CtaBand */}
      <div className="border-b border-navy-800 bg-linear-135 from-navy-800 to-navy-900">
      <section className="container-shell pt-14 lg:pt-16">
        <SectionHeading
          tone="inverse"
          eyebrow={dict.productsPage.eyebrow}
          title={dict.productsPage.title}
          lead={dict.productsPage.lead}
        />
        {/* key remounts the client component when the URL query changes, so
            the input always reflects the current search (e.g. Clear search) */}
        <BeltMatch
          locale={locale}
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
                {matchCount === 0
                  ? `${dict.productsPage.noMatchFor} “${query}”`
                  : `${matchCount} ${matchCount === 1 ? dict.productsPage.matchFor : dict.productsPage.matchesFor} “${query}”`}
              </h2>
              <Link
                href={l(locale, "/products")}
                className="text-sm font-semibold text-navy-200 hover:text-white"
              >
                {dict.productsPage.clearSearch}
              </Link>
            </div>

            {categoryMatches && categoryMatches.length > 0 && (
              <div className="mt-6">
                <p className="font-display text-caption font-bold tracking-eyebrow uppercase text-navy-300">
                  {dict.productsPage.matchingRanges}
                </p>
                <div className="mt-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryMatches.map(({ category }) => (
                    <CategoryCard
                      key={category.slug}
                      category={category}
                      productCount={getCategoryProducts(category.slug).length}
                      locale={locale}
                    />
                  ))}
                </div>
              </div>
            )}

            {matchCount === 0 ? (
              <div className="mt-6 flex max-w-2xl flex-col items-start gap-4 rounded-lg border border-line bg-surface p-6">
                <SearchX
                  className="size-7 text-navy-500"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-body-muted">
                  {dict.productsPage.noMatchBody}
                </p>
                <Button asChild variant="secondary">
                  <Link href={l(locale, "/contact")}>
                    {dict.common.requestQuote}
                  </Link>
                </Button>
              </div>
            ) : results.length === 0 ? null : (
              <div className="mt-6">
                {categoryMatches && categoryMatches.length > 0 && (
                  <p className="font-display text-caption font-bold tracking-eyebrow uppercase text-navy-300">
                    {dict.productsPage.matchingBelts}
                  </p>
                )}
              <div className="mt-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {results.map(({ product, reasons }) => {
                  const p = localizeProduct(product, locale);
                  return (
                    <div key={p.slug} className="flex flex-col">
                      <ProductCard
                        headerLabel={p.sku}
                        partNumber={p.sku}
                        title={p.name}
                        image={p.images.hero}
                        specs={p.specs.slice(0, 3)}
                        availability={p.availability}
                        ctaLabel={dict.common.viewProduct}
                        ctaHref={l(locale, `/products/${p.slug}`)}
                        ctaVariant="secondary"
                      />
                      <p className="mt-2 text-[13px] font-semibold text-navy-200">
                        {reasons[0]}
                      </p>
                    </div>
                  );
                })}
              </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Categories — the top level of the catalog */}
      <section className={results ? "border-t border-white/10" : undefined}>
        <div
          className={
            results
              ? "container-shell py-14 lg:py-16"
              : "container-shell pt-12 lg:pt-14"
          }
        >
          <SectionHeading
            tone="inverse"
            eyebrow={dict.productsPage.categoriesEyebrow}
            title={dict.productsPage.categoriesTitle}
            lead={dict.productsPage.categoriesLead}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                category={category}
                productCount={getCategoryProducts(category.slug).length}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products by category — every belt, grouped under its range */}
      <section>
        <div className="container-shell pt-14 pb-14 lg:pt-16 lg:pb-16">
          <SectionHeading
            tone="inverse"
            eyebrow={dict.productsPage.byCategoryEyebrow}
            title={dict.productsPage.byCategoryTitle}
          />
          <div className="mt-4 space-y-12 lg:space-y-14">
            {categories.map((category) => {
              const categoryProducts = getCategoryProducts(category.slug);
              if (categoryProducts.length === 0) return null;
              const c = localizeCategory(category, locale);
              return (
                <div
                  key={category.slug}
                  className="border-t border-white/10 pt-8"
                >
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-navy-300">
                        {c.code} · {c.family}
                      </p>
                      <h3 className="mt-1.5 font-display text-h3 font-extrabold tracking-tight text-white uppercase italic">
                        {c.name}
                      </h3>
                      <p className="mt-1 text-sm text-navy-200">
                        {c.tagline}
                      </p>
                    </div>
                    <Link
                      href={l(locale, `/products/${category.slug}`)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-200 hover:text-white"
                    >
                      {dict.common.viewRange}
                      <ArrowRight
                        className="size-4"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryProducts.map((product) => {
                      const p = localizeProduct(product, locale);
                      return (
                        <ProductCard
                          key={p.slug}
                          headerLabel={p.sku}
                          partNumber={p.sku}
                          title={p.name}
                          image={p.images.hero}
                          specs={p.specs.slice(0, 3)}
                          availability={p.availability}
                          ctaLabel={dict.common.viewProduct}
                          ctaHref={l(locale, `/products/${p.slug}`)}
                          ctaVariant="secondary"
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized belts teaser — dark like the rest of the page; its
          cards stay white so they hold their own on the gradient. With the
          CtaBand gone this button is the page's one orange CTA. */}
      <section className="border-t border-white/10">
        <div className="container-shell py-14 lg:py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              tone="inverse"
              eyebrow={dict.productsPage.specializedEyebrow}
              title={dict.productsPage.specializedTitle}
              lead={dict.productsPage.specializedLead}
            />
            <Button asChild variant="primary">
              <Link href={l(locale, "/contact")}>{dict.common.talkToUs}</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specializedBelts.map((belt) => {
              const Icon = SPECIALIZED_ICONS[belt.id];
              const b = localizeSpecialized(belt, locale);
              return (
                <div
                  key={b.id}
                  className="flex flex-col items-start rounded-lg border border-line bg-surface p-5 shadow-xs"
                >
                  <div className="flex size-12 items-center justify-center rounded-lg bg-linear-135 from-navy-800 to-navy-900">
                    <Icon
                      className="size-6 text-navy-100"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-base font-extrabold text-ink-2">
                    {b.name}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-body-muted">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      </div>
    </>
  );
}
