import React from "react"
import { cn } from "@/src/lib/utils"

const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("mb-3 pl-3 text-primary", className)}
      {...props}
    />
  )
})
Paragraph.displayName = "FieldDescription"

export { Paragraph }
