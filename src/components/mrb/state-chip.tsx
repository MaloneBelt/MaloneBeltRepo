import { cn } from "@/lib/utils";

/* Green and red are RESERVED for availability & urgency — never decoration.
   `stock` = "Ships next day" (planned buy) · `down` = machine-down urgency. */
export function StateChip({
  children,
  variant = "stock",
  pulse = false,
  className,
}: {
  children: React.ReactNode;
  variant?: "stock" | "down";
  pulse?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[7px] rounded-track border px-[13px] py-[7px] text-[12.5px] font-bold leading-none",
        variant === "stock"
          ? "border-stock-line bg-stock-tint text-stock-strong"
          : "border-down-line bg-down-tint text-down-strong",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-2 rounded-full",
          variant === "stock" ? "bg-stock" : "bg-down",
          pulse && "animate-status-pulse motion-reduce:animate-none"
        )}
      />
      {children}
    </span>
  );
}
