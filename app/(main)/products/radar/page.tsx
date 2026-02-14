'use client'

import { HeroHeader } from "@/components/header"
import Image from "next/image"
import ellipseShadow from "@/assets/Ellipse 8.svg"
import Footer from "@/components/footer"
import DiscussSection from "@/components/discussSection"
import radarHero from "@/assets/radar-1.svg"
import radarProduct from "@/assets/radarscanner.svg"
import SecondHeroBanner from "@/components/ui/second-hero-banner"
import RadarSection from "@/components/radar-section"
import { useTranslations } from "@/lib/i18n/LocaleContext"

export default function RadarPage() {
    const t = useTranslations()
    return (
      <div className="relative min-h-screen bg-[#101210] overflow-x-clip">
        
        {/* HERO */}
        <div className="relative ">
          {/* HEADER */}
          <div className="relative z-30">
            <HeroHeader />
          </div>
  
          <SecondHeroBanner />


        {/* HERO TEXT */}
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

       {/* STATIC RIGHT SHADOW (responsive + no overflow) */}
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

      {/* FEATURES (starts immediately after hero, no extra gap) */}
      <section className="relative overflow-hidden z-20">
       
        {/* LEFT MOVING SHADOW */}
        <div className="absolute -left-16 inset-0 pointer-events-none z-0 md:z-[15] overflow-hidden">
          <div
            className="animate-system-blur absolute left-0 -top-32 w-[55vw] max-w-[520px] h-full -translate-x-1/2 opacity-90"
          >
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
          <RadarSection />
        </div>
      </section>
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-10">
        <Image
          src={radarProduct}
          alt="GNNS Content"
          className="w-full h-200 object-cover"
          priority
        />
      </div>

       {/* FEATURES 2*/}
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
