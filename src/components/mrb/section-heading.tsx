import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <Badge variant="brand">{eyebrow}</Badge>}
      <h2 className="mt-4 font-display text-h2 leading-[1.1] font-extrabold tracking-tight text-ink-2">
        {title}
      </h2>
      {lead && <p className="mt-3 text-lead text-body-muted">{lead}</p>}
    </div>
  );
}
