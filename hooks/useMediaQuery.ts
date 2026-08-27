"use client"

import { useEffect, useState } from "react"

/**
 * Subscribes to a media query.
 *
 * Listens to the MediaQueryList `change` event rather than window `resize`
 * (resize never fires for `(pointer: fine)` or `prefers-reduced-motion`), and
 * keeps `matches` out of the dependency array so the listener is bound once
 * per query rather than re-bound on every match flip.
 *
 * Returns false on the server and on first paint, so callers should treat it
 * as "enhance once known" rather than gating essential content on it.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(query)
    setMatches(mql.matches)

    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches)

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange)
      return () => mql.removeEventListener("change", onChange)
    }
    // Safari < 14
    mql.addListener(onChange)
    return () => mql.removeListener(onChange)
  }, [query])

  return matches
}

export default useMediaQuery
