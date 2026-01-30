'use client'

import { HeroHeader } from "@/components/header"
import Image from "next/image"
import ellipseShadow from "@/assets/Ellipse 8.svg"
import solutionsHero from "@/assets/herosolutuion.png"
import ServicesSection from "@/components/ServicesSection"
import Footer from "@/components/footer"

export default function ServicesPage() {
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
                alt="Services Hero"
                className="object-contain"
              />
            </div>
          </div>

        {/* HERO TEXT */}
        <div className="relative z-20 mx-auto max-w-4xl px-6 pt-30 md:pt-32 pb-24 text-center">
          <p className="text-white/70 tracking-widest text-sm md:text-base">
            SERVICES
          </p>
          <h1 className="mt-6 text-white text-4xl md:text-6xl font-[400] leading-tight">
            Operational services within the DCS platform
          </h1>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            DCS supports a range of operational and configuration services through its integrated command-and-control system.
          </p>
        </div>
      </div>

       {/* STATIC RIGHT SHADOW (responsive + no overflow) */}
       <div className="pointer-events-none absolute inset-0 z-0 md:z-[15] overflow-visible">
          <div className="absolute right-5 top-100 w-[70vw] max-w-[700px] h-[300vh] aspect-square translate-x-1/2 -translate-y-1/20 opacity-80 blur-[80px]">
            <Image
              src={ellipseShadow}
              alt="Shadow effect"
              priority
              className="object-contain"
            />
          </div>
        </div>

      {/* FEATURES (starts immediately after hero, no extra gap) */}
      <section className="relative overflow-hidden">
       
        {/* LEFT MOVING SHADOW */}
        <div className="absolute -left-16 inset-0 pointer-events-none z-0 md:z-[15] overflow-hidden">
          <div
            className="animate-system-blur absolute left-0 -top-32 w-[55vw] max-w-[520px] h-full -translate-x-1/2 opacity-90"
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
          <ServicesSection />
        </div>
      </section>

      <Footer />
    </div>
  )
}
