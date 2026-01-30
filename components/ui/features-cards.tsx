'use client'

import Image from 'next/image'
import { GradientCard } from './GradientCard'
import { Feature } from './features-data'
import { SolutionFeature } from './solutions-features-data'

export function FeatureCard({ feature }: { feature: Feature | SolutionFeature }) {
    return (
        <GradientCard>
            {/* Icon */}
            <div className="mb-6 flex p-6 justify-center">
                <div className="w-[120px] h-[120px] flex items-center justify-center">
                    <Image
                        src={feature.icon}
                        alt={feature.title}
                        className="object-contain w-full h-full"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 text-center">
                <h3 className="text-xl font-[400] mb-4 text-white">
                    {feature.title}
                </h3>

                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    {feature.description}
                </p>
            </div>
        </GradientCard>
    )
}