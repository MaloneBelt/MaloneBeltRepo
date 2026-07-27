import Image from "next/image";
import Link from "next/link";

import { footerLinks, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          {/* The final client logo has no reversed (light) variant yet, so it
              sits on a white plate to stay legible on the dark footer. */}
          <div className="inline-block rounded-md bg-white px-3 py-2">
            <Image
              src="/brand/Final-logo-sin-contacto.png"
              alt={site.name}
              width={1272}
              height={409}
              className="h-9 w-auto"
            />
          </div>
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
