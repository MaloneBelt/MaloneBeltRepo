"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

/* Auto-rotating image stack for catalog cards (client direction, Aug 2026):
   when a product or category card has more than one image, the visual panel
   crossfades through them on a timer. Cards only — the category/product
   pages keep their interactive galleries. A single image renders static
   (no timer, no extra layers), the rotation pauses under
   prefers-reduced-motion, and each card starts at a random phase so a grid
   of cards doesn't blink in lockstep. */
export function CardImageRotator({
  images,
  sizes,
  imageClassName,
  containClassName = "object-contain p-3",
  coverClassName = "object-cover",
  interval = 4500,
}: {
  images: { src: string; alt: string; fit?: "cover" | "contain" }[];
  sizes: string;
  /* Extra classes applied to every layer (e.g. the category card's
     group-hover zoom) */
  imageClassName?: string;
  containClassName?: string;
  coverClassName?: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (
      images.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    // Random phase so sibling cards don't all swap on the same tick
    let timer: ReturnType<typeof setInterval> | undefined;
    const kickoff = setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
      timer = setInterval(
        () => setIndex((i) => (i + 1) % images.length),
        interval
      );
    }, interval * (0.6 + Math.random() * 0.8));
    return () => {
      clearTimeout(kickoff);
      if (timer) clearInterval(timer);
    };
  }, [images.length, interval]);

  if (images.length === 0) return null;

  if (images.length === 1) {
    const image = images[0];
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className={cn(
          image.fit === "contain" ? containClassName : coverClassName,
          imageClassName,
          "transition-transform duration-300"
        )}
      />
    );
  }

  return (
    <>
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          /* Only the visible layer announces itself */
          alt={i === index ? image.alt : ""}
          fill
          sizes={sizes}
          className={cn(
            image.fit === "contain" ? containClassName : coverClassName,
            imageClassName,
            /* opacity AND transform so a caller's group-hover zoom keeps
               animating alongside the crossfade */
            "transition-[opacity,transform] duration-700",
            i === index ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
    </>
  );
}
