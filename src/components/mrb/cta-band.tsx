import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DeferredVideo } from "@/components/mrb/deferred-video";
import { l, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

/* Closing band (home): the planned-purchase CTA on the left, a looping belt
   video on the right (client direction, Aug 2026: no "machine down" panel
   here, and a different clip from the hero — same Pexels series, aerial
   loaded belt; credits in docs/image-credits.md). Dark navy gradient; the
   page places a white section right above it. The static poster paints
   first and stays for prefers-reduced-motion. */
export function CtaBand({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="border-t border-navy-800 bg-linear-135 from-navy-800 to-navy-900">
      <div className="container-shell grid items-center gap-10 py-16 md:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <h2 className="font-display text-h3 font-extrabold text-white">
            {dict.ctaBand.planTitle}
          </h2>
          <p className="text-sm leading-relaxed text-navy-200">
            {dict.ctaBand.planBody}
          </p>
          <Button asChild variant="primary" size="lg">
            <Link href={l(locale, "/contact")}>
              {dict.common.requestQuote}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/home/cta-conveyor-poster.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover grayscale"
          />
          <DeferredVideo
            src="/home/cta-conveyor.mp4"
            poster="/home/cta-conveyor-poster.jpg"
            strategy="in-view"
            className="absolute inset-0 size-full object-cover grayscale motion-reduce:hidden"
          />
          {/* soft navy wash so the clip sits inside the band's palette */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-navy-900/45 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
