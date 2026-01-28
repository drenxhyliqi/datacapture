'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import testimonialBackground from '@/assets/testimonialBackground.png'
import testimonialPerson from '@/assets/testimonialPerson.png'

type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
  avatar?: StaticImageData
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'DCS has completely transformed the way we work. Now, DCS takes care of the repetitive work, and I can focus on strategy and execution.',
    name: 'Michael Patel',
    role: 'Operations Director',
    company: 'Finovate Group',
    avatar: testimonialPerson,
  },
  {
    quote:
      'With DCS, our team finally has a single operational picture. It’s faster to respond, and we spend far less time on manual coordination.',
    name: 'Sarah Lee',
    role: 'Security Lead',
    company: 'Apex Defense',
    avatar: testimonialPerson,
  },
  {
    quote:
      'The clarity DCS brings to each mission is unmatched. Our operators can review incidents in detail and continuously improve our procedures.',
    name: 'David Kim',
    role: 'Mission Planner',
    company: 'Skyguard Systems',
    avatar: testimonialPerson,
  },
]

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const active = TESTIMONIALS[activeIndex]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative w-full bg-[#101210] py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background image via CSS so it always renders */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${testimonialBackground.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.35,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-8 lg:px-12 xl:px-0 lg:flex-row lg:items-center">
        {/* Left column: heading + copy + controls */}
        <div className="flex-1 space-y-6 text-white">
          <div className="space-y-3">
            <p className="text-xs font-medium tracking-[0.28em] text-white/60">
              TESTIMONIAL
            </p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Operational Feedback
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            Real businesses and professionals trust DCS. Here’s what they have to
            say about their experience.
          </p>

          {/* Controls */}
          <div className="mt-6 flex items-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white hover:text-black"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white text-black transition hover:bg-white/90"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right column: testimonial card */}
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#121212]/95 px-6 py-8 shadow-lg sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            {/* Quote */}
            <p className="text-lg font-medium leading-relaxed text-white sm:text-xl lg:text-2xl">
              {active.quote}
            </p>

            {/* Person */}
            <div className="mt-8 flex items-center gap-4">
              {/* Avatar placeholder – replace with Image if you add an asset */}
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/10">
                {active.avatar ? (
                  <Image
                    src={active.avatar}
                    alt={active.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-cover"
                  />
                ) : (
                  <span className="text-sm font-semibold text-white/80">
                    {active.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-white sm:text-base">
                  {active.name}
                </p>
                <p className="text-xs text-white/60 sm:text-sm">
                  {active.role ? `${active.role} · ${active.company}` : active.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

