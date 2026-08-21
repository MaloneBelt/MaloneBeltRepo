import Image from "next/image";

import { oems, type Oem } from "@/data/oems";
import { cn } from "@/lib/utils";

/* Allied-OEM marquee: evolves the ConveyorStrip idea (duplicated content,
   -50% translate, `roll` keyframe) into a dark "belt" carrying manufacturer
   logos in their original brand colors (client direction, Aug 2026). Colored
   marks ride on small white plates so they read against the navy gradient;
   logos whose original artwork is white-on-dark (tone: "dark") ride directly
   on the band. Edges fade out and hovering a row pauses it. The moving rows
   are decorative — screen readers get a static list of brand names. */

function LogoTile({ oem, reverse }: { oem: Oem; reverse?: boolean }) {
  return (
    <span className="flex items-center gap-10">
      <span
        className={
          oem.tone === "dark"
            ? "relative block h-12 w-40 shrink-0"
            : "relative flex h-12 w-40 shrink-0 items-center justify-center rounded-lg bg-white px-3 py-1.5"
        }
      >
        <Image
          src={oem.logo}
          alt=""
          fill
          sizes="160px"
          className="object-contain p-1.5"
        />
      </span>
      {/* Arrows follow the row's travel direction: the base `roll` keyframe
         moves left (‹‹‹), the reversed row moves right (›››). */}
      <span
        className="font-display text-sm font-black tracking-[2px] text-orange/70"
        aria-hidden="true"
      >
        {reverse ? "›››" : "‹‹‹"}
      </span>
    </span>
  );
}

function MarqueeRow({ brands, reverse }: { brands: Oem[]; reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className={cn(
            "flex w-max shrink-0 items-center gap-10 pr-10 animate-roll [animation-duration:55s] group-hover:[animation-play-state:paused] motion-reduce:animate-none",
            reverse && "[animation-direction:reverse]"
          )}
        >
          {brands.map((oem) => (
            <LogoTile key={oem.slug} oem={oem} reverse={reverse} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function OemCarousel({ className }: { className?: string }) {
  const half = Math.ceil(oems.length / 2);
  const rowA = oems.slice(0, half);
  const rowB = oems.slice(half);

  return (
    <div className={className}>
      <div
        aria-hidden="true"
        className="relative overflow-hidden rounded-2xl border border-navy-800 bg-linear-135 from-navy-800 to-navy-900 py-8"
      >
        <div className="space-y-8">
          <MarqueeRow brands={rowA} />
          <MarqueeRow brands={rowB} reverse />
        </div>
        {/* Edge fades so logos emerge from / dissolve into the band */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-navy-800 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-navy-900 to-transparent sm:w-28" />
      </div>

      {/* Accessible, non-moving equivalent of the marquee */}
      <ul className="sr-only">
        {oems.map((oem) => (
          <li key={oem.slug}>{oem.name}</li>
        ))}
      </ul>
    </div>
  );
}
