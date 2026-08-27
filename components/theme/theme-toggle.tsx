"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

/**
 * Reflects the GLOBAL theme, not the local surface — so it must read
 * resolvedTheme rather than use `dark:` variants (which now also fire inside
 * a light-mode contrast section). The mounted guard avoids a hydration
 * mismatch, since the theme is unknown during SSR.
 */
export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="icon"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {mounted && isDark ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-[1.5rem] w-[1.3rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
