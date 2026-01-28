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
        title: 'Counter Drone',
        description:
            'DCS supports counter-drone operations by providing centralized detection, monitoring, and visualization of drone activity within a defined operational area.',
    },
    {
        icon: feature2Icon,
        title: 'Military & Civilian',
        description:
            'DCS is designed to operate within defined operational environments and supports configurable airspace monitoring requirements.',
    },
    {
        icon: feature3Icon,
        title: 'Johannes Information',
        description:
            'DCS collects and presents operational information provided by connected sensors through a unified graphical interface.',
    },
    {
        icon: feature4Icon,
        title: 'UAV',
        description:
            'DCS monitors unmanned aerial vehicle (UAV) activity detected by connected sensors within the monitored airspace. Detected UAVs are visualized on the operational map and tracked during system operation.',
    },
]
