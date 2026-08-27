import type { ProcessStage } from "@/types/content"

export const PROCESS = [
  {
    n: "01",
    title: "Discover & Scope",
    body: "We start by understanding how your business actually runs. That becomes an application schematic — the shape of the system, written down — which is what we quote against so the number holds.",
    deliverables: [
      "Requirements workshop",
      "Application schematic",
      "Fixed proposal & timeline",
    ],
  },
  {
    n: "02",
    title: "Design",
    body: "Architecture and interface designed together, on a foundation that can carry features you haven't thought of yet. You see and sign off the screens before anything is built.",
    deliverables: ["Data model", "Interface designs", "Technical architecture"],
  },
  {
    n: "03",
    title: "Build",
    body: "Delivered in short cycles you can watch. Secure, tested and scalable, using the same stack we maintain across every system we run — so there is nothing exotic to support later.",
    deliverables: [
      "Working software each cycle",
      "Automated tests",
      "Continuous deployment",
    ],
  },
  {
    n: "04",
    title: "Launch & Support",
    body: "We help you choose the right cloud infrastructure and take you live. Every build carries a six-month bug-fix warranty, with an optional retainer for updates, monitoring and priority support.",
    deliverables: [
      "Infrastructure setup",
      "6-month bug-fix warranty",
      "Optional maintenance retainer",
    ],
  },
] as const satisfies readonly ProcessStage[]
