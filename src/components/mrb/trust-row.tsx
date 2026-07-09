import { Check } from "lucide-react";

const DEFAULT_ITEMS = [
  "OEM spec, cross-referenced",
  "Made to DIN 22102",
  "Same-day ship on stocked belts",
];

export function TrustRow({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 text-[13px] font-semibold text-body-muted"
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
