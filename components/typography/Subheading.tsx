import React from "react"
import { cn } from "@/src/lib/utils"

const Subheading = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "mb-2 mt-10 pl-3 text-xl font-semibold italic text-primary",
        className
      )}
      {...props}
    />
  )
})
Subheading.displayName = "FieldDescription"

export { Subheading }
