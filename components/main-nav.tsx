"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"

import { NAV_SECTIONS, sectionHref, type SectionId } from "@/config/sections"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet"
import { Button } from "@/components/ui/button"
import build from "@/components/assets/buildsoftware_logo.png"
import { useScrollContext } from "@/components/providers/ScrollProvider"

export function MainNav() {
  const { activeSection, scrollTo, stop, start } = useScrollContext()
  const [open, setOpen] = React.useState(false)

  const go = (id: SectionId) => (e: React.MouseEvent) => {
    e.preventDefault()
    scrollTo(id)
  }

  // Radix locks body scroll while the sheet is open; pause Lenis so the two
  // don't fight, and close before scrolling so the lock is released first.
  const onOpenChange = (next: boolean) => {
    setOpen(next)
    if (next) stop()
    else start()
  }

  const goMobile = (id: SectionId) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    start()
    window.setTimeout(() => scrollTo(id), 120)
  }

  return (
    <div className="flex flex-1 items-center gap-6 md:gap-10">
      <a
        href={sectionHref("hero")}
        onClick={go("hero")}
        className="flex shrink-0 items-center space-x-2"
        aria-label="Build Software — back to top"
      >
        <Image src={build} alt="Build Software" width={50} priority />
      </a>

      {/* desktop */}
      <ul className="hidden items-center gap-1 lg:flex">
        {NAV_SECTIONS.map((s) => {
          const active = activeSection === s.id
          return (
            <li key={s.id} className="relative">
              <a
                href={sectionHref(s.id)}
                onClick={go(s.id)}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "relative z-10 inline-block rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {s.label}
              </a>
              {active && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-full bg-foreground/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </li>
          )
        })}
      </ul>

      {/* mobile */}
      <div className="ml-auto lg:hidden">
        <Sheet open={open} onOpenChange={onOpenChange}>
          <SheetTrigger asChild>
            <Button variant="icon" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="surface-base w-72 border-l border-border bg-background backdrop-blur-none"
          >
            <nav className="mt-10 flex flex-col gap-1">
              {NAV_SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={sectionHref(s.id)}
                  onClick={goMobile(s.id)}
                  aria-current={activeSection === s.id ? "true" : undefined}
                  className={cn(
                    "rounded-lg px-4 py-3 text-lg font-medium transition-colors",
                    activeSection === s.id
                      ? "bg-foreground/10 text-foreground"
                      : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                  )}
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
