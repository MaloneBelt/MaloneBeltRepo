import { cn } from "@/lib/utils";

/* Label/value row — values always in IBM Plex Mono (every number is data). */
export function SpecRow({
  label,
  value,
  last = false,
  className,
}: {
  label: string;
  value: string;
  last?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 py-[9px] text-[13px]",
        !last && "border-b border-line",
        className
      )}
    >
      <dt className="text-body-muted">{label}</dt>
      <dd className="font-mono text-right text-ink-2">{value}</dd>
    </div>
  );
}

export function SpecList({
  specs,
  className,
}: {
  specs: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <dl className={className}>
      {specs.map((s, i) => (
        <SpecRow
          key={s.label}
          label={s.label}
          value={s.value}
          last={i === specs.length - 1}
        />
      ))}
    </dl>
  );
}
