import { StaticImageData } from 'next/image'

import datacenterImage from '@/assets/services/datacenter.png'
import aiImage from '@/assets/services/ai.png'
import cybersecurityImage from '@/assets/services/cybersecurity.png'
import softwareImage from '@/assets/services/software.png'
import service2Image from '@/assets/services/service2.png'

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

export type ServiceKey = 'datacenter' | 'ai' | 'cybersecurity' | 'software' | 'training'

export const serviceConfigs: {
  key: ServiceKey
  icon: StaticImageData | string
  image: StaticImageData
  imagePosition: 'left' | 'right'
}[] = [
  { key: 'datacenter', icon: datacenterIcon, image: datacenterImage, imagePosition: 'right' },
  { key: 'ai', icon: aiIcon, image: aiImage, imagePosition: 'left' },
  { key: 'cybersecurity', icon: cybersecurityIcon, image: cybersecurityImage, imagePosition: 'right' },
  { key: 'software', icon: cybersecurityIcon, image: softwareImage, imagePosition: 'left' },
  { key: 'training', icon: aiIcon, image: service2Image, imagePosition: 'right' },
]
