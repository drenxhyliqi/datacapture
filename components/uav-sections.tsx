'use client'

import Image from 'next/image'
import uavIcon from '@/assets/uavicon.svg'
import droneImage1 from '@/assets/uav-1.png'
import droneImage2 from '@/assets/uav-2.png'
import droneImage3 from '@/assets/uav-3.png'
import droneImage4 from '@/assets/uav-4.png'
import droneImage5 from '@/assets/uav-5.png'
import droneImage6 from '@/assets/uav-6.png'
import Slideshow from '@/components/slideshow'
import { useTranslations } from '@/lib/i18n/LocaleContext'

const uavItemKeys = [
  { key: 'uavFireHound', image: droneImage1 },
  { key: 'uavGuardian', image: droneImage2 },
  { key: 'uavSolarMapper', image: droneImage3 },
]

const statKeys = [
  { labelKey: 'products.uavRadioRange', valueKey: 'products.uavRangeValue' },
  { labelKey: 'products.uavEndurance', valueKey: 'products.uavEnduranceValue' },
  { labelKey: 'products.uavMaxSpeed', valueKey: 'products.uavMaxSpeedValue' },
  { labelKey: 'products.uavWindResistance', valueKey: 'products.uavWindResistanceValue' },
]

export default function UAVSections() {
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
            <p>{t('products.uavIntro')}</p>
          </div>
        </div>

        {/* ALL UAVS */}
        <div className="space-y-20 lg:space-y-28 mb-30">
          {uavItemKeys.map((item) => {
            const name = t(`products.${item.key}Name`)
            return (
              <div key={item.key} className="w-full">
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <h3 className="text-2xl sm:text-3xl font-medium text-white">
                      {name}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-white/70">
                      {t(`products.${item.key}Short`)}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <div className="relative h-10 w-16 sm:h-12 sm:w-20">
                      <Image
                        src={uavIcon}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative mt-6 sm:mt-8 overflow-visible">
                    <div className="relative h-[120px] sm:h-[160px] md:h-[200px] lg:h-[220px] overflow-visible">
                        <Image
                        src={item.image}
                        alt={name}
                        fill
                        priority
                        sizes="(max-width: 100%) 100vw, 100%"
                        className="object-contain lg:object-cover -translate-y-6"
                        />
                    </div>
                </div>


                <div className="mt-10 grid grid-cols-2 gap-y-8 sm:flex sm:flex-wrap sm:justify-between">
                    {statKeys.map((s) => (
                        <div
                        key={s.labelKey}
                        className="flex flex-col items-center text-center sm:w-auto"
                        >
                        <div className="text-white sm:text-xl lg:text-3xl">{t(s.labelKey)}</div>
                        <div className="mt-2 text-sm sm:text-base text-white/70">{t(s.valueKey)}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 space-y-4 text-sm sm:text-base leading-relaxed text-white/75">
                  <p>{t(`products.${item.key}Desc1`)}</p>
                  <p>{t(`products.${item.key}Desc2`)}</p>
                  <p>{t(`products.${item.key}Desc3`)}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Slideshow temporarily disabled; keep for future use */}
        {/*
        <Slideshow
          slides={[
            { src: droneImage4 },
            { src: droneImage5 },
            { src: droneImage6 },
          ]}
          delayMs={2000}
        />
        */}

      </div>
    </section>
  )
}
