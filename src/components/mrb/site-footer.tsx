import Image from "next/image";
import Link from "next/link";

import { footerLinks, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/logo-lockup-reversed.svg"
            alt={site.name}
            width={190}
            height={40}
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {site.description}
          </p>
        </div>

        <nav aria-label="Products">
          <h3 className="font-display text-caption font-bold tracking-eyebrow uppercase text-white/50">
            Products
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.products.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-caption font-bold tracking-eyebrow uppercase text-white/50">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="font-mono text-white/80 transition-colors hover:text-white"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="font-mono text-white/80 transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </li>
            <li className="text-white/60">{site.address}</li>
            <li className="font-mono text-white/60">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col items-start justify-between gap-2 py-5 text-caption text-white/40 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="font-mono">We don&apos;t sell belts. We sell uptime.</span>
        </div>
      </div>
    </footer>
  );
}
