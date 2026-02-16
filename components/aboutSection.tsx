'use client'
import Image from 'next/image'
import { GradientLine } from '@/components/ui/gradientLine'
import { GradientCard } from './ui/gradientCard'
import { useTranslations } from '@/lib/i18n/LocaleContext'

export default function AboutSection() {
    const t = useTranslations()
    return (
        <section className="about-section relative w-full pt-8 pb-20 lg:pt-32 2xl:pt-20 px-6 lg:px-8 mt-[-46px] lg:mt-32 2xl:mt-12">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative">
                    <div className="relative z-10 pl-8 md:pl-12 py-10">
                        <GradientLine position="left" className="top-10" />
                        <div className="absolute -left-0 top-10 flex items-center justify-center pointer-events-none z-20">
                            <div className="w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
                        </div>

                        <h2 className="text-lg md:text-base font-[500] text-white mb-6 uppercase tracking-wide">
                            {t('about.title')}
                        </h2>

                        <h4 className="text-4xl md:text-4xl lg:text-5xl font-[600] text-white mb-8 leading-tight">
                            {t('about.headline')}
                        </h4>

                        <div className="space-y-6 text-lg md:text-lg text-[#D9D9D9] leading-relaxed">
                            <p>{t('about.p1')}</p>
                            <p>{t('about.p2')}</p>
                            <p>{t('about.p3')}</p>
                            <p>{t('about.p4')}</p>
                        </div>
                    </div>

                    <div className="about-section-image-wrap relative w-full lg:mt-[40%]">
                            <GradientCard>
                                <div className="relative h-[60vh] w-full min-h-[280px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/about-image.png"
                                    alt="Operational use"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover object-center"
                                    priority
                                />
                                </div>  
                            </GradientCard>
                        </div>
                   
                </div>
            </div>
        </section>
    )
}
