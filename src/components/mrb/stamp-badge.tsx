/* Vector "rubber stamp" seal for the About stats — original in-house artwork
   modeled on the client's reference (functional_docs/Insignia tipo.png), drawn
   in brand navy instead of the reference red: perforated rosette edge, double
   ring with arc text, star separators, and a diagonal banner carrying the
   stat value. Pure SVG so it stays crisp at any size and inherits the DS
   tokens (no raster asset to recolor on the next rebrand). */

import { cn } from "@/lib/utils";

const STAR_PATH =
  "M0-4.6 1.1-1.5 4.4-1.4 1.8.6 2.7 3.7 0 1.8-2.7 3.7-1.8.6-4.4-1.4-1.1-1.5Z";

/* Arc text must stay inside the seal's top/bottom caps — the banner crossing
   the middle covers anything that spills past ~±70° — so size drops with
   length. */
function ringFontSize(text: string) {
  return text.length > 16 ? 8 : text.length > 13 ? 9 : 10;
}

function bannerFontSize(text: string) {
  return text.length <= 4 ? 21 : text.length <= 9 ? 16 : 12.5;
}

export function StampBadge({
  value,
  ring,
  brand = "Malone Road Belt",
  className,
}: {
  /* Headline stamped on the banner (e.g. "DIN 22102") */
  value: string;
  /* Short claim on the seal's top arc — keep under ~20 characters */
  ring: string;
  brand?: string;
  className?: string;
}) {
  /* textPath needs document-unique ids; the value is unique per page and
     this is a server component, so derive them from it instead of useId */
  const id = `stamp-${value.replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <svg
      viewBox="0 0 140 140"
      role="img"
      aria-label={`${ring} — ${value}`}
      className={cn("overflow-visible", className)}
    >
      <defs>
        <path id={`${id}-top`} d="M 25 70 A 45 45 0 1 1 115 70" fill="none" />
        <path id={`${id}-bottom`} d="M 19 70 A 51 51 0 1 0 121 70" fill="none" />
      </defs>
      <g transform="rotate(-8 70 70)">
        {/* perforated rosette edge */}
        <circle
          cx="70"
          cy="70"
          r="64"
          fill="none"
          strokeWidth="4.5"
          strokeDasharray="2.5 5.5"
          strokeLinecap="round"
          className="stroke-navy-700"
        />
        <circle
          cx="70"
          cy="70"
          r="56"
          fill="none"
          strokeWidth="2.5"
          className="stroke-navy-700"
        />
        <circle
          cx="70"
          cy="70"
          r="36"
          fill="none"
          strokeWidth="1.5"
          className="stroke-navy-700"
        />
        <text
          fontSize={ringFontSize(ring)}
          fontWeight="800"
          letterSpacing="0.8"
          className="fill-navy-700 font-display uppercase"
        >
          <textPath href={`#${id}-top`} startOffset="50%" textAnchor="middle">
            {ring}
          </textPath>
        </text>
        <text
          fontSize={ringFontSize(brand)}
          fontWeight="800"
          letterSpacing="0.8"
          className="fill-navy-700 font-display uppercase"
        >
          <textPath
            href={`#${id}-bottom`}
            startOffset="50%"
            textAnchor="middle"
          >
            {brand}
          </textPath>
        </text>
        {/* star separators above and below the banner, like the reference */}
        <path
          d={STAR_PATH}
          transform="translate(70 45)"
          className="fill-navy-700"
        />
        <path
          d={STAR_PATH}
          transform="translate(70 95)"
          className="fill-navy-700"
        />
        {/* banner deliberately overhangs the seal, like the reference stamp */}
        <rect
          x="-8"
          y="55"
          width="156"
          height="30"
          rx="3"
          strokeWidth="2.5"
          className="fill-navy-700 stroke-white"
        />
        <text
          x="70"
          y="70"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={bannerFontSize(value)}
          fontWeight="900"
          letterSpacing="1"
          className="fill-white font-display uppercase"
        >
          {value}
        </text>
      </g>
    </svg>
  );
}
