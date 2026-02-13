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

function getDesktopLogoScale(alt: string): string {
  switch (alt) {
    case "Regulus":
      return "scale(2.25)";
    case "Protecht":
      return "scale(1.95)";
    case "ACS":
      return "scale(1.15)";
    case "DRS RADA Technologies":
      return "scale(2.65)";
    case "Rayzone Group":
      return "scale(1.85)";
    case "MBDA Missile Systems":
      return "scale(2.15)";
    default:
      return "scale(1)";
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

        {/* Tablet & small laptop: 2 cols; desktop & large laptop: 3 cols.
            Add extra padding around logos on medium–large laptops and desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12 items-center justify-items-center max-w-7xl mx-auto px-4 lg:px-8 xl:px-12 py-4 lg:py-6">
          {PARTNER_LOGOS.map((partner) => (
            <div
              key={partner.alt}
              className="h-24 w-64 flex items-center justify-center px-4 lg:px-15"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                className="h-full w-full object-contain"
                style={{ transform: getDesktopLogoScale(partner.alt) }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

