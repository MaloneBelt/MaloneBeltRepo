/* The signature conveyor strip: a petrol-900 band with marigold chevrons and
   mono product labels rolling in an endless loop — the belt itself as UI.
   Content is duplicated and translated -50% for a seamless 22s loop; the
   animation stops under prefers-reduced-motion. */
const ITEMS = [
  "ENDLESS BELTS",
  "ZIP CLIP®",
  "EP MULTI-PLY",
  "TOUGHFLEX®",
  "RIPSTOP",
  "CLEATED & CHEVRON",
];

function StripUnit() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {ITEMS.map((label) => (
        <span key={label} className="flex items-center gap-8">
          <span
            aria-hidden="true"
            className="font-display text-sm font-black tracking-[2px] text-marigold"
          >
            ›››
          </span>
          <span className="font-mono text-[12.5px] tracking-[1px] whitespace-nowrap text-petrol-200">
            {label}
          </span>
        </span>
      ))}
    </div>
  );
}

export function ConveyorStrip() {
  return (
    <div
      className="overflow-hidden border-y border-petrol-800 bg-petrol-900 py-3.5"
      aria-hidden="true"
    >
      <div className="flex w-max animate-roll motion-reduce:animate-none">
        <StripUnit />
        <StripUnit />
      </div>
    </div>
  );
}
