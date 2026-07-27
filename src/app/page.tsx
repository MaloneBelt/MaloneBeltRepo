import Image from "next/image";
import { ClipboardCheck, SearchCheck, Truck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { BeltMatch } from "@/components/mrb/belt-match";
import { ConveyorStrip } from "@/components/mrb/conveyor-strip";
import { CtaBand } from "@/components/mrb/cta-band";
import { SectionHeading } from "@/components/mrb/section-heading";
import { TrustRow } from "@/components/mrb/trust-row";
import { beltFormats } from "@/data/products";

const STEPS = [
  {
    number: "01",
    title: "Identify",
    body: "Tell us your machine model or OEM part number. Our cross-reference matches it to the exact MB belt spec.",
    icon: SearchCheck,
  },
  {
    number: "02",
    title: "Confirm the fit",
    body: "You get the exact dimensions, splice type and cover grade back — confirmed against OEM spec before anything ships.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Ship it today",
    body: "Stocked belts leave the same day. ZIP CLIP® belts fit in as little as one hour, with no specialist tools.",
    icon: Truck,
  },
];

const STATS = [
  { value: "DIN 22102", label: "Every belt, every time" },
  { value: "< 1 hr", label: "ZIP CLIP® fitting time" },
  { value: "4x", label: "ToughFlex® service life vs standard EP" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-petrol-900">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]">
          <Image
            src="/home/hero-welder.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-[60%_25%] grayscale"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-linear-to-r from-petrol-900 from-8% via-petrol-900/35 via-45% to-transparent lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-petrol-900 via-petrol-900/60 to-petrol-900/30 lg:hidden"
          />
        </div>

        <div className="container-shell relative py-16 lg:py-24">
          <div className="max-w-xl lg:max-w-2xl">
            <Badge
              variant="brand"
              className="border-white/15 bg-white/10 text-petrol-100"
            >
              OEM conveyor belts · shipped fast
            </Badge>
            <h1 className="mt-5 font-display text-h1 leading-[1.02] font-black tracking-tight text-white">
              Moving your business{" "}
              <span className="text-marigold">forward.</span>
            </h1>
            <p className="mt-4 max-w-lg text-lead text-petrol-100">
              OEM-spec conveyor belts for mobile crushing, screening and
              recycling equipment — cross-referenced to your machine and
              shipped the same day.
            </p>
            <BeltMatch className="mt-7" />
            <div className="mt-6">
              <TrustRow tone="inverse" />
            </div>
          </div>
        </div>
      </section>

      <ConveyorStrip />

      {/* How it works */}
      <section className="container-shell py-16 lg:py-20">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps to back-in-service."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-lg border border-line bg-surface p-6 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-caption text-petrol-600">
                  STEP {step.number}
                </span>
                <step.icon
                  className="size-6 text-petrol-500"
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
          ))}
        </div>
      </section>

      {/* Choose your format — dark band (client-assigned). Products are
          reached via BeltMatch or the navbar only: no product section on the
          landing page (client direction) */}
      <section className="border-y border-petrol-800 bg-linear-135 from-petrol-800 to-petrol-900">
        <div className="container-shell py-16 lg:py-20">
          <SectionHeading
            tone="inverse"
            eyebrow="Choose your format"
            title="One belt, four ways to buy it."
            lead="Every MB belt can be supplied to match the way you splice — or skip splicing entirely."
          />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beltFormats.map((format) => (
            <div
              key={format.id}
              className="rounded-lg border border-line bg-surface p-5 shadow-xs"
            >
              <div className="relative flex h-32 items-center justify-center overflow-hidden rounded-md bg-radial-[120%_140%_at_20%_0%] from-petrol-100 to-petrol-50">
                <Image
                  src={format.image.src}
                  alt={format.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 270px"
                  className="object-contain p-3"
                />
              </div>
              <h3 className="mt-4 font-display text-base font-extrabold text-ink-2">
                {format.name}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-body-muted">
                {format.description}
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* About — white section (client-assigned); the stats read as dark
          info panels so they hold their own against the white canvas */}
      <section id="about" className="scroll-mt-nav">
        <div className="container-shell grid gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <SectionHeading
            eyebrow="About Malone Road Belt"
            title="We don't sell belts. We sell uptime."
            lead="Every hour a crusher stands still costs more than the belt that stopped it. That's why we manufacture OEM-spec replacement belts for mobile material processing equipment — cross-referenced by machine, made to DIN 22102, and shipped the day you order them."
          />
          <div className="grid content-center gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-petrol-800 bg-linear-135 from-petrol-800 to-petrol-900 p-5"
              >
                <div className="font-mono text-h3 font-semibold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-[13px] font-semibold text-petrol-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
