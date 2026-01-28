'use client'

import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SystemFeatures from "@/components/system-features";
import Image from "next/image";
import ellipseShadow from "@/assets/Ellipse 8.svg";
import OperationalUseSection from "@/components/OperationalUseSection";
import DiscussSection from "@/components/discussSection";
import TestimonialSection from "@/components/testimonial-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#101210] overflow-x-clip">
      <HeroHeader />
      <HeroSection />

      {/* STATIC RIGHT SHADOW */}
      <div className="absolute top-0 right-0 pointer-events-none z-10 overflow-visible">
        <div className="relative w-[700px] h-[300vh] translate-x-1/2 translate-y-250">
          <Image
            src={ellipseShadow}
            alt="Shadow effect"
            fill
            className="opacity-90"
            style={{ filter: "blur(90px)" }}
          />
        </div>
      </div>

      {/* ABOUT + FEATURES WRAPPER */}
      <section className="relative overflow-hidden">
        
        {/* Shadow – nis NGA AboutSection */}
        <div className="absolute left-0 inset-0 pointer-events-none z-0">
          <div
            className="relative w-[700px] h-full -translate-x-1/2"
            style={{ animation: 'slideVertical 5s linear infinite' }}
          >
            <Image
              src={ellipseShadow}
              alt="Shadow effect"
              fill
              className="opacity-90"
              style={{ filter: 'blur(110px)' }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <AboutSection />
          <SystemFeatures />
          <OperationalUseSection />
        </div>
      </section>
      <DiscussSection />
      <TestimonialSection />
      <Footer />

      <style jsx global>{`
        @keyframes slideVertical {
          0% {
            transform: translateY(-30%);
          }
          50% {
            transform: translateY(60%);
          }
          
        }

      `}</style>
    </div>
  );
}