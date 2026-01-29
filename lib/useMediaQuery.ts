'use client'

import { useState, useEffect } from 'react'

/**
 * Returns true when viewport matches the query (e.g. min-width: 1024px for lg).
 * Returns false on SSR and initial mount to avoid hydration mismatch; updates after mount.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

/** Tailwind lg breakpoint: 1024px */
export const LG_QUERY = '(min-width: 1024px)'
