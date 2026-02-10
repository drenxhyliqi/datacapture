'use client'

import { HeroHeader } from "@/components/header"
import Image from "next/image"
import ellipseShadow from "@/assets/Ellipse 8.svg"
import Footer from "@/components/footer"
import DiscussSection from "@/components/discussSection"
import radarHero from "@/assets/radar-1.svg"
import hardkillProduct from "@/assets/hardkill-5.png"
import SecondHeroBanner from "@/components/ui/second-hero-banner"
import RadarSection from "@/components/radar-section"
export default function GnnsPage() {
    return (
      <div className="relative min-h-screen bg-[#101210] overflow-x-clip">
        
        {/* HERO */}
        <div className="relative ">
          {/* HEADER */}
          <div className="relative z-30">
            <HeroHeader />
          </div>
  
          <SecondHeroBanner />


        {/* HERO TEXT */}
        <div className="relative z-20 mx-auto max-w-5xl px-5 pt-30 md:pt-5 pb-24 text-center flex flex-col items-center justify-center">
          <p className="text-white tracking-widest text-sm md:text-base">
            Product
          </p>
          <h1 className="mt-6 text-white text-4xl md:text-6xl font-[400] leading-tight">
            Radar
          </h1>
          <h3 className="text-white/80 max-w-2xl items-center justify-center">DCS supports a range of operational and configuration services through its integrated command-and-control system.</h3>
          <Image src={radarHero} alt="GNNS Hero" className="object-contain items-center justify-center w-100 h-50" />
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
      <section className="relative overflow-hidden z-20">
       
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
          <RadarSection />
        </div>
      </section>
      <div className="relative w-full h-auto mt-10">
        <Image src={hardkillProduct} alt="GNNS Content" className="object-cover"/>
      </div>

       {/* FEATURES 2*/}
       <div className="container mx-auto items-center mb-10 mt-20">
            <div className="mt-10 space-y-2">
                <h2 className="text-3xl text-white font-semibold">MAIN ADVANTAGES</h2> <br />
                <p className="text-base text-white">Deployed on operational APS / VPS and VSHORAD systems</p><br />
                <p className="text-base text-white">Superior performance against low signature targets (RCS, Velocity, Altitude)</p><br />
                <p className="text-base text-white">Multipath and clutter handling through advanced antenna topology</p><br />
                <p className="text-base text-white">Multi-Mission ‘one radar does it all’</p><br />
                <p className="text-base text-white">Automated operation through advanced signal processing and algorithms</p><br />
                <p className="text-base text-white">Complete dynamic Air Situational Picture (ASP) mounted on tactical vehicle or vessel</p><br />
                <p className="text-base text-white">Unique low-probability-of-detection features (aCHR)</p><br />
                <p className="text-base text-white">Ballistic survivability by antenna & radome construction (aCHR)</p><br />
                <p className="text-base text-white">Advanced antenna topology (MIMO) provides extended accuracies, multipath and clutter handling</p><br />
                <p className="text-base text-white">Handles hundreds of targets through Track While Search (TWS) and Revisit modes</p><br />
                <p className="text-base text-white">In-depth 4D analysis of Doppler and other target features</p><br />
                <p className="text-base text-white">Highly cost-effective SWaP-C superiority</p><br />
            </div>
        </div>
      <DiscussSection />
      <Footer />
    </div>
  )
}
