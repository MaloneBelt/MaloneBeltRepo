"use client";

import { useEffect, useRef, useState } from "react";

/* Decorative background videos were the heaviest thing on the home page and
   autoplay forces a full download the moment the page opens, starving the
   images and scripts behind them (client-reported slowness, 29 Aug 2026).
   This wrapper keeps the <video> markup but withholds `src` until the page
   can afford it: "after-load" waits for the window load event (the hero —
   its poster covers the gap), "in-view" waits until the element nears the
   viewport (the CTA band sits below the fold, so most visits never pay for
   it at open). Autoplay still applies once the src lands; the explicit
   play() covers browsers that ignore a late autoplay attribute. */
export function DeferredVideo({
  src,
  poster,
  className,
  strategy,
}: {
  src: string;
  poster: string;
  className?: string;
  strategy: "after-load" | "in-view";
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (strategy === "after-load") {
      if (document.readyState === "complete") {
        // Already loaded (e.g. client-side navigation) — flip on the next
        // tick; a synchronous set inside the effect cascades renders.
        const t = setTimeout(() => setReady(true), 0);
        return () => clearTimeout(t);
      }
      const onLoad = () => setReady(true);
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [strategy]);

  useEffect(() => {
    if (ready) ref.current?.play().catch(() => {});
  }, [ready]);

  return (
    <video
      ref={ref}
      src={ready ? src : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden="true"
      className={className}
    />
  );
}
