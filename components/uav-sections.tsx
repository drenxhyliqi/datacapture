'use client'

import Image from 'next/image'
import uavIcon from '@/assets/uavicon.svg'
import droneImage1 from '@/assets/uav-1.png'
import droneImage2 from '@/assets/uav-2.png'
import droneImage3 from '@/assets/uav-3.png'
import droneImage4 from '@/assets/uav-4.png'
import droneImage5 from '@/assets/uav-5.png'
import droneImage6 from '@/assets/uav-6.png'
import Slideshow from '@/components/slideshow'

const uavItems = [
  {
    name: 'FireHound Zero',
    shortDescription: 'Wildfire Prevention Autonomous Solar Drone',
    icon: uavIcon,
    image: droneImage1,
    range: '10 km',
    endurance: 'up to 15 hours',
    maxSpeed: '70 km/h',
    windResistance: '30 knots',
    desc1:
      'The FH-0 is a solar-powered, long-endurance UAV designed for autonomous wildfire surveillance and rapid detection. Capable of patrolling for up to 15 hours, it identifies heat sources in real time and instantly reports precise GPS coordinates to the operator.',
    desc2:
      'Lightweight, silent, and easily hand-launched by a single user, the system operates with minimal environmental impact. Equipped with a FLIR thermal sensor and patented onboard AI, it accurately distinguishes real fires from false positives, ensuring reliable alerts without constant operator attention.',
    desc3:
      'Secure 4G/5G connectivity enables centralized remote monitoring and coordinated control of multiple units. This creates an intelligent, scalable surveillance network optimized for protecting critical fire-prone areas.',
  },
  {
    name: 'Guardian',
    shortDescription: 'Long endurance Surveillance Solar Powered UAV',
    icon: uavIcon,
    image: droneImage2,
    range: '10 km',
    endurance: 'up to 15 hours',
    maxSpeed: '70 km/h',
    windResistance: '30 knots',
    desc1:
      'Guardian is a versatile, long-endurance UAV designed for professional surveillance and reconnaissance missions. Equipped with high-performance camera options, including 4K ultra-HD with stabilized zoom, infrared sensors, and advanced auto-tracking, it delivers sharp, detailed imagery in all lighting conditions. Its integrated solar panels enable up to eight hours of continuous flight, eliminating the need for frequent landings and battery changes.',
    desc2:
      'Lightweight, durable, and exceptionally quiet, Guardian is ideal for sensitive environments. The intuitive interface and precise navigation system allow easy operation, automated flight paths, and flexible mission planning. A retractable gimbal and simple launch and recovery make the system highly practical, even in confined or challenging locations.',
    desc3:
      'Guardian supports a wide range of applications, including area and asset surveillance, border security, search and rescue, infrastructure monitoring, and maritime operations. With real-time data transmission and exceptional endurance, it provides reliable, uninterrupted aerial awareness for critical missions, helping operators respond faster and more effectively.',
  },
  {
    name: 'Solar Mapper',
    shortDescription: 'Solar Drone for Photogrammetry of large Surfaces',
    icon: uavIcon,
    image: droneImage3,
    range: '10 km',
    endurance: 'up to 15 hours',
    maxSpeed: '70 km/h',
    windResistance: '30 knots',
    desc1:
      'SolarMapper is a professional fixed-wing UAV designed for efficient mapping of large areas. Unlike traditional multicopters limited by short battery life, SolarMapper uses patented solar technology to achieve up to four hours of continuous flight at 40 km/h. This enables fully automated mapping missions covering nearly four square kilometers in a single operation without interruption.',
    desc2:
      'Built as a quiet and lightweight platform, SolarMapper is ideal for use in sensitive environments where low noise and minimal disturbance are essential. The aircraft incorporates multiple safety systems, including electronic fail-safe functions and a durable, impact-resistant foam airframe, ensuring reliable and secure operations.Built as a quiet and lightweight platform, SolarMapper is ideal for use in sensitive environments where low noise and minimal disturbance are essential. The aircraft incorporates multiple safety systems, including electronic fail-safe functions and a durable, impact-resistant foam airframe, ensuring reliable and secure operations.',
    desc3:
      'Equipped with a high-resolution 26-megapixel Sony APS-C camera, SolarMapper captures sharp, detailed imagery for precise photogrammetry and 3D modeling. Mission planning and flight control are managed through a portable all-in-one ground station with real-time telemetry, HD video streaming, and a range of up to 10 kilometers, providing full control for large-scale mapping projects.',
  },
]

export default function UAVSections() {
  return (
    <section className="container mx-auto relative w-full py-10 lg:py-32 px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-6">
            {'Designed for operational missions'}
          </h2>
          <div className="max-w-6xl mx-auto space-y-3 text-base md:text-lg text-white/80">
            <p>
              {
                'Designed for mission-critical operations, this long-endurance solar-powered UAV delivers persistent aerial surveillance and reliable situational awareness. Equipped with customizable payload options, it adapts to any mission requirement, enhances operational effectiveness, supports flexible deployment strategies, and integrates seamlessly into existing security architectures.'
              }
            </p>
          </div>
        </div>

        {/* ALL UAVS */}
        <div className="space-y-20 lg:space-y-28 mb-30">
          {uavItems.map((uav) => {
            const stats = [
              { label: 'Radio range', value: uav.range },
              { label: 'Endurance', value: uav.endurance },
              { label: 'Maximum Speed', value: uav.maxSpeed },
              { label: 'Wind Resistance', value: uav.windResistance },
            ]

            return (
              <div key={uav.name} className="w-full">
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <h3 className="text-2xl sm:text-3xl font-medium text-white">
                      {uav.name}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-white/70">
                      {uav.shortDescription}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <div className="relative h-10 w-16 sm:h-12 sm:w-20">
                      <Image
                        src={uav.icon}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative mt-6 sm:mt-8 overflow-visible">
                    <div className="relative h-[120px] sm:h-[160px] md:h-[200px] lg:h-[220px] overflow-visible">
                        <Image
                        src={uav.image}
                        alt={uav.name}
                        fill
                        priority
                        sizes="(max-width: 100%) 100vw, 100%"
                        className="object-contain lg:object-cover -translate-y-6"
                        />
                    </div>
                </div>


                <div className="mt-10 grid grid-cols-2 gap-y-8 sm:flex sm:flex-wrap sm:justify-between">
                    {stats.map((s) => (
                        <div
                        key={s.label}
                        className="flex flex-col items-center text-center sm:w-auto"
                        >
                        <div className="text-white sm:text-xl lg:text-3xl">{s.label}</div>
                        <div className="mt-2 text-sm sm:text-base text-white/70">{s.value}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 space-y-4 text-sm sm:text-base leading-relaxed text-white/75">
                  <p>{uav.desc1}</p>
                  <p>{uav.desc2}</p>
                  <p>{uav.desc3}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Slideshow temporarily disabled; keep for future use */}
        {/*
        <Slideshow
          slides={[
            { src: droneImage4 },
            { src: droneImage5 },
            { src: droneImage6 },
          ]}
          delayMs={2000}
        />
        */}

      </div>
    </section>
  )
}
