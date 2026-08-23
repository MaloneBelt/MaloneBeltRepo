"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type CarouselSlide = {
  src: string;
  alt: string;
  title: string;
  body: string;
};

const AUTOPLAY_MS = 5000;

/* Landing-page image carousel ("Out in the field"): one large photo at a
   time with its mission caption, auto-advancing like the belt it celebrates.
   Autoplay pauses while the user hovers or keeps focus inside, and never
   starts under prefers-reduced-motion. */
export function HomeCarousel({
  slides,
  prevLabel,
  nextLabel,
  goToLabel,
  className,
}: {
  slides: CarouselSlide[];
  prevLabel: string;
  nextLabel: string;
  /* Prefix for the dot buttons' aria-label; the 1-based index is appended */
  goToLabel: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  const step = (delta: number) =>
    setIndex((i) => (i + delta + slides.length) % slides.length);

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-xl border border-white/10">
        <div
          className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              aria-hidden={i !== index}
              className="relative aspect-[4/3] w-full shrink-0 sm:aspect-video"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                quality={85}
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy-900/90 via-navy-900/45 to-transparent pt-20 pb-6 pl-6 pr-16 sm:pb-7 sm:pl-8">
                <h3 className="font-display text-h3 font-extrabold text-white">
                  {slide.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-navy-100">
                  {slide.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label={prevLabel}
        onClick={() => step(-1)}
        className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-navy-900/45 text-white backdrop-blur-sm transition-colors hover:bg-navy-900/70 focus-visible:ring-4 focus-visible:ring-white/30 outline-none"
      >
        <ChevronLeft className="size-5" strokeWidth={2.5} aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label={nextLabel}
        onClick={() => step(1)}
        className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-navy-900/45 text-white backdrop-blur-sm transition-colors hover:bg-navy-900/70 focus-visible:ring-4 focus-visible:ring-white/30 outline-none"
      >
        <ChevronRight className="size-5" strokeWidth={2.5} aria-hidden="true" />
      </button>

      <div className="mt-5 flex justify-center gap-2.5">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`${goToLabel} ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "size-2.5 cursor-pointer rounded-full transition-colors",
              i === index ? "bg-orange" : "bg-white/30 hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </section>
  );
}
