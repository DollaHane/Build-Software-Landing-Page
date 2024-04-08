import React from "react"
import { cn } from "@/src/lib/utils"
import { ChevronRight } from "lucide-react"

const BulletPoint = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => {
  return (
    <div className="relative flex items-center pl-5">
      <div className="absolute left-2 top-1 text-customAccent">
        <ChevronRight className="h-5 w-5" />
      </div>
      <li
        ref={ref}
        className={cn("my-1 pl-5 text-sm text-primary", className)}
        {...props}
      />
    </div>
  )
})
BulletPoint.displayName = "FieldDescription"

export { BulletPoint }
