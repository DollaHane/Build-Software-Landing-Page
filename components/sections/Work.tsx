"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

import { CAPABILITIES, INDUSTRIES } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/motion/Reveal"

import { Section } from "../layout/Section"
import { SectionHeading } from "../layout/SectionHeading"
import { DashboardMock } from "./work/DashboardMock"

export default function Work() {
  const [active, setActive] = useState(0)
  const manualUntil = useRef(0)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])

  // Scroll drive: whichever item is nearest the viewport middle wins, unless
  // a click just happened (otherwise the two fight each other).
  useEffect(() => {
    const els = itemRefs.current.filter(Boolean) as HTMLLIElement[]
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < manualUntil.current) return
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const i = els.indexOf(entry.target as HTMLLIElement)
            if (i >= 0) setActive(i)
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const select = useCallback((i: number) => {
    manualUntil.current = Date.now() + 1000
    setActive(i)
  }, [])

  const capability = CAPABILITIES[active]

  return (
    <Section
      id="work"
      surface="contrast"
      labelledBy="work-heading"
      width="wide"
      innerClassName="py-28"
    >
      <SectionHeading
        id="work-heading"
        eyebrow="What we've built"
        title="Systems that run real operations"
        lede="A generalised look at the kinds of systems we deliver. Client details stay confidential — these are the capabilities behind them."
      />

      {/* industries */}
      <Reveal className="mt-10">
        <ul className="flex flex-wrap gap-2">
          {INDUSTRIES.map((i) => (
            <li
              key={i}
              className="rounded-full border border-border px-3.5 py-1.5 text-sm text-muted-foreground"
            >
              {i}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
        {/* mobile: tab strip above the mock */}
        <div className="order-1 flex gap-2 overflow-x-auto pb-2 lg:hidden">
          {CAPABILITIES.map((c, i) => (
            <button
              key={c.id}
              onClick={() => select(i)}
              aria-selected={i === active}
              role="tab"
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm transition-colors",
                i === active
                  ? "border-brand-1 bg-brand-1/10 text-foreground"
                  : "border-border text-muted-foreground"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* desktop: tall list drives the sticky mock */}
        <ol className="order-3 hidden flex-col gap-4 lg:order-none lg:flex">
          {CAPABILITIES.map((c, i) => (
            <li
              key={c.id}
              ref={(el) => {
                itemRefs.current[i] = el
              }}
            >
              <button
                onClick={() => select(i)}
                aria-selected={i === active}
                role="tab"
                className={cn(
                  "relative w-full rounded-2xl border p-6 text-left transition-colors",
                  i === active
                    ? "border-brand-1/40 bg-card"
                    : "border-border hover:border-border/80"
                )}
              >
                {i === active && (
                  <motion.span
                    layoutId="work-indicator"
                    className="absolute inset-y-4 left-0 w-[3px] rounded-full bg-brand-grad"
                    transition={{ type: "spring", stiffness: 340, damping: 30 }}
                  />
                )}
                <p className="text-xs uppercase tracking-[0.18em] text-brand-1">
                  {c.label}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  {c.headline}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm text-muted-foreground transition-opacity",
                    i === active ? "opacity-100" : "opacity-70"
                  )}
                >
                  {c.body}
                </p>
              </button>
            </li>
          ))}
        </ol>

        <div className="order-2 lg:order-none">
          <div className="lg:sticky lg:top-24">
            <DashboardMock capability={capability} index={active} />
          </div>
        </div>
      </div>
    </Section>
  )
}
