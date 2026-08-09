"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { l, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { cn } from "@/lib/utils";

/* THE signature component: the cross-reference engine as a UI. A segmented
   pill toggle (By machine / By OEM part #), the track search field with a
   marigold "Find my belt" action, and a popular-terms hint row.
   Submitting routes to /<locale>/products?q=…&mode=…, rendered server-side
   there via src/lib/search.ts. */

type TabValue = "machine" | "part";

export function BeltMatch({
  locale,
  popular = ["MB-4471-EP", "Powerscreen Chieftain", "Cat AP555"],
  defaultQuery = "",
  defaultMode = "machine",
  className,
}: {
  locale: Locale;
  popular?: string[];
  defaultQuery?: string;
  defaultMode?: TabValue;
  className?: string;
}) {
  const router = useRouter();
  const [tab, setTab] = useState<TabValue>(defaultMode);
  const [query, setQuery] = useState(defaultQuery);
  const dict = getDictionary(locale);

  const tabs: { value: TabValue; label: string }[] = [
    { value: "machine", label: dict.beltMatch.byMachine },
    { value: "part", label: dict.beltMatch.byPart },
  ];

  const placeholder =
    tab === "machine"
      ? dict.beltMatch.placeholderMachine
      : dict.beltMatch.placeholderPart;

  function submit(value: string = query) {
    const q = value.trim();
    router.push(
      q
        ? l(locale, `/products?q=${encodeURIComponent(q)}&mode=${tab}`)
        : l(locale, "/products")
    );
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
        aria-label={dict.beltMatch.searchMode}
        className="mb-3.5 inline-flex w-max gap-1.5 rounded-track border border-petrol-800 bg-linear-135 from-petrol-800 to-petrol-900 p-1"
      >
        {tabs.map((t) => {
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
                  : "text-petrol-200 hover:text-white"
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
            tab === "machine" ? dict.beltMatch.ariaMachine : dict.beltMatch.ariaPart
          }
          className="min-w-0 flex-1 border-none bg-transparent text-[15px] text-ink-2 outline-none placeholder:text-subtle"
        />
        <Button type="submit" variant="primary" className="shrink-0">
          {dict.beltMatch.submit}
        </Button>
      </form>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-[12.5px] text-subtle">
        {dict.beltMatch.popular}
        {popular.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => {
              setQuery(p);
              submit(p);
            }}
            className="cursor-pointer rounded-sm bg-linear-135 from-petrol-800 to-petrol-900 px-2 py-0.5 font-mono text-[12.5px] text-petrol-100 hover:text-white"
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
