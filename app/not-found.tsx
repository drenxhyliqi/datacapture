'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HeroHeader } from '@/components/header'
import ellipseShadow from '@/assets/Ellipse 8.svg'
import solutionsHero from '@/assets/herosolutuion.png'
import Footer from '@/components/footer'

export default function NotFound() {
    return (
        <div className="relative min-h-screen bg-[#101210] overflow-x-clip">
            {/* HERO */}
            <div className="relative items-center justify-center">
                {/* HEADER */}
                <div className="relative z-30">
                    <HeroHeader />
                </div>

                {/* HERO IMAGE */}
                <div className="pointer-events-none absolute inset-0  top-50 flex z-10 justify-center object-contain">
                    <div className="relative w-[200vh] h-[80vh] py-30 aspect-square md:w-[150vh] md:h-[120vh] lg:w-[155vh] lg:h-[60vh] transform rotate-60 md:rotate-10 md:-top-20 lg:rotate-0 lg:py-0">
                        <Image
                            src={solutionsHero}
                            priority
                            alt="404 Hero"
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* HERO TEXT */}
                <div className="relative z-20 mx-auto max-w-4xl top-50 px-6 pt-30 md:pt-32 pb-24 text-center">
                    <p className="text-white/70 tracking-widest text-sm md:text-base">
                        ERROR
                    </p>
                    <h1 className="mt-6 text-white text-4xl md:text-6xl font-[400] leading-tight">
                        404
                    </h1>
                    <p className="mt-6 text-white/60 max-w-2xl mx-auto">
                        The page you are looking for does not exist or has been moved.
                    </p>

                    {/* Button */}
                    <div className="mt-10 flex justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium text-white bg-[#1a1a1a] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-[#252525] hover:border-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] shadow-lg"
                        >
                            <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                                {/* Starburst Icon */}
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="w-full h-full text-white"
                                >
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
            </div>

            {/* STATIC RIGHT SHADOW */}
            <div className="pointer-events-none absolute inset-0 z-0 md:z-[15] overflow-visible">
                <div className="absolute right-5 top-100 w-[70vw] max-w-[700px] h-[80vh] aspect-square translate-x-1/2 -translate-y-1/20 opacity-80 blur-[80px]">
                    <Image
                        src={ellipseShadow}
                        alt="Shadow effect"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* LEFT MOVING SHADOW */}
            <section className="relative overflow-hidden">
                <div className="absolute -left-16 inset-0 pointer-events-none z-0 md:z-[15] overflow-hidden">
                    <div
                        className="animate-system-blur absolute left-0 -top-32 w-[55vw] max-w-[520px] h-full -translate-x-1/2 opacity-90"
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
            </section>

            <Footer />
        </div>
    )
}
