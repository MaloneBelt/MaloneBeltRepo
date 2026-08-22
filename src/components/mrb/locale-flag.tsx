import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/* Tiny inline-SVG flags for the language dropdown (client direction,
   Aug 2026): US for English, Portugal for Portuguese, Spain for Spanish.
   Simplified artwork tuned to read at ~20px — no emoji (design system).
   Decorative: the language name sits right next to them. */

function FlagUS() {
  return (
    <svg viewBox="0 0 640 480" className="size-full" aria-hidden="true">
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={i}
          y={(480 / 13) * i * 2}
          width="640"
          height={480 / 13}
          fill="#B22234"
        />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          y={(480 / 13) * (i * 2 + 1)}
          width="640"
          height={480 / 13}
          fill="#FFFFFF"
        />
      ))}
      <rect width="256" height={(480 / 13) * 7} fill="#3C3B6E" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={40 + col * 60}
            cy={45 + row * 90}
            r="14"
            fill="#FFFFFF"
          />
        ))
      )}
    </svg>
  );
}

function FlagPT() {
  return (
    <svg viewBox="0 0 640 480" className="size-full" aria-hidden="true">
      <rect width="640" height="480" fill="#DA291C" />
      <rect width="256" height="480" fill="#046A38" />
      <circle
        cx="256"
        cy="240"
        r="90"
        fill="none"
        stroke="#FFE900"
        strokeWidth="34"
      />
      <rect x="216" y="192" width="80" height="96" rx="14" fill="#FFFFFF" />
      <rect x="234" y="210" width="44" height="60" rx="8" fill="#DA291C" />
    </svg>
  );
}

function FlagES() {
  return (
    <svg viewBox="0 0 640 480" className="size-full" aria-hidden="true">
      <rect width="640" height="480" fill="#AA151B" />
      <rect y="120" width="640" height="240" fill="#F1BF00" />
      <rect x="150" y="180" width="90" height="120" rx="12" fill="#AA151B" />
    </svg>
  );
}

const FLAGS: Record<Locale, () => React.JSX.Element> = {
  en: FlagUS,
  pt: FlagPT,
  es: FlagES,
};

export function LocaleFlag({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const Flag = FLAGS[locale];
  return (
    <span
      className={cn(
        "inline-block h-3.5 w-5 shrink-0 overflow-hidden rounded-[3px] border border-line",
        className
      )}
    >
      <Flag />
    </span>
  );
}
