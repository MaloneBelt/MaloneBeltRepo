import type { Metadata } from "next";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { launchMode } from "@/data/launch";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Coming Soon",
  description:
    "The full Malone Road Belt system is almost here. Until then, our belt desk is one call away.",
  /* Interim launch page pending client approval — keep out of the index
     until the final version is signed off. */
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    /* Single full-bleed splash (no footer on this route): stockpile conveyor
       photo (Unsplash photo-1651673206446, free license, 2400px) in grayscale
       under an even petrol wash. Client direction: pill + heading + the full
       logo (with contact details, on a white plate so the dark petrol artwork
       stays legible), left-aligned, no CTA. */
    <section
      className={cn(
        "relative isolate flex items-center overflow-hidden bg-petrol-900",
        /* Launch mode hides the navbar, so the splash takes the full
           viewport; otherwise it fills the space below the nav. */
        launchMode
          ? "min-h-svh"
          : "min-h-[calc(100svh-var(--spacing-nav))]"
      )}
    >
      <Image
        src="/coming-soon/hero-conveyor.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_35%] grayscale"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-petrol-900/70" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-petrol-900 from-4% to-transparent to-45%"
      />

      <div className="container-shell relative flex flex-col items-start py-16 lg:py-20">
        <Badge
          variant="brand"
          className="border-white/15 bg-white/10 text-petrol-100"
        >
          Coming soon
        </Badge>
        <h1 className="mt-5 max-w-2xl font-display text-h2 font-extrabold tracking-tight text-white">
          Our site is undergoing construction. Please feel free to contact us
          at any time
        </h1>
        <div className="mt-8 rounded-lg bg-white p-6 shadow-xs sm:p-8">
          <Image
            src="/brand/Final-logo.png"
            alt="Malone Road Belt — moving your business forward"
            width={1300}
            height={611}
            priority
            className="h-40 w-auto sm:h-52 lg:h-64"
          />
        </div>
      </div>
    </section>
  );
}
