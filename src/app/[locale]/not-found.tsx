"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { isLocale, l, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

/* not-found boundaries don't receive route params, so the locale is read
   from the pathname on the client. */
export default function NotFound() {
  const pathname = usePathname();
  const first = pathname.split("/")[1];
  const locale: Locale = isLocale(first) ? first : "en";
  const dict = getDictionary(locale);

  return (
    <section className="container-shell flex flex-col items-center py-24 text-center">
      <Image
        src="/brand/Final-logo-emblema.png"
        alt=""
        width={380}
        height={390}
        className="h-24 w-auto"
      />
      <Badge variant="mono" className="mt-6">
        {dict.notFound.badge}
      </Badge>
      <h1 className="mt-4 font-display text-h2 font-black tracking-tight text-ink-2">
        {dict.notFound.title}
      </h1>
      <p className="mt-3 max-w-md text-body-muted">{dict.notFound.body}</p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button asChild variant="primary">
          <Link href={l(locale, "/products")}>
            {dict.notFound.browseProducts}
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={l(locale, "/contact")}>{dict.common.contactUs}</Link>
        </Button>
      </div>
    </section>
  );
}
