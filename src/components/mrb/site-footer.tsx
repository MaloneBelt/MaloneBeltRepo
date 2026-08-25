import Image from "next/image";
import Link from "next/link";

import { categories } from "@/data/categories";
import { site } from "@/data/site";
import { l, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { localizeCategory } from "@/i18n/localize";
import { STAT_ICONS, StampBadge } from "@/components/mrb/stamp-badge";

/* This lucide version ships no brand glyphs, so the three social marks are
   drawn inline on lucide's 24px/stroke-2 grid (X as the solid brand mark)
   so they read as one icon set. */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XBrandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  X: XBrandIcon,
};

export function SiteFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <footer className="bg-ink text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          {/* The final client logo has no reversed (light) variant yet, so it
              sits on a white plate to stay legible on the dark footer. Lockup
              v3 carries the bold full-width strapline inside the artwork
              (client direction, Aug 2026). */}
          <div className="inline-block rounded-md bg-white px-4 py-3">
            <Image
              src="/brand/Final-logo-sin-contacto.png"
              alt={site.name}
              width={1272}
              height={480}
              className="h-24 w-auto"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {dict.meta.description}
          </p>
          {/* Brand seals (client direction, Aug 2026) — no plates: each seal
             carries its own white paper disc, the surroundings stay
             transparent on the dark footer */}
          <ul className="mt-6 flex flex-wrap items-center gap-3">
            {dict.about.stats.map((stat, index) => (
              <li key={stat.value}>
                <StampBadge
                  value={stat.value}
                  arcTop={stat.arcTop}
                  arcBottom={stat.arcBottom}
                  icon={STAT_ICONS[index]}
                  className="size-20"
                />
              </li>
            ))}
          </ul>
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
                    href={l(locale, category.href ?? `/products/${category.slug}`)}
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
                className="text-white/80 transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </li>
          </ul>
          <ul className="mt-5 flex items-center gap-4">
            {site.social.map((network) => {
              const Icon = SOCIAL_ICONS[network.name];
              return (
                <li key={network.name}>
                  <a
                    href={network.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={network.name}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {Icon && <Icon className="size-5" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col items-start justify-between gap-2 py-5 text-caption text-white/40 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {site.name}. {dict.footer.rights}
          </span>
          <span>{dict.common.motto}</span>
        </div>
      </div>
    </footer>
  );
}
