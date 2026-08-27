"use client"

import { sectionHref, type SectionId } from "@/config/sections"
import { cn } from "@/lib/utils"
import { useScrollContext } from "@/components/providers/ScrollProvider"

interface SectionLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  id: SectionId
  children: React.ReactNode
}

/**
 * In-page link to a Section.
 *
 * `href` is derived from the typed SectionId, so a link can never point at an
 * id that no section renders. Scrolling goes through the shared Lenis
 * instance; the real href is kept so no-JS and copy-link still work.
 */
export function SectionLink({
  id,
  children,
  className,
  onClick,
  ...props
}: SectionLinkProps) {
  const { scrollTo } = useScrollContext()

  return (
    <a
      href={sectionHref(id)}
      className={cn(className)}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented) return
        e.preventDefault()
        scrollTo(id)
      }}
      {...props}
    >
      {children}
    </a>
  )
}
