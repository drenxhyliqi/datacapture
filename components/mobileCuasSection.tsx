'use client'

import Image from 'next/image'
import mobileCuasImage1 from '@/assets/mobile-cuas-1.png'
import mobileCuasImage2 from '@/assets/mobile-cuas-2.svg'
import mobileCuasImage3 from '@/assets/mobile-cuas-3.svg'
import mobileCuasImage4 from '@/assets/mobile-cuas-4.svg'
import mobileCuasImage5 from '@/assets/mobile-cuas-5.svg'
import mobileCuasImage6 from '@/assets/mobile-cuas-6.png'
import mobileCuasImage7 from '@/assets/mobile-cuas-7.png'
import mobileCuasImage8 from '@/assets/mobile-cuas-8.png'

import Slideshow from '@/components/slideshow'
import { GradientCard } from './ui/GradientCard'
import { useTranslations } from '@/lib/i18n/LocaleContext'

const vehicleKeys = [
    { key: 'products.vehicleSuv', icon: mobileCuasImage2 },
    { key: 'products.vehiclePickUp', icon: mobileCuasImage3 },
    { key: 'products.vehicleVan', icon: mobileCuasImage4 },
    { key: 'products.vehicleTruck', icon: mobileCuasImage5 },
]

const sensoricKeys = [
    'products.sensorRadar',
    'products.sensorRFDetector',
    'products.sensorCamera',
    'products.sensorGnnssSpoofer',
    'products.sensorJammer',
    'products.sensorInterceptorDrone',
    'products.sensorWeaponStation',
    'products.sensorDazzleLaser',
    'products.sensorLaser',
]


export default function MobileCuasSections() {
  const t = useTranslations()
  return (
    <section className="container mx-auto relative w-full px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
      <div className="relative mx-auto -mt-5 flex w-full items-center justify-center overflow-visible
                h-[22rem] sm:h-[28rem] md:h-[40rem]
                max-w-[22rem] sm:max-w-[32rem] md:max-w-[50rem]">
        <Image
          src={mobileCuasImage1}
          alt="Mobile CUAS"
          fill
          sizes="(max-width: 640px) 352px, (max-width: 768px) 512px, 800px"
          className="object-contain"
        />
      </div>

      <section className="container w-full mx-auto w-full py-16">
        <div className="mx-auto w-full max-w-7xl space-y-10">
            <div className="flex w-full h-full rounded-md items-center justify-center mb-10">
              <GradientCard>
                <h3 className="text-center text-3xl md:text-4xl font-semibold text-white p-5">
                {t('products.chooseVehicle')}
                </h3>
              </GradientCard>
            </div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 mb-20">
          {vehicleKeys.map((v) => (
            <button
              key={v.key}
              type="button"
              className="group flex flex-col  items-center gap-4"
            >
              <div className="relative h-30 w-30 ">
                <Image
                  src={v.icon}
                  alt={t(v.key)}
                  fill
                  className="object-contain opacity-90 transition group-hover:opacity-100"
                />
              </div>
              <p className="text-white text-xl md:text-2xl font-medium">
                {t(v.key)}
              </p>
            </button>
          ))}
        </div>

        <div className="flex w-full h-full rounded-md items-center justify-center gap-10 mb-10">
          <GradientCard>
            <h3 className="text-center text-3xl md:text-4xl font-semibold text-white p-5">
              {t('products.selectSensoric')}
            </h3>
          </GradientCard>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sensoricKeys.map((key) => (
            <GradientCard key={key}>
            <div className="flex h-full w-full items-center justify-center ">
                <span className="text-white text-xl md:text-2xl font-medium text-center p-5">
                {t(key)}
                </span>
            </div>
            </GradientCard>
        ))}
        </div>
      </div>
      </section>


      <div className="container mx-auto max-w-7xl w-full px-6 lg:px-1">
        <h2 className="w-full text-center text-2xl md:text-4xl text-white leading-snug mt-5 px-2 mb-10">
          Custom mobile C-UAS solutions, aligned with your requirements, optimized for top performance and advanced technology
        </h2>
      </div>

      <Slideshow
            slides={[
                { src: mobileCuasImage6 },
                { src: mobileCuasImage7 },
                { src: mobileCuasImage8 },

            ]}
            delayMs={2000}
            />
      </div>
    </section>
  )
}