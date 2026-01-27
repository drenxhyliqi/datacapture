'use client'

import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SystemFeatures from "@/components/system-features";
import Image from "next/image";
import ellipseShadow from "@/assets/Ellipse 8.svg";
import OperationalUseSection from "@/components/OperationalUseSection";
import solutionsHero from "@/assets/solutionsHero.png";
import solutionsHero1 from "@/assets/solutionsHero1.png";

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen bg-[#101210]">
        <HeroHeader />

        <div className="relative w-full min-h-screen overflow-hidden">

        {/* HERO HEADER – ALWAYS ON TOP */}
        <div className="relative z-30">
        <HeroHeader />
        </div>

        {/* IMAGES – UNDER HERO HEADER */}
        <div className="absolute -top-10 left-0 w-full h-screen z-10 flex items-start justify-center pointer-events-none">

        <div className="relative w-[50vw] h-[90vh]">
            <Image
            src={solutionsHero1}
            alt="Solutions Hero 1"
            fill
            className="object-cover"
            priority
            />
        </div>

        <div className="relative w-[50vw] h-[90vh]">
            <Image
            src={solutionsHero}
            alt="Solutions Hero 2"
            fill
            className="object-cover"
            />
        </div>

        </div>

        {/* TEXT – CENTER, ABOVE IMAGES */}
        <div className="relative z-20 mt-30 flex items-center justify-center text-center px-6">
        <div className="max-w-4xl items-center justify-center">
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

    </div>

      {/* ABOUT + FEATURES WRAPPER */}
      <section className="relative overflow-hidden">
        
        {/* Shadow – nis NGA AboutSection */}
        <div className="absolute left-0 inset-0 pointer-events-none z-0">
          <div
            className="relative w-[700px] h-full -translate-x-1/2"
            style={{ animation: 'slideVertical 6s linear infinite' }}
          >
            <Image
              src={ellipseShadow}
              alt="Shadow effect"
              fill
              className="opacity-90"
              style={{ filter: 'blur(10px)' }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <AboutSection />
          <SystemFeatures />
        </div>
      </section>

      <OperationalUseSection />

      <style jsx global>{`
        @keyframes slideVertical {
          0% {
            transform: translateY(0%);
          }
          50% {
            transform: translateY(30%);
          }
          100% {
            transform: translateY(0%);
          }
        }
      `}</style>
    </div>
  );
}