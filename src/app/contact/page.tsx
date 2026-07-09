import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin } from "lucide-react";

import { QuoteForm } from "@/components/mrb/quote-form";
import { SectionHeading } from "@/components/mrb/section-heading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Quote Request",
  description:
    "Request a cross-referenced conveyor belt quote, or call us if your machine is down — stocked belts ship same day.",
};

export default function ContactPage() {
  return (
    <section className="container-shell grid gap-12 py-14 lg:grid-cols-[1fr_0.55fr] lg:py-16">
      <div>
        <SectionHeading
          eyebrow="Contact"
          title="Get a straight quote."
          lead="Send us your machine model or OEM part number. You'll get back a cross-referenced spec, stock status and pricing — no games."
        />
        <div className="mt-8">
          <Suspense fallback={null}>
            <QuoteForm />
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
            Machine down right now?
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-body-muted">
            Skip the form. Call us and we&apos;ll cross-reference your belt on
            the phone — stocked belts ship today.
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
          <li className="flex items-start gap-3">
            <MapPin
              className="mt-0.5 size-[17px] shrink-0 text-petrol-600"
              strokeWidth={2}
              aria-hidden="true"
            />
            <span className="text-body-muted">{site.address}</span>
          </li>
          <li className="flex items-start gap-3">
            <Clock
              className="mt-0.5 size-[17px] shrink-0 text-petrol-600"
              strokeWidth={2}
              aria-hidden="true"
            />
            <span className="font-mono text-body-muted">{site.hours}</span>
          </li>
        </ul>
      </aside>
    </section>
  );
}
