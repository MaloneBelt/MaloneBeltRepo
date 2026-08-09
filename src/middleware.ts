import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, isLocale } from "@/i18n/config";

/* Locale routing: every page lives under /en/... or /pt/... — requests
   without a locale prefix (including legacy pre-i18n URLs) are redirected,
   honoring the NEXT_LOCALE cookie set by the header's language switcher. */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];
  if (isLocale(first)) return NextResponse.next();

  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  const locale = cookie && isLocale(cookie) ? cookie : defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  /* Skip Next internals, metadata routes and any file with an extension */
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
