"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

/* Sticky frosted nav (68px): brand lockup, nav links, and the red pulsing
   "Machine down now?" escape hatch for the urgent buying moment. */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="container-shell flex h-nav items-center justify-between gap-4">
        <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
          <Image
            src="/brand/logo-lockup.svg"
            alt=""
            width={190}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold text-body-muted transition-colors hover:text-petrol-700",
                pathname === link.href && "text-petrol-700"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact?urgency=down-now"
            className="hidden items-center gap-[7px] rounded-track border border-down-line bg-down-tint px-4 py-[9px] text-[13px] font-bold leading-none text-down-strong transition-colors hover:bg-down-line/60 sm:inline-flex"
          >
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-down animate-status-pulse motion-reduce:animate-none"
            />
            Machine down now?
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
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
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold text-ink-2 hover:bg-petrol-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact?urgency=down-now"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center gap-[7px] rounded-track border border-down-line bg-down-tint px-4 py-2.5 text-[13px] font-bold text-down-strong"
            >
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-down"
              />
              Machine down now?
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
