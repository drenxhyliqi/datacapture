import Image from "next/image";
import regulusLogo from "@/assets/partners/Untitled 2.svg";
import protechtLogo from "@/assets/partners/Untitled 3.svg";
import acsLogo from "@/assets/partners/Untitled 5.svg";
import rayzoneLogo from "@/assets/partners/Untitled 7.svg";
import drsRadaLogo from "@/assets/partners/dropped-image.svg";

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

        {/* Logo rows */}
        <div className="flex flex-col items-center gap-12 lg:gap-14">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-14 lg:gap-20 items-center">
            <div className="h-16 md:h-20 flex items-center">
              <Image
                src={regulusLogo}
                alt="Regulus logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-16 md:h-20 flex items-center">
              <Image
                src={protechtLogo}
                alt="Protecht logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-16 md:h-20 flex items-center">
              <Image
                src={acsLogo}
                alt="ACS logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-14 lg:gap-20 items-center">
            <div className="h-16 md:h-20 flex items-center">
              <Image
                src={drsRadaLogo}
                alt="DRS RADA Technologies logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-16 md:h-20 flex items-center">
              <Image
                src={rayzoneLogo}
                alt="Rayzone Group logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

