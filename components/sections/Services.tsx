import { SERVICES } from "@/lib/content"
import { Stagger } from "@/components/motion/Stagger"
import { StaggerItem } from "@/components/motion/StaggerItem"
import { TiltCard } from "@/components/motion/TiltCard"

import { Section } from "../layout/Section"
import { SectionHeading } from "../layout/SectionHeading"

export default function Services() {
  return (
    <Section
      id="services"
      surface="base"
      labelledBy="services-heading"
      width="wide"
      innerClassName="py-28"
    >
      <SectionHeading
        id="services-heading"
        eyebrow="What we do"
        title={
          <>
            Six things we build,
            <br />
            and build properly.
          </>
        }
        lede="Every system below is something we've shipped and still maintain — not a menu of things we could try."
      />

      <Stagger
        className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        gap={0.07}
      >
        {SERVICES.map((s) => (
          <StaggerItem key={s.id}>
            <TiltCard className="h-full">
              <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-card p-7 transition-colors hover:border-brand-1/40">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-grad opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                />
                <h3 className="text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="text-brand-1">{s.promise}</p>
                <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-brand-2"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {s.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
