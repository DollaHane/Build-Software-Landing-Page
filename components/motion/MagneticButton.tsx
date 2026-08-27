"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useSpring } from "framer-motion"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/useMediaQuery"

interface MagneticButtonProps {
  children: React.ReactNode
  strength?: number
  className?: string
}

/** Pointer-follow wrapper. Inert on touch devices and under reduced motion. */
export function MagneticButton({
  children,
  strength = 0.35,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const finePointer = useMediaQuery("(pointer: fine)")
  const enabled = finePointer && !reduced

  const x = useSpring(0, { stiffness: 220, damping: 20, mass: 0.4 })
  const y = useSpring(0, { stiffness: 220, damping: 20, mass: 0.4 })

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  if (!enabled)
    return <div className={cn("inline-block", className)}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  )
}
