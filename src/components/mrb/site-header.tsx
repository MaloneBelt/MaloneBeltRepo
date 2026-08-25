"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { LocaleSwitcher } from "@/components/mrb/locale-switcher";
import { site } from "@/data/site";
import { l, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { cn } from "@/lib/utils";

/* Sticky frosted nav (96px): brand lockup (v3 — strapline bold inside the
   artwork, full logo width), nav links, language dropdown and
   the red pulsing "Machine down now?" escape hatch for the urgent buying
   moment. */
export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dict = getDictionary(locale);

  const links = [
    { label: dict.nav.products, href: l(locale, "/products") },
    { label: dict.nav.about, href: l(locale, "/about") },
    { label: dict.nav.contact, href: l(locale, "/contact") },
    /* Interim launch page — remove from the nav once the final version
       is approved and it takes over as the live-launch landing. */
    { label: dict.nav.comingSoon, href: l(locale, "/coming-soon") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="container-shell flex h-nav items-center justify-between gap-4">
        {/* Brand lockup v3 (client direction, Aug 2026): the strapline is part
            of the logo artwork — bold, full lockup width — so it reads at nav
            size while staying one single mark. */}
        <Link
          href={l(locale, "/")}
          aria-label={`${site.name} — ${dict.common.home}`}
          className="shrink-0"
        >
          <Image
            src="/brand/Final-logo-sin-contacto.png"
            alt=""
            width={1272}
            height={480}
            priority
            className="h-[84px] w-auto md:h-[128px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold text-body-muted transition-colors hover:text-navy-700",
                pathname === link.href && "text-navy-700"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher
            locale={locale}
            label={dict.common.languageLabel}
            className="hidden sm:flex"
          />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.common.closeMenu : dict.common.openMenu}
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-md border border-line bg-surface text-ink-2 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-canvas md:hidden"
        >
          <div className="container-shell flex flex-col gap-1 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink-2 hover:bg-navy-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <LocaleSwitcher
                locale={locale}
                label={dict.common.languageLabel}
              />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
