'use client'

import { HeroHeader } from "@/components/header"
import Image from "next/image"
import ellipseShadow from "@/assets/Ellipse 8.svg"
import solutionsHero from "@/assets/herosolutuion.png"
import ServicesSection from "@/components/ServicesSection"
import Footer from "@/components/footer"
import SecondHeroBanner from "@/components/ui/secondHeroBanner"
import { useTranslations } from "@/lib/i18n/LocaleContext"
import { useEffect, useRef } from "react"

export default function ServicesPage() {
  const t = useTranslations()
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
    <div className="relative min-h-screen bg-[#101210] overflow-x-clip overflow-hidden">
      <div className="relative ">
        <div className="relative z-30">
          <HeroHeader />
        </div>

        <SecondHeroBanner />
        <div className="relative z-20 mx-auto max-w-5xl px-5 pt-2 md:pt-5 pb-24 text-center">
          <p className="text-white tracking-widest text-sm md:text-base">
            {t('services.label')}
          </p>
          <h1 className="mt-6 text-white text-4xl md:text-6xl font-[400] leading-tight">
            {t('services.heroTitle')}
          </h1>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            {t('services.heroSub')}
          </p>
        </div>
      </div>
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
          <ServicesSection />
        </div>
      </section>
      <Footer />
    </div>
  )
}
