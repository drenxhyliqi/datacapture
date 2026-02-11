import Image from "next/image";
import regulusLogo from "@/assets/partners/Untitled 2.svg";
import protechtLogo from "@/assets/partners/Untitled 3.svg";
import acsLogo from "@/assets/partners/Untitled 5.svg";
import drsRadaLogo from "@/assets/partners/dropped-image.svg";
import rayzoneLogo from "@/assets/partners/Untitled 7.svg";
import mbdaLogo from "@/assets/partners/mbdapartner.svg";

const PARTNER_LOGOS = [
  { src: regulusLogo, alt: "Regulus" },
  { src: protechtLogo, alt: "Protecht" },
  { src: acsLogo, alt: "ACS" },
  { src: drsRadaLogo, alt: "DRS RADA Technologies" },
  { src: rayzoneLogo, alt: "Rayzone Group" },
  { src: mbdaLogo, alt: "MBDA Missile Systems" },
];

export default function PartnersSection() {
  return (
    <section className="relative w-full py-16 lg:py-24">
      <div className="w-full max-w-full">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[400] text-[#d9d9d9] mb-4">
            Partners
          </h2>
          <p className="text-lg md:text-xl text-[#d9d9d9] max-w-3xl mx-auto px-4">
            Selected partners providing advanced technologies for comprehensive and reliable protection.
          </p>
        </div>

        {/* Mobile: infinite right-to-left logo marquee */}
        <div className="w-full overflow-hidden md:hidden">
          <div
            className="flex w-max items-center gap-14"
            style={{
              animation: 'partners-marquee 35s linear infinite',
              willChange: 'transform',
            }}
          >
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, idx) => (
              <div
                key={`${partner.alt}-${idx}`}
                className="h-10 w-24 flex shrink-0 items-center justify-center"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: static two rows - uniform size */}
        <div className="hidden md:flex flex-col items-center gap-10 lg:gap-12">
          <div className="flex flex-wrap justify-center gap-10 lg:gap-14 items-center">
            <div className="h-14 w-54 flex items-center justify-center">
              <Image src={regulusLogo} alt="Regulus" className="h-full w-full object-contain" />
            </div>
            <div className="h-14 w-54 flex items-center justify-center">
              <Image src={protechtLogo} alt="Protecht" className="h-full w-full object-contain" />
            </div>
            <div className="h-14 w-54 flex items-center justify-center">
              <Image src={acsLogo} alt="ACS" className="h-full w-full object-contain" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-10 lg:gap-14 items-center">
            <div className="h-14 w-54 flex items-center justify-center">
              <Image src={drsRadaLogo} alt="DRS RADA Technologies" className="h-full w-full object-contain" />
            </div>
            <div className="h-14 w-54 flex items-center justify-center">
              <Image src={rayzoneLogo} alt="Rayzone Group" className="h-full w-full object-contain" />
            </div>
            <div className="h-14 w-54 flex items-center justify-center">
              <Image src={mbdaLogo} alt="MBDA Missile Systems" className="h-full w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

