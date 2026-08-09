import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Archivo, IBM_Plex_Mono, Inter } from "next/font/google";
import { HideOnRoute } from "@/components/mrb/hide-on-route";
import { SiteFooter } from "@/components/mrb/site-footer";
import { SiteHeader } from "@/components/mrb/site-header";
import { launchMode } from "@/data/launch";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n";

import "../globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");
  return {
    title: {
      default: dict.meta.titleDefault,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale === "pt" ? "pt-BR" : "en"}
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:rounded-track focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-petrol-700"
        >
          {dict.common.skipToContent}
        </a>
        {/* Launch mode hides all chrome — see src/data/launch.ts */}
        {!launchMode && <SiteHeader locale={locale} />}
        <main id="main" className="flex-1">
          {children}
        </main>
        {!launchMode && (
          <HideOnRoute routes={["/en/coming-soon", "/pt/coming-soon"]}>
            <SiteFooter locale={locale} />
          </HideOnRoute>
        )}
      </body>
    </html>
  );
}
