import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/mrb/product-card";
import { SectionHeading } from "@/components/mrb/section-heading";
import { ShowcaseGallery } from "@/components/mrb/showcase-gallery";
import { SpecList } from "@/components/mrb/spec-row";
import { site } from "@/data/site";
import { l, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { localizeCategory, localizeProduct } from "@/i18n/localize";
import type { Category, Product } from "@/types/product";

/* Brochure-style category page. One full-bleed dark petrol canvas — like a
   printed catalog spread — with the range name set huge and italic, the
   range photos floating over the color in the tilted gallery, the range
   description composed into the same dark field, and the category's
   products closing the spread so the visitor can step down into a belt. */
export function CategoryShowcase({
  category,
  products,
  locale,
}: {
  category: Category;
  products: Product[];
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  const c = localizeCategory(category, locale);
  const localizedProducts = products.map((p) => localizeProduct(p, locale));

  return (
    <article className="overflow-x-clip bg-linear-135 from-petrol-800 to-petrol-900">
      <div className="container-shell pt-8 pb-16 lg:pt-10 lg:pb-24">
        {/* Top strip: way back + range meta */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href={l(locale, "/products")}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-petrol-200 hover:text-white"
          >
            <ArrowLeft className="size-4" strokeWidth={2.5} aria-hidden="true" />
            {dict.categoryPage.allProducts}
          </Link>
          <div className="flex items-center gap-3">
            <Badge variant="mono">{c.code}</Badge>
            <Badge variant="neutral">{c.family}</Badge>
          </div>
        </div>

        {/* Masthead — tagline right, giant italic range name below */}
        <header className="mt-10 lg:mt-14">
          <p className="font-display text-sm font-bold tracking-[2px] text-petrol-200 uppercase italic sm:text-right">
            {c.tagline}
          </p>
          <h1 className="mt-2 font-display text-[min(13vw,6rem)] leading-[0.95] font-black tracking-tight text-white uppercase italic lg:text-8xl">
            {c.name}
          </h1>
          <p className="mt-3 font-display text-lg font-bold tracking-[3px] text-petrol-300 uppercase">
            {c.subtitle} · {dict.categoryPage.by} {site.name}
          </p>
        </header>

        {/* Image stage — carousel floating "off the page" over the brand color */}
        <div className="mt-12 lg:mt-16">
          <ShowcaseGallery images={[c.images.hero, ...c.images.gallery]} />
        </div>

        {/* Description — composed into the same dark field, no card break */}
        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="text-xl leading-relaxed font-medium text-petrol-100 lg:text-2xl">
              {c.description[0]}
            </p>
            {c.description.slice(1).map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-5 leading-relaxed text-petrol-200"
              >
                {paragraph}
              </p>
            ))}

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {c.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check
                    className="mt-0.5 size-[17px] shrink-0 text-stock"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span className="text-petrol-100">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild variant="primary" size="lg">
                <Link href={l(locale, "/contact")}>
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

          <aside>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-display text-sm font-bold tracking-[2px] text-petrol-200 uppercase">
                {dict.categoryPage.rangeSpec}
              </h2>
              <SpecList specs={c.specs} tone="inverse" className="mt-3" />
            </div>
            <div className="mt-6">
              <h2 className="font-display text-sm font-bold tracking-[2px] text-petrol-200 uppercase">
                {dict.categoryPage.applications}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {c.applications.map((application) => (
                  <span
                    key={application}
                    className="rounded-md border border-white/15 px-2.5 py-1 font-mono text-xs text-petrol-100"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* The category's products — the step down into a quotable belt */}
        {localizedProducts.length > 0 && (
          <div className="mt-16 border-t border-white/10 pt-12 md:mt-24 lg:pt-14">
            <SectionHeading
              tone="inverse"
              eyebrow={dict.categoryPage.inRangeEyebrow}
              title={`${localizedProducts.length} ${
                localizedProducts.length === 1
                  ? dict.common.belt
                  : dict.common.belts
              }, ${dict.categoryPage.inRangeTitleSuffix}`}
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {localizedProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  headerLabel={product.sku}
                  partNumber={product.sku}
                  title={product.name}
                  image={product.images.hero}
                  specs={product.specs.slice(0, 3)}
                  availability={product.availability}
                  ctaLabel={dict.common.viewProduct}
                  ctaHref={l(locale, `/products/${product.slug}`)}
                  ctaVariant="secondary"
                />
              ))}
            </div>
          </div>
        )}

        {/* Brochure footer strip */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
          <span className="font-display text-xs font-bold tracking-[3px] text-petrol-300 uppercase">
            {dict.common.tagline}
          </span>
          <span className="font-mono text-xs text-petrol-300">
            {site.url.replace("https://www.", "")}
          </span>
        </div>
      </div>
    </article>
  );
}
