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
import { useTranslations } from '@/lib/i18n/LocaleContext'

const METRICS_KEYS = [
  { title: 'company.metric1Title', desc: 'company.metric1Desc' },
  { title: 'company.metric2Title', desc: 'company.metric2Desc' },
  { title: 'company.metric3Title', desc: 'company.metric3Desc' },
] as const

const _SUBTEXT_PLACEHOLDER =
  'At DCS, our mission is to meet every customer’s unique requirements, ensuring complete safety and protection.'

const METRICS = [
  {
    title: 'Real-time Monitoring',
    description:
      'Live detection and visualization of drone activity within defined operational areas.',
  },
  {
    title: 'Centralized Control',
    description:
      'A unified command-and-control interface for monitoring, configuration, and review.',
  },
  {
    title: 'Recorded Operations',
    description:
      'Rapid and precise neutralization of detected threats through integrated countermeasures and automated response systems.',
  },
]

const ABOUT_DCS_PARAGRAPHS = [
  'Data Capture Systems GmbH is a German technology company based in Munich, providing advanced security and technology solutions across airspace, digital, and operational domains. We specialize in drone systems, counter-UAS solutions, cybersecurity, AI-driven platforms, data center infrastructure, and proprietary command-and-control software, offering fully integrated and mission-ready solutions for governmental, military, maritime, and commercial clients worldwide.',
  'Our proprietary technologies are designed to detect, monitor, analyze, and mitigate emerging threats, combining cutting-edge sensors, AI analytics, and secure software systems to deliver reliable, real-time protection. Beyond drone defense, our solutions address the full spectrum of modern security challenges, including digital and cyber threats, operational risk management, and secure infrastructure operations.',
  'At DCS, innovation is at the core of everything we do. We continuously research and develop new solutions to stay ahead of evolving threats, providing our customers with future-proof, scalable, and fully integrated technologies. Our mission is to enable organizations to operate safely, efficiently, and resiliently in increasingly complex security environments.',
  'Looking forward, our goal is to establish Data Capture Systems GmbH as a global leader in integrated security solutions by combining technology, expertise, and international partnerships, making a lasting contribution to the safety and resilience of critical operations worldwide.',
]

export default function CompanySection() {
  const t = useTranslations()
  return (
    <div className="relative min-h-screen bg-[#101210] overflow-x-clip">
      {/* GLOBAL LEFT ANIMATED SHADOW – absolute so it scrolls with the page, under 3 cards */}
      <div className="pointer-events-none absolute inset-0 left-0 z-[30] overflow-visible">
        <div className="absolute left-0 top-[30%] h-[140vh] w-[70vw] max-w-[700px] -translate-x-1/2 animate-system-blur will-change-transform opacity-90">
          <Image
            src={ellipseShadow}
            alt="Global animated shadow"
            fill
            className="object-contain blur-[10px]"
          />
        </div>
      </div>

      {/* HERO */}
      <div className="relative">
        {/* HEADER – high z-index so navbar stays above feature cards on mobile and desktop */}
        <div className="relative z-[9998]">
          <HeroHeader />
        </div>
        <SecondHeroBanner />
        {/* HERO TEXT */}
        <div className="relative z-180 mx-auto max-w-xl pt-5 md:pt-5 pb-24 text-center">
          <p className="text-white tracking-widest text-sm md:text-base font-[400]">
            {t('company.label')}
          </p>
          <h1 className="mt-6 text-white text-xl md:text-6xl font-[400] leading-tight">
            {t('company.headline')} <br className="hidden md:block" />
            {t('company.headline2')}
          </h1>
          <p className="mt-6 text-white/60 max-w-md mx-auto">
            {t('company.subtext')}
          </p>
        </div>
      </div>

      {/* 3 CARDS – gradient card container above global shadow (z-[30]) */}
      <section className="relative w-full bg-[#101210] py-16 sm:py-20 lg:py-24 px-5 overflow-hidden">
        <div className="relative z-[150] mx-auto w-full max-w-7xl">
          <GradientCard>
            <div className="relative overflow-hidden rounded-[16px]">
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

              <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/10 to-[#101210]/60" />

              <div className="relative z-10 py-14 sm:py-16 lg:py-20 ">
                <div className="grid w-[90%] mx-auto gap-4 sm:gap-6 lg:gap-8 md:grid-cols-3">
                  {METRICS_KEYS.map((metric) => (
                    <div
                      key={metric.title}
                      className="flex h-full min-h-[200px] max-w-[420px] w-full mx-auto flex-col justify-center gap-1 rounded-2xl bg-white/12 px-6 pt-10 pb-8 text-center text-white shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl border border-white/25"
                    >
                      <h3 className="mb-3 text-lg font-[400] sm:text-xl text-content-width mx-auto text-wrap-natural">
                        {t(metric.title)}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/80 sm:text-base text-content-width mx-auto text-wrap-natural">
                        {t(metric.desc)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GradientCard>
        </div>
      </section>

      {/* About + Discuss – below the shadow (lower z-index) */}
      <section className="relative z-10 overflow-hidden">
        {/* About Data Capture Systems GmbH */}
        <section className="relative w-full bg-[#101210] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div
              className="about-dcs-fade-border rounded-2xl bg-[#121212] px-[30px] py-8 sm:py-10"
            >
              <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
                {t('company.aboutSectionTitle')}
              </h2>
              <div className="space-y-6 text-left text-white/95 text-[18px]">
                <p className="leading-relaxed">{t('company.aboutP1')}</p>
                <p className="leading-relaxed">{t('company.aboutP2')}</p>
                <p className="leading-relaxed">{t('company.aboutP3')}</p>
                <p className="leading-relaxed">{t('company.aboutP4')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Discuss your operational requirements (reused) */}
        <DiscussSection />
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