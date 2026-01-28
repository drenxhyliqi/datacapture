'use client'

import Image from 'next/image'
import { GradientCard } from './ui/GradientCard'
import { ServiceBulletList } from './ui/ServiceBulletList'
import { ServiceItem } from './ui/services-data'

type ServiceCardProps = {
    service: ServiceItem
}

const iconMap: Record<string, React.ReactNode> = {
    datacenter: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <rect x="6" y="8" width="3" height="2" fill="currentColor" />
            <rect x="6" y="12" width="3" height="2" fill="currentColor" />
            <rect x="6" y="16" width="3" height="2" fill="currentColor" />
            <rect x="12" y="8" width="3" height="2" fill="currentColor" />
            <rect x="12" y="12" width="3" height="2" fill="currentColor" />
            <rect x="12" y="16" width="3" height="2" fill="currentColor" />
        </svg>
    ),
    ai: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                fill="currentColor"
            />
            <circle cx="9" cy="9" r="1.5" fill="currentColor" />
            <circle cx="15" cy="9" r="1.5" fill="currentColor" />
            <path d="M12 14c-2 0-3.5 1-3.5 2.5h7c0-1.5-1.5-2.5-3.5-2.5z" fill="currentColor" />
        </svg>
    ),
    cybersecurity: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path
                d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
                fill="currentColor"
            />
        </svg>
    ),
    software: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                fill="currentColor"
            />
        </svg>
    ),
    protecht: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
            />
        </svg>
    ),
    training: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path
                d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
                fill="currentColor"
            />
        </svg>
    ),
}

export function ServiceCard({ service }: ServiceCardProps) {
    const IconComponent = iconMap[service.icon] || null

    const textOrder = service.imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'
    const imageOrder = service.imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
            {/* TEXT CONTENT */}
            <div className={`order-1 ${textOrder}`}>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                        {IconComponent}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                </div>

                <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6">
                    {service.description}
                </p>

                <ServiceBulletList bullets={service.bullets} />
            </div>

            {/* IMAGE */}
            <div className={`order-2 ${imageOrder}`}>
                <GradientCard>
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </GradientCard>
            </div>
        </div>
    )
}
