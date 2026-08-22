import Image from "next/image";
import { ClipboardCheck, SearchCheck, Truck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { BeltMatch } from "@/components/mrb/belt-match";
import { ConveyorStrip } from "@/components/mrb/conveyor-strip";
import { CtaBand } from "@/components/mrb/cta-band";
import { SectionHeading } from "@/components/mrb/section-heading";
import { TrustRow } from "@/components/mrb/trust-row";
import { beltFormats } from "@/data/products";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { localizeBeltFormat } from "@/i18n/localize";

const STEP_ICONS = [SearchCheck, ClipboardCheck, Truck];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDictionary(locale);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]">
          {/* Static frame paints first and stays for prefers-reduced-motion;
             the looping belt video (same scene, first frame = poster) fades
             in over it once it can play. */}
          <Image
            src="/home/hero-conveyor-poster.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-[70%_45%] grayscale"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/home/hero-conveyor-poster.jpg"
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover object-[70%_45%] grayscale motion-reduce:hidden"
          >
            <source src="/home/hero-conveyor.mp4" type="video/mp4" />
          </video>
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-linear-to-r from-navy-900 from-8% via-navy-900/35 via-45% to-transparent lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-navy-900 via-navy-900/60 to-navy-900/30 lg:hidden"
          />
        </div>

        <div className="container-shell relative py-16 lg:py-24">
          <div className="max-w-xl lg:max-w-2xl">
            <Badge
              variant="brand"
              className="border-white/15 bg-white/10 text-navy-100"
            >
              {dict.home.heroBadge}
            </Badge>
            <h1 className="mt-5 font-display text-h1 leading-[1.02] font-black tracking-tight text-white">
              {dict.home.heroTitle}{" "}
              <span className="text-orange">{dict.home.heroTitleAccent}</span>
            </h1>
            <p className="mt-4 max-w-lg text-lead text-navy-100">
              {dict.home.heroLead}
            </p>
            <BeltMatch locale={locale} className="mt-7" />
            <div className="mt-6">
              <TrustRow tone="inverse" items={dict.trustRow} />
            </div>
          </div>
        </div>
      </section>

      <ConveyorStrip />

      {/* How it works */}
      <section className="container-shell py-16 lg:py-20">
        <SectionHeading
          eyebrow={dict.home.howEyebrow}
          title={dict.home.howTitle}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {dict.home.steps.map((step, index) => {
            const Icon = STEP_ICONS[index] ?? SearchCheck;
            return (
              <div
                key={step.title}
                className="rounded-lg border border-line bg-surface p-6 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-caption text-navy-600">
                    {dict.home.stepLabel} 0{index + 1}
                  </span>
                  <Icon
                    className="size-6 text-navy-500"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 font-display text-h3 font-extrabold text-ink-2">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body-muted">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Choose your format — dark band (client-assigned). Products are
          reached via BeltMatch or the navbar only: no product section on the
          landing page (client direction) */}
      <section className="border-y border-navy-800 bg-linear-135 from-navy-800 to-navy-900">
        <div className="container-shell py-16 lg:py-20">
          <SectionHeading
            tone="inverse"
            eyebrow={dict.home.formatsEyebrow}
            title={dict.home.formatsTitle}
            lead={dict.home.formatsLead}
          />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beltFormats.map((format) => {
            const f = localizeBeltFormat(format, locale);
            return (
              <div
                key={f.id}
                className="rounded-lg border border-line bg-surface p-5 shadow-xs"
              >
                <div className="relative flex h-32 items-center justify-center overflow-hidden rounded-md bg-radial-[120%_140%_at_20%_0%] from-navy-100 to-navy-50">
                  <Image
                    src={f.image.src}
                    alt={f.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 270px"
                    className="object-contain p-3"
                  />
                </div>
                <h3 className="mt-4 font-display text-base font-extrabold text-ink-2">
                  {f.name}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-body-muted">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
        </div>
      </section>

      {/* About — white section (client-assigned); the stats read as dark
          info panels so they hold their own against the white canvas */}
      <section id="about" className="scroll-mt-nav">
        <div className="container-shell grid gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <SectionHeading
            eyebrow={dict.home.aboutEyebrow}
            title={dict.home.aboutTitle}
            lead={dict.home.aboutLead}
          />
          <div className="grid content-center gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {dict.home.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-navy-800 bg-linear-135 from-navy-800 to-navy-900 p-5"
              >
                <div className="font-mono text-h3 font-semibold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-[13px] font-semibold text-navy-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
