export const locales = ["en", "pt", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/* Prefix an internal path with the locale: l("pt", "/products") → "/pt/products" */
export function l(locale: Locale, path: string): string {
  return `/${locale}${path === "/" ? "" : path}` || `/${locale}`;
}
