'use client'

import Image from "next/image"
import gnnsContent from "@/assets/gnns-2.png"
import gnnsProduct from "@/assets/gnns-3.png"
import img1 from "@/assets/gnns-slide-1.png"
import img2 from "@/assets/gnns-slide-2.png"
import img3 from "@/assets/gnns-slide-3.png"
import { GradientCard } from "./ui/gradientCard"
import DiscussSection from "./discussSection"
import Slideshow from "./slideshow"
import { useTranslations } from "@/lib/i18n/LocaleContext"

const keyRequirementKeys = [
    { titleKey: 'products.gnnsReq1Title', descKey: 'products.gnnsReq1Desc' },
    { titleKey: 'products.gnnsReq2Title', descKey: 'products.gnnsReq2Desc' },
    { titleKey: 'products.gnnsReq3Title', descKey: 'products.gnnsReq3Desc' },
    { titleKey: 'products.gnnsReq4Title', descKey: 'products.gnnsReq4Desc' },
] as const

const operationalModeKeys = [
    { titleKey: 'products.gnnsMode1Title', descKey: 'products.gnnsMode1Desc' },
    { titleKey: 'products.gnnsMode2Title', descKey: 'products.gnnsMode2Desc' },
    { titleKey: 'products.gnnsMode3Title', descKey: 'products.gnnsMode3Desc' },
] as const

export default function GnnsSection() {
    const t = useTranslations()
    return (
        <section className="container mx-auto relative w-full py-10 lg:py-10 px-6 lg:px-8">
            <div className="w-full max-w-6xl mx-auto">
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-6">
                        {t('products.designedForMissions')}
                    </h2>
                    <div className="max-w-6xl mx-auto space-y-3 text-base md:text-lg text-white/80">
                        <p>{t('products.gnnsIntro')}</p>
                    </div>
                </div>

                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-6">
                        {t('products.gnnsTitle')}
                    </h2>
                    <div className="max-w-6xl mx-auto space-y-3 text-base md:text-lg text-white/80">
                        <p>{t('products.gnnsManipulationDesc')}</p>
                    </div>
                    <div className="relative w-full h-full mt-10">
                        <GradientCard>
                            <Image src={gnnsContent} alt="GNNS Content" className="object-contain"/>
                        </GradientCard>
                    </div>
                </div>

                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-6">
                        {t('products.trl9Title')}
                    </h2>
                    <div className="max-w-6xl mx-auto space-y-3 text-base md:text-lg text-white/80">
                        <p>{t('products.trl9Desc')}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 mb-6">
                    <div className="w-full flex justify-center lg:justify-start">
                        <Image
                        src={gnnsProduct}
                        alt="GNNS Product"
                        className="
                            object-contain
                            w-full
                            max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px]
                            h-auto
                        "
                        />
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-2xl md:text-3xl font-[400] text-white">
                            {t('products.keyRequirementsTitle')}
                        </h3>

                        <div className="space-y-6">
                        {keyRequirementKeys.map((req) => (
                            <div key={req.titleKey}>
                            <h4 className="text-lg md:text-xl font-[400] text-white">
                                {t(req.titleKey)}
                            </h4>
                            <p className="text-base md:text-lg text-white/80 leading-relaxed">
                                {t(req.descKey)}
                            </p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                
                <div className="grid grid-cols-1 lg:grid-cols-1 items-center gap-8 lg:gap-12 mb-20 mt-20">
                <div className="flex flex-col items-start gap-4">
                        <h3 className="text-2xl md:text-3xl font-[400] text-white">
                            {t('products.operationalModesTitle')}
                        </h3>
                        <h2 className="text-xl md:text-2xl font-[400] text-white mb-2">
                            {t('products.interceptionCapabilities')}
                        </h2>
                        <div className="space-y-6">
                        {operationalModeKeys.map((mode) => (
                            <div key={mode.titleKey}>
                            <h4 className="text-lg md:text-xl font-[400] text-white">
                                {t(mode.titleKey)}
                            </h4>
                            <p className="text-base md:text-md text-white/80 leading-relaxed">
                                {t(mode.descKey)}
                            </p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                <Slideshow
                    slides={[
                        { src: img1 },
                        { src: img2 },
                        { src: img3 }

                    ]}
                    delayMs={2000}
                    />
            </div>
        </section>
    )
}
