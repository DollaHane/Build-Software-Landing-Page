"use client"

import { motion } from "framer-motion"

import { DUR, EASE } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface StaggerItemProps {
  children: React.ReactNode
  y?: number
  className?: string
  as?: "div" | "li"
}

/** Consumes variants from a parent <Stagger>. Must be a descendant of one. */
export function StaggerItem({
  children,
  y = 16,
  className,
  as = "div",
}: StaggerItemProps) {
  const Comp = motion[as]
  return (
    <Comp
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: DUR.base, ease: EASE },
        },
      }}
    >
      {children}
    </Comp>
  )
}
