import Image from "next/image";

import { oems } from "@/data/oems";
import { cn } from "@/lib/utils";

/* Static manufacturer wall for the About page: every allied OEM as a white
   card carrying its logo in the original brand colors (client direction,
   Aug 2026) with the brand name beneath. Logos whose original artwork is
   white-on-dark (tone: "dark") sit on a navy plate inside the card. Not a
   carousel — the full roster on display at once. */
export function OemGrid({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5",
        className
      )}
    >
      {oems.map((oem) => (
        <li
          key={oem.slug}
          className="group flex flex-col items-center justify-center rounded-lg border border-line bg-surface px-4 py-5 shadow-xs transition-transform duration-300 hover:-translate-y-1"
        >
          <div
            className={cn(
              "relative flex h-14 w-full items-center justify-center rounded-md",
              oem.tone === "dark" &&
                "bg-linear-135 from-navy-800 to-navy-900"
            )}
          >
            <Image
              src={oem.logo}
              alt={`${oem.name} logo`}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
              className="object-contain p-2"
            />
          </div>
          <span className="mt-3 text-center text-xs font-semibold text-body-muted">
            {oem.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
