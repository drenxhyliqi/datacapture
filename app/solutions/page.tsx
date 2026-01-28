'use client'

import { HeroHeader } from "@/components/header"
import SolutionsFeatures from "@/components/solutions-features"
import Image from "next/image"
import ellipseShadow from "@/assets/Ellipse 8.svg"
import solutionsHero from "@/assets/herosolutuion.png"
import ContentSection from "@/components/content-section"
import Footer from "@/components/footer"

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen bg-[#101210] overflow-x-clip">
      
      {/* HERO */}
      <div className="relative ">
        {/* HEADER */}
        <div className="relative z-30">
          <HeroHeader />
        </div>

        {/* HERO IMAGE */}
        <div className="pointer-events-none absolute  inset-0 flex z-10 justify-center object-contain">
          <div className="relative w-[200vh] h-[80vh] py-30 aspect-square  md:w-[150vh] md:h-[120vh] lg:w-[155vh] lg:h-[60vh] transform rotate-60 md:rotate-10 md:-top-20 lg:rotate-0 lg:py-0">
            <Image
              src={solutionsHero}
              priority
              alt="Solutions Hero"
              className="object-contain"
            />
          </div>
        </div>

        {/* HERO TEXT */}
        <div className="relative z-20 mx-auto max-w-4xl px-6 pt-30 md:pt-32 pb-24 text-center">
          <p className="text-white/70 tracking-widest text-sm md:text-base">
            DATA CAPTURE SYSTEMS
          </p>
          <h1 className="mt-6 text-white text-4xl md:text-6xl font-semibold leading-tight">
            Tailored Airspace Monitoring and <br className="hidden md:block" />
            Control
          </h1>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            DCS supports drone detection, monitoring, and operational configuration within defined airspace environments
          </p>
        </div>
      </div>

       {/* STATIC RIGHT SHADOW (responsive + no overflow) */}
       <div className="pointer-events-none absolute inset-0 z-0 md:z-[15] overflow-visible">
          <div className="absolute right-5 top-100 w-[70vw] max-w-[700px] h-[300vh] aspect-square translate-x-1/2 -translate-y-1/20 opacity-80 blur-[80px]">
            <Image
              src={ellipseShadow}
              alt="Shadow effect"
              fill
              className="object-contain"
            />
          </div>
        </div>

      {/* FEATURES (starts immediately after hero, no extra gap) */}
      <section className="relative overflow-hidden">
       
        {/* LEFT MOVING SHADOW */}
        <div className="absolute -left-[5px] inset-0 pointer-events-none z-0 md:z-[15] overflow-hidden">
          <div
            className="absolute left-0 top-0 w-[70vw] max-w-[700px] h-full -translate-x-1/2 opacity-90"
            style={{ animation: "slideVertical 5s linear infinite" }}
          >
            <Image
              src={ellipseShadow}
              alt="Shadow effect"
              fill
              className="object-contain"
              style={{ filter: "blur(10px)" }}
            />
          </div>
        </div>

        <div className="relative z-10">
          <SolutionsFeatures />
          <ContentSection />
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes slideVertical {
          0% { transform: translateY(-30%); }
          50% { transform: translateY(60%); }
          100% { transform: translateY(-30%); }
        }
      `}</style>
    </div>
  )
}
