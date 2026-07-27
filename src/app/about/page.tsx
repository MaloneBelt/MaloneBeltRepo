import type { Metadata } from "next";
import { ClipboardCheck, SearchCheck, Truck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { CtaBand } from "@/components/mrb/cta-band";
import { SectionHeading } from "@/components/mrb/section-heading";
import { TrustRow } from "@/components/mrb/trust-row";

export const metadata: Metadata = {
  title: "About",
  description:
    "Malone Road Belt manufactures OEM-spec replacement conveyor belts for mobile crushing, screening and recycling equipment — cross-referenced by machine, made to DIN 22102, shipped same day.",
};

const STATS = [
  { value: "DIN 22102", label: "Every belt, every time" },
  { value: "Same day", label: "Dispatch on stocked belts" },
  { value: "< 1 hr", label: "ZIP CLIP® fitting time" },
  { value: "4x", label: "ToughFlex® service life vs standard EP" },
];

const VALUES = [
  {
    title: "Cross-referenced, not guessed",
    body: "Every order starts from your machine model or OEM part number. Our cross-reference desk confirms the exact dimensions, splice and cover grade against OEM spec before anything ships.",
    icon: SearchCheck,
  },
  {
    title: "OEM spec, certified",
    body: "Belts are manufactured to DIN 22102 in an ISO 9001 certified process, and every MB part number is recorded so your next reorder is a one-line email.",
    icon: ClipboardCheck,
  },
  {
    title: "Built around your downtime",
    body: "Stocked belts leave the same day. When the machine is already down, ZIP CLIP® has you running again within the hour — no splicing crew, no curing time.",
    icon: Truck,
  },
];

const STANDARDS = ["DIN 22102", "ISO 9001"];

export default function AboutPage() {
  return (
    <>
      {/* Hero + story — merged into one continuous dark zone
          (client-assigned); How we work below is white, CtaBand dark */}
      <div className="border-b border-petrol-800 bg-linear-135 from-petrol-800 to-petrol-900">
        <section className="container-shell pt-14 lg:pt-20">
          <SectionHeading
            tone="inverse"
            eyebrow="About Malone Road Belt"
            title="We don't sell belts. We sell uptime."
            lead="Every hour a crusher stands still costs more than the belt that stopped it. That's why we manufacture OEM-spec replacement belts for mobile material processing equipment — cross-referenced by machine, made to DIN 22102, and shipped the day you order them."
          />
          <div className="mt-6">
            <TrustRow tone="inverse" />
          </div>
        </section>

        {/* Story + stats */}
        <section className="container-shell grid gap-10 py-14 lg:grid-cols-2 lg:py-16">
          <div className="max-w-xl">
            <h2 className="font-display text-h3 font-extrabold text-white">
              Belt people.
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-petrol-200">
              <p>
                Malone Road Belt exists for one buying moment: the day your
                crusher, screener or recycler needs a new belt. Mobile
                processing equipment doesn&apos;t wait — so instead of selling
                generic rubber by the metre, we hold OEM-spec belts for the
                machines actually working in quarries, recycling yards and
                road projects, ready to ship.
              </p>
              <p>
                Behind the range is a cross-reference engine: machine models
                and OEM part numbers mapped to exact MB belt specs — width,
                length, plies, splice and cover grade. Send us either one and
                you get the confirmed fit back, not a catalogue to decode.
              </p>
              <p>
                We serve operators and dealers across Ireland, the UK and
                beyond — and whenever you call, a person answers the phone.
              </p>
            </div>
          </div>
          <div className="grid content-center gap-4 sm:grid-cols-2">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-line bg-surface p-5"
              >
                <div className="font-mono text-h3 font-semibold text-petrol-600">
                  {stat.value}
                </div>
                <div className="mt-1 text-[13px] font-semibold text-body-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* How we work — white layer between the dark hero+story zone and the
          dark CtaBand */}
      <section className="container-shell py-16 lg:py-20">
        <SectionHeading
          eyebrow="How we work"
          title="Three promises on every order."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-lg border border-line bg-surface p-6 shadow-xs"
            >
              <value.icon
                className="size-6 text-petrol-500"
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
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-[13px] font-semibold text-body-muted">
            Manufactured to:
          </span>
          {STANDARDS.map((standard) => (
            <Badge key={standard} variant="mono">
              {standard}
            </Badge>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
