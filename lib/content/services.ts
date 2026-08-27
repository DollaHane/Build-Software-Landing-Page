import type { Service } from "@/types/content"

export const SERVICES = [
  {
    id: "operations",
    title: "Business Operations Platforms",
    promise:
      "One system that carries a job from first quote to money in the bank.",
    bullets: [
      "Quote → order → contract → invoice pipelines with revisions and approvals",
      "VAT handling, configurable document numbering and line-item control",
      "Cashflow scheduling, supplier invoices and expense capture",
      "Time tracking, dashboards and the reports your team actually opens",
    ],
    stack: ["Laravel", "React", "TypeScript", "MySQL"],
  },
  {
    id: "field",
    title: "Field Service & Mobile Apps",
    promise: "Software that keeps working when the signal doesn't.",
    bullets: [
      "Job cards, technician dispatch and live scheduling boards",
      "Offline-first mobile capture that syncs when a connection returns",
      "Photo capture, on-device signatures, GPS and background tasks",
      "Inspection checklists, service kits and preventative maintenance",
    ],
    stack: ["React Native", "Expo", "SQLite", "Laravel API"],
  },
  {
    id: "saas",
    title: "Multi-tenant SaaS Products",
    promise: "Your product idea, built to serve many customers from day one.",
    bullets: [
      "Tenancy, roles, permissions and per-tenant feature flags",
      "Subscription plans, usage limits and eligibility rules",
      "Recurring billing through PayPal and PayFast",
      "Self-serve onboarding, trials and upgrade paths",
    ],
    stack: ["Laravel", "Inertia", "React", "PayFast"],
  },
  {
    id: "portals",
    title: "Customer & Partner Portals",
    promise: "Give clients a door into your business that isn't your inbox.",
    bullets: [
      "Separate staff and customer logins with their own permission sets",
      "Self-service dashboards, documents and request tracking",
      "Embeddable booking widgets for sites you don't control",
      "Public APIs with signed requests and generated documentation",
    ],
    stack: ["Laravel Sanctum", "HMAC", "React", "WordPress"],
  },
  {
    id: "integration",
    title: "Systems Integration",
    promise: "Make the tools you already pay for talk to each other.",
    bullets: [
      "ERP integration, including Sage Evolution",
      "Payment gateways, mapping and routing services",
      "WordPress, cloud storage and transactional email",
      "Scheduled syncs, import/export pipelines and reconciliation",
    ],
    stack: ["Sage Evolution", "Google Maps", "AWS S3", "REST"],
  },
  {
    id: "modernisation",
    title: "Legacy Modernisation",
    promise: "Replace the old system without switching the business off.",
    bullets: [
      "Audit what exists and map a staged migration path",
      "Re-front a working monolith module by module",
      "Move to modern tooling, tests and automated deployment",
      "Keep both systems running until the last one is ready to retire",
    ],
    stack: ["Laravel", "TanStack Start", "Docker", "GitHub Actions"],
  },
] as const satisfies readonly Service[]
