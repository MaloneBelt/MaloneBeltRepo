import { NextResponse, type NextRequest } from "next/server";

import { stagingMode } from "@/data/staging";
import { defaultLocale, isLocale } from "@/i18n/config";

const NO_INDEX_HEADERS = {
  "Cache-Control": "no-store",
  "X-Robots-Tag": "noindex, nofollow",
};

/* Constant-time credential comparison: hash both sides so length and
   content differences never shape the timing, then XOR the digests. */
async function credentialsMatch(given: string, expected: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(given)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected)),
  ]);
  const bytesA = new Uint8Array(a);
  const bytesB = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < bytesA.length; i++) diff |= bytesA[i] ^ bytesB[i];
  return diff === 0;
}

/* Staging gate (see src/data/staging.ts): the shared client-preview
   deployment sits behind HTTP Basic Auth. Returns null to continue, or a
   response that ends the request:
     401 → missing/wrong credentials (browser shows its native dialog)
     503 → STAGING_BASIC_AUTH absent or malformed — fail closed so a typo
           in the env var can never leave staging publicly reachable. */
async function guardStaging(request: NextRequest): Promise<NextResponse | null> {
  if (!stagingMode) return null;

  const expected = process.env.STAGING_BASIC_AUTH;
  const separator = expected?.indexOf(":") ?? -1;
  if (!expected || separator < 1 || separator === expected.length - 1) {
    return new NextResponse("Service unavailable", {
      status: 503,
      headers: NO_INDEX_HEADERS,
    });
  }

  const header = request.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    try {
      const bytes = Uint8Array.from(atob(header.slice(6)), (c) => c.charCodeAt(0));
      const given = new TextDecoder().decode(bytes);
      if (await credentialsMatch(given, expected)) return null;
    } catch {
      /* invalid base64 → fall through to 401 */
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      ...NO_INDEX_HEADERS,
      "WWW-Authenticate": 'Basic realm="MRB staging", charset="UTF-8"',
    },
  });
}

/* Locale routing: every page lives under a locale prefix (/en, /pt, /es) — requests
   without a locale prefix (including legacy pre-i18n URLs) are redirected,
   honoring the NEXT_LOCALE cookie set by the header's language switcher. */
export async function middleware(request: NextRequest) {
  /* The gate runs before anything reads pathname: an unauthenticated GET /
     must get a 401, not a 307 → /en that leaks the URL structure. */
  const gate = await guardStaging(request);
  if (gate) return gate;

  const { pathname } = request.nextUrl;

  /* Same exclusions the matcher used to express (Next internals, metadata
     routes, any file with an extension) — kept here so the staging gate
     above still covers those paths while the locale logic skips them.
     /_vercel covers the Analytics / Speed Insights beacons
     (POST /_vercel/insights/view etc.), which carry no extension and must
     never be locale-redirected. */
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const first = pathname.split("/")[1];
  if (isLocale(first)) return NextResponse.next();

  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  const locale = cookie && isLocale(cookie) ? cookie : defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  /* Broad on purpose: public/ assets, robots.txt and sitemap.xml must all
     hit the staging gate. Only _next/static is skipped — the 401 is plain
     text with a native browser dialog, so chunks need no protection and
     excluding them saves one middleware invocation per file. */
  matcher: ["/((?!_next/static).*)"],
};
