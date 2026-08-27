"use client"

import { motion } from "framer-motion"

import { VIEWPORT, staggerParent } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface StaggerProps {
  children: React.ReactNode
  gap?: number
  delayChildren?: number
  className?: string
  as?: "div" | "ul" | "ol"
}

export function Stagger({
  children,
  gap = 0.08,
  delayChildren = 0,
  className,
  as = "div",
}: StaggerProps) {
  const Comp = motion[as]
  return (
    <Comp
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={staggerParent(gap, delayChildren)}
    >
      {children}
    </Comp>
  )
}
