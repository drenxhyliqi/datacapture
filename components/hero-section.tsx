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
        <div className="overflow-visible">
          <HeroBanner />
        </div>

        {/* Desktop blur shadows: only in DOM on lg+ (conditional render so not present on md and below) */}
        {isLg && (
          <div className="hero-blur-shadows absolute inset-0 pointer-events-none" aria-hidden="true">
            {/* LEFT blur shadow: fixed left edge, move up → hold 0.5s → fast down → hold 0.5s */}
            <div
              className="absolute left-10 top-110 pointer-events-none w-[200px] h-[165px]"
              role="presentation"
              style={{
                background:
                  "radial-gradient(ellipse 160px 100px at 25% 2%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.94) 30%, rgba(255, 255, 255, 0.96) 55%, transparent 30%)",
                filter: "blur(50px)",
                transform: "rotate(120deg)",
              }}
            />
            <div
              className="absolute left-35 top-155 pointer-events-none w-[200px] h-[165px]"
              role="presentation"
              style={{
                background:
                  "radial-gradient(ellipse 160px 100px at 25% 2%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.94) 30%, rgba(255, 255, 255, 0.96) 55%, transparent 100%)",
                filter: "blur(50px)",
                transform: "rotate(50deg)",
              }}
            />

            {/* RIGHT blur shadow: same animation reversed – moves down when left moves up */}
            <div
              className="absolute right-40 top-20 pointer-events-none w-[200px] h-[165px]"
              role="presentation"
              style={{
                background:
                  "radial-gradient(ellipse 160px 100px at 25% 2%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.94) 30%, rgba(255, 255, 255, 0.96) 55%, transparent 30%)",
                filter: "blur(50px)",
                transform: "rotate(10deg)",
              }}
            />
            <div
              className="absolute right-40 top-40 pointer-events-none w-[200px] h-[165px]"
              role="presentation"
              style={{
                background:
                  "radial-gradient(ellipse 160px 100px at 25% 2%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.94) 30%, rgba(255, 255, 255, 0.96) 55%, transparent 100%)",
                filter: "blur(50px)",
                transform: "rotate(100deg)",
              }}
            />
          </div>
        )}

        {/* HERO CONTENT – disappear/appear in sync with blur shadow movement (2s cycle). */}
        <div className="hero-content relative z-10 mx-auto flex min-h-[110vh] max-w-7xl items-start px-12 pt-24">
          <div className="absolute left-30 top-40">
            <div className="flex flex-col items-start gap-6">
              <div
                className="h-20 w-20 rounded-full p-[3px] flex items-center justify-center -ml-1"
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

            <div className="absolute left-0 top-58">
              {/* ADAPTIVE / SECURITY text */}
              <div className="space-y-5 text-[13px] font-light uppercase text-white tracking-[1.5em]">
                <div className="whitespace-nowrap">ADAPTIVE</div>
                <div className="whitespace-nowrap">SECURITY</div>
              </div>
            </div>
          </div>

          {/* Main content block – centered as a whole, left‑biased inside */}
          <div className="relative ml-[12rem] w-full">
            {/* AIR DEFENCE pill + Headline + Desktop CTA */}
            <div className="relative mb-8 flex" style={{ marginTop: '120px' }}>
              <div className="pl-[5em]">
                <div className="relative">
                  <h1 className="text-[5rem] font-[600] leading-[1] text-white">
                    <span className="block">{HEADING.line1}</span>
                    <span className="block">{HEADING.line2}</span>
                    <span className="block">{HEADING.line3}</span>
                  </h1>

                  {/* Desktop-only CTA positioned next to "Monitoring" – old single-button design */}
                  <div className="absolute -right-110 bottom-[-6.5em] hidden lg:block">
                    <div className="flex justify-center border-r border-l border-t border-white/20 rounded-full w-full px-4 py-1 mb-3">
                      <div className="relative inline-flex items-center w-full">
                        {/* Fading line + arrow to the left */}
                        <Image
                          src={arrowLeft}
                          alt="Arrow left"
                          width={100}
                          height={40}
                          className="object-contain"
                          style={{ width: 'auto', height: 'auto', marginLeft: '10px', marginRight: '50px' }}
                        />

                        {/* Main CTA button - positioned at the very end */}
                        <Link
                          href="/contact-us"
                          className="group relative inline-flex items-end px-6 rounded-full border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wide transition-all -mr-[0.625rem] translate-x-1"
                          style={{
                            background: 'linear-gradient(to top, rgb(35,35,35), #000000)',
                            paddingTop: '0.7rem',
                            paddingBottom: '0.7rem',
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
            <div className="mb-4 pl-[5.5em] max-w-[31rem] space-y-3 text-[15px] leading-relaxed">
              <p className="text-white">
                {SUBTEXT_LINES[0]}
              </p>
              <p className="text-[#A9A9A9]">
                {SUBTEXT_LINES[1]}
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

          {/* Mobile heading + drone badge on the right; tablet: centered text */}
          <div className="relative mb-6 w-full md:text-center">
            <h1 className="text-[2.75rem] leading-[1.05] font-[500] text-white md:text-center md:text-[3.5rem]">
              <span className="block">{HEADING.line1}</span>
              <span className="block">{HEADING.line2}</span>
              <span className="block">{HEADING.line3}</span>
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

          {/* CTA button - mobile only; hidden on tablet (md) */}
          <div className="mb-8 w-full md:hidden">
            <div className="flex justify-center border-r border-l border-t border-white/20 rounded-full w-full px-4 py-1">
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
                  href="/contact-us"
                  className="group relative inline-flex items-center px-6 rounded-full border border-white/20 text-white font-semibold text-xs uppercase tracking-wide transition-all ml-auto -mr-[0.625rem] translate-x-1"
                  style={{
                    background: 'linear-gradient(to top, rgb(35,35,35), #000000)',
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                    fontSize: '0.6rem',
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
