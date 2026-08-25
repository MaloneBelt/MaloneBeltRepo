import type { Metadata } from "next";
import {
  Check,
  Database,
  HeartHandshake,
  Route,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { OemGrid } from "@/components/mrb/oem-grid";
import { SectionHeading } from "@/components/mrb/section-heading";
import { STAT_ICONS, StampBadge } from "@/components/mrb/stamp-badge";
import { TrustRow } from "@/components/mrb/trust-row";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

/* Icons for the four "how we work" pillars (order matches dict.about.values):
   people-first, same-day mindset, road milling, data. */
const VALUE_ICONS = [HeartHandshake, Zap, Route, Database];
const STANDARDS = ["DIN 22102", "ISO 9001"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  return {
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDictionary(locale);

  return (
    <>
      {/* Hero + story — merged into one continuous dark zone
          (client-assigned); everything below is white. Content restructured
          from the client's functional_docs/About.md (Aug 2026). */}
      <div className="border-b border-navy-800 bg-linear-135 from-navy-800 to-navy-900">
        <section className="container-shell pt-14 lg:pt-20">
          <SectionHeading
            tone="inverse"
            eyebrow={dict.about.eyebrow}
            title={dict.about.title}
            lead={dict.about.lead}
          />
          <div className="mt-6">
            <TrustRow tone="inverse" items={dict.trustRow} />
          </div>
        </section>

        {/* Story + stats */}
        <section className="container-shell grid gap-10 py-14 lg:grid-cols-2 lg:py-16">
          <div className="max-w-xl">
            <h2 className="font-display text-h3 font-extrabold text-white">
              {dict.about.storyTitle}
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-navy-200">
              {dict.about.storyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 border-l-4 border-orange pl-4 font-display text-lead font-extrabold text-white">
              {dict.about.storyPunch}
            </p>
          </div>
          {/* Stat boxes read as stamped seals (client direction, Aug 2026):
              the badge is the dominant element, the caption secondary */}
          <div className="grid content-center gap-4 sm:grid-cols-2">
            {dict.about.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-lg border border-line bg-surface p-6 text-center"
              >
                <StampBadge
                  value={stat.value}
                  arcTop={stat.arcTop}
                  arcBottom={stat.arcBottom}
                  icon={STAT_ICONS[index]}
                  className="size-36 shrink-0"
                />
                <div className="mt-5 text-[13px] font-semibold leading-relaxed text-body-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* How we work — white zone below the dark hero+story */}
      <section className="container-shell py-16 lg:py-20">
        <SectionHeading
          eyebrow={dict.about.howEyebrow}
          title={dict.about.howTitle}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {dict.about.values.map((value, index) => {
            const Icon = VALUE_ICONS[index] ?? HeartHandshake;
            return (
              <div
                key={value.title}
                className="rounded-lg border border-line bg-surface p-6 shadow-xs"
              >
                <Icon
                  className="size-6 text-navy-500"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-display text-h3 font-extrabold text-ink-2">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body-muted">
                  {value.body}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-[13px] font-semibold text-body-muted">
            {dict.about.manufacturedTo}
          </span>
          {STANDARDS.map((standard) => (
            <Badge key={standard} variant="mono">
              {standard}
            </Badge>
          ))}
        </div>
      </section>

      {/* What we supply — the client's full product breadth as a chip wall */}
      <section className="container-shell pb-16 lg:pb-20">
        <SectionHeading
          eyebrow={dict.about.supplyEyebrow}
          title={dict.about.supplyTitle}
          lead={dict.about.supplyLead}
        />
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {dict.about.supplyItems.map((item) => (
            <li key={item}>
              <Badge variant="mono">{item}</Badge>
            </li>
          ))}
        </ul>
      </section>

      {/* Our standard + vision — dark info panel on the white canvas */}
      <section className="container-shell pb-16 lg:pb-20">
        <div className="rounded-2xl bg-linear-135 from-navy-800 to-navy-900 p-8 lg:p-12">
          {/* Single column since the vision quote was removed
             (client direction, 25 Aug 2026) */}
          <div className="max-w-2xl">
            <div>
              <p className="font-display text-caption font-bold tracking-eyebrow uppercase text-navy-200">
                {dict.about.standardEyebrow}
              </p>
              <h2 className="mt-3 font-display text-h3 font-extrabold text-white">
                {dict.about.standardTitle}
              </h2>
              <ul className="mt-6 space-y-3">
                {dict.about.standardItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold text-navy-100"
                  >
                    <Check
                      className="size-4 shrink-0 text-orange"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-navy-200">
                {dict.about.standardPunch}
              </p>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6">
            <span className="text-[13px] font-semibold text-navy-200">
              {dict.about.marketsLabel}
            </span>
            <ul className="mt-3 flex flex-wrap gap-2">
              {dict.about.markets.map((market) => (
                <li
                  key={market}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-navy-100"
                >
                  {market}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Manufacturers — the full allied-OEM roster as a static wall on the
          white zone (not a carousel) */}
      <section className="container-shell pb-16 lg:pb-20">
        <SectionHeading
          eyebrow={dict.about.oemEyebrow}
          title={dict.about.oemTitle}
          lead={dict.about.oemLead}
        />
        <OemGrid className="mt-10" />
      </section>
    </>
  );
}
