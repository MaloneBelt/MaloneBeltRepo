import * as React from "react"

import { cn } from "@/lib/utils"

/* MRB "track" field — the belt-loop motif carried into the UI.
   Pill radius, petrol-200 border, petrol focus ring. */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-track border-[1.5px] border-petrol-200 bg-surface px-[18px] py-1 text-[15px] text-foreground transition-[color,border-color,box-shadow] outline-none placeholder:text-subtle selection:bg-petrol-100 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-petrol-500 focus-visible:ring-4 focus-visible:ring-petrol-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
