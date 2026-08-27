import { STACK_GROUPS } from "@/lib/content"
import { Reveal } from "@/components/motion/Reveal"
import { Stagger } from "@/components/motion/Stagger"
import { StaggerItem } from "@/components/motion/StaggerItem"

import { Section } from "../layout/Section"
import { SectionHeading } from "../layout/SectionHeading"
import OrganisationSlide from "../sections-components/OrganisationSlide"

export default function Stack() {
  return (
    <Section
      id="stack"
      surface="contrast"
      labelledBy="stack-heading"
      width="wide"
      innerClassName="py-28"
    >
      <SectionHeading
        id="stack-heading"
        eyebrow="Technology"
        title="One stack, maintained across every system we run"
        lede="We deliberately keep to a narrow set of tools. It means nothing exotic to support later, and anything we build is something we can still fix in five years."
      />

      <Stagger
        className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        gap={0.07}
      >
        {STACK_GROUPS.map((g) => (
          <StaggerItem key={g.label}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-brand-1">
                {g.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-border px-3 py-1.5 text-sm"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-16">
        <OrganisationSlide />
      </Reveal>
    </Section>
  )
}
