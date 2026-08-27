"use client"

import { useEffect, useRef } from "react"

import { surfaceClass, type SectionId, type Surface } from "@/config/sections"
import { cn } from "@/lib/utils"
import { useScrollContext } from "@/components/providers/ScrollProvider"

const widths = {
  default: "container",
  wide: "mx-auto w-full max-w-[1600px] px-6 md:px-12",
  full: "w-full",
} as const

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: SectionId
  surface?: Surface
  width?: keyof typeof widths
  labelledBy?: string
  /** Opt out of the min-height floor for genuinely short sections. */
  minHeight?: boolean
  innerClassName?: string
  children: React.ReactNode
}

/**
 * Full-bleed themed section.
 *
 * The surface class goes on the outer <section> so the background paints edge
 * to edge; `container` lives on an inner div. Putting `container` on the
 * section itself would paint the background only container-wide.
 *
 * This is a client component (it registers a ref with ScrollProvider) but it
 * renders `children` passed down from a server component, so heavy subtrees
 * never enter the client bundle.
 */
export function Section({
  id,
  surface = "base",
  width = "default",
  labelledBy,
  minHeight = true,
  className,
  innerClassName,
  children,
  ...props
}: SectionProps) {
  const ref = useRef<HTMLElement | null>(null)
  const { registerSection } = useScrollContext()

  useEffect(() => {
    registerSection(id, ref.current)
    return () => registerSection(id, null)
  }, [id, registerSection])

  return (
    <section
      ref={ref}
      id={id}
      data-surface={surface}
      aria-labelledby={labelledBy}
      className={cn(
        "relative w-full scroll-mt-16",
        minHeight && "min-h-[70vh]",
        surfaceClass(surface),
        className
      )}
      {...props}
    >
      <div className={cn(widths[width], innerClassName)}>{children}</div>
    </section>
  )
}
