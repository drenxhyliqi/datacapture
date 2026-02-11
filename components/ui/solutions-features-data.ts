import { StaticImageData } from 'next/image'
import feature1Icon from '@/assets/selections1.svg'
import feature2Icon from '@/assets/selections2.svg'
import feature3Icon from '@/assets/selections3.svg'
import feature4Icon from '@/assets/selections1.svg'

export type SolutionFeature = {
    icon: StaticImageData
    title: string
    description: string
}

export const solutionsFeatures: SolutionFeature[] = [
    {
        icon: feature1Icon,
        title: 'Detection',
        description:
            'Custom-tailored detection systems designed to identify drone and security threats with precision, reliability, and real-time operational awareness.',
    },
    {
        icon: feature2Icon,
        title: 'Identification',
        description:
            'Advanced AI-powered cameras and multi-sensor technologies enabling fast, accurate identification and classification of all potential threats.',
    },
    {
        icon: feature3Icon,
        title: 'Mitigation',
        description:
            'Comprehensive threat mitigation solutions, from soft-kill electronic countermeasures to hard-kill systems, ensuring complete neutralization.',
    },
    {
        icon: feature4Icon,
        title: 'UAV',
        description:
            'DCS monitors unmanned aerial vehicle (UAV) activity detected by connected sensors within the monitored airspace. Detected UAVs are visualized on the operational map and tracked during system operation.',
    },
]
