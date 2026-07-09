import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/* MRB badge — the eyebrow / tag treatment. Uppercase tracked pill for section
   eyebrows, mono variant for part numbers and data tags. */
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center gap-2 rounded-track px-3.5 py-[7px] text-xs font-bold leading-none whitespace-nowrap [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        brand:
          "font-display uppercase tracking-[2px] text-petrol-700 bg-petrol-50 border border-petrol-100",
        mono: "font-mono tracking-[0.5px] text-petrol-600 bg-petrol-50 border border-transparent",
        solid:
          "font-display uppercase tracking-[1px] text-ink-2 bg-marigold border border-transparent",
        neutral:
          "font-mono tracking-[0.5px] text-body-muted bg-surface border border-line",
      },
    },
    defaultVariants: {
      variant: "brand",
    },
  }
)

function Badge({
  className,
  variant = "brand",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
