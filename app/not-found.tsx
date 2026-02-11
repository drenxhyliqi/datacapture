'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HeroHeader } from '@/components/header'
import ellipseShadow from '@/assets/Ellipse 8.svg'
import solutionsHero from '@/assets/herosolutuion.png'
import Footer from '@/components/footer'
import SecondHeroBanner from '@/components/ui/second-hero-banner'

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#101210] overflow-x-clip flex flex-col">
      {/* HEADER */}
      <div className="relative z-30">
        <HeroHeader />
      </div>

      

      {/* BACKGROUND LAYERS (Hero image + shadows) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* HERO IMAGE */}
          <div className="relative mt-30 lg:mt-80 z-20">
            <SecondHeroBanner />
          </div>

        {/* STATIC RIGHT SHADOW */}
        <div className="absolute inset-0 overflow-visible">
          <div className="absolute right-5 top-24 w-[70vw] max-w-[700px] h-[80vh] translate-x-1/2 opacity-80 blur-[80px]">
            <Image src={ellipseShadow} alt="Shadow effect" fill className="object-contain" />
          </div>
        </div>

        {/* LEFT MOVING SHADOW */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -left-[5px] w-[70vw] max-w-[700px] h-[140vh] -translate-x-1/2 opacity-90"
          >
            <Image
              src={ellipseShadow}
              alt="Shadow effect"
              fill
              className="object-contain"
              style={{ filter: 'blur(30px)' }}
            />
          </div>
        </div>
      </div>

      {/* MAIN (centered error) */}
      <main className="relative z-20 flex-1 flex items-center justify-center px-6 py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center py-16">
          <h1 className="mt-6 text-white text-5xl md:text-7xl font-semibold leading-tight">ERROR 404</h1>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 rounded-3xl px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium text-white bg-[#1a1a1a] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-[#252525] hover:border-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] shadow-lg"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
                  <path
                    d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2 12L8.5 10.5L10 4L11.5 10.5L18 12L11.5 13.5L10 20L8.5 13.5L2 12Z"
                    fill="currentColor"
                    opacity="0.7"
                  />
                </svg>
              </div>
              <span>Go Back To Homepage</span>
            </Link>
          </div>
        </div>
      </main>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  )
}
