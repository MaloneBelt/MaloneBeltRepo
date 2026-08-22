"use client";

import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";

import { LocaleFlag } from "@/components/mrb/locale-flag";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const LABELS: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
};

const NAMES: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  es: "Español",
};

const LOCALE_PREFIX = new RegExp(`^\\/(${locales.join("|")})(?=\\/|$)`);

/* Navbar language dropdown (client direction, Aug 2026): swaps the locale
   prefix on the current path and remembers the choice in NEXT_LOCALE so the
   middleware routes bare URLs to the visitor's language. Each option pairs
   the language name with its flag (US / Portugal / Spain). */
export function LocaleSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: string) {
    if (next === locale) return;
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    const rest = pathname.replace(LOCALE_PREFIX, "");
    router.push(`/${next}${rest}`);
  }

  return (
    <Select value={locale} onValueChange={switchTo}>
      <SelectTrigger
        aria-label={label}
        className={cn(
          "h-9 w-auto gap-1.5 rounded-track border-line bg-surface px-3 font-display text-[12.5px] font-bold text-ink-2",
          className
        )}
      >
        <Languages
          className="size-4 text-navy-600"
          strokeWidth={2.2}
          aria-hidden="true"
        />
        {LABELS[locale]}
      </SelectTrigger>
      <SelectContent align="end">
        {locales.map((value) => (
          <SelectItem key={value} value={value}>
            <span className="flex items-center gap-2">
              <LocaleFlag locale={value} />
              {NAMES[value]}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
