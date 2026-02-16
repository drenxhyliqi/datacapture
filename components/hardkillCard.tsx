'use client'

import Image from 'next/image'
import { GradientCard } from './ui/gradientCard'
import type { HardkillFeature } from './ui/hardkillFeaturesData'

type HardKillCardProps = {
    service: HardkillFeature
}

export function HardKillCard({ service }: HardKillCardProps) {
    return (
        <GradientCard>
            <div className="flex h-[17rem] flex-col items-start px-6 py-10 text-white shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
                <div className="mb-1 flex flex-row items-start text-start">
                    <div className="relative h-15 w-15">
                        <Image
                            src={service.icon}
                            alt={service.title}
                            width={100}
                            height={100}
                            className="h-10 w-10 object-contain"
                        />
                    </div>

                    <h3 className="text-white items-start font-bold lg:text-xl mt-1">
                        {service.title}
                    </h3>
                </div>

                <p className="text-xs leading-relaxed text-white/75 sm:text-sm">
                    {service.description}
                </p>
            </div>
        </GradientCard>
    )
}
