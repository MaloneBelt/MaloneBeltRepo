"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

/* Interactive product gallery: a main panel plus clickable thumbnails to
   switch between images. Client component — the selected image is local UI
   state; the first image (the hero) is selected on load. */
export function ProductGallery({
  images,
  className,
}: {
  images: { src: string; alt: string }[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const current = images[Math.min(index, images.length - 1)];

  return (
    <div className={className}>
      <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-xl border border-line bg-radial-[120%_140%_at_20%_0%] from-navy-100 to-navy-50 lg:h-96">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 580px"
          className="object-contain p-6"
        />
      </div>

      {images.length > 1 && (
        <ul className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-4">
          {images.map((image, i) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1} of ${images.length}: ${image.alt}`}
                aria-current={i === index}
                className={cn(
                  "relative block h-24 w-full cursor-pointer overflow-hidden rounded-lg border bg-surface transition-[border-color,box-shadow]",
                  i === index
                    ? "border-navy-500 ring-2 ring-navy-500/40"
                    : "border-line hover:border-navy-300"
                )}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 33vw, 140px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
