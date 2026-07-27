import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "default",
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  /* "inverse" = light text for dark (petrol-800/900) section bands */
  tone?: "default" | "inverse";
  className?: string;
}) {
  const inverse = tone === "inverse";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Badge
          variant="brand"
          className={cn(
            inverse && "border-white/15 bg-white/10 text-petrol-100"
          )}
        >
          {eyebrow}
        </Badge>
      )}
      <h2
        className={cn(
          "mt-4 font-display text-h2 leading-[1.1] font-extrabold tracking-tight",
          inverse ? "text-white" : "text-ink-2"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-3 text-lead",
            inverse ? "text-petrol-200" : "text-body-muted"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
