import Image from "next/image";
import Link from "next/link";
import { ClipboardCheck, SearchCheck, Truck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BeltMatch } from "@/components/mrb/belt-match";
import { ConveyorStrip } from "@/components/mrb/conveyor-strip";
import { CtaBand } from "@/components/mrb/cta-band";
import { ProductCard } from "@/components/mrb/product-card";
import { SectionHeading } from "@/components/mrb/section-heading";
import { TrustRow } from "@/components/mrb/trust-row";
import { beltFormats, getFeaturedProducts, getProduct } from "@/data/products";

const STEPS = [
  {
    number: "01",
    title: "Identify",
    body: "Tell us your machine model or OEM part number. Our cross-reference matches it to the exact MB belt spec.",
    icon: SearchCheck,
  },
  {
    number: "02",
    title: "Confirm the fit",
    body: "You get the exact dimensions, splice type and cover grade back — confirmed against OEM spec before anything ships.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Ship it today",
    body: "Stocked belts leave the same day. ZIP CLIP® belts fit in as little as one hour, with no specialist tools.",
    icon: Truck,
  },
];

const STATS = [
  { value: "DIN 22102", label: "Every belt, every time" },
  { value: "< 1 hr", label: "ZIP CLIP® fitting time" },
  { value: "4x", label: "ToughFlex® service life vs standard EP" },
];

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 4);
  const heroProduct = getProduct("ep-multi-ply");

  return (
    <>
      {/* Hero */}
      <section className="container-shell grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <Badge variant="brand">OEM conveyor belts · shipped fast</Badge>
          <h1 className="mt-5 font-display text-h1 leading-[1.02] font-black tracking-tight text-ink-2">
            Keep the line <span className="text-petrol-600">moving.</span>
          </h1>
          <p className="mt-4 max-w-lg text-lead text-body-muted">
            OEM-spec conveyor belts for mobile crushing, screening and
            recycling equipment — cross-referenced to your machine and shipped
            the same day.
          </p>
          <BeltMatch className="mt-7" />
          <div className="mt-6">
            <TrustRow />
          </div>
        </div>

        <div className="hidden lg:block">
          {heroProduct && (
            <ProductCard
              headerLabel="BeltMatch · result"
              liveLabel="EXACT FIT FOUND"
              partNumber="MB-4471-EP"
              title={heroProduct.name}
              specs={[
                { label: "Fits", value: "Powerscreen Chieftain 1400" },
                { label: "Dimensions", value: "7,150 × 1,000 mm" },
                { label: "Splice", value: "Hot vulcanized, endless" },
              ]}
              availability={heroProduct.availability}
              ctaLabel="View product"
              ctaHref={`/products/${heroProduct.slug}`}
              ctaVariant="dark"
            />
          )}
        </div>
      </section>

      <ConveyorStrip />

      {/* How it works */}
      <section className="container-shell py-16 lg:py-20">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps to back-in-service."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-lg border border-line bg-surface p-6 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-caption text-petrol-600">
                  STEP {step.number}
                </span>
                <step.icon
                  className="size-6 text-petrol-500"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 font-display text-h3 font-extrabold text-ink-2">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="border-y border-line bg-surface/60">
        <div className="container-shell py-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The range"
              title="Belts for every buying moment."
              lead="From factory-vulcanized endless loops to a ZIP CLIP® that has you running again within the hour."
            />
            <Button asChild variant="secondary">
              <Link href="/products">View all products</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featured.map((product) => (
              <ProductCard
                key={product.slug}
                headerLabel={product.sku}
                partNumber={product.sku}
                title={product.name}
                image={product.images.hero}
                specs={product.specs.slice(0, 2)}
                availability={product.availability}
                ctaHref={`/products/${product.slug}`}
                ctaVariant="secondary"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Choose your format */}
      <section className="container-shell py-16 lg:py-20">
        <SectionHeading
          eyebrow="Choose your format"
          title="One belt, four ways to buy it."
          lead="Every MB belt can be supplied to match the way you splice — or skip splicing entirely."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beltFormats.map((format) => (
            <div
              key={format.id}
              className="rounded-lg border border-line bg-surface p-5 shadow-xs"
            >
              <div className="relative flex h-32 items-center justify-center overflow-hidden rounded-md bg-radial-[120%_140%_at_20%_0%] from-petrol-100 to-petrol-50">
                <Image
                  src={format.image.src}
                  alt={format.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 270px"
                  className="object-contain p-3"
                />
              </div>
              <h3 className="mt-4 font-display text-base font-extrabold text-ink-2">
                {format.name}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-body-muted">
                {format.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-nav border-y border-line bg-surface/60"
      >
        <div className="container-shell grid gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <SectionHeading
            eyebrow="About Malone Road Belt"
            title="We don't sell belts. We sell uptime."
            lead="Every hour a crusher stands still costs more than the belt that stopped it. That's why we manufacture OEM-spec replacement belts for mobile material processing equipment — cross-referenced by machine, made to DIN 22102, and shipped the day you order them."
          />
          <div className="grid content-center gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-line bg-surface p-5"
              >
                <div className="font-mono text-h3 font-semibold text-petrol-600">
                  {stat.value}
                </div>
                <div className="mt-1 text-[13px] font-semibold text-body-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
