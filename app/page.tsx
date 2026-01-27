'use client'

import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SystemFeatures from "@/components/system-features";
import Image from "next/image";
import ellipseShadow from "@/assets/Ellipse 8.svg";
import OperationalUseSection from "@/components/OperationalUseSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#101210]">
      <HeroHeader />
      <HeroSection />


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