import React from "react"

import { cn } from "@/lib/utils"

const BulletBody = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      className={cn("mb-5 text-sm text-primary", className)}
      {...props}
    />
  )
})
BulletBody.displayName = "FieldDescription"

export { BulletBody }
