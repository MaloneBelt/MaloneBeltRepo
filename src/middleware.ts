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

/* ── Printed QR → English home (client direction, Nov 2026) ─────────────
   Marketing pieces already in circulation carry a QR that encodes exactly
   https://www.malonebelt.com/es (the Spanish HOME) and cannot be reprinted.
   Scans must land on the English home, but /es is also the real Spanish home
   (header logo, product breadcrumb, LocaleSwitcher, sitemap), so the redirect
   is conditional: only an external top-level navigation to the bare /es
   (camera / Lens / scanner app, typed URL, link opened from a native app)
   goes to /en. Everything else keeps Spanish:
     - in-site navigation (logo, breadcrumb, switcher, next/link prefetch) is
       an RSC fetch() with Sec-Fetch-Dest: empty, never "document";
     - visitors coming from a web page (Google…) carry an http(s) Referer;
     - crawlers send no Sec-Fetch-*, no real Accept-Language or a bot UA, so
       Googlebot sees exactly what Google-search visitors see (no cloaking);
     - NEXT_LOCALE=es (switcher choice or a remembered Spanish reader);
     - any query string: /es?lang=es is the escape hatch for Spanish links.
   Next strips rsc / next-router-* headers before middleware runs, so Fetch
   Metadata (Sec-Fetch-*) is the only navigation signal available here.
   307 ONLY, never 301/308: browsers cache permanent redirects, which would
   lock that phone out of the Spanish home for good.
   To retire the rule, revert the commit that introduced this block. */

const ONE_YEAR = 60 * 60 * 24 * 365;

/* A real language tag (en-US, es-419, pt…). Rejects a missing or empty
   header and the "*" some crawlers send. */
const LANGUAGE_TAG = /^\s*[a-z]{2,3}(?:[-_][a-z0-9]{1,8})*\s*(?:[,;]|$)/i;

/* Explicit tokens only (a bare /bot/i would also match phones such as
   CUBOT). Used solely to never redirect. */
const BOT_UA =
  /Googlebot|Google-InspectionTool|GoogleOther|AdsBot-Google|Storebot-Google|bingbot|BingPreview|Applebot|DuckDuckBot|YandexBot|Baiduspider|facebookexternalhit|Twitterbot|LinkedInBot|Slackbot|TelegramBot|WhatsApp\/|Chrome-Lighthouse|GPTBot|OAI-SearchBot|ChatGPT-User|PerplexityBot|ClaudeBot/i;

/* google.com, google.com.mx, google.co.uk, bing.com, search.yahoo.com… —
   the engine label must be followed by a short public suffix and then the
   end of the host, so google.attacker.com does not count. */
const SEARCH_ENGINE_REFERER =
  /^https?:\/\/(?:[a-z0-9-]+\.)*(?:google|bing|duckduckgo|yahoo|ecosia|yandex)\.[a-z]{2,3}(?:\.[a-z]{2})?(?:[/:?#]|$)/i;

type EsArrival =
  | "redirect"
  | "not_get"
  | "query"
  | "no_fetch_metadata"
  | "not_document"
  | "same_site"
  | "web_referer"
  | "no_language"
  | "bot"
  | "cookie_es";

/* First failing check wins. Speculative prefetches (Sec-Purpose) are NOT
   exempt on purpose: a scanner app that prefetches /es must get the same
   307 the tap will get, or the tap would reuse a Spanish response. */
function classifyEsArrival(request: NextRequest): EsArrival {
  const h = request.headers;
  if (request.method !== "GET") return "not_get";
  if (request.nextUrl.search !== "") return "query";
  const site = h.get("sec-fetch-site");
  if (!site) return "no_fetch_metadata";
  if (h.get("sec-fetch-dest") !== "document" || h.get("sec-fetch-mode") !== "navigate") {
    return "not_document";
  }
  if (site !== "none" && site !== "cross-site") return "same_site";
  if (/^https?:\/\//i.test(h.get("referer") ?? "")) return "web_referer";
  if (!LANGUAGE_TAG.test(h.get("accept-language") ?? "")) return "no_language";
  if (BOT_UA.test(h.get("user-agent") ?? "")) return "bot";
  if (request.cookies.get("NEXT_LOCALE")?.value === "es") return "cookie_es";
  return "redirect";
}

/* Remember Spanish readers, so a reload, a bookmark or a Safari new tab of
   /es never bounces someone who was reading Spanish. Runs only on real page
   loads (GET, Sec-Fetch-Dest: document, no speculative prefetch), never on
   RSC payloads, which are CDN-cached. Attributes mirror the LocaleSwitcher's
   document.cookie exactly (path=/, 1 year, lax, host-only) and are NOT
   HttpOnly, so the switcher can still overwrite the value.
     - refresh: an existing NEXT_LOCALE=es is re-issued from the server,
       because Safari and Brave cap script-written cookies at 7 days;
     - stamp: a visitor with no saved preference who loads a deep Spanish
       page, or reaches /es from our own site or a search engine, is
       remembered as Spanish. A QR-like arrival on the bare /es is never
       stamped. An explicit en/pt choice is never overridden. */
function rememberSpanishReader(request: NextRequest, response: NextResponse) {
  const h = request.headers;
  if (
    request.method !== "GET" ||
    h.get("sec-fetch-dest") !== "document" ||
    h.has("sec-purpose") ||
    h.has("purpose")
  ) {
    return;
  }

  const saved = request.cookies.get("NEXT_LOCALE")?.value;
  const remember =
    saved === "es" ||
    (!saved &&
      (request.nextUrl.pathname !== "/es" ||
        h.get("sec-fetch-site") === "same-origin" ||
        SEARCH_ENGINE_REFERER.test(h.get("referer") ?? "")));

  if (remember) {
    response.cookies.set("NEXT_LOCALE", "es", {
      path: "/",
      maxAge: ONE_YEAR,
      sameSite: "lax",
    });
  }
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

  /* Printed QR (see above). Must run before the isLocale() early return,
     which is today's exit for /es. /es/ never reaches this point: Next's
     built-in trailing-slash 308 normalizes it to /es first. */
  if (pathname === "/es" && classifyEsArrival(request) === "redirect") {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    url.search = "";
    const response = NextResponse.redirect(url, 307);
    response.headers.set("Cache-Control", "private, no-store");
    return response;
  }

  const first = pathname.split("/")[1];
  if (isLocale(first)) {
    const response = NextResponse.next();
    if (first === "es") rememberSpanishReader(request, response);
    return response;
  }

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
