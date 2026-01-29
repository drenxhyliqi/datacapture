'use client'

import Image, { StaticImageData } from 'next/image'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import DiscussSection from '@/components/discussSection'
import metricsBackground from '@/assets/Metrics.png'
import ellipseShadow from '@/assets/Ellipse 8.svg'
import zapIcon from '@/assets/zap.png'
import icon2 from '@/assets/Icon (2).png'
import icon3 from '@/assets/Icon (3).png'
import icon4 from '@/assets/Icon (4).png'
import icon5 from '@/assets/Icon (5).png'
import icon6 from '@/assets/Icon (6).png'
import press1 from '@/assets/Press logo.png'
import press2 from '@/assets/Press logo-1.png'
import press3 from '@/assets/Press logo-2.png'
import pressGiz from '@/assets/Press logo (1).png'
import press5 from '@/assets/Press logo-4.png'
import { GradientCard } from './ui/GradientCard'
import solutionsHero from '@/assets/herosolutuion.png'

const SUBTEXT =
  'DCS provides centralized detection, visualization, and recording of drone activity within a defined operational area.'

const METRICS = [
  {
    title: 'Real-time Monitoring',
    description:
      'Live detection and visualization of drone activity within defined operational areas.',
  },
  {
    title: 'Centralized Control',
    description:
      'Unified command-and-control interface for monitoring, configuration, and review.',
  },
  {
    title: 'Recorded Operations',
    description:
      'Automatic recording of detected drone activity for post-operation analysis.',
  },
]

type ValueItem = {
  icon: StaticImageData
  title: string
  description: string
}

const VALUES: ValueItem[] = [
  {
    icon: icon2,
    title: 'Real-time monitoring',
    description:
      'Displays detected drones in real time using sensor-provided data within the operational map.',
  },
  {
    icon: zapIcon,
    title: 'Centralized graphical interface',
    description:
      'Operators access monitoring, mission configuration, and system settings through a unified GUI.',
  },
  {
    icon: icon3,
    title: 'Mission and airspace configuration',
    description:
      'Allows configuration of missions, sensor selection, and restricted airspace zones.',
  },
  {
    icon: icon4,
    title: 'Drone activity recording',
    description:
      'Automatically records detected drone activity for post-operation review.',
  },
  {
    icon: icon5,
    title: 'Mitigation status visibility',
    description:
      'Displays mitigation status associated with detected drones, as defined by external systems.',
  },
  {
    icon: icon6,
    title: 'Operationally focused system design',
    description:
      'Prioritizes operational clarity, predictable system behavior, and consistent data presentation.',
  },
]

const PRESS_LOGOS = [
  { name: 'The Washington Post', logo: press1 },
  { name: 'TechCrunch', logo: press2 },
  { name: 'Bloomberg', logo: press3 },
  { name: 'Gizmodo', logo: pressGiz },
  { name: 'Forbes', logo: press5 },
]

