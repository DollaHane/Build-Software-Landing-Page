import React from "react"
import { cn } from "@/src/lib/utils"

const PageHeading = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("mt-10 text-4xl font-bold text-customAccent", className)}
      {...props}
    />
  )
})
PageHeading.displayName = "FieldDescription"

export { PageHeading }
