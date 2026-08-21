"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

/* Carousel for the brochure-style showcase. Keeps the tilted, deep-shadow
   "photo off the page" stage and crossfades between images; the floating
   corner card previews the next image in the cycle and advances on click.
   Client component — the active image is local UI state. */
export function ShowcaseGallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const next = (index + 1) % count;
  const show = (i: number) => setIndex(((i % count) + count) % count);

  return (
    <div className="relative">
      {/* Back plate: offset, counter-rotated, catches the eye as depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-4 rotate-[1.5deg] rounded-2xl bg-navy-300/15 sm:translate-x-5 sm:translate-y-6"
      />

      {/* Main stage — stacked images crossfade on switch */}
      <div className="relative aspect-[16/9] -rotate-[1.5deg] overflow-hidden rounded-2xl ring-1 ring-white/20 shadow-[0_24px_50px_-12px_rgb(0_0_0/0.55),0_60px_120px_-30px_rgb(0_0_0/0.5)] transition-transform duration-500 hover:rotate-0 sm:aspect-[16/8]">
        {images.map((image, i) => (
          <Image
            key={image.src}
            src={image.src}
            alt={i === index ? image.alt : ""}
            fill
            priority={i === 0}
            sizes="(max-width: 1180px) 100vw, 1140px"
            className={cn(
              "bg-white object-cover transition-opacity duration-500",
              i === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}

        {count > 1 && (
          <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-navy-900/70 p-1 ring-1 ring-white/15 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => show(index - 1)}
              aria-label="Previous image"
              className="flex size-8 cursor-pointer items-center justify-center rounded-full text-navy-100 transition-colors hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft className="size-4" strokeWidth={2.5} aria-hidden="true" />
            </button>
            <span
              aria-live="polite"
              className="font-mono text-xs tabular-nums text-navy-100"
            >
              {index + 1} / {count}
            </span>
            <button
              type="button"
              onClick={() => show(index + 1)}
              aria-label="Next image"
              className="flex size-8 cursor-pointer items-center justify-center rounded-full text-navy-100 transition-colors hover:bg-white/10 hover:text-white"
            >
              <ChevronRight className="size-4" strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {/* Floating corner card — previews the next image, advances on click */}
      {count > 1 && (
        <button
          type="button"
          onClick={() => show(index + 1)}
          aria-label={`Show next image: ${images[next].alt}`}
          className="group absolute -bottom-10 right-[4%] hidden w-[30%] rotate-[2.5deg] cursor-pointer overflow-hidden rounded-xl ring-1 ring-white/25 shadow-[0_30px_60px_-15px_rgb(0_0_0/0.65)] transition-transform duration-500 hover:rotate-0 md:block"
        >
          <div className="relative aspect-[16/10]">
            <Image
              key={images[next].src}
              src={images[next].src}
              alt=""
              fill
              sizes="340px"
              className="bg-white object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <span className="absolute top-2 left-2 rounded-md bg-navy-900/70 px-2 py-0.5 font-mono text-[10px] tracking-[1px] text-navy-100 uppercase ring-1 ring-white/15 backdrop-blur-sm">
            Next
          </span>
        </button>
      )}
    </div>
  );
}
