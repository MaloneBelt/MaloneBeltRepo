import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { l, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { localizeCategory } from "@/i18n/localize";
import { cn } from "@/lib/utils";
import type { Category } from "@/types/product";

/* Category tile for the /products catalog. Designed for the dark catalog
   zone: a translucent panel with the range photo on top and the range code +
   belt count set in mono, the whole card acting as one link into the
   brochure-style category page. */
export function CategoryCard({
  category,
  productCount,
  locale,
  className,
}: {
  category: Category;
  productCount: number;
  locale: Locale;
  className?: string;
}) {
  const dict = getDictionary(locale);
  const localized = localizeCategory(category, locale);

  return (
    <Link
      href={l(locale, `/products/${category.slug}`)}
      className={cn(
        "group flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-white/30 hover:bg-white/10",
        className
      )}
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={localized.images.hero.src}
          alt={localized.images.hero.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 370px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-petrol-900/70 via-petrol-900/10 to-transparent"
        />
        <span className="absolute bottom-3 left-4 font-mono text-xs text-petrol-100">
          {localized.code}
        </span>
        <span className="absolute right-4 bottom-3 font-mono text-xs text-petrol-100">
          {productCount} {productCount === 1 ? dict.common.belt : dict.common.belts}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-extrabold tracking-tight text-white uppercase italic">
          {localized.name}
        </h3>
        <p className="mt-0.5 font-display text-[11px] font-bold tracking-[2px] text-petrol-300 uppercase">
          {localized.subtitle}
        </p>
        <p className="mt-2.5 text-[13px] leading-relaxed text-petrol-200">
          {localized.tagline}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-white">
          {dict.common.viewRange}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
