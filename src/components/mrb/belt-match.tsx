"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* THE signature component: the cross-reference engine as a UI. A segmented
   pill toggle (By machine / By OEM part #), the track search field with a
   marigold "Find my belt" action, and a popular-terms hint row.
   Phase 1: UI-only — submitting routes to /products. */
const TABS = [
  { value: "machine", label: "By machine" },
  { value: "part", label: "By OEM part #" },
] as const;

type TabValue = (typeof TABS)[number]["value"];

export function BeltMatch({
  popular = ["MB-4471-EP", "Powerscreen Chieftain", "Cat AP555"],
  className,
}: {
  popular?: string[];
  className?: string;
}) {
  const router = useRouter();
  const [tab, setTab] = useState<TabValue>("machine");
  const [query, setQuery] = useState("");

  const placeholder =
    tab === "machine"
      ? "e.g. Wirtgen W 100 Fi — main conveyor"
      : "e.g. MB-4471-EP or OEM part #";

  function submit() {
    router.push("/products");
  }

  return (
    <div
      role="search"
      className={cn(
        "rounded-xl border border-line bg-surface p-[18px] shadow-lg",
        className
      )}
    >
      <div
        role="tablist"
        aria-label="Search mode"
        className="mb-3.5 inline-flex w-max gap-1.5 rounded-track border border-line bg-canvas p-1"
      >
        {TABS.map((t) => {
          const active = t.value === tab;
          return (
            <button
              key={t.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(t.value)}
              className={cn(
                "cursor-pointer rounded-track px-4 py-[7px] font-display text-[12.5px] font-bold transition-colors",
                active
                  ? "bg-surface text-petrol-700 shadow-sm"
                  : "text-body-muted hover:text-petrol-700"
              )}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="flex items-center gap-3 rounded-track border-[1.5px] border-petrol-200 bg-surface py-2 pr-2 pl-[18px] transition-[border-color,box-shadow] focus-within:border-petrol-500 focus-within:ring-4 focus-within:ring-petrol-50"
      >
        <Search
          className="size-5 shrink-0 text-petrol-600"
          strokeWidth={2.4}
          aria-hidden="true"
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label={
            tab === "machine" ? "Search by machine" : "Search by OEM part number"
          }
          className="min-w-0 flex-1 border-none bg-transparent text-[15px] text-ink-2 outline-none placeholder:text-subtle"
        />
        <Button type="submit" variant="primary" className="shrink-0">
          Find my belt →
        </Button>
      </form>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-[12.5px] text-subtle">
        Popular:
        {popular.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => {
              setQuery(p);
              submit();
            }}
            className="cursor-pointer rounded-sm bg-petrol-50 px-2 py-0.5 font-mono text-[12.5px] text-petrol-600 hover:bg-petrol-100"
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
