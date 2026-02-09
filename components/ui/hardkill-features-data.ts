import { StaticImageData } from 'next/image'
import feature1Icon from '@/assets/hardkillcard-1.svg'
import feature2Icon from '@/assets/hardkillcard-2.svg'
import feature3Icon from '@/assets/hardkillcard-3.svg'
import feature4Icon from '@/assets/hardkillcard-4.svg'

export type HardkillFeature = {
    icon: StaticImageData
    title: string
    description: string
}

export const hardkillFeatures: HardkillFeature[] = [
    {
        icon: feature1Icon,
        title: 'DETECTION',
        description:
            'Advanced AI-driven software allows for minimal operator input - detects, tracks, identifies, and acquires targets autonomously only requiring an operator command to fire.',
    },
    {
        icon: feature2Icon,
        title: 'PASSIVE',
        description:
            'Equipped with a fully passive detection system, Bullfrog can discreetly identify and neutralize UxS threats without emitting detectable signals.',
    },
    {
        icon: feature3Icon,
        title: 'LIGHTWEIGHT',
        description:
            'Bullfrog easily integrates into any platform, is lightweight, low-power, and claims minimal space.',
    },
    {
        icon: feature4Icon,
        title: 'SCALABLE',
        description:
            'By utilizing existing service common weapons, Bullfrog offers a highly affordable solution, with a cost-per-kill as low as $10.',
    },
]
