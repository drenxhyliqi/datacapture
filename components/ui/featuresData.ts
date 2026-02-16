import { StaticImageData } from 'next/image'
import feature1Icon from '@/assets/feature1.svg'
import feature2Icon from '@/assets/feature2.svg'
import feature3Icon from '@/assets/feature3.svg'
import feature4Icon from '@/assets/feature4.svg'
import feature5Icon from '@/assets/feature5.svg'

export type Feature = {
    icon: StaticImageData
    title: string
    description: string
}

export const features: Feature[] = [
    {
        icon: feature1Icon,
        title: 'Real-Time Drone Visualization',
        description:
            'Displays detected drones on an operational map with live geographic context, including position and sensor-provided data.',
    },
    {
        icon: feature2Icon,
        title: 'Unified Operational Map',
        description:
            'Visualizes drones, No-Fly Zones, and sensor-related data using selectable map layers, including standard and satellite views.',
    },
    {
        icon: feature3Icon,
        title: 'Mission & No-Fly Zone Configuration',
        description:
            'Allows operators to define missions, select active sensors, and configure restricted airspace using circular or polygon zones.',
    },
    {
        icon: feature4Icon,
        title: 'Mitigation Status Display',
        description:
            'Shows mitigation status for detected drones, including jammer, spoofer, or no mitigation, based on externally defined actions.',
    },
    {
        icon: feature5Icon,
        title: 'Recorded Debrief & Post-Event Review',
        description:
            'Automatically records drone activity data for later review, including timestamps, movement, and geolocation.',
    },
]
