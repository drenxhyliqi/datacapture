import { StaticImageData } from 'next/image'
import serviceIcon from '@/assets/service1.png'
import serviceIcon1 from '@/assets/service2.png'


export type ServiceItem = {
    icon: string // Icon name or path
    title: string
    description: string
    bullets: string[]
    image: StaticImageData
    imagePosition: 'left' | 'right'
}

export const services: ServiceItem[] = [
    {
        icon: 'datacenter',
        title: 'Datacenter',
        description:
            'DCS is a centralized command-and-control system that processes sensor data and presents it through a unified interface. Recorded operational data is stored locally within the system, with retention period dependent on system storage capacity.',
        bullets: [
            'Centralized processing of sensor data',
            'Recorded operational data stored locally',
            'Retention period dependent on system storage capacity',
        ],
        image: serviceIcon,
        imagePosition: 'right',
    },
    {
        icon: 'ai',
        title: 'AI',
        description:
            'Drone detection and monitoring data in DCS are provided directly by connected sensors and processed by the system. The use of artificial intelligence or machine learning is not specified in the system documentation.',
        bullets: [
            'Sensor-driven detection and data processing',
            'Automatic system naming of detected drones',
            'No AI or machine learning functionality specified',
        ],
        image: serviceIcon1,
        imagePosition: 'left',
    },
    {
        icon: 'cybersecurity',
        title: 'Cybersecurity',
        description:
            'DCS includes controlled access mechanisms and secure system update methods to support system integrity during operation and maintenance.',
        bullets: [
            'Role-based system access control',
            'Secure update via authorized VPN connection',
            'Authorized offline updates via USB',
        ],
        image: serviceIcon,
        imagePosition: 'right',
    },
    {
        icon: 'software',
        title: 'Software Solution',
        description:
            'DCS is a software-based command-and-control platform designed for monitoring, configuration, and post-operation review of drone activity.',
        bullets: [
            'Unified graphical user interface',
            'Real-Time, Mission, and Settings screens',
            'Map-based visualization of detected drones',
        ],
        image: serviceIcon1,
        imagePosition: 'left',
    },
    {
        icon: 'protecht',
        title: 'From Protecht',
        description:
            'DCS is designed and developed by Protecht as an integrated system for drone detection, monitoring, and data recording.',
        bullets: [
            'Integrated command-and-control platform',
            'System updates provided through authorized procedures',
            'Developed and maintained by Protecht',
        ],
        image: serviceIcon,
        imagePosition: 'right',
    },
    {
        icon: 'training',
        title: 'Trainings in Counter Drone and Drones',
        description:
            'Training services related to counter-drone or drone operations are not defined within the DCS system documentation.',
        bullets: [
            'Training scope not specified in documentation',
            'Operational use described through system interface',
            'Additional training details available upon request',
        ],
        image: serviceIcon1,
        imagePosition: 'left',
    },
]
