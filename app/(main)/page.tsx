'use client'

import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import PartnersSection from "@/components/partners-section";
import Image from "next/image";
import ellipseShadow from "@/assets/Ellipse 8.svg";
import heroBanner3 from "@/assets/heroBanner3.png";
import bannerMobile1 from "@/assets/bannerMobile (1).png";
import DiscussSection from "@/components/discussSection";
import Footer from "@/components/footer";
import { useMediaQuery, LG_QUERY } from "@/lib/useMediaQuery";
export default function Home() {
  const isLg = useMediaQuery(LG_QUERY)

  return (
    <div className="relative min-h-screen bg-[#101210] overflow-x-clip">
      
      {/* HERO – z-[50] so navbar (inside hero) stays above sections below */}
      <div className="hero-viewport-wrapper relative z-[50] min-h-[110vh] 2xl:min-h-[100vh] isolate" style={{ position: 'relative' }}>
    
        {/* HEADER – high z-index so navbar stays above other sections */}
        <div className="relative z-[100]">
          <HeroHeader />
        </div>

        {/* HERO TEXT */}
        <div className="relative">
          <HeroSection />
        </div>
      </div>

      {/* STATIC RIGHT SHADOW – only in DOM on lg+; low z so navbar stays on top */}
      {isLg && (
        <div className="hero-static-shadow-wrapper absolute top-0 right-0 pointer-events-none z-0 overflow-visible" style={{ marginTop: '100vh' }} aria-hidden="true">
          <div className="relative w-[400px] h-[100vh] translate-x-1/2 translate-y-250">
            <Image
              src={ellipseShadow}
              alt="Shadow effect"
              fill
              sizes="(max-width: 700px) 100vw, 700px"
              className="opacity-90"
              style={{ filter: "blur(90px)" }}
            />
          </div>
        </div>
      )}

      {/* ABOUT + FEATURES WRAPPER */}
      <section className="relative overflow-hidden">
        {/* Content */}
        <div className="relative z-0">
          {/* Blur only from About DCS down to System Features */}
          <div className="relative overflow-hidden">
            {/* LEFT MOVING SHADOW – spans About + Partners only */}
            <div className="absolute -left-[5px] inset-0 pointer-events-none z-[3] md:z-[15] overflow-hidden">
              <div
                className="
                  animate-system-blur
                  absolute
                  -left-20
                  top-[-10%]
                  w-[30vw]
                  h-[450vh]
                  -translate-x-1/2
                  opacity-90
                  blur-2xl
                "
              >
                <Image
                  src={ellipseShadow}
                  alt="Shadow effect"
                  sizes="(max-width: 700px) 80vw, 600px"
                  fill
                  className="object-contain"
                  style={{ filter: 'blur(0px)' }}
                />
              </div>
            </div>
            <AboutSection />
            <PartnersSection />
            <DiscussSection />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
