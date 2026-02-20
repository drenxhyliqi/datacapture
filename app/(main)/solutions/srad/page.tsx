'use client'

import { HeroHeader } from "@/components/header"
import Image from "next/image"
import ellipseShadow from "@/assets/Ellipse 8.svg"
import Footer from "@/components/footer"
import SolutionsSradHeroBanner, { SolutionsSradFeaturesSection, SolutionsSradDescriptionSection, SolutionsSradC2Section } from "@/components/ui/solutionsSrad"
import { useTranslations } from "@/lib/i18n/LocaleContext"
import { useEffect, useRef } from "react"
import { useMediaQuery, LG_QUERY } from "@/lib/useMediaQuery";

export default function SolutionsSradPage() {
  const t = useTranslations()
  const isLg = useMediaQuery(LG_QUERY);
  const shadowRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current || !shadowRef.current) return

      const aboutTop = aboutRef.current.offsetTop
      const aboutHeight = aboutRef.current.offsetHeight
      const scrollY = window.scrollY
      const shadowHeight = shadowRef.current.offsetHeight
      const fixedTopOffset = -150

      const startFix = aboutTop - fixedTopOffset
      const endFix = aboutTop + aboutHeight - shadowHeight - fixedTopOffset

      if (scrollY >= startFix && scrollY <= endFix) {
        shadowRef.current.style.position = "fixed"
        shadowRef.current.style.top = `${fixedTopOffset}px`
      } else if (scrollY < startFix) {
        shadowRef.current.style.position = "absolute"
        shadowRef.current.style.top = "0px"
      } else {
        shadowRef.current.style.position = "absolute"
        shadowRef.current.style.top = `${aboutHeight - shadowHeight}px`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#101210] overflow-x-clip">

      {/* Header */}
      <HeroHeader />

      {/* Hero Banner */}
      <SolutionsSradHeroBanner />
      <div className="relative z-20 mx-auto max-w-5xl px-5 pt-5 md:pt-5 pb-24 text-center flex flex-col items-center justify-center">
        <p className="text-white tracking-widest text-sm md:text-base">{t('solutions.label')}</p>
        <h1 className="mt-6 text-white text-4xl md:text-6xl font-[400] leading-tight">{t('solutions.heroTitle')}</h1>
        <p className="mt-6 text-white/60 max-w-2xl mx-auto text-base md:text-lg">{t('solutions.heroSub')}</p>
      </div>

      {/* HERO STATIC SHADOW */}
      {isLg && (
        <div
          className="hero-static-shadow-wrapper absolute top-0 right-0 pointer-events-none z-0 overflow-visible"
          style={{ marginTop: "100vh" }}
          aria-hidden="true"
        >
          <div className="relative w-[400px] h-[200vh] translate-x-1/2 translate-y-250">
            <Image
              src={ellipseShadow}
              alt="Shadow effect"
              fill
              className="opacity-100"
              style={{ filter: "blur(90px)" }}
            />
          </div>
        </div>
      )}

      {/* Shadow + Features + Description */}
      <section ref={aboutRef} className="relative overflow-hidden z-20">
        {/* Shadow */}
        <div
          ref={shadowRef}
          className="pointer-events-none z-0"
          style={{
            position: "absolute",
            left: "0",
            transform: "translateX(-50%)",
            width: "40vw",
            height: "150vh",
          }}
        >
          <Image
            src={ellipseShadow}
            alt="Shadow effect"
            fill
            className="object-contain opacity-70"
            style={{ filter: "blur(60px)" }}
            sizes="40vw"
          />
        </div>

        <div className="relative z-10">
          <SolutionsSradFeaturesSection />
          <SolutionsSradDescriptionSection />
          <SolutionsSradC2Section />
        </div>
      </section>
      <Footer />
    </div>
  )
}
