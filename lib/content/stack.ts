import type { StackGroup } from "@/types/content"

export const STACK_GROUPS = [
  { label: "Backend", items: ["Laravel", "PHP", "MySQL"] },
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Next.js", "TanStack", "Tailwind CSS"],
  },
  { label: "Mobile", items: ["React Native", "Expo", "SQLite"] },
  { label: "Infrastructure", items: ["Docker", "GitHub Actions", "AWS S3"] },
  {
    label: "Integrations",
    items: ["WordPress", "Sage Evolution", "PayFast", "Google Maps"],
  },
] as const satisfies readonly StackGroup[]

/** Logo components that exist in components/organisations/. */
export const MARQUEE_LOGOS = [
  "react",
  "next",
  "laravel",
  "tailwind",
  "wordpress",
  "mysql",
  "node",
  "figma",
] as const
