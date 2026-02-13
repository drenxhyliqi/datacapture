'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import arrowLeft from '@/assets/array.png'
import Image from 'next/image'
import droneIcon from '@/assets/selections1.svg'
import { useMediaQuery, LG_QUERY } from '@/lib/useMediaQuery'
import HeroBanner from '@/components/ui/hero-banner'
import { useTranslations } from '@/lib/i18n/LocaleContext'

export default function HeroSection() {
  const isLg = useMediaQuery(LG_QUERY)
  const t = useTranslations()

  return (
    <>
      {/* DESKTOP HERO (lg+) – section hidden on md and below via Tailwind */}
      <section className="hero-desktop-section hidden lg:block relative min-h-[110vh] 2xl:min-h-[100vh] overflow-visible">
        {/* BACKGROUND: HeroBanner – absolute, z-0, behind all content */}
        <div className="overflow-visible">
          <HeroBanner />
        </div>

        {/* Desktop blur shadows: only in DOM on lg+ (conditional render so not present on md and below) */}
        {isLg && (
          <div className="hero-blur-shadows absolute inset-0 pointer-events-none lg:hidden 2xl:block" aria-hidden="true">
            {/* LEFT blur shadow: move up → hold → down (uses --animate-hero-shadow-up) */}
            <div className="hero-shadow-left absolute left-10 top-110 pointer-events-none" role="presentation">
              <div
                className="pointer-events-none w-[200px] h-[165px]"
                style={{
                  background:
                    "radial-gradient(ellipse 160px 100px at 25% 2%, rgba(249, 249, 249, 0.95) 0%, rgba(249, 249, 249, 0.94) 30%, rgba(249, 249, 249, 0.96) 55%, transparent 30%)",
                  filter: "blur(50px)",
                  transform: "rotate(120deg)",
                }}
              />
            </div>
            <div className="hero-shadow-left absolute left-35 top-155 pointer-events-none" role="presentation">
              <div
                className="pointer-events-none w-[200px] h-[165px]"
                style={{
                  background:
                    "radial-gradient(ellipse 160px 100px at 25% 2%, rgba(249, 249, 249, 0.95) 0%, rgba(249, 249, 249, 0.94) 30%, rgba(249, 249, 249, 0.96) 55%, transparent 100%)",
                  filter: "blur(50px)",
                  transform: "rotate(50deg)",
                }}
              />
            </div>

            {/* RIGHT blur shadow: moves down when left moves up (uses --animate-hero-shadow-down) */}
            <div className="hero-shadow-right absolute right-40 top-20 pointer-events-none" role="presentation">
              <div
                className="pointer-events-none w-[200px] h-[165px]"
                style={{
                  background:
                    "radial-gradient(ellipse 160px 100px at 25% 2%, rgba(249, 249, 249, 0.95) 0%, rgba(249, 249, 249, 0.94) 30%, rgba(249, 249, 249, 0.96) 55%, transparent 30%)",
                  filter: "blur(50px)",
                  transform: "rotate(10deg)",
                }}
              />
            </div>
            <div className="hero-shadow-right absolute right-40 top-40 pointer-events-none" role="presentation">
              <div
                className="pointer-events-none w-[200px] h-[165px]"
                style={{
                  background:
                    "radial-gradient(ellipse 160px 100px at 25% 2%, rgba(249, 249, 249, 0.95) 0%, rgba(249, 249, 249, 0.94) 30%, rgba(249, 249, 249, 0.96) 55%, transparent 100%)",
                  filter: "blur(50px)",
                  transform: "rotate(100deg)",
                }}
              />
            </div>
          </div>
        )}

        {/* HERO CONTENT – disappear/appear in sync with blur shadow movement (2s cycle). */}
        <div className="hero-content relative z-10 mx-auto flex min-h-[110vh] 2xl:min-h-[100vh] max-w-7xl items-start px-12 pt-24">
          <div className="hero-left-column absolute left-30 top-40">
            <div className="flex flex-col items-start gap-6">
              <div
                className="hero-drone-badge h-20 w-20 rounded-full p-[3px] flex items-center justify-center -ml-1"
                style={{ backgroundColor: '#313331' }}
              >
                <div
                  className="h-[80%] w-[80%] rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(to top, rgb(35,35,35), #000000)',
                  }}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full">
                    <Image
                      src={droneIcon}
                      alt="Drone icon"
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain p-1.5"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-[-2.6em] top-45">
              {/* ADAPTIVE / SECURITY text */}
              <div className="space-y-6 text-[13px] font-light uppercase text-white tracking-[1.9em]">
                <div className="whitespace-nowrap">{t('hero.adaptive')}</div>
                <div className="whitespace-nowrap">{t('hero.security')}</div>
              </div>
            </div>
          </div>

          {/* Main content block – 2-column layout on lg+ so CTA position is independent of headline width */}
          <div className="relative ml-[12rem] w-full">
            {/* Desktop (lg+): grid – col1 = headline (max 65ch), col2 = CTA (fixed horizontal position) */}
            <div className="hero-headline-block mt-[120px] 2xl:mt-16 mb-2 lg:grid lg:grid-cols-[minmax(0,65ch)_auto] lg:gap-8 lg:items-end">
              {/* Column 1: Headline only – wraps naturally by container, no fixed line breaks */}
              <div className="pl-[5em] min-w-0 text-content-width">
                <h1 className="text-[5rem] font-[600] leading-[1] text-white text-wrap-natural">
                  <span className="block">{t('hero.line1')}</span>
                  <span className="block">{t('hero.line2')}</span>
                  <span className="block">{t('hero.line3')}</span>
                </h1>
              </div>

              {/* Column 2: CTA – positioned by grid column only, no dependency on headline or text width */}
              <div className="hidden lg:flex flex-shrink-0 items-center pt-[0.5rem]">
                <div className="flex justify-center border-r border-l border-t border-white/20 rounded-full px-4 py-1">
                  <div className="inline-flex items-center gap-8">
                    <Image
                      src={arrowLeft}
                      alt="Arrow left"
                      width={100}
                      height={40}
                      className="object-contain flex-shrink-0"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                    <Link
                      href="/contact-us"
                      className="group relative inline-flex items-center justify-center px-6 rounded-full border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wide transition-all whitespace-nowrap flex-shrink-0"
                      style={{
                        background: 'linear-gradient(to top, rgb(35,35,35), #000000)',
                        paddingTop: '0.7rem',
                        paddingBottom: '0.7rem',
                      }}
                    >
                      <span className="relative z-10">{t('hero.cta')}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Body text – max-width in ch for natural wrap in EN/DE */}
            <div className="mb-4 pl-[5.5em] text-content-width space-y-3 text-[15px] leading-relaxed text-wrap-natural">
              <p className="text-white">
                {t('hero.subtext1')}
              </p>
              <p className="text-[#A9A9A9]">
                {t('hero.subtext2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE HERO ( < lg ) – no animations on mobile, static content only */}
      <section className="block lg:hidden relative overflow-visible">

        {/* BACKGROUND: HeroBanner – absolute, z-0, behind all content */}
        <div className="absolute inset-0 overflow-visible pointer-events-none">
          <HeroBanner />
        </div>
        {/* Left-side mobile blur – extends so it doesn’t look cut, fades to transparent */}
        <div
          className="hidden absolute -left-[40px] top-24 w-[240px] h-[200px] z-[5] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 65% 60% at 35% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.12) 35%, transparent 60%)',
            filter: 'blur(36px)',
          }}
        />
        <div className="hero-content relative mx-auto flex min-h-[95vh] max-w-7xl flex-col px-6 pt-24 md:pb-6 md:items-center">
          {/* AIR DEFENCE pill – hidden on small and medium (desktop-only above) */}
          <div className="hidden" />

          {/* Mobile heading – max-width in ch for natural wrap in EN/DE */}
          <div className="relative mb-6 w-full text-content-width md:text-center md:mx-auto">
            <h1 className="text-[2.75rem] leading-[1.05] font-[500] text-white md:text-center md:text-[3.5rem] text-wrap-natural">
              <span className="block">{t('hero.line1')}</span>
              <span className="block">{t('hero.line2')}</span>
              <span className="block">{t('hero.line3')}</span>
            </h1>

            {/* Drone badge: right-aligned on mobile and tablet */}
            <div className="absolute right-0 top-[3.5rem]">
              <div
                className="h-20 w-20 rounded-full p-[3px] flex items-center justify-center"
                style={{ backgroundColor: '#313331' }}
              >
                <div
                  className="h-[80%] w-[80%] rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(to top, rgb(35,35,35), #000000)',
                  }}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full">
                    <Image
                      src={droneIcon}
                      alt="Drone icon"
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Body text – max-width in ch for natural wrap in EN/DE */}
          <div className="mb-8 space-y-3 text-[17px] leading-relaxed md:text-center md:mx-auto md:text-[18px] text-content-width text-wrap-natural">
            <p className="text-[#C8C8C8]">
              {t('hero.subtext1')}
            </p>
            <p className="text-[#A9A9A9]">
              {t('hero.subtext2')}
            </p>
          </div>

          {/* CTA button – mobile only, last in section (after header and paragraph) */}
          <div className="mb-8 w-full md:hidden">
            <div className="flex justify-center border-r border-l border-t border-white/20 rounded-full w-full px-4 py-1">
              <div className="relative inline-flex items-center w-full gap-2">
                <Image
                  src={arrowLeft}
                  alt="Arrow left"
                  width={100}
                  height={30}
                  className="object-contain"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <Link
                  href="/contact-us"
                  className="group relative inline-flex items-center px-6 rounded-full border border-white/20 text-white font-semibold text-xs uppercase tracking-wide transition-all ml-auto -mr-[0.625rem] translate-x-1"
                  style={{
                    background: 'linear-gradient(to top, rgb(35,35,35), #000000)',
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                    fontSize: '0.6rem',
                  }}
                >
                  <span className="relative z-10">{t('hero.cta')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}