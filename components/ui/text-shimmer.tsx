"use client"

import React, { useMemo, type JSX } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface TextShimmerProps {
  children: string
  as?: React.ElementType
  className?: string
  duration?: number
  spread?: number
}

export function TextShimmer({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 4,
}: TextShimmerProps) {
  const MotionComponent = motion(Component as keyof JSX.IntrinsicElements)

  const dynamicSpread = useMemo(() => {
    return children.length * spread
  }, [children, spread])

  return (
    <MotionComponent
      // @ts-ignore
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text",
        // Driven by --shimmer-base / --shimmer-highlight so it follows the
        // surface it sits in, rather than only the global theme.
        "text-transparent [--base-color:hsl(var(--shimmer-base))] [--base-gradient-color:hsl(var(--shimmer-highlight))]",
        "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]",
        className
      )}
      initial={{ backgroundPosition: "100% center" }}
      animate={{ backgroundPosition: "0% center" }}
      transition={{
        repeat: Infinity,
        repeatDelay: 2,
        duration,
        ease: "linear",
      }}
      style={
        {
          "--spread": `${dynamicSpread}px`,
          backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
        } as React.CSSProperties
      }
    >
      {children}
    </MotionComponent>
  )
}
