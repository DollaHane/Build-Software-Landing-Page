/**
 * Single source of truth for page sections.
 *
 * Section id, nav label and surface polarity all live here. `href` is always
 * computed as `#${id}` and never hand-typed — that is what prevents the class
 * of bug where a CTA points at `#contactus` while the section renders
 * `id="contact-us"`.
 */
export const SECTIONS = [
  { id: "hero", label: "Home", surface: "contrast", inNav: false },
  { id: "services", label: "Services", surface: "base", inNav: true },
  { id: "work", label: "Work", surface: "contrast", inNav: true },
  { id: "process", label: "Process", surface: "base", inNav: true },
  { id: "stack", label: "Stack", surface: "contrast", inNav: true },
  { id: "faq", label: "FAQ", surface: "base", inNav: true },
  { id: "contact", label: "Contact", surface: "contrast", inNav: true },
] as const

export type SectionId = (typeof SECTIONS)[number]["id"]
export type Surface = (typeof SECTIONS)[number]["surface"]

export const NAV_SECTIONS = SECTIONS.filter((s) => s.inNav)

export function sectionHref(id: SectionId): string {
  return `#${id}`
}

export function surfaceOf(id: SectionId): Surface {
  return SECTIONS.find((s) => s.id === id)?.surface ?? "base"
}

export function surfaceClass(surface: Surface): string {
  return surface === "contrast" ? "surface-contrast" : "surface-base"
}
