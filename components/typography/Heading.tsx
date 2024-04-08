import React from "react"
import { cn } from "@/src/lib/utils"

const Heading = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("mb-5 mt-12 text-2xl font-bold text-primary", className)}
      {...props}
    />
  )
})
Heading.displayName = "FieldDescription"

export { Heading }
