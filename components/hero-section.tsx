'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import arrowLeft from '@/assets/array.png'
import Image from 'next/image'
import droneIcon from '@/assets/selections1.svg'
import { useMediaQuery, LG_QUERY } from '@/lib/useMediaQuery'
import HeroBanner from '@/components/ui/hero-banner'


const HEADING = {
  line1: 'Engineering',
  line2: 'the Future',
  line3: 'of Security',
}

const SUBTEXT_LINES = [
  'A Company with selected partners securing airspace, cyber, data, and critical infrastructure through advanced engineering and innovation.',
  'A centralized system for real-time drone detection, visualization, and post-event analysis within defined operational areas.',
]

export default function HeroSection() {
  const isLg = useMediaQuery(LG_QUERY)

  return (
    <>
      {/* DESKTOP HERO (lg+) – section hidden on md and below via Tailwind */}
      <section className="hidden lg:block relative min-h-[110vh] overflow-visible">
        {/* BACKGROUND: HeroBanner – absolute, z-0, behind all content */}
        <div className="absolute inset-0 overflow-visible pointer-events-none">
          <HeroBanner />
        </div>

        {/* Desktop blur shadows: only in DOM on lg+ (conditional render so not present on md and below) */}
        {isLg && (
          <div className="hero-blur-shadows absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* LEFT blur shadow: fixed left edge, move up → hold 0.5s → fast down → hold 0.5s */}
            <div
              key="hero-shadow-left"
              className="hero-shadow hero-shadow-left animate-hero-shadow-up absolute left-55 top-[60%] pointer-events-none w-[200px] h-[165px]"
              role="presentation"
              style={{
                background:
                  "radial-gradient(ellipse 110px 110px at 25% 2%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.94) 30%, rgba(255, 255, 255, 0.96) 55%, transparent 80%)",
                filter: "blur(38px)",
                clipPath: "ellipse(185px 185px at 20% 50%)",
              }}
            />
            {/* RIGHT blur shadow: same animation reversed – moves down when left moves up */}
            <div
              key="hero-shadow-right"
              className="hero-shadow hero-shadow-right animate-hero-shadow-down absolute right-40 top-[20%] pointer-events-none w-[200px] h-[165px]"
              role="presentation"
              style={{
                background:
                  "radial-gradient(ellipse 110px 110px at 45% 2%, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 30%, rgb(255, 255, 255) 55%, transparent 80%)",
                filter: "blur(38px)",
                clipPath: "ellipse(245px 245px at 40% 50%)",
              }}
            />
          </div>
        )}

        {/* HERO CONTENT – disappear/appear in sync with blur shadow movement (2s cycle). */}
        <div className="hero-content relative z-10 mx-auto flex min-h-[110vh] max-w-7xl items-start px-12 pt-24">
          <div className="absolute left-0 top-28">
            <div className="flex flex-col items-start gap-6">
            <div
              className="hero-drone-badge h-20 w-20 rounded-full p-[3px] flex items-center justify-center -ml-1"
              style={{ backgroundColor: '#313331' }}
            >
              <div
                className="h-[100%] w-[100%] rounded-full flex items-center justify-center"
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

              {/* ADAPTIVE / SECURITY text */}
              <div className="mt-54 space-y-6 text-[13px] font-light uppercase text-white/80 tracking-[2em]">
                <div className="whitespace-nowrap">ADAPTIVE</div>
                <div className="whitespace-nowrap">SECURITY</div>
              </div>
            </div>
          </div>

          {/* Main content block – centered as a whole, left‑biased inside */}
          <div className="relative ml-[12rem] w-full">
            {/* AIR DEFENCE pill + Headline + Desktop CTA */}
            <div className="relative mb-8 mt-4 flex">
              <div className="pl-[2em]">
                <div className="mb-4">
                  <span
                    className="inline-flex items-center rounded-full border px-5 py-1.5 text-[11px] uppercase font-medium tracking-[0.2em] text-white"
                    style={{
                      background: 'linear-gradient(to top, rgb(35,35,35), #000000)',
                      borderColor: '#313331',
                    }}
                  >
                    Air Defence
                  </span>
                </div>
                <div className="relative inline-block mx-auto items-center justify-center">
                  <h1 className="text-[7rem] font-[500] leading-[1] text-white text-start">
                    <span className="block">{HEADING.line1}</span>
                    <span className="block">{HEADING.line2}</span>
                    <span className="block">{HEADING.line3}</span>
                  </h1>

                  {/* Desktop-only CTA positioned next to "Monitoring" – old single-button design */}
                  <div className="absolute -right-98 bottom-[-6.5em] hidden lg:block">
                    <div className="flex justify-center border-r border-l border-t border-white/20 rounded-full w-full px-4 py-1 mb-3">
                      <div className="relative inline-flex items-center w-full gap-2">
                        {/* Fading line + arrow to the left */}
                        <Image
                          src={arrowLeft}
                          alt="Arrow left"
                          width={150}
                          height={40}
                          className="object-contain"
                          style={{ width: 'auto', height: 'auto' }}
                        />

                        {/* Main CTA button - positioned at the very end */}
                        <Link
                          href="#"
                          className="group relative inline-flex items-end px-6 rounded-full border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wide transition-all ml-auto -mr-[0.625rem] translate-x-1"
                          style={{
                            background: 'linear-gradient(to top, rgb(35,35,35), #000000)',
                            paddingTop: '1rem',
                            paddingBottom: '1rem',
                          }}
                        >
                          <span className="relative z-10">Get Protected Today</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Body text */}
            <div className="mb-4 pl-[2.5em] max-w-[34rem] space-y-3 text-[17px] leading-relaxed">
              <p className="text-[#C8C8C8]">
                {SUBTEXT_LINES[0]}
              </p>
              <p className="text-[#A9A9A9]">
                {SUBTEXT_LINES[1]}
              </p>
            </div>

            {/* Stats – desktop, right-aligned like reference */}
            <div className="flex items-center justify-end gap-8 pr-12 text-[1em] tracking-[0.35em] uppercase text-white/50 mb-10 ">
              <span>
                <span className="font-semibold text-white mr-1">1.600+</span>
                USER ACTIVE
              </span>
              <span className="text-white/40">+</span>
              <span>
                <span className="font-semibold text-white mr-1">300+</span>
                TECHNOLOGIES
              </span>
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
          {/* AIR DEFENCE pill */}
          <div className="mb-6 flex justify-center">
            <span
              className="inline-flex items-center rounded-full border px-4 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white"
              style={{
                background: 'linear-gradient(to top, rgb(35,35,35), #000000)',
                borderColor: '#313331',
              }}
            >
              AIR DEFENCE
            </span>
          </div>

          {/* Mobile heading + drone badge on the right; tablet: centered text */}
          <div className="relative mb-6 w-full md:text-center">
            <h1 className="text-[2.75rem] leading-[1.05] font-[500] text-white md:text-center md:text-[3.5rem]">
              <span className="block">{HEADING.line1}</span>
              <span className="block">{HEADING.line2}</span>
              <span className="block">{HEADING.line3}</span>
            </h1>

            {/* Drone badge: right-aligned on mobile and tablet */}
            <div className="absolute right-0 top-[5.5rem]">
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

          {/* CTA button - mobile only; hidden on tablet (md) */}
          <div className="mb-8 w-full md:hidden">
            <div className="flex justify-center border-r border-l border-t border-white/20 rounded-full w-full px-3 py-1">
              <div className="relative inline-flex items-center w-full gap-2">
                {/* Fading line + arrow to the left */}
                <Image
                  src={arrowLeft}
                  alt="Arrow left"
                  width={100}
                  height={30}
                  className="object-contain"
                  style={{ width: 'auto', height: 'auto' }}
                />

                {/* Main CTA button - positioned at the very end */}
                <Link
                  href="#"
                  className="group relative inline-flex items-center px-6 rounded-full border border-white/20 text-white font-semibold text-xs uppercase tracking-wide transition-all ml-auto -mr-[0.625rem] translate-x-1"
                  style={{
                    background: 'linear-gradient(to top, rgb(35,35,35), #000000)',
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                  }}
                >
                  <span className="relative z-10">Get Protected Today</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Body text – left on mobile, centered on tablet; larger on tablet */}
          <div className="mb-8 space-y-3 text-[17px] leading-relaxed md:text-center md:mx-auto md:text-[18px] max-w-[34rem]">
            <p className="text-[#C8C8C8]">
              {SUBTEXT_LINES[0]}
            </p>
            <p className="text-[#A9A9A9]">
              {SUBTEXT_LINES[1]}
            </p>
          </div>

          {/* Stats – mobile stacked; tablet centered */}
          <div className="flex flex-col gap-2 text-[1em] tracking-[0.3em] uppercase text-white/60 md:items-center md:text-center">
            <span>
              <span className="font-semibold text-white mr-1">1.600+</span>
              USER ACTIVE
            </span>
            <span>
              <span className="font-semibold text-white mr-1">300+</span>
              TECHNOLOGIES
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
