'use client'

import Image from 'next/image'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import DiscussSection from '@/components/discussSection'
import metricsBackground from '@/assets/Metrics.png'
import ellipseShadow from '@/assets/Ellipse 8.svg'
import { GradientCard } from './ui/GradientCard'
import SecondHeroBanner from './ui/secondHeroBanner'
import { useTranslations } from '@/lib/i18n/LocaleContext'
import { useEffect, useRef } from "react"

const METRICS_KEYS = [
  { title: 'company.metric1Title', desc: 'company.metric1Desc' },
  { title: 'company.metric2Title', desc: 'company.metric2Desc' },
  { title: 'company.metric3Title', desc: 'company.metric3Desc' },
] as const

export default function CompanySection() {
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
      const fixedTopOffset = 0

      const startFix = 0
      const endFix = aboutTop + aboutHeight - shadowHeight + fixedTopOffset

      if (scrollY >= startFix && scrollY <= endFix) {
        shadowRef.current.style.position = "fixed"
        shadowRef.current.style.top = `${fixedTopOffset}px`
      } else if (scrollY < startFix) {
        shadowRef.current.style.position = "absolute"
        shadowRef.current.style.top = "0px"
      } else {
        shadowRef.current.style.position = "absolute"
        shadowRef.current.style.top = `${aboutHeight + aboutTop - shadowHeight}px`
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
              <HeroHeader />
              <SecondHeroBanner />

      {/* HEADER */}
      <div className="relative z-[100]">
        <div className="relative z-180 mx-auto max-w-xl pt-5 md:pt-5 pb-24 text-center">
          <p className="text-white tracking-widest text-sm md:text-base font-[400]">
            {t('company.label')}
          </p>
          <h1 className="mt-6 text-white text-4xl md:text-6xl font-[400] leading-tight">
            {t('company.headline')} <br className="hidden md:block" />
            {t('company.headline2')}
          </h1>
          <p className="mt-6 text-white/60 max-w-md mx-auto">
            {t('company.subtext')}
          </p>
        </div>
      </div>

      {/* SHADOW - spans header + about */}
      <div
        ref={shadowRef}
        className="pointer-events-none z-20"
        style={{
          position: "absolute",
          left: "0",
          transform: "translateX(-50%)",
          width: "40vw",
          height: "150vh",
          marginTop: "20vh",
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

      {/* Shadow + Features + About */}
      <section ref={aboutRef} className="relative overflow-hidden z-10">

        {/* METRICS */}
        <div className="relative z-10">
          <section className="relative w-full bg-[#101210] py-16 sm:py-20 lg:py-24 px-5 overflow-hidden">
            <div className="relative z-[150] mx-auto w-full max-w-7xl">
              <GradientCard>
                <div className="relative overflow-hidden rounded-[16px]">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={metricsBackground}
                      alt="Mountain landscape background"
                      fill
                      sizes="100vw"
                      priority
                      className="object-cover object-[65%_center] md:object-center"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/10 to-[#101210]/60" />

                  <div className="relative z-10 py-14 sm:py-16 lg:py-20 ">
                    <div className="grid w-[90%] mx-auto gap-4 sm:gap-6 lg:gap-8 md:grid-cols-3">
                      {METRICS_KEYS.map((metric) => (
                        <div
                          key={metric.title}
                          className="flex h-full min-h-[200px] max-w-[420px] w-full mx-auto flex-col justify-center gap-1 rounded-2xl bg-white/12 px-6 pt-10 pb-8 text-center text-white shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl border border-white/25"
                        >
                          <h3 className="mb-3 text-lg font-[400] sm:text-xl text-content-width mx-auto text-wrap-natural">
                            {t(metric.title)}
                          </h3>
                          <p className="text-sm leading-relaxed text-white/80 sm:text-base text-content-width mx-auto text-wrap-natural">
                            {t(metric.desc)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GradientCard>
            </div>
          </section>

          {/* ABOUT */}
          <section className="relative z-10 overflow-hidden">
            <section className="relative w-full bg-[#101210] py-20 sm:py-24 lg:py-28">
              <div className="mx-auto max-w-7xl px-4">
                <div className="about-dcs-fade-border rounded-2xl bg-[#121212] px-[30px] py-8 sm:py-10">
                  <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
                    {t('company.aboutSectionTitle')}
                  </h2>
                  <div className="space-y-6 text-left text-white/95 text-[18px]">
                    <p className="leading-relaxed">{t('company.aboutP1')}</p>
                    <p className="leading-relaxed">{t('company.aboutP2')}</p>
                    <p className="leading-relaxed">{t('company.aboutP3')}</p>
                    <p className="leading-relaxed">{t('company.aboutP4')}</p>
                  </div>
                </div>
              </div>
            </section>

            <DiscussSection />
          </section>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .about-dcs-fade-border {
          position: relative;
        }
        .about-dcs-fade-border::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 1px solid rgba(255, 255, 255, 0.22);
          pointer-events: none;
          z-index: 1;
          mask-image: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
          mask-size: 100% 100%;
          -webkit-mask-size: 100% 100%;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
        }
      `}</style>
    </div>
  )
}
