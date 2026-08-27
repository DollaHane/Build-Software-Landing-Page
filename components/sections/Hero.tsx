"use client"

import { useRef } from "react"
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion"

import { hero } from "@/lib/content"
import { DUR, EASE } from "@/lib/motion"
import { Button } from "@/components/ui/button"
import { TextRotate } from "@/components/ui/text-rotate"
import { MagneticButton } from "@/components/motion/MagneticButton"

import { Section } from "../layout/Section"
import { SectionLink } from "../layout/SectionLink"
import HeroBuild from "../sections-components/HeroBuild"

const longest = [...hero.rotating].sort((a, b) => b.length - a.length)[0]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    layoutEffect: false,
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 220])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <Section
      id="hero"
      surface="contrast"
      labelledBy="hero-heading"
      width="wide"
      className="overflow-hidden"
      innerClassName="relative flex min-h-screen flex-col justify-center py-28"
    >
      {/* Brand glow — replaces the old blurred duplicate-text hack, and the
          4,668-line brick SVG, for one div. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-grad opacity-25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <motion.div ref={ref} style={reduced ? undefined : { y, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DUR.slow, ease: EASE }}
          className="mb-8 flex justify-center opacity-90 md:justify-start [&_svg]:w-[190px] lg:[&_svg]:w-[220px]"
        >
          <HeroBuild />
        </motion.div>

        <h1
          id="hero-heading"
          className="max-w-[18ch] text-balance text-center text-[13vw] font-extrabold leading-[0.95] tracking-tighter md:text-left lg:text-[6.5vw]"
        >
          {hero.headlinePrefix}{" "}
          {/* Overlay grid: an invisible copy of the longest word reserves the
              box, so the line doesn't reflow (or collapse to a gap) while
              AnimatePresence swaps words. */}
          <span className="relative inline-grid align-bottom">
            <span aria-hidden className="invisible col-start-1 row-start-1">
              {longest}
            </span>
            <span className="col-start-1 row-start-1 overflow-hidden">
              <TextRotate
                texts={[...hero.rotating]}
                auto={!reduced}
                rotationInterval={2600}
                staggerFrom="center"
                staggerDuration={0.02}
                mainClassName="text-gradient-brand"
                splitBy="characters"
              />
            </span>
          </span>{" "}
          {hero.headlineSuffix}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DUR.base, delay: 0.25, ease: EASE }}
          className="mx-auto mt-8 max-w-2xl text-center text-lg text-muted-foreground md:mx-0 md:text-left md:text-xl"
        >
          {hero.subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DUR.base, delay: 0.4, ease: EASE }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 md:justify-start"
        >
          <MagneticButton>
            <SectionLink id="contact" aria-label="Start a project with us">
              <Button size="lg" className="font-bold shadow-lg">
                {hero.primaryCta}
              </Button>
            </SectionLink>
          </MagneticButton>
          <SectionLink
            id="services"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
          >
            {hero.secondaryCta}
          </SectionLink>
        </motion.div>
      </motion.div>
    </Section>
  )
}
