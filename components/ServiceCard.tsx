'use client'

import Image from 'next/image'
import { GradientCard } from './ui/GradientCard'
import { ServiceBulletList } from './ui/ServiceBulletList'
import { ServiceItem } from './ui/services-data'

type ServiceCardProps = {
    service: ServiceItem
}

export function ServiceCard({ service }: ServiceCardProps) {
    const textOrder = service.imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'
    const imageOrder = service.imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
            <div className={`order-1 ${textOrder}`}>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                        <Image
                            src={service.icon}
                            alt=""
                            width={24}
                            height={24}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-[400] text-white">{service.title}</h3>
                </div>

                <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6">
                    {service.description}
                </p>

                <ServiceBulletList bullets={service.bullets} />
            </div>

            <div className={`order-2 ${imageOrder}`}>
                <GradientCard>
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover rounded-lg"
                        />
                    </div>
                </GradientCard>
            </div>
        </div>
    )
}
