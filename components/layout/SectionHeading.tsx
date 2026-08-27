import { cn } from "@/lib/utils"
import { Reveal } from "@/components/motion/Reveal"

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  lede?: React.ReactNode
  id?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  id,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal y={12}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-1">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal y={18} delay={0.05}>
        <h2
          id={id}
          className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
        >
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal y={18} delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-lg text-muted-foreground",
              align === "center" && "mx-auto"
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  )
}
