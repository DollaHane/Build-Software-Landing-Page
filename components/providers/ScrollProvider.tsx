"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import Lenis from "@studio-freight/lenis"
import { useReducedMotion } from "framer-motion"

import { surfaceOf, type SectionId, type Surface } from "@/config/sections"
import { HEADER_HEIGHT } from "@/lib/constants"

interface ScrollContextValue {
  activeSection: SectionId | null
  headerSurface: Surface
  isTop: boolean
  scrollTo: (id: SectionId) => void
  registerSection: (id: SectionId, el: HTMLElement | null) => void
  stop: () => void
  start: () => void
}

const ScrollContext = createContext<ScrollContextValue | null>(null)

export function useScrollContext(): ScrollContextValue {
  const ctx = useContext(ScrollContext)
  if (!ctx) {
    throw new Error("useScrollContext must be used within <ScrollProvider>")
  }
  return ctx
}

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const sectionsRef = useRef<Map<SectionId, HTMLElement>>(new Map())
  const reduced = useReducedMotion()

  const [activeSection, setActiveSection] = useState<SectionId | null>(null)
  const [headerSurface, setHeaderSurface] = useState<Surface>("contrast")
  const [isTop, setIsTop] = useState(true)

  // Stable identity so <Section> can register without re-render loops.
  const registerSection = useCallback(
    (id: SectionId, el: HTMLElement | null) => {
      if (el) sectionsRef.current.set(id, el)
      else sectionsRef.current.delete(id)
    },
    []
  )

  // ---- Lenis: constructed once, torn down properly ----
  useEffect(() => {
    if (reduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })
    lenisRef.current = lenis

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [reduced])

  // ---- Observer 1: nav highlight (section crossing viewport middle) ----
  useEffect(() => {
    const els = Array.from(sectionsRef.current.entries())
    if (!els.length) return

    const byEl = new Map<Element, SectionId>(els.map(([id, el]) => [el, id]))
    const visible = new Set<Element>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target)
          else visible.delete(entry.target)
        }
        if (!visible.size) return // keep lastActive; never flicker to null
        const ordered = els.map(([, el]) => el).filter((el) => visible.has(el))
        const chosen = ordered[0]
        if (chosen) setActiveSection(byEl.get(chosen) ?? null)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    )

    els.forEach(([, el]) => observer.observe(el))
    return () => observer.disconnect()
  }, [children])

  // ---- Observer 2: header polarity (band directly under the header) ----
  useEffect(() => {
    const els = Array.from(sectionsRef.current.entries())
    if (!els.length) return

    // Pre-sort by document order once.
    const sorted = [...els].sort(([, a], [, b]) =>
      a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
    )
    const intersecting = new Map<Element, boolean>()
    let observer: IntersectionObserver | null = null

    const build = () => {
      observer?.disconnect()
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            intersecting.set(entry.target, entry.isIntersecting)
          }
          // Last section in DOM order still under the header wins.
          let chosen: SectionId | null = null
          for (const [id, el] of sorted) {
            if (intersecting.get(el)) chosen = id
          }
          if (chosen) setHeaderSurface(surfaceOf(chosen))
        },
        {
          rootMargin: `0px 0px -${Math.max(
            0,
            window.innerHeight - HEADER_HEIGHT
          )}px 0px`,
          threshold: 0,
        }
      )
      sorted.forEach(([, el]) => observer!.observe(el))
    }

    build()

    let timer: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(timer)
      timer = setTimeout(build, 150)
    }
    window.addEventListener("resize", onResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", onResize)
      observer?.disconnect()
    }
  }, [children])

  // ---- isTop via a sentinel, so there are zero scroll listeners ----
  useEffect(() => {
    const sentinel = document.getElementById("scroll-sentinel")
    if (!sentinel) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsTop(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  const scrollTo = useCallback((id: SectionId) => {
    const el = sectionsRef.current.get(id) ?? document.getElementById(id)
    if (!el) return
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -HEADER_HEIGHT, duration: 1.1 })
    } else {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT,
        behavior: "auto",
      })
    }
  }, [])

  const stop = useCallback(() => lenisRef.current?.stop(), [])
  const start = useCallback(() => lenisRef.current?.start(), [])

  const value = useMemo(
    () => ({
      activeSection,
      headerSurface,
      isTop,
      scrollTo,
      registerSection,
      stop,
      start,
    }),
    [
      activeSection,
      headerSurface,
      isTop,
      scrollTo,
      registerSection,
      stop,
      start,
    ]
  )

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  )
}
