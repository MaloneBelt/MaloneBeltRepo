import Image from "next/image";
import { ClipboardCheck, SearchCheck, Truck } from "lucide-react";

import { BeltMatch } from "@/components/mrb/belt-match";
import { ConveyorStrip } from "@/components/mrb/conveyor-strip";
import { CtaBand } from "@/components/mrb/cta-band";
import { SectionHeading } from "@/components/mrb/section-heading";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

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
            <h1 className="font-display text-h1 leading-[1.02] font-black tracking-tight text-white">
              {dict.home.heroTitle}{" "}
              <span className="text-orange">{dict.home.heroTitleAccent}</span>
            </h1>
            <p className="mt-4 max-w-lg text-lead text-navy-100">
              {dict.home.heroLead}
            </p>
            <BeltMatch locale={locale} className="mt-7" />
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
                {step.body && (
                  <p className="mt-2 text-sm leading-relaxed text-body-muted">
                    {step.body}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
