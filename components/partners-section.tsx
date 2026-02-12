import Image from "next/image";
import drsRadaLogo from "@/assets/partners/Untitled 2.svg";
import regulusLogo from "@/assets/partners/Untitled 3.svg";
import rayzoneLogo from "@/assets/partners/Untitled 5.svg";
import protechtLogo from "@/assets/partners/dropped-image.svg";
import acsLogo from "@/assets/partners/Untitled 7.svg";
import mbdaLogo from "@/assets/partners/mbdapartner.svg";

const PARTNER_LOGOS = [
  { src: regulusLogo, alt: "Regulus" },
  { src: protechtLogo, alt: "Protecht" },
  { src: acsLogo, alt: "ACS" },
  { src: drsRadaLogo, alt: "DRS RADA Technologies" },
  { src: rayzoneLogo, alt: "Rayzone Group" },
  { src: mbdaLogo, alt: "MBDA Missile Systems" },
];

function getMobileLogoScale(alt: string): number {
  switch (alt) {
    case "Rayzone Group":
      return 1.1;
    case "Protecht":
      return 1.3;
    case "ACS":
      return 0.8;
    case "DRS RADA Technologies":
      return 2;
    case "MBDA Missile Systems":
      return 1.15;
    case "Regulus":
    default:
      return 1.2;
  }
}

export default function PartnersSection() {
  return (
    <section className="relative w-full py-16 lg:py-24">
      <div className="w-full max-w-full">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[400] text-[#d9d9d9] mb-4">
            Partners
          </h2>
          <p className="text-lg md:text-xl text-[#d9d9d9] max-w-4xl mx-auto px-4">
            Selected partners providing advanced technologies for comprehensive and reliable protection.
          </p>
        </div>

        {/* Mobile: infinite right-to-left logo marquee */}
        <div className="w-full overflow-hidden md:hidden">
          <div
            className="flex w-max items-center gap-20"
            style={{
              animation: 'partners-marquee 35s linear infinite',
              willChange: 'transform',
            }}
          >
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, idx) => {
              const scale = getMobileLogoScale(partner.alt);

              return (
                <div
                  key={`${partner.alt}-${idx}`}
                  className="h-10 w-24 flex shrink-0 items-center justify-center"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    className="h-full w-full object-contain"
                    style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: static two rows - uniform size */}
        <div className="hidden md:flex flex-col items-center gap-10 lg:gap-12 ">
          <div className="flex flex-wrap justify-center gap-10 lg:gap-34 items-center mb-15">
            <div className="h-14 w-84 flex items-center justify-center">
              <Image src={regulusLogo} alt="Regulus" className="h-full w-full object-contain"
                style={{ transform: "scale(1.65)" }}
              />
            </div>
            <div className="h-14 w-84 flex items-center justify-center">
              <Image src={protechtLogo} alt="Protecht" className="h-full w-full object-contain" 
              style={{ transform: "scale(1.25)" }} />

            </div>
            <div className="h-14 w-84 flex items-center justify-center">
              <Image src={acsLogo} alt="ACS" className="h-full w-full object-contain"
              style={{ transform: "scale(1.15)",marginLeft: "40px" }} />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-10 lg:gap-34 items-center">
            <div className="h-14 w-84 flex items-center justify-center">
              <Image src={drsRadaLogo} alt="DRS RADA Technologies" className="h-full w-full object-contain" 
              style={{ transform: "scale(1.45)", marginLeft: "100px"
               }} />
            </div>
            <div className="h-14 w-84 flex items-center justify-center">
              <Image src={rayzoneLogo} alt="Rayzone Group" className="h-full w-full object-contain" 
              style={{ transform: "scale(1.85)" }} />
            </div>
            <div className="h-14 w-84 flex items-center justify-center">
              <Image src={mbdaLogo} alt="MBDA Missile Systems" className="h-full w-full object-contain" 
              style={{ transform: "scale(1)", marginRight: "0" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

