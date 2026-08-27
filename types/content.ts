export interface Service {
  id: string
  title: string
  promise: string
  bullets: readonly string[]
  stack: readonly string[]
}

export interface ProcessStage {
  n: string
  title: string
  body: string
  deliverables: readonly string[]
}

export interface Capability {
  id: string
  label: string
  headline: string
  body: string
  metrics: readonly { label: string; value: number; suffix?: string }[]
  rows: readonly string[]
}

export interface StackGroup {
  label: string
  items: readonly string[]
}

export interface Faq {
  question: string
  answer: string
}
