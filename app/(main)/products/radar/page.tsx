'use client'

import { HeroHeader } from "@/components/header"
import Image from "next/image"
import ellipseShadow from "@/assets/Ellipse 8.svg"
import Footer from "@/components/footer"
import DiscussSection from "@/components/discussSection"
import radarHero from "@/assets/radar-1.svg"
import radarProduct from "@/assets/radarscanner.svg"
import SecondHeroBanner from "@/components/ui/secondHeroBanner"
import RadarSection from "@/components/radarSection"
import { useTranslations } from "@/lib/i18n/LocaleContext"
import { useEffect, useRef } from "react"

export default function RadarPage() {
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
        <div className="relative z-20 mx-auto max-w-5xl px-5 mt-5 mb-10 lg:-mb-20 md:pt-5 text-center flex flex-col items-center justify-center">
          <p className="text-white tracking-widest text-sm md:text-base">
            {t('products.productLabel')}
          </p>
          <h1 className="mt-6 text-white text-4xl md:text-6xl font-[400] leading-tight">
            {t('products.radarTitle')}
          </h1>
          <h3 className="text-white/80 max-w-2xl items-center justify-center">{t('products.radarSub')}</h3>
          <Image src={radarHero} alt="GNNS Hero" className="object-contain items-center justify-center -mt-10 lg:w-70 lg:h-70 w-40 h-40" />
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
          <RadarSection />
        </div>
      </section>
      <div className="relative w-full h-auto mt-10 mb-20">
        <Image
          src={radarProduct}
          alt="GNNS Content"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="container mx-auto items-center lg:px-25 px-5 mb-10 mt-20">
        <div className="mt-10 space-y-3 text-content-width text-wrap-natural">
          <h2 className="text-3xl text-white font-semibold">{t('products.mainAdvantages')}</h2>
          <p className="text-base text-white">{t('products.radarAdvantage1')}</p>
          <p className="text-base text-white">{t('products.radarAdvantage2')}</p>
          <p className="text-base text-white">{t('products.radarAdvantage3')}</p>
          <p className="text-base text-white">Multi-Mission ‘one radar does it all’</p>
          <p className="text-base text-white">{t('products.radarAdvantage5')}</p>
          <p className="text-base text-white">{t('products.radarAdvantage6')}</p>
          <p className="text-base text-white">{t('products.radarAdvantage7')}</p>
          <p className="text-base text-white">{t('products.radarAdvantage8')}</p>
          <p className="text-base text-white">{t('products.radarAdvantage9')}</p>
          <p className="text-base text-white">{t('products.radarAdvantage10')}</p>
          <p className="text-base text-white">{t('products.radarAdvantage11')}</p>
          <p className="text-base text-white">{t('products.radarAdvantage12')}</p>
        </div>
      </div>
      <DiscussSection />
      <Footer />
    </div>
  )
}
