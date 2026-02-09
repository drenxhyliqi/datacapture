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
      <div className="relative z-[50] min-h-[110vh] isolate" style={{ position: 'relative' }}>
        {/* HERO BACKGROUND IMAGE – static on all devices, scrolls with the page */}
        {/* <div
          className="absolute inset-0 z-0 w-full min-h-0"
          style={{ height: '100%', minHeight: '100vh' }}
        >
          <Image
            src={bannerMobile1}
            alt="Homepage Hero"
            fill
            sizes="100vw"
            className="object-cover object-center w-full h-full lg:hidden"
            unoptimized
          />
          <Image
            src={heroBanner3}
            alt="Homepage Hero"
            fill
            sizes="100vw"
            className="object-cover object-center w-full h-full hidden lg:block"
            unoptimized
          />
        </div> */}

        

        {/* HEADER – high z-index so navbar stays above other sections */}
        <div className="relative z-[100]">
          <HeroHeader />
        </div>


        {/* HERO TEXT */}
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>

      {/* STATIC RIGHT SHADOW – only in DOM on lg+; low z so navbar stays on top */}
      {isLg && (
        <div className="absolute top-0 right-0 pointer-events-none z-0 overflow-visible" style={{ marginTop: '100vh' }} aria-hidden="true">
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
            <div className="absolute -left-[5px] inset-0 pointer-events-none z-[1] md:z-[15] overflow-hidden">
              <div
                className="
                  animate-system-blur
                  absolute
                  -left-20
                  top-[-30%]
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
          </div>
          {/* Testimonial + Discuss with static left blur between them */}
          <div className="relative overflow-hidden">
            <div
              className="pointer-events-none absolute -left-16 inset-0 z-[1] overflow-hidden"
              aria-hidden="true"
            >
              <div
                className="absolute left-0 -top-32 w-[55vw] max-w-[520px] h-full -translate-x-1/2 opacity-90"
                style={{ filter: 'blur(90px)' }}
              >
                <Image
                  src={ellipseShadow}
                  alt=""
                  fill
                  sizes="(max-width: 520px) 100vw, 520px"
                  className="object-contain"
                />
              </div>
            </div>
            <DiscussSection />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
