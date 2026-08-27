"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

import { PROCESS } from "@/lib/content"
import { Reveal } from "@/components/motion/Reveal"

import { Section } from "../layout/Section"
import { SectionHeading } from "../layout/SectionHeading"

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
    layoutEffect: false,
  })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <Section
      id="process"
      surface="base"
      labelledBy="process-heading"
      width="wide"
      innerClassName="py-28"
    >
      <SectionHeading
        id="process-heading"
        eyebrow="How we work"
        title="Four stages, no surprises"
        lede="You know the shape of the system and the price before we build it, and you see working software the whole way through."
      />

      <div ref={ref} className="relative mt-16">
        {/* progress rail — sits in its own gutter, clear of the text */}
        <div
          aria-hidden
          className="absolute bottom-0 left-[5.5rem] top-2 hidden w-px bg-border lg:block"
        >
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="h-full w-full bg-brand-grad"
          />
        </div>

        <ol className="flex flex-col gap-16">
          {PROCESS.map((stage) => (
            <li key={stage.n}>
              <Reveal y={28}>
                <div className="grid gap-4 lg:grid-cols-[5.5rem_1fr] lg:gap-10">
                  {/* numeral gutter */}
                  <div className="relative flex items-start">
                    <span className="text-5xl font-bold leading-none text-foreground/15 lg:text-6xl">
                      {stage.n}
                    </span>
                    <span
                      aria-hidden
                      className="absolute right-[-0.31rem] top-3 hidden h-2.5 w-2.5 rounded-full bg-brand-2 ring-4 ring-background lg:block"
                    />
                  </div>

                  <div className="lg:pl-6">
                    <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                      {stage.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-muted-foreground">
                      {stage.body}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {stage.deliverables.map((d) => (
                        <li
                          key={d}
                          className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
