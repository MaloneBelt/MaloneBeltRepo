import { oems } from "@/data/oems";

/* The signature conveyor strip: a navy-900 band with orange chevrons and
   mono labels rolling in an endless loop — the belt itself as UI. It carries
   the allied manufacturer names (client direction, Aug 2026). Content is
   duplicated and translated -50% for a seamless loop; the animation stops
   under prefers-reduced-motion. Decorative only — the accessible OEM list
   lives in the OemCarousel below. */

function StripUnit() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {oems.map((oem) => (
        <span key={oem.slug} className="flex items-center gap-8">
          {/* Points left — the direction the strip travels */}
          <span
            aria-hidden="true"
            className="font-display text-sm font-black tracking-[2px] text-orange"
          >
            ‹‹‹
          </span>
          <span className="font-mono text-[12.5px] tracking-[1px] whitespace-nowrap text-navy-200">
            {oem.name.toUpperCase()}
          </span>
        </span>
      ))}
    </div>
  );
}

export function ConveyorStrip() {
  return (
    <div
      className="overflow-hidden border-y border-navy-800 bg-navy-900 py-3.5"
      aria-hidden="true"
    >
      <div className="flex w-max animate-roll [animation-duration:80s] motion-reduce:animate-none">
        <StripUnit />
        <StripUnit />
      </div>
    </div>
  );
}
