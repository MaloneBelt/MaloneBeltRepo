import Image from "next/image";
import Link from "next/link";

import { categories } from "@/data/categories";
import { site } from "@/data/site";
import { l, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { localizeCategory } from "@/i18n/localize";

export function SiteFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <footer className="bg-ink text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          {/* The final client logo has no reversed (light) variant yet, so it
              sits on a white plate to stay legible on the dark footer. */}
          <div className="inline-block rounded-md bg-white px-3 py-2">
            <Image
              src="/brand/Final-logo-sin-contacto.png"
              alt={site.name}
              width={1272}
              height={409}
              className="h-9 w-auto"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {dict.meta.description}
          </p>
        </div>

        <nav aria-label={dict.footer.productsHeading}>
          <h3 className="font-display text-caption font-bold tracking-eyebrow uppercase text-white/50">
            {dict.footer.productsHeading}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {categories.map((category) => {
              const localized = localizeCategory(category, locale);
              return (
                <li key={category.slug}>
                  <Link
                    href={l(locale, `/products/${category.slug}`)}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {localized.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-caption font-bold tracking-eyebrow uppercase text-white/50">
            {dict.footer.contactHeading}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="font-mono text-white/80 transition-colors hover:text-white"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="font-mono text-white/80 transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col items-start justify-between gap-2 py-5 text-caption text-white/40 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {site.name}. {dict.footer.rights}
          </span>
          <span className="font-mono">{dict.common.motto}</span>
        </div>
      </div>
    </footer>
  );
}
