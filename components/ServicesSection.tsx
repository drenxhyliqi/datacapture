'use client'

import { ServiceCard } from './serviceCard'
import { serviceConfigs } from './ui/servicesData'
import { useTranslations } from '@/lib/i18n/LocaleContext'

export default function ServicesSection() {
    const t = useTranslations()
    const services = serviceConfigs.map((config) => ({
        ...config,
        title: t(`services.${config.key}Title`),
        description: t(`services.${config.key}Desc`),
        bullets: [
            t(`services.${config.key}Bullet1`),
            t(`services.${config.key}Bullet2`),
            t(`services.${config.key}Bullet3`),
        ],
    }))
    return (
        <section className="relative w-full py-10 lg:py-32 px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-6">
                        {t('services.sectionTitle')}
                    </h2>
                    <div className="max-w-5xl mx-auto space-y-4 text-base md:text-lg text-white/80">
                        <p>{t('services.sectionP1')}</p>
                        <p>{t('services.sectionP2')}</p>
                    </div>
                </div>

                <div className="space-y-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
