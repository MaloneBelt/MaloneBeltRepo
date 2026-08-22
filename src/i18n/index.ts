import { en, type Dictionary } from "@/i18n/en";
import { es } from "@/i18n/es";
import { pt } from "@/i18n/pt";
import type { Locale } from "@/i18n/config";

const dictionaries: Record<Locale, Dictionary> = { en, pt, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary };
