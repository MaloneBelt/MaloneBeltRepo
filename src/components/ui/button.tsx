import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/* MRB brand button — pill ("track") shape, Archivo label.
   primary (orange + ink label) is the ONE action per view; secondary is the
   navy ghost; dark fills navy; danger is the down-now treatment. */
const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-track font-display leading-none whitespace-nowrap transition-colors outline-none focus-visible:ring-4 focus-visible:ring-navy-50 focus-visible:border-navy-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "bg-orange text-ink-2 font-extrabold border border-transparent hover:bg-orange-600",
        secondary:
          "bg-transparent text-navy-600 font-bold border-[1.5px] border-navy-200 hover:border-navy-400 hover:text-navy-700",
        ghost:
          "bg-transparent text-body-muted font-bold border border-transparent hover:text-navy-700 hover:bg-navy-50",
        dark: "bg-navy-600 text-white font-extrabold border border-transparent hover:bg-navy-700",
        danger:
          "bg-down-tint text-down-strong font-bold border border-down-line hover:bg-down-line/60",
      },
      size: {
        sm: "px-4 py-[9px] text-[13px]",
        md: "px-[22px] py-3 text-sm",
        lg: "px-7 py-[15px] text-[15px]",
        icon: "size-10 rounded-md",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      block: false,
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "md",
  block,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, block, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
