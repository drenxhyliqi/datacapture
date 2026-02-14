'use client'

import { useState, useEffect, useRef } from 'react'
import Loading from './loading'

const MIN_DISPLAY_MS = 500
const MAX_WAIT_MS = 8000

export default function LoadingGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)
  const minElapsed = useRef(false)
  const loadDone = useRef(false)

  useEffect(() => {
    const setReadyIfDone = () => {
      if (minElapsed.current && loadDone.current) setReady(true)
    }

    const minTimer = setTimeout(() => {
      minElapsed.current = true
      setReadyIfDone()
    }, MIN_DISPLAY_MS)

    if (document.readyState === 'complete') {
      loadDone.current = true
      setReadyIfDone()
    } else {
      const onLoad = () => {
        loadDone.current = true
        setReadyIfDone()
      }
      window.addEventListener('load', onLoad)
      const maxTimer = setTimeout(() => {
        loadDone.current = true
        setReadyIfDone()
      }, MAX_WAIT_MS)
      return () => {
        window.removeEventListener('load', onLoad)
        clearTimeout(maxTimer)
        clearTimeout(minTimer)
      }
    }

    return () => clearTimeout(minTimer)
  }, [])

  if (!ready) return <Loading />
  return <>{children}</>
}
