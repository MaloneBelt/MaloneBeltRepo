import Image from "next/image";

import { oems, type Oem } from "@/data/oems";

/* The signature conveyor strip: a navy-900 band with orange chevrons rolling
   in an endless loop — the belt itself as UI. It carries the allied
   manufacturer logos in their original brand colors (client direction,
   Aug 2026): colored marks ride on small white plates so they read against
   the band; logos whose original artwork is white-on-dark (tone: "dark")
   ride directly on it. Content is duplicated and translated -50% for a
   seamless loop; the animation stops under prefers-reduced-motion. The
   moving row is decorative — screen readers get the static brand list. */

function LogoUnit({ oem }: { oem: Oem }) {
  return (
    <span className="flex items-center gap-8">
      {/* Points left — the direction the strip travels */}
      <span
        aria-hidden="true"
        className="font-display text-sm font-black tracking-[2px] text-orange"
      >
        ‹‹‹
      </span>
      <span
        className={
          oem.tone === "dark"
            ? "relative block h-10 w-32 shrink-0"
            : "relative flex h-10 w-32 shrink-0 items-center justify-center rounded-lg bg-white px-2.5 py-1"
        }
      >
        <Image
          src={oem.logo}
          alt=""
          fill
          sizes="128px"
          className="object-contain p-1"
        />
      </span>
    </span>
  );
}

function StripUnit() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {oems.map((oem) => (
        <LogoUnit key={oem.slug} oem={oem} />
      ))}
    </div>
  );
}

export function ConveyorStrip() {
  return (
    <div className="overflow-hidden border-y border-navy-800 bg-navy-900 py-3">
      <div
        aria-hidden="true"
        className="flex w-max animate-roll [animation-duration:80s] motion-reduce:animate-none"
      >
        <StripUnit />
        <StripUnit />
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
