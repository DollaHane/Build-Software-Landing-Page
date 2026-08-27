"use client"

import { motion } from "framer-motion"

import type { Capability } from "@/types/content"
import { DUR, EASE } from "@/lib/motion"
import { CountUp } from "@/components/motion/CountUp"

/** Deterministic pseudo-random series so SSR and client agree. */
function series(seed: number, n = 16) {
  const out: number[] = []
  let v = seed
  for (let i = 0; i < n; i++) {
    v = (v * 9301 + 49297) % 233280
    out.push(0.25 + (v / 233280) * 0.7)
  }
  return out
}

function linePath(values: number[], w: number, h: number) {
  const step = w / (values.length - 1)
  return values
    .map((v, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - v * h}`)
    .join(" ")
}

export function DashboardMock({
  capability,
  index,
}: {
  capability: Capability
  index: number
}) {
  const values = series(index * 977 + 31)
  const w = 520
  const h = 150
  const d = linePath(values, w, h)

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FC605B]" />
        <span className="h-3 w-3 rounded-full bg-[#FCBB40]" />
        <span className="h-3 w-3 rounded-full bg-[#34C749]" />
        <motion.p
          key={capability.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DUR.fast }}
          className="ml-3 font-mono text-xs text-muted-foreground"
        >
          {capability.label.toLowerCase().replace(/\s+/g, "-")}
        </motion.p>
      </div>

      <div className="flex flex-col gap-6 p-5">
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3">
          {capability.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-border bg-background/50 p-3"
            >
              <p className="text-2xl font-semibold tracking-tight">
                <CountUp
                  key={`${capability.id}-${m.label}`}
                  to={m.value}
                  suffix={m.suffix ?? ""}
                />
              </p>
              <p className="mt-1 text-[0.7rem] leading-tight text-muted-foreground">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* chart */}
        <div className="rounded-xl border border-border bg-background/50 p-4">
          <svg
            viewBox={`0 0 ${w} ${h}`}
            preserveAspectRatio="none"
            className="h-32 w-full"
            role="img"
            aria-label={`Illustrative trend for ${capability.label}`}
          >
            <defs>
              <linearGradient
                id={`fill-${capability.id}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0"
                  style={{
                    stopColor: "hsl(var(--brand-2))",
                    stopOpacity: 0.35,
                  }}
                />
                <stop
                  offset="1"
                  style={{ stopColor: "hsl(var(--brand-2))", stopOpacity: 0 }}
                />
              </linearGradient>
            </defs>
            <motion.path
              key={`${capability.id}-fill`}
              d={`${d} L ${w} ${h} L 0 ${h} Z`}
              fill={`url(#fill-${capability.id})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: DUR.base, delay: 0.15 }}
            />
            <motion.path
              key={`${capability.id}-line`}
              d={d}
              fill="none"
              strokeWidth={2.5}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ stroke: "hsl(var(--brand-2))" }}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: DUR.slow, ease: EASE }}
            />
          </svg>
        </div>

        {/* status rows */}
        <ul key={capability.id} className="flex flex-col gap-2">
          {capability.rows.map((row, i) => (
            <motion.li
              key={row}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: DUR.fast }}
              className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm"
            >
              <span className="text-muted-foreground">{row}</span>
              <span
                className={
                  i === capability.rows.length - 1
                    ? "rounded-full bg-brand-2/15 px-2 py-0.5 text-[0.7rem] font-medium text-brand-1"
                    : "rounded-full bg-foreground/5 px-2 py-0.5 text-[0.7rem] text-muted-foreground"
                }
              >
                {i === capability.rows.length - 1 ? "Complete" : "Done"}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