export default function CompanySection() {
  return (
    <div className="relative min-h-screen bg-[#101210] overflow-x-clip">
      {/* HERO */}
      <div className="relative">
        {/* HEADER */}
        <div className="relative z-30">
          <HeroHeader />
        </div>

        {/* HERO IMAGE */}
        <div className="pointer-events-none absolute inset-0 flex z-10 justify-center object-contain">
          <div className="relative w-[200vh] h-[80vh] py-30 aspect-square md:w-[150vh] md:h-[120vh] lg:w-[155vh] lg:h-[60vh] transform rotate-60 md:rotate-10 md:-top-20 lg:rotate-0 lg:py-0">
            <Image
              src={solutionsHero}
              priority
              alt="Company Hero"
              className="object-contain"
            />
          </div>
        </div>

        {/* HERO TEXT */}
        <div className="relative z-20 mx-auto max-w-4xl px-6 pt-30 md:pt-32 pb-24 text-center">
          <p className="text-white/70 tracking-widest text-sm md:text-base">
            FROM JOHANNES
          </p>
          <h1 className="mt-6 text-white text-4xl md:text-6xl font-semibold leading-tight">
            A command-and-control platform for <br className="hidden md:block" />
            drone detection and monitoring
          </h1>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            {SUBTEXT}
          </p>
        </div>
      </div>

      {/* STATIC RIGHT SHADOW (responsive + no overflow) */}
      <div className="pointer-events-none absolute inset-0 z-0 md:z-[15] overflow-visible">
        <div className="absolute right-5 top-100 w-[60vw] max-w-[700px] h-[200vh] aspect-square translate-x-1/2 -translate-y-1/20 opacity-80 blur-[80px]">
          <Image
            src={ellipseShadow}
            alt="Shadow effect"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* FEATURES (starts immediately after hero, no extra gap) */}
      <section className="relative overflow-hidden z-10">
        {/* LEFT MOVING SHADOW */}
        <div className="absolute -left-[5px] inset-0 pointer-events-none z-0 md:z-[15] overflow-hidden">
          <div
            className="absolute left-0 top-0 w-[70vw] max-w-[700px] h-full -translate-x-1/2 opacity-90"
            style={{ animation: 'slideVertical 5s linear infinite' }}
          >
            <Image
              src={ellipseShadow}
              alt="Shadow effect"
              fill
              className="object-contain"
              style={{ filter: 'blur(10px)' }}
            />
          </div>
        </div>

        <div className="relative z-10">
          {/* Metrics strip */}
          <section className="relative w-full bg-[#101210] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <GradientCard>
          <div className="relative overflow-hidden rounded-[16px]">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={metricsBackground}
                alt="Mountain landscape background"
                fill
                priority
                className="object-cover object-[65%_center] md:object-center"
              />
            </div>

            {/* Dark gradient overlay at bottom to fade into page background */}
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/10 to-[#101210]/60" />

            {/* Content */}
            <div className="relative z-10 px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
              <div className="grid w-full gap-4 sm:gap-6 lg:gap-8 md:grid-cols-3">
                {METRICS.map((metric) => (
                  <div
                    key={metric.title}
                    className="flex h-full min-h-[220px] max-w-[320px] w-full mx-auto flex-col justify-center gap-3 rounded-2xl bg-white/12 px-6 pt-10 pb-8 text-center text-white shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl border border-white/25"
                  >
                    <h3 className="mb-3 text-lg font-semibold sm:text-xl max-w-[14rem] mx-auto">
                      {metric.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/80 sm:text-base max-w-[16rem] mx-auto">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </GradientCard>
        </div>
      </section>

      {/* Values / features grid */}
      <section className="relative w-full bg-[#101210] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 sm:px-8 lg:px-12">
          {/* Heading */}
          <div className="mb-12 text-center text-white sm:mb-14 lg:mb-16">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-white/50">
              Our values
            </p>
            <h2 className="mb-4 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              An integrated platform for operational drone awareness.
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              DCS is designed with a focus on operational clarity, controlled access, and centralized
              data handling. System behavior and interface configuration are managed through defined
              settings and user roles.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid w-full gap-5 sm:gap-6 lg:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <GradientCard key={value.title}>
                <div className="flex h-full flex-col px-6 py-7 text-white shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
                  <div className="mb-5 flex justify-center">
                    {/* Multi-ring circular background */}
                    <div className="relative h-16 w-16">
                      {/* Outer glow ring */}
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            'radial-gradient(circle at 50% 10%, rgba(255,255,255,0.38), rgba(61,61,71,0.65) 45%, rgba(9,9,11,1) 80%)',
                        }}
                      />

                      {/* Inner dark circle */}
                      <div className="absolute inset-[4px] rounded-full bg-gradient-to-b from-[#2B2B2F] to-[#111111]" />

                      {/* Subtle bottom shadow */}
                      <div className="absolute -bottom-2 left-1/2 h-4 w-12 -translate-x-1/2 rounded-full bg-black/70 blur-[6px]" />

                      {/* Icon */}
                      <div className="relative z-10 flex h-full w-full items-center justify-center">
                        <Image
                          src={value.icon}
                          alt={value.title}
                          width={24}
                          height={24}
                          className="h-6 w-6 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-3 text-base font-semibold text-center sm:text-lg">
                    {value.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/75 text-center sm:text-sm">
                    {value.description}
                  </p>
                </div>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* Press mentions / sponsors */}
      <section className="w-full bg-[#101210] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 sm:px-8 lg:px-12">
          {/* Heading */}
          <div className="text-center text-white">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/60">
              We&apos;ve been mentioned in the press
            </p>
          </div>

          {/* Desktop / tablet: static row */}
          <div className="hidden w-full items-center justify-center gap-16 text-white md:flex lg:gap-16">
            {PRESS_LOGOS.map((press) => (
              <div key={press.name} className="flex items-center justify-center">
                <Image
                  src={press.logo}
                  alt={press.name}
                  width={180}
                  height={40}
                  className="h-8 w-auto object-contain sm:h-9 lg:h-10"
                />
              </div>
            ))}
          </div>

          {/* Mobile: infinite scrolling marquee */}
          <div className="block w-full overflow-hidden md:hidden">
            <div className="press-marquee flex w-max items-center gap-10 text-white">
              {[...PRESS_LOGOS, ...PRESS_LOGOS].map((press, idx) => (
                <div
                  key={`${press.name}-${idx}`}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={press.logo}
                    alt={press.name}
                    width={140}
                    height={32}
                    className="h-7 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

          {/* Discuss your operational requirements (reused) */}
          <DiscussSection />
        </div>
      </section>

      {/* Page footer */}
      <Footer />

      <style jsx global>{`
        @keyframes slideVertical {
          0% { transform: translateY(0%); }
          50% { transform: translateY(60%); }
        }
      `}</style>
    </div>
  )
}