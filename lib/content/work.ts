import type { Capability } from "@/types/content"

/**
 * Generalised capability showcase. Industries and capabilities only —
 * deliberately no client names, product names or identifying detail.
 */
export const INDUSTRIES = [
  "Construction & engineering services",
  "Equipment rental & plant hire",
  "B2B supply chain & procurement",
  "Maritime safety & marina management",
  "Legal-tech & document workflow",
  "Field service & fleet operations",
] as const

export const CAPABILITIES = [
  {
    id: "operations",
    label: "Operations dashboard",
    headline: "The whole pipeline on one screen",
    body: "Quotes, orders, contracts and invoices as a single tracked flow, with revisions, approval gates and an audit trail behind every change.",
    metrics: [
      { label: "Documents tracked", value: 12, suffix: "k+" },
      { label: "Approval stages", value: 6 },
      { label: "Audit coverage", value: 100, suffix: "%" },
    ],
    rows: [
      "Quotation drafted",
      "Awaiting approval",
      "Converted to order",
      "Invoiced",
    ],
  },
  {
    id: "field",
    label: "Field & dispatch",
    headline: "Work assigned, captured and closed on site",
    body: "Technicians receive job cards on mobile, capture photos and signatures offline, and sync automatically once they're back in coverage.",
    metrics: [
      { label: "Offline capture", value: 100, suffix: "%" },
      { label: "Avg. sync time", value: 3, suffix: "s" },
      { label: "Checklist types", value: 24 },
    ],
    rows: [
      "Job card assigned",
      "Technician en route",
      "On-site inspection",
      "Signed off",
    ],
  },
  {
    id: "portal",
    label: "Client portal",
    headline: "Customers serve themselves",
    body: "A separate, permission-scoped login where clients track requests, download documents and raise tickets without going through your team.",
    metrics: [
      { label: "Permission scopes", value: 40, suffix: "+" },
      { label: "Portal guards", value: 2 },
      { label: "Self-service rate", value: 70, suffix: "%" },
    ],
    rows: [
      "Request submitted",
      "Assigned to team",
      "Documents shared",
      "Resolved",
    ],
  },
  {
    id: "reporting",
    label: "Reporting & exports",
    headline: "Numbers you can hand to an accountant",
    body: "Scheduled reports, Excel and CSV exports, and generated PDFs — produced on a timer and delivered without anyone remembering to run them.",
    metrics: [
      { label: "Scheduled reports", value: 18 },
      { label: "Export formats", value: 4 },
      { label: "Manual effort", value: 0, suffix: " hrs" },
    ],
    rows: [
      "Data aggregated",
      "Report generated",
      "PDF rendered",
      "Emailed to owners",
    ],
  },
] as const satisfies readonly Capability[]
