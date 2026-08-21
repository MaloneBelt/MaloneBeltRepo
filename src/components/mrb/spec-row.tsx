import { cn } from "@/lib/utils";

/* Label/value row — values always in IBM Plex Mono (every number is data). */
export function SpecRow({
  label,
  value,
  last = false,
  tone = "default",
  className,
}: {
  label: string;
  value: string;
  last?: boolean;
  /* "inverse" = light text for dark (navy-800/900) surfaces */
  tone?: "default" | "inverse";
  className?: string;
}) {
  const inverse = tone === "inverse";

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 py-[9px] text-[13px]",
        !last && (inverse ? "border-b border-white/10" : "border-b border-line"),
        className
      )}
    >
      <dt className={inverse ? "text-navy-200" : "text-body-muted"}>
        {label}
      </dt>
      <dd
        className={cn(
          "font-mono text-right",
          inverse ? "text-white" : "text-ink-2"
        )}
      >
        {value}
      </dd>
    </div>
  );
}

export function SpecList({
  specs,
  tone = "default",
  className,
}: {
  specs: { label: string; value: string }[];
  tone?: "default" | "inverse";
  className?: string;
}) {
  return (
    <dl className={className}>
      {specs.map((s, i) => (
        <SpecRow
          key={s.label}
          label={s.label}
          value={s.value}
          tone={tone}
          last={i === specs.length - 1}
        />
      ))}
    </dl>
  );
}
