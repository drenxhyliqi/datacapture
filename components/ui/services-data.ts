import { StaticImageData } from 'next/image'

// IMAGES (content)
import serviceImage1 from '@/assets/service1.png'
import serviceImage2 from '@/assets/service2.png'
import droneImage from '@/assets/drone.png'

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
    image: serviceImage1,
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
    image: serviceImage2,
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
    image: droneImage,
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
    image: serviceImage1,
    imagePosition: 'left',
  },
  {
    icon: cybersecurityIcon,
    title: 'From Protecht',
    description:
      'DCS is designed and developed by Protecht as an integrated system for drone detection, monitoring, and data recording.',
    bullets: [
      'Integrated command-and-control platform',
      'System updates provided through authorized procedures',
      'Developed and maintained by Protecht',
    ],
    image: droneImage,
    imagePosition: 'right',
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
    image: serviceImage2,
    imagePosition: 'left',
  },
]
