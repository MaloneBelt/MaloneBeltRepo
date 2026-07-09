import * as React from "react"

import { cn } from "@/lib/utils"

/* MRB textarea — multi-line sibling of the track field: same petrol border and
   focus ring, large card radius instead of the pill. */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-28 w-full rounded-lg border-[1.5px] border-petrol-200 bg-surface px-[18px] py-3 text-[15px] text-foreground transition-[color,border-color,box-shadow] outline-none placeholder:text-subtle disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-petrol-500 focus-visible:ring-4 focus-visible:ring-petrol-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
