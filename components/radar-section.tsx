'use client'

import Image from "next/image"
import radarFeature2 from "@/assets/mhr.svg"
import radarFeature3 from "@/assets/radar-3.png"
import radarFeature4 from "@/assets/gan.svg"
import radarFeature5 from "@/assets/radar-5.png"
import radarFeature6 from "@/assets/scanner.svg"
import { useTranslations } from "@/lib/i18n/LocaleContext"

export default function RadarSection() {
  const t = useTranslations()
  return (
    <section className="container mx-auto relative w-full py-10 lg:py-32 px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-6">
            {t('products.designedForMissions')}
          </h2>
          <div className="max-w-6xl mx-auto space-y-3 text-base md:text-lg text-white/80">
            <p>{t('products.radarIntro')}</p>
          </div>
        </div>

        {/* FEATURES 1*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 mb-10 mt-20">
          <div className="mt-10 space-y-3 text-content-width text-wrap-natural">
            <h2 className="text-3xl text-white font-semibold">
              {"MHR® "}
            </h2>
            <h2 className="text-3xl text-white font-semibold">
              {t('products.mhrTitle')}
            </h2>
            <p className="text-base text-white">
              {t('products.mhrPara1')}
            </p>
            <p className="text-base text-white">
              {t('products.mhrPara2')}
            </p>
            <p className="text-base text-white">
              {t('products.mhrPara3')}
            </p>
            <p className="text-base text-white">
              {t('products.mhrPara4')}
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full flex justify-center lg:justify-start">
              <Image
                src={radarFeature2}
                alt="MHR Multi-Mission Hemispheric Radar"
                className="object-contain w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px] h-auto"
              />
          </div>
        </div>

        <div className="text-center mt-20 items-center justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-6">
            {t('products.trl9Title')}
          </h2>
        </div>

        {/* FEATURES 2*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 mb-10 mt-20">
          {/* IMAGE */}
          <div className="w-full flex justify-center lg:justify-start">
              <Image
                src={radarFeature3}
                alt="GNNS Product"
                className="
                                object-contain
                                w-full
                                max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px]
                                h-auto
                            "
              />
          </div>

          <div className="mt-10 space-y-3 text-content-width text-wrap-natural">
            <h2 className="text-3xl text-white font-semibold">
              {t('products.keyFeatures')}
            </h2>
            <p className="text-base text-white">
              {t('products.radarFeature1')}
            </p>
            <p className="text-base text-white">
              {t('products.radarFeature2')}
            </p>
            <p className="text-base text-white">
              {t('products.radarFeature3')}
            </p>
            <p className="text-base text-white">
              {t('products.radarFeature4')}
            </p>
            <p className="text-base text-white">
              {t('products.radarFeature5')}
            </p>
            <p className="text-base text-white">
              {t('products.radarFeature6')}
            </p>
          </div>
        </div>

        {/* FEATURES 3*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 mb-10 mt-20">
          <div className="mt-10 space-y-3 text-content-width text-wrap-natural">
            <h2 className="text-3xl text-white font-semibold">
              {t('products.keyCharacteristics')}
            </h2>
            <p className="text-base text-white">
              {t('products.radarChar1')}
            </p>
            <p className="text-base text-white">
              {t('products.radarChar2')}
            </p>
            <p className="text-base text-white">
              {t('products.radarChar3')}
            </p>
            <p className="text-base text-white">
              {t('products.radarChar4')}
            </p>
            <p className="text-base text-white">
              {t('products.radarChar5')}
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full flex justify-center lg:justify-start">
              <Image
                src={radarFeature4}
                alt="GNNS Product"
                className="object-contain w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px] h-auto"
              />
          </div>
        </div>

        {/* FEATURES 4*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 mb-10 mt-20">
          {/* IMAGE */}
          <div className="w-full flex justify-center lg:justify-start">
              <Image
                src={radarFeature5}
                alt="GNNS Product"
                className="object-contain w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px] h-auto"
              />
          </div>
          <div className="mt-10 space-y-3 text-content-width text-wrap-natural">
            <h2 className="text-3xl text-white font-semibold">
              {t('products.radarAchrTitle')}
            </h2>
            <p className="text-base text-white">
              {t('products.radarAchrDesc')}
            </p>
          </div>
        </div>

        {/* FEATURES 5*/}
        <div className="text-center mt-20 items-center justify-center space-y-3 text-content-width mx-auto text-wrap-natural">
          <h2 className="text-2xl text-white font-semibold">{t('products.keyFeatures')}</h2>
          <p className="text-base text-white">{t('products.radarSummary1')}</p>
          <p className="text-base text-white">{t('products.radarSummary2')}</p>
          <p className="text-base text-white">{t('products.radarSummary3')}</p>
          <p className="text-base text-white">{t('products.radarSummary4')}</p>
          <p className="text-base text-white">{t('products.radarSummary5')}</p>
          <p className="text-base text-white">{t('products.radarSummary6')}</p>
          <p className="text-base text-white">{t('products.radarSummary7')}</p>
        </div>
      
      </div>
    </section>
  )
}
