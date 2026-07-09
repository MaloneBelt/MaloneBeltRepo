import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SealMark } from "@/components/mrb/seal-mark";
import { SpecList } from "@/components/mrb/spec-row";
import { StateChip } from "@/components/mrb/state-chip";
import { cn } from "@/lib/utils";

/* The canonical belt card: dark gradient header (mono meta + live status),
   visual panel (product photo, or the seal on a petrol wash), mono spec rows,
   footer CTA. `ctaVariant` exists to honor one-marigold-per-view. */
export function ProductCard({
  partNumber,
  title,
  headerLabel,
  liveLabel,
  image,
  specs = [],
  availability,
  ctaLabel = "View product",
  ctaHref,
  ctaVariant = "secondary",
  className,
}: {
  partNumber: string;
  title: string;
  headerLabel: string;
  liveLabel?: string;
  image?: { src: string; alt: string };
  specs?: { label: string; value: string }[];
  availability?: { status: "in-stock" | "made-to-order"; label: string };
  ctaLabel?: string;
  ctaHref: string;
  ctaVariant?: "primary" | "secondary" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-lg",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3 bg-linear-135 from-petrol-800 to-petrol-900 px-5 py-4">
        <span className="font-mono text-xs text-petrol-200">{headerLabel}</span>
        {liveLabel && (
          <span className="flex items-center gap-[7px] font-display text-[11px] font-bold tracking-[1px] text-white">
            <span
              aria-hidden="true"
              className="size-[7px] rounded-full bg-stock shadow-[0_0_8px_var(--color-success)]"
            />
            {liveLabel}
          </span>
        )}
      </div>

      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-radial-[120%_140%_at_20%_0%] from-petrol-100 to-petrol-50">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 370px"
            className="object-contain p-4"
          />
        ) : (
          <SealMark size={120} className="text-petrol-600" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="font-mono text-xs text-petrol-600">{partNumber}</div>
        <h3 className="mt-1 mb-3 font-display text-xl font-extrabold text-ink-2">
          {title}
        </h3>

        {specs.length > 0 && <SpecList specs={specs} />}

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          {availability &&
            (availability.status === "in-stock" ? (
              <StateChip variant="stock">{availability.label}</StateChip>
            ) : (
              <Badge variant="neutral">{availability.label}</Badge>
            ))}
          <Button asChild variant={ctaVariant} className="flex-1 justify-center">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
