import type { Transition, Variants } from "framer-motion"

/** Shared motion vocabulary. Every primitive in components/motion imports
 *  from here — that is what makes independent components read as one system. */

/** expo-out */
export const EASE = [0.16, 1, 0.3, 1] as const

export const DUR = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
} as const

export const VIEWPORT = {
  once: true,
  margin: "-12% 0px -12% 0px",
} as const

export const SPRING: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 30,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.base, ease: EASE },
  },
}

export const staggerParent = (gap = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: gap, delayChildren },
  },
})
