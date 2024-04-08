import React from "react"

import { cn } from "@/lib/utils"

const FieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.HTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn("flex py-1 align-middle text-primary", className)}
      {...props}
    />
  )
})

FieldLabel.displayName = "FieldLabel"

export { FieldLabel }
