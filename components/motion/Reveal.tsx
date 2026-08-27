"use client"

import { motion } from "framer-motion"

import { DUR, EASE, VIEWPORT } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: React.ReactNode
  y?: number
  x?: number
  delay?: number
  duration?: number
  once?: boolean
  className?: string
}

/** Scroll-triggered entrance. Transform is stripped automatically under
 *  reduced motion by the tree-wide <MotionConfig reducedMotion="user">. */
export function Reveal({
  children,
  y = 24,
  x = 0,
  delay = 0,
  duration = DUR.base,
  once = true,
  className,
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ ...VIEWPORT, once }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
