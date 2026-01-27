'use client'

import Image from 'next/image'
import { GradientCard } from './GradientCard'
import { Feature } from './features-data'

export function FeatureCard({ feature }: { feature: Feature }) {
    return (
        <GradientCard>
            {/* Icon */}
            <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 flex items-center justify-center">
                    <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={96}
                        height={96}
                        className="object-contain w-full h-full"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 text-center">
                <h3 className="text-xl font-bold mb-4 text-white">
                    {feature.title}
                </h3>

                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    {feature.description}
                </p>
            </div>
        </GradientCard>
    )
}