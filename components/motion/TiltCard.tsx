"use client"

import { useRef } from "react"
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/useMediaQuery"

interface TiltCardProps {
  children: React.ReactNode
  max?: number
  scale?: number
  className?: string
}

/** 3D hover tilt. Gated on a fine pointer — without that gate a tapped card
 *  stays stuck rotated on touch devices. */
export function TiltCard({
  children,
  max = 8,
  scale = 1.02,
  className,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const finePointer = useMediaQuery("(pointer: fine)")
  const enabled = finePointer && !reduced

  const px = useSpring(0, { stiffness: 200, damping: 22 })
  const py = useSpring(0, { stiffness: 200, damping: 22 })
  const rotateX = useTransform(py, [-0.5, 0.5], [max, -max])
  const rotateY = useTransform(px, [-0.5, 0.5], [-max, max])

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width - 0.5)
    py.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    px.set(0)
    py.set(0)
  }

  if (!enabled) return <div className={cn(className)}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ scale }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  )
}
