'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import arrowLeft from '@/assets/array.png'
import Image from 'next/image'
import droneIcon from '@/assets/selections1.svg'


const HEADING = {
  line1: 'Command &',
  line2Prefix: 'Control for ',
  line2Emphasis: 'Drone',
  line3: 'Detection and',
  line4: 'Monitoring',
}

const SUBTEXT_LINES = [
  'A centralized system for real-time drone detection,',
  'visualization, and post-event analysis within defined',
  'operational areas.',
]

export default function HeroSection() {
  return (
    <>
    <style jsx global>{`
  @keyframes shadowRightFast {
    0%   { offset-distance: 0%; }
    8%   { offset-distance: 100%; }  /* fast move */
    45%  { offset-distance: 100%; }  /* hold */
    55%  { offset-distance: 0%; }    /* fast back */
    100% { offset-distance: 0%; }    /* hold */
  }

  @keyframes shadowLeftFast {
    0%   { offset-distance: 100%; }  /* start opposite end */
    8%   { offset-distance: 0%; }
    45%  { offset-distance: 0%; }
    55%  { offset-distance: 100%; }
    100% { offset-distance: 100%; }
  }

  /* Content shows when LEFT shadow is "up" (match the same timing) */
  @keyframes heroContentToggle {
    0%   { opacity: 1; visibility: visible; transform: translateY(0); }
    8%   { opacity: 0; visibility: hidden; transform: translateY(6px); }
    45%  { opacity: 0; visibility: hidden; transform: translateY(6px); }
    55%  { opacity: 1; visibility: visible; transform: translateY(0); }
    100% { opacity: 1; visibility: visible; transform: translateY(0); }
  }

  /* Motion paths */
  .shadow-path-right {
    offset-path: path("M 1400 440 Q 1400 100 1200 0 ");
    offset-rotate: 0deg;
  }
  .shadow-path-left {
    offset-path: path("M 500 250 Q 220 300 700 600");
    offset-rotate: 0deg;
  }

  .hero-shadow {
    will-change: offset-distance, opacity, transform;
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-shadow { animation: none !important; }
    .hero-content { animation: none !important; opacity: 1 !important; visibility: visible !important; transform: none !important; }
  }
`}</style>

      {/* DESKTOP HERO (lg+) */}
      <section className="hidden lg:block relative overflow-visible">
        {/* RIGHT shadow (uses RIGHT path + RIGHT animation) */}
        <div
          className="hero-shadow shadow-path-right pointer-events-none absolute top-0 left-0 z-[5] w-[200px] h-[150px]"
          style={{
            background:
              "radial-gradient(ellipse 200px 150px at 50% 50%, rgba(255,255,255,0.27) 0%, rgba(255,255,255,0.18) 40%, transparent 70%)",
            filter: "blur(50px)",
            clipPath: "ellipse(300px 250px at 90% 90%)",
            animation: "shadowRightFast 3s cubic-bezier(0.2,0.8,0.2,1) infinite reverse",
            animationFillMode: "both",
          }}
        />

        {/* LEFT shadow (uses LEFT path + LEFT animation) */}
        <div
          className="hero-shadow shadow-path-left pointer-events-none absolute top-0 left-0 z-[5] w-[200px] h-[150px]"
          style={{
            background:
              "radial-gradient(ellipse 200px 150px at 50% 50%, rgba(255,255,255,0.27) 0%, rgba(255,255,255,0.18) 40%, transparent 70%)",
            filter: "blur(30px)",
            clipPath: "ellipse(300px 250px at 10% 90%)",
            animation: "shadowLeftFast 3s cubic-bezier(0.2,0.8,0.2,1) infinite",
            animationFillMode: "both",
          }}
        />

        {/* HERO CONTENT toggles with animation */}
        <div
          className="hero-content relative mx-auto flex min-h-[80vh] max-w-7xl items-start px-12 pt-24"
          style={{
            animation: "heroContentToggle 3s ease-in-out infinite",
            animationFillMode: "both",
          }}
        >
          <div className="absolute left-0 top-28">
            <div className="flex flex-col items-start gap-6">
              <div
                className="h-16 w-16 rounded-full p-[3px] flex items-center justify-center -ml-1"
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
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* ADAPTIVE / SECURITY text */}
              <div className="mt-48 space-y-6 text-[11px] font-light uppercase text-white/80 tracking-[2em]">
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
                  <h1 className="text-[4.5rem] font-[400] leading-[1] text-white text-start">
                    <span className="block">{HEADING.line1}</span>
                    <span className="block">
                      {HEADING.line2Prefix}
                      <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                        {HEADING.line2Emphasis}
                      </span>
                    </span>
                    <span className="block">{HEADING.line3}</span>
                    <span className="block">{HEADING.line4}</span>
                  </h1>

                  {/* Desktop-only CTA positioned next to "Monitoring" – old single-button design */}
                  <div className="absolute -right-35 bottom-[-1em] hidden lg:block">
                    <div className="flex justify-center border-r border-l border-t border-white/20 rounded-full w-full px-4 py-1 mb-3">
                      <div className="relative inline-flex items-center w-full gap-2">
                        {/* Fading line + arrow to the left */}
                        <Image
                          src={arrowLeft}
                          alt="Arrow left"
                          width={150}
                          height={40}
                          className="object-contain"
                        />

                        {/* Main CTA button - positioned at the very end */}
                        <Link
                          href="#"
                          className="group relative inline-flex items-end px-6 rounded-full border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wide transition-all ml-auto -mr-[0.625rem]"
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
            <p className="mb-4 pl-[2.5em] max-w-[34rem] text-[15px] leading-relaxed text-[#A9A9A9]">
              {SUBTEXT_LINES.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>

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

      {/* MOBILE HERO ( < lg ) */}
      <section className="block lg:hidden relative">
        {/* Animated blur effect - right side mobile */}
        <div 
          className="absolute right-[20px] top-32 w-[150px] h-[120px] z-[5] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 150px 120px at 50% 50%, rgba(255, 255, 255, 0.27) 0%, rgba(255, 255, 255, 0.18) 40%, transparent 70%)',
            filter: 'blur(30px)',
            clipPath: 'ellipse(200px 180px at 90% 90%)',
            animation: 'heroBlurMove 4s ease-in-out infinite',
          }}
        />
        {/* Animated blur effect - left side mobile */}
        <div 
          className="absolute left-[20px] top-32 w-[150px] h-[120px] z-[5] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 150px 120px at 50% 50%, rgba(255, 255, 255, 0.27) 0%, rgba(255, 255, 255, 0.18) 40%, transparent 70%)',
            filter: 'blur(30px)',
            clipPath: 'ellipse(200px 180px at 10% 90%)',
            animation: 'heroBlurMove 4s ease-in-out infinite reverse',
          }}
        />
        <div className="hero-content relative mx-auto flex max-w-7xl flex-col px-6 pt-24 md:pb-6" style={{ animation: 'fadeOutContent 0.5s ease-out 4s forwards' }}>
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

          {/* Mobile heading + drone badge on the right */}
          <div className="relative mb-6">
            <h1 className="text-[2.5rem] leading-[1.05] font-semibold text-white">
              <span className="block">{HEADING.line1}</span>
              <span className="block">
                {HEADING.line2Prefix}
                <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                  {HEADING.line2Emphasis}
                </span>
              </span>
              <span className="block">Detection</span>
              <span className="block">and</span>
              <span className="block">Monitoring</span>
            </h1>

            {/* Mobile drone badge - same size as desktop, positioned just below "for" text */}
            <div className="absolute right-0 top-[5.5rem]">
              <div
                className="h-16 w-16 rounded-full p-[3px] flex items-center justify-center"
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
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA button - mobile, below heading, same design as desktop but smaller */}
          <div className="mb-8 w-full">
            <div className="flex justify-center border-r border-l border-t border-white/20 rounded-full w-full px-3 py-1">
              <div className="relative inline-flex items-center w-full gap-2">
                {/* Fading line + arrow to the left */}
                <Image
                  src={arrowLeft}
                  alt="Arrow left"
                  width={100}
                  height={30}
                  className="object-contain"
                />

                {/* Main CTA button - positioned at the very end */}
                <Link
                  href="#"
                  className="group relative inline-flex items-center px-6 rounded-full border border-white/20 text-white font-semibold text-xs uppercase tracking-wide transition-all ml-auto -mr-[0.625rem]"
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

          {/* Body text */}
          <p className="mb-8 text-[15px] leading-relaxed text-[#A9A9A9]">
            {SUBTEXT_LINES.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>

          {/* Stats – mobile, stacked but same visual style */}
          <div className="flex flex-col gap-2 text-[1em] tracking-[0.3em] uppercase text-white/60">
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
