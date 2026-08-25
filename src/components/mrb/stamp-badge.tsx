/* Vector "rubber stamp" seal for the About stats — original in-house artwork
   modeled closely on the client's reference (functional_docs/Insignia
   tipo.jpeg), drawn two-tone in brand navy + orange (client direction,
   Aug 2026): solid double
   ring, big arc words top and bottom, a small-large-small star row on each
   side of a horizontal overhanging banner with a white inset keyline, and a
   worn-ink grunge mask. The seal carries only short stamped words — the
   explanatory sentence lives below it in the stat card (client direction,
   Aug 2026). Pure SVG so it stays crisp at any size and inherits the DS
   tokens (no raster asset to recolor on the next rebrand). */

import {
  Check,
  Hourglass,
  Timer,
  Truck,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

/* One pictogram per stat seal (client direction, Aug 2026): DIN = check,
   next-day shipping = truck, ZIP CLIP fitting = hourglass, service life =
   stopwatch. Order matches dict.about.stats — shared by the About stat
   cards, the home hero strip and the footer. */
export const STAT_ICONS: LucideIcon[] = [Check, Truck, Hourglass, Timer];

const STAR_PATH =
  "M0-4.6 1.1-1.5 4.4-1.4 1.8.6 2.7 3.7 0 1.8-2.7 3.7-1.8.6-4.4-1.4-1.1-1.5Z";

/* Arc words hug the inside of the inner ring like the reference — size
   drops with length so long words stay within the caps. The top arc is
   tighter (smaller radius, ends hidden behind the banner), so it scales
   down sooner than the bottom one. */
function topArcFontSize(text: string) {
  if (text.length <= 7) return 14.5;
  if (text.length <= 8) return 13.5;
  if (text.length <= 9) return 12;
  if (text.length <= 10) return 11;
  if (text.length <= 12) return 9.5;
  return 8.5;
}

function bottomArcFontSize(text: string) {
  return text.length <= 8 ? 14.5 : text.length <= 11 ? 12.5 : text.length <= 15 ? 10.5 : 9;
}

/* Slightly tighter than before — the banner now shares its width with the
   value icon (client direction, Aug 2026). */
function bannerFontSize(text: string) {
  return text.length <= 8 ? 16 : text.length <= 10 ? 14.5 : 11.5;
}

/* Archivo Black uppercase runs ~0.66 em per glyph — close enough to center
   the icon + text pair as one group without measuring real glyphs. */
function bannerTextWidth(text: string) {
  const fs = bannerFontSize(text);
  return text.length * fs * 0.66 + (text.length - 1) * 1.2;
}

function StarRow({ y }: { y: number }) {
  return (
    <>
      <path d={STAR_PATH} transform={`translate(54 ${y + 1}) scale(0.72)`} />
      <path d={STAR_PATH} transform={`translate(70 ${y}) scale(1.15)`} />
      <path d={STAR_PATH} transform={`translate(86 ${y + 1}) scale(0.72)`} />
    </>
  );
}

export function StampBadge({
  value,
  arcTop,
  arcBottom,
  icon: Icon,
  className,
}: {
  /* Punchy stat stamped on the banner (e.g. "DIN 22102", "NEXT DAY") */
  value: string;
  /* Short word on the seal's top arc (e.g. "QUALITY") */
  arcTop: string;
  /* Short word on the seal's bottom arc (e.g. "ASSURED") */
  arcBottom: string;
  /* Lucide icon stamped on the banner beside the value (client direction,
     Aug 2026: every seal carries a pictogram of its claim) */
  icon?: LucideIcon;
  className?: string;
}) {
  /* Icon + value render as one centered group on the banner */
  const iconSize = 20;
  const iconGap = 6;
  const groupW = bannerTextWidth(value) + (Icon ? iconSize + iconGap : 0);
  const iconX = 70 - groupW / 2;
  const textCx = Icon ? iconX + iconSize + iconGap + bannerTextWidth(value) / 2 : 70;

  /* textPath/mask need document-unique ids; the value is unique per page and
     this is a server component, so derive them from it instead of useId */
  const id = `stamp-${value.replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <svg
      viewBox="0 0 140 140"
      role="img"
      aria-label={`${arcTop} ${arcBottom} — ${value}`}
      className={cn("overflow-visible", className)}
    >
      <defs>
        <path id={`${id}-top`} d="M 31 70 A 39 39 0 1 1 109 70" fill="none" />
        <path id={`${id}-bottom`} d="M 23 70 A 47 47 0 1 0 117 70" fill="none" />
        {/* Worn-ink texture: scuffs and scratches knocked out of the ink,
           whatever surface the seal sits on */}
        <mask id={`${id}-grunge`} maskUnits="userSpaceOnUse">
          <rect x="-12" y="-4" width="164" height="148" fill="white" />
          <g stroke="black" fill="none" strokeLinecap="round">
            <path d="M 14 34 L 96 58" strokeWidth="1.4" opacity="0.5" />
            <path d="M 30 118 L 124 84" strokeWidth="1.8" opacity="0.45" />
            <path d="M 88 16 L 132 44" strokeWidth="1.2" opacity="0.55" strokeDasharray="7 5" />
            <path d="M 6 76 L 58 92" strokeWidth="2.2" opacity="0.35" />
            <path d="M 64 4 L 44 30" strokeWidth="1.3" opacity="0.5" />
            <path d="M 104 124 L 74 106" strokeWidth="1.5" opacity="0.5" strokeDasharray="5 4" />
            <path d="M 118 96 L 138 78" strokeWidth="1.6" opacity="0.4" />
            <path d="M 12 52 L 2 66" strokeWidth="1.8" opacity="0.45" />
          </g>
          <g fill="black">
            <circle cx="36" cy="24" r="1.4" opacity="0.5" />
            <circle cx="112" cy="30" r="1.1" opacity="0.5" />
            <circle cx="24" cy="102" r="1.6" opacity="0.45" />
            <circle cx="122" cy="112" r="1.2" opacity="0.5" />
          </g>
        </mask>
      </defs>

      {/* White paper only inside the seal — everything around it stays
         transparent (client direction, Aug 2026), so the stamp sits
         directly on dark sections without a plate. Kept outside the grunge
         mask: worn ink reveals the paper, not the page background. */}
      <circle cx="70" cy="70" r="64.5" fill="white" />
      <g mask={`url(#${id}-grunge)`}>
        {/* solid double ring, like the reference seal */}
        <circle
          cx="70"
          cy="70"
          r="62"
          fill="none"
          strokeWidth="6.5"
          className="stroke-navy-700"
        />
        <circle
          cx="70"
          cy="70"
          r="53"
          fill="none"
          strokeWidth="2"
          className="stroke-navy-700"
        />

        {/* big arc words — the seal speaks in stamps, not sentences */}
        <text
          fontSize={topArcFontSize(arcTop)}
          fontWeight="900"
          letterSpacing="1.4"
          className="fill-navy-700 font-display uppercase"
        >
          <textPath href={`#${id}-top`} startOffset="50%" textAnchor="middle">
            {arcTop}
          </textPath>
        </text>
        <text
          fontSize={bottomArcFontSize(arcBottom)}
          fontWeight="900"
          letterSpacing="1.4"
          className="fill-navy-700 font-display uppercase"
        >
          <textPath
            href={`#${id}-bottom`}
            startOffset="50%"
            textAnchor="middle"
          >
            {arcBottom}
          </textPath>
        </text>

        {/* small-large-small star rows framing the banner */}
        <g className="fill-orange">
          <StarRow y={46} />
          <StarRow y={94} />
        </g>

        {/* horizontal banner overhanging the seal, white inset keyline —
           tall enough for the icon + value pair */}
        <rect
          x="-8"
          y="54"
          width="156"
          height="32"
          rx="4"
          className="fill-orange"
        />
        <rect
          x="-4.5"
          y="57.5"
          width="149"
          height="25"
          rx="2.5"
          fill="none"
          strokeWidth="1.5"
          className="stroke-white"
        />
        {/* DS rule: content on orange is ink, never white */}
        {Icon && (
          <Icon
            x={iconX}
            y={70 - iconSize / 2}
            width={iconSize}
            height={iconSize}
            strokeWidth={2.5}
            className="text-primary-foreground"
            aria-hidden="true"
          />
        )}
        <text
          x={textCx}
          y="70.5"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={bannerFontSize(value)}
          fontWeight="900"
          letterSpacing="1.2"
          className="fill-primary-foreground font-display uppercase"
        >
          {value}
        </text>
      </g>
    </svg>
  );
}
