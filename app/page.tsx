'use client'

import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SystemFeatures from "@/components/system-features";
import Image from "next/image";
import ellipseShadow from "@/assets/Ellipse 8.svg";
import homepageBanner from "@/assets/homepageBanner.png";
import OperationalUseSection from "@/components/OperationalUseSection";
import DiscussSection from "@/components/discussSection";
import TestimonialSection from "@/components/testimonial-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#101210] overflow-x-clip">
      
      {/* HERO */}
      <div className="relative">
        {/* HEADER */}
        <div className="relative z-30">
          <HeroHeader />
        </div>

        {/* HERO IMAGE */}
        <div className="pointer-events-none absolute inset-0 flex z-10 justify-center object-contain">
          <div className="relative w-100 h-50 top-[30vh] md:w-[150vh] md:h-[120vh] lg:w-[250vh] lg:h-[100vh] lg:mr-40 transform -rotate-30 md:rotate-10 md:-top-20 lg:rotate-0 lg:py-0 -lg:top-40	overflow-visible">
            <Image
              src={homepageBanner}
              fill
              alt="Homepage Hero"
              className="object-contain"
            />
          </div>
        </div>

        {/* HERO TEXT */}
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>

      {/* STATIC RIGHT SHADOW */}
      <div className="absolute top-0 right-0 pointer-events-none z-0 md:z-[15] overflow-visible">
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
        
        {/* LEFT MOVING SHADOW */}
        <div className="absolute -left-[5px] inset-0 pointer-events-none z-0 md:z-[15] overflow-hidden">
          <div
            className="absolute left-0 top-0 w-[70vw] max-w-[700px] h-full -translate-x-1/2 opacity-90"
            style={{ animation: 'slideVertical 5s linear infinite' }}
          >
            <Image
              src={ellipseShadow}
              alt="Shadow effect"
              fill
              className="object-contain"
              style={{ filter: 'blur(90px)' }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20">
          <AboutSection />
          <SystemFeatures />
          <OperationalUseSection />
          <DiscussSection />
          <TestimonialSection />
        </div>
      </section>
      <Footer />

      <style jsx global>{`
        @keyframes slideVertical {
          0% { transform: translateY(0%); }
          50% { transform: translateY(60%); }
          100% { transform: translateY(0%); }
        }
      `}</style>
    </div>
  );
}