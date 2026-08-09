import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const DEFAULT_ITEMS = [
  "OEM spec, cross-referenced",
  "Made to DIN 22102",
  "Same-day ship on stocked belts",
];

export function TrustRow({
  items = DEFAULT_ITEMS,
  tone = "default",
}: {
  items?: readonly string[];
  /* "inverse" = light text for dark (petrol-900 / photo) backgrounds */
  tone?: "default" | "inverse";
}) {
  return (
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-center gap-2 text-[13px] font-semibold",
            tone === "inverse" ? "text-petrol-100" : "text-body-muted"
          )}
        >
          <Check
            className="size-[17px] text-stock"
            strokeWidth={2.5}
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
