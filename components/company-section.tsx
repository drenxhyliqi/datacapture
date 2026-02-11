'use client'

import Image from 'next/image'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import DiscussSection from '@/components/discussSection'
import metricsBackground from '@/assets/Metrics.png'
import ellipseShadow from '@/assets/Ellipse 8.svg'
import { GradientCard } from './ui/GradientCard'
import solutionsHero from '@/assets/herosolutuion.png'
import SecondHeroBanner from './ui/second-hero-banner'

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

const ABOUT_DCS_PARAGRAPHS = [
  'Data Capture Systems GmbH is a German technology company based in Munich, providing advanced security and technology solutions across airspace, digital, and operational domains. We specialize in drone systems, counter-UAS solutions, cybersecurity, AI-driven platforms, data center infrastructure, and proprietary command-and-control software, offering fully integrated and mission-ready solutions for governmental, military, maritime, and commercial clients worldwide.',
  'Our proprietary technologies are designed to detect, monitor, analyze, and mitigate emerging threats, combining cutting-edge sensors, AI analytics, and secure software systems to deliver reliable, real-time protection. Beyond drone defense, our solutions address the full spectrum of modern security challenges, including digital and cyber threats, operational risk management, and secure infrastructure operations.',
  'At DCS, innovation is at the core of everything we do. We continuously research and develop new solutions to stay ahead of evolving threats, providing our customers with future-proof, scalable, and fully integrated technologies. Our mission is to enable organizations to operate safely, efficiently, and resiliently in increasingly complex security environments.',
  'Looking forward, our goal is to establish Data Capture Systems GmbH as a global leader in integrated security solutions by combining technology, expertise, and international partnerships, making a lasting contribution to the safety and resilience of critical operations worldwide.',
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

        <SecondHeroBanner />
        {/* HERO TEXT */}
        <div className="relative z-20 mx-auto max-w-6xl pt-30 md:pt-5 pb-24 text-center">
          <p className="text-white tracking-widest text-sm md:text-base">
            FROM JOHANNES
          </p>
          <h1 className="mt-6 text-white text-3xl md:text-6xl font-semibold leading-tight">
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
            sizes="(max-width: 520px) 100vw, 520px"
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
        <div className="mx-auto w-full max-w-7xl">
          <GradientCard>
          <div className="relative overflow-hidden rounded-[16px]">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={metricsBackground}
                alt="Mountain landscape background"
                fill
                sizes="100vw"
                priority
                className="object-cover object-[65%_center] md:object-center"
              />
            </div>

            {/* Dark gradient overlay at bottom to fade into page background */}
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/10 to-[#101210]/60" />

            {/* Content */}
            <div className="relative z-10 py-14 sm:py-16 lg:py-20">
              <div className="grid w-full gap-4 sm:gap-6 lg:gap-8 md:grid-cols-3">
                {METRICS.map((metric) => (
                  <div
                    key={metric.title}
                    className="flex h-full min-h-[220px] max-w-[320px] w-full mx-auto flex-col justify-center gap-3 rounded-2xl bg-white/12 px-6 pt-10 pb-8 text-center text-white shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl border border-white/25"
                  >
                    <h3 className="mb-3 text-lg font-[400] sm:text-xl max-w-[14rem] mx-auto">
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

      {/* About Data Capture Systems GmbH */}
      <section className="relative w-full bg-[#101210] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div
            className="about-dcs-fade-border rounded-2xl bg-[#121212] px-[30px] py-8 sm:py-10"
          >
            <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
              About Data Capture Systems GmbH
            </h2>
            <div className="space-y-6 text-left text-white/95 text-[18px]">
              {ABOUT_DCS_PARAGRAPHS.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
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
        .about-dcs-fade-border {
          position: relative;
        }
        .about-dcs-fade-border::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 1px solid rgba(255, 255, 255, 0.22);
          pointer-events: none;
          z-index: 1;
          mask-image: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
          mask-size: 100% 100%;
          -webkit-mask-size: 100% 100%;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
        }
      `}</style>
    </div>
  )
}