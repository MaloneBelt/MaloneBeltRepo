import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail } from "lucide-react";

import { QuoteForm } from "@/components/mrb/quote-form";
import { SectionHeading } from "@/components/mrb/section-heading";
import { site } from "@/data/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  return {
    title: dict.contact.metaTitle,
    description: dict.contact.metaDescription,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDictionary(locale);

  return (
    /* The whole Contact page is a dark canvas (client direction); the quote
       form lives on a white card so its fields keep their default styling */
    <div className="bg-linear-135 from-petrol-800 to-petrol-900">
      <section className="container-shell grid gap-12 py-14 lg:grid-cols-[1fr_0.55fr] lg:py-16">
        <div>
          <SectionHeading
            tone="inverse"
            eyebrow={dict.contact.eyebrow}
            title={dict.contact.title}
            lead={dict.contact.lead}
          />
          <div className="mt-8 rounded-xl border border-line bg-surface p-6 shadow-lg">
            <Suspense fallback={null}>
              <QuoteForm locale={locale} />
            </Suspense>
          </div>
        </div>

      {/* Direct contact — the down-now buyer wants to call, not fill forms */}
      <aside className="lg:pt-20">
        <div className="rounded-xl border border-down-line bg-down-tint p-6">
          <h2 className="flex items-center gap-2.5 font-display text-base font-extrabold text-down-strong">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-down animate-status-pulse motion-reduce:animate-none"
            />
            {dict.common.machineDownRightNow}
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-body-muted">
            {dict.contact.downBody}
          </p>
          <a
            href={site.phoneHref}
            className="mt-4 block font-mono text-h3 font-semibold text-ink-2 hover:text-petrol-700"
          >
            {site.phone}
          </a>
        </div>

        <ul className="mt-6 space-y-4 rounded-xl border border-line bg-surface p-6 text-sm">
          <li className="flex items-start gap-3">
            <Mail
              className="mt-0.5 size-[17px] shrink-0 text-petrol-600"
              strokeWidth={2}
              aria-hidden="true"
            />
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-ink-2 hover:text-petrol-700"
            >
              {site.email}
            </a>
          </li>
        </ul>
      </aside>
      </section>
    </div>
  );
}
