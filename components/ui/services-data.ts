import { StaticImageData } from 'next/image'

// IMAGES (content) – from assets/services
import datacenterImage from '@/assets/services/datacenter.png'
import aiImage from '@/assets/services/ai.png'
import cybersecurityImage from '@/assets/services/cybersecurity.png'
import softwareImage from '@/assets/services/software.png'
import service2Image from '@/assets/services/service2.png'

// ICONS (SVG)
import datacenterIcon from '@/assets/service1.svg'
import aiIcon from '@/assets/service2.svg'
import cybersecurityIcon from '@/assets/service3.svg'

export type ServiceItem = {
  icon: StaticImageData | string
  title: string
  description: string
  bullets: string[]
  image: StaticImageData
  imagePosition: 'left' | 'right'
}

export const services: ServiceItem[] = [
  {
    icon: datacenterIcon,
    title: 'Datacenter',
    description:
      'DCS operates as a centralized command-and-control system that processes sensor data and presents it through a unified interface. Data storage and retention depend on the deployed hardware environment and available system capacity.',
    bullets: [
      'Centralized processing of sensor data',
      'Recorded operational data stored locally',
      'Retention period dependent on system storage capacity',
    ],
    image: datacenterImage,
    imagePosition: 'right',
  },
  {
    icon: aiIcon,
    title: 'AI',
    description:
      'Drone detection and monitoring data in DCS are provided directly by connected sensors and processed by the system. The use of artificial intelligence or machine learning is not specified in the system documentation.',
    bullets: [
      'Sensor-driven detection and data processing',
      'Automatic system naming of detected drones',
      'No AI or machine learning functionality specified',
    ],
    image: aiImage,
    imagePosition: 'left',
  },
  {
    icon: cybersecurityIcon,
    title: 'Cybersecurity',
    description:
      'DCS includes controlled access mechanisms and secure system update methods to support system integrity during operation and maintenance.',
    bullets: [
      'Role-based system access control',
      'Secure update via authorized VPN connection',
      'Authorized offline updates via USB',
    ],
    image: cybersecurityImage,
    imagePosition: 'right',
  },
  {
    icon: cybersecurityIcon,
    title: 'Software Solution',
    description:
      'DCS is a software-based command-and-control platform designed for monitoring, configuration, and post-operation review of drone activity.',
    bullets: [
      'Unified graphical user interface',
      'Real-Time, Mission, and Settings screens',
      'Map-based visualization of detected drones',
    ],
    image: softwareImage,
    imagePosition: 'left',
  },
  {
    icon: aiIcon,
    title: 'Training in Counter-Drone and Drones',
    description:
      'Training services related to counter-drone or drone operations are not defined within the DCS system documentation.',
    bullets: [
      'Training scope not specified in documentation',
      'Operational use described through system interface',
      'Additional training details available upon request',
    ],
    image: service2Image,
    imagePosition: 'right',
  },
]
