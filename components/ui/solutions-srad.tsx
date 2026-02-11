import SecondHeroBanner from "@/components/ui/second-hero-banner";
import Image from "next/image";

// Icons imported as SVGs (SRAD-specific – adjust as needed)
import detectionIcon from "@/assets/selections1.svg";
import identificationIcon from "@/assets/identification.svg";
import mitigationIcon from "@/assets/mitigation.svg";
import macbookImage from "@/assets/macbook.png";
import directionDesktop from "@/assets/direction.svg";
import directionMobile from "@/assets/directionMobile.svg";
import fixedIcon from "@/assets/house.svg";
import mobileIcon from "@/assets/tank.svg";

export default function SolutionsSradHeroBanner() {
  return <SecondHeroBanner />;
}

export function SolutionsSradFeaturesSection() {
  return (
    <>
      <section className="relative w-full py-10 lg:py-32 px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 lg:mb-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white">
                  Tailor made air security.
                </h2>
              </div>
            </div>
          </div>

          {/* 3 feature cards – same structure as CUAS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Detection */}
            <div className="about-dcs-fade-border flex flex-col justify-between rounded-3xl bg-[#131417] px-8 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src={detectionIcon}
                    alt="Detection icon"
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-[500] text-white">
                  Detection
                </h3>
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xs">
                Custom-tailored detection systems designed to identify radar and aerial threats with precision,
                reliability, and real-time operational awareness.
              </p>
            </div>

            {/* Identification */}
            <div className="about-dcs-fade-border flex flex-col justify-between rounded-3xl bg-[#131417] px-8 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-[84px] h-[84px] flex items-center justify-center">
                  <Image
                    src={identificationIcon}
                    alt="Identification icon"
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-[500] text-white">
                  Identification & Tracking
                </h3>
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xs">
                Advanced radar processing and sensor fusion enabling fast, accurate identification and continuous
                tracking of all potential targets in the monitored airspace.
              </p>
            </div>

            {/* Mitigation */}
            <div className="about-dcs-fade-border flex flex-col justify-between rounded-3xl bg-[#131417] px-8 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-[72px] h-[72px] flex items-center justify-center">
                  <Image
                    src={mitigationIcon}
                    alt="Mitigation icon"
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-[500] text-white">
                  Neutralization
                </h3>
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xs">
                Integrated neutralization options that support electronic, kinetic, or procedural responses coordinated
                directly through the SRAD command-and-control interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faded border style for SRAD cards */}
      <style jsx global>{`
        .about-dcs-fade-border {
          position: relative;
        }
        .about-dcs-fade-border::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 1px solid rgba(255, 255, 255, 0.22);
          pointer-events: none;
          z-index: 1;
          mask-image: linear-gradient(
            to bottom,
            black 0%,
            rgba(0, 0, 0, 0.9) 20%,
            rgba(0, 0, 0, 0.5) 50%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            black 0%,
            rgba(0, 0, 0, 0.9) 20%,
            rgba(0, 0, 0, 0.5) 50%,
            transparent 100%
          );
          mask-size: 100% 100%;
          -webkit-mask-size: 100% 100%;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
        }
      `}</style>
    </>
  );
}

export function SolutionsSradDescriptionSection() {
  return (
    <section className="relative w-full py-10 lg:py-20 px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-6">
          Customized Radar Systems for Mission-Critical Protection
        </h2>
        <div className="space-y-4 text-base md:text-lg text-white/90">
          <p>
            DCS provides fully tailored radar-based surveillance solutions for fixed, mobile, and man-portable
            deployments.
          </p>
          <p>
            Detection combines long-range radar, sensor fusion, and advanced processing for complete situational
            awareness. Identification and tracking leverage AI-supported analytics to maintain a continuous radar
            picture of the operational environment.
          </p>
          <p>
            Neutralization options integrate seamlessly with existing effectors and command networks, enabling fast,
            coordinated responses while preserving operator control and safety.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SolutionsSradC2Section() {
  return (
    <section className="relative w-full py-16 lg:py-24 px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-10">
        {/* Macbook + C2 label */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-[400] text-white">C2</h2>
          <div className="relative w-full max-w-3xl">
            <Image
              src={macbookImage}
              alt="C2 radar interface"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Detection / Identification / Mitigation flow */}
        <div className="w-full max-w-6xl mt-6">
          {/* Desktop / tablet direction graphic */}
          <div className="hidden md:block">
            <Image
              src={directionDesktop}
              alt="C2 detection, identification and mitigation flow"
              className="w-full h-auto object-contain"
            />
            {/* Labels aligned with arrow ends */}
            <div className="mt-4 grid grid-cols-3 gap-90 text-white text-center text-[28px] font-medium">
              <div style={{ marginLeft: '-95px' }}>Detection</div>
              <div style={{ marginLeft: '-30px' }}>Identification & Tracking</div>
              <div style={{ marginLeft: '55px' }}>Neutralization</div>
            </div>

          </div>

          {/* Mobile direction graphic */}
          <div className="block md:hidden">
            <div className="mx-auto w-3/4 max-w-xs">
              <Image
                src={directionMobile}
                alt="C2 detection, identification and mitigation flow (mobile)"
                className="width: 50%; height: 50%; object-contain mx-auto"
              />
              <div className="mt-4 flex flex-col items-center gap-1 text-white text-base font-medium" style={{ fontSize: "22px" }}>
                <span>Detection</span>
                <span>Identification & Tracking</span>
                <span>Neutralization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment modes – two SRAD-specific configurations */}
        <div className="mt-16 w-full max-w-8xl mx-auto space-y-10 text-left">
          {/* Fixed Installation */}
          <div className="flex flex-col md:flex-row items-center gap-y-10">
            <div className="flex-shrink-1">
              <Image
                src={fixedIcon}
                alt="Fixed installation icon"
                className="w-[90%] h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-3xl font-[400] text-white mb-2">Fixed Installation</h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-2xl">
                Custom-designed radar installations providing continuous coverage over critical infrastructure and
                protected areas, optimized for long-term, always-on operation.
              </p>
            </div>
          </div>

          {/* Mobile Installation */}
          <div className="flex flex-col md:flex-row items-center md:ml-10 md:gap-18 gap-y-10">
            <div className="flex-shrink-1 md:ml-10 ">
              <Image
                src={mobileIcon}
                alt="Mobile installation icon"
                className="w-[90%] h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-3xl font-[400] text-white mb-2">Mobile Installation</h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-2xl">
                Vehicle-mounted radar platforms that can be rapidly deployed to new locations, extending the radar
                coverage footprint wherever operational needs arise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

