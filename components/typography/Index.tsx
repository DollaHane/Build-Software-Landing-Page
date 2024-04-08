import React from "react"
import { cn } from "@/src/lib/utils"

interface IndexProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href?: string
  scrollTo?: string
}

const Index = React.forwardRef<HTMLAnchorElement, IndexProps>(
  ({ className, href, scrollTo, ...props }, ref) => {
    const handleScroll = () => {
      if (scrollTo) {
        const element = document.getElementById(scrollTo)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" })
        }
      }
    }

    return (
      <a
        href={href}
        ref={ref}
        className={cn(
          "my-1 cursor-pointer pl-3 text-sm text-primary",
          className
        )}
        onClick={handleScroll}
        {...props}
      />
    )
  }
)
Index.displayName = "FieldDescription"

export { Index }
