'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const SCROLL_THRESHOLD = 400

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#313331] text-white shadow-lg transition-all hover:bg-white/10 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#101210]"
    >
      <ChevronUp className="h-6 w-6" strokeWidth={2.5} />
    </button>
  )
}
