import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { l, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

/* Dual-path closing band: the two buying moments, side by side.
   Planned purchase (marigold action) vs. machine down (red urgency).
   Dark petrol gradient — every page places a white section right above it. */
export function CtaBand({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-linear-135 from-petrol-800 to-petrol-900">
      <div className="container-shell grid gap-8 py-16 md:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <h2 className="font-display text-h3 font-extrabold text-white">
            {dict.ctaBand.planTitle}
          </h2>
          <p className="text-sm leading-relaxed text-petrol-200">
            {dict.ctaBand.planBody}
          </p>
          <Button asChild variant="primary" size="lg">
            <Link href={l(locale, "/contact")}>
              {dict.common.requestQuote}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col items-start gap-4 border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-8">
          <h2 className="flex items-center gap-3 font-display text-h3 font-extrabold text-white">
            <span
              aria-hidden="true"
              className="size-2.5 rounded-full bg-down animate-status-pulse motion-reduce:animate-none"
            />
            {dict.common.machineDownRightNow}
          </h2>
          <p className="text-sm leading-relaxed text-petrol-200">
            {dict.ctaBand.downBody}
          </p>
          <Button asChild variant="danger" size="lg">
            <a href={site.phoneHref}>
              <PhoneCall aria-hidden="true" />
              <span className="font-mono">{site.phone}</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
