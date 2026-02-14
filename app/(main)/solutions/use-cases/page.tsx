'use client'

import { HeroHeader } from "@/components/header"
import Image from "next/image"
import ellipseShadow from "@/assets/Ellipse 8.svg"
import Footer from "@/components/footer"
import DiscussSection from "@/components/discussSection"
import SolutionsCuasHeroBanner, { SolutionsCuasFeaturesSection, SolutionsCuasDescriptionSection, SolutionsCuasC2Section } from "@/components/ui/solutions-cuas"
import { useTranslations } from "@/lib/i18n/LocaleContext"

export default function SolutionsCuasPage() {
  const t = useTranslations()
  return (
    <div className="relative min-h-screen bg-[#101210] overflow-x-clip">
      <div className="relative">
        <div className="relative z-30">
          <HeroHeader />
        </div>

        <SolutionsCuasHeroBanner />
        <div className="relative z-20 mx-auto max-w-5xl px-5 pt-5 md:pt-5 pb-24 text-center flex flex-col items-center justify-center">
          <p className="text-white tracking-widest text-sm md:text-base">
            {t('solutions.label')}
          </p>
          <h1 className="mt-6 text-white text-4xl md:text-6xl font-[400] leading-tight">
            {t('solutions.heroTitle')}
          </h1>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto text-base md:text-lg">
            {t('solutions.heroSub')}
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 md:z-[15] overflow-visible">
        <div className="absolute right-5 top-100 w-[70vw] max-w-[700px] h-[300vh] aspect-square translate-x-1/2 -translate-y-1/20 opacity-80 blur-[80px]">
          <Image
            src={ellipseShadow}
            alt="Shadow effect"
            priority
            className="object-contain"
          />
        </div>
      </div>
      <section className="relative overflow-hidden z-20">
        <div className="absolute -left-16 inset-0 pointer-events-none z-0 md:z-[15] overflow-hidden">
          <div className="animate-system-blur absolute left-0 -top-32 w-[55vw] max-w-[520px] h-full -translate-x-1/2 opacity-90">
            <Image
              src={ellipseShadow}
              alt="Shadow effect"
              fill
              className="object-contain"
              style={{ filter: "blur(10px)" }}
            />
          </div>
        </div>

        <div className="relative z-10">
          <SolutionsCuasFeaturesSection />
          <SolutionsCuasDescriptionSection />
          <SolutionsCuasC2Section />
        </div>
      </section>

      <Footer />
    </div>
  )
}

