import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Inter } from "next/font/google";
import { HideOnRoute } from "@/components/mrb/hide-on-route";
import { SiteFooter } from "@/components/mrb/site-footer";
import { SiteHeader } from "@/components/mrb/site-header";
import { launchMode } from "@/data/launch";

import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    default: "Malone Road Belt — OEM Conveyor Belts, Shipped Fast",
    template: "%s · Malone Road Belt",
  },
  description:
    "OEM-spec conveyor belts for mobile material processing equipment. We don't sell belts — we sell uptime. Same-day shipping on stocked belts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:rounded-track focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-petrol-700"
        >
          Skip to content
        </a>
        {/* Launch mode hides all chrome — see src/data/launch.ts */}
        {!launchMode && <SiteHeader />}
        <main id="main" className="flex-1">
          {children}
        </main>
        {!launchMode && (
          <HideOnRoute routes={["/coming-soon"]}>
            <SiteFooter />
          </HideOnRoute>
        )}
      </body>
    </html>
  );
}
