'use client'

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/lib/i18n/LocaleContext";

import drsRadaLogo from "@/assets/partners/Untitled 2.svg";
import regulusLogo from "@/assets/partners/Untitled 3.svg";
import rayzoneLogo from "@/assets/partners/Untitled 5.svg";
import protechtLogo from "@/assets/partners/dropped-image.svg";
import acsLogo from "@/assets/partners/Untitled 7.svg";

type Partner = {
  src: any;
  alt: string;
  href: string;
};

const PARTNER_LOGOS: Partner[] = [
  { src: regulusLogo, alt: "Regulus", href: "https://regulus.com/" },
  { src: protechtLogo, alt: "Protecht", href: "https://protecht.ch/" },
  { src: acsLogo, alt: "ACS", href: "https://www.allencontrolsystems.com/" },
  { src: drsRadaLogo, alt: "DRS RADA Technologies", href: "https://www.drsrada.com/" },
  { src: rayzoneLogo, alt: "Rayzone Group", href: "https://rayzone.com/" },
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
    default:
      return "scale(1)";
  }
}

export default function PartnersSection() {
  const t = useTranslations();

  const firstRow = PARTNER_LOGOS.slice(0, 3);
  const secondRow = PARTNER_LOGOS.slice(3);

  return (
    <section className="relative w-full">
      <div className="w-full max-w-full">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[400] text-[#d9d9d9] mb-4">
            {t("partners.title")}
          </h2>
          <p className="text-lg md:text-xl text-[#d9d9d9] max-w-4xl mx-auto px-4">
            {t("partners.subtitle")}
          </p>
        </div>

        {/* MOBILE: marquee */}
        <div className="w-full overflow-hidden md:hidden">
          <div
            className="flex w-max items-center mb-20 gap-20"
            style={{
              animation: "partners-marquee 35s linear infinite",
              willChange: "transform",
            }}
          >
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, idx) => {
              const scale = getMobileLogoScale(partner.alt);

              return (
                <Link
                  key={`${partner.alt}-${idx}`}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${partner.alt} website`}
                  className="h-10 w-24 flex shrink-0 items-center justify-center"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      fill
                      sizes="96px"
                      className="object-contain"
                      style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* DESKTOP/TABLET: 2 rows (3 + 2) */}
        <div className="hidden md:flex flex-col items-center gap-10 lg:gap-12 max-w-6xl mx-auto px-6 md:px-6 lg:px-0 py-4 lg:py-6">
          {/* Row 1: 3 */}
          <div className="flex flex-wrap justify-between mb-30 md:mb-10 md:px-10 gap-10 lg:gap-12 w-full">
            {firstRow.map((partner) => (
              <Link
                key={partner.alt}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${partner.alt} website`}
                className="h-24 sm:w-30 md:w-35 lg:w-45 flex items-center justify-center px-4"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    sizes="256px"
                    className="object-contain"
                    style={{ transform: getDesktopLogoScale(partner.alt) }}
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Row 2: 2 */}
          <div className="flex flex-wrap justify-around gap-10 lg:gap-12 md:mb-20 lg:mb-10 w-full">
            {secondRow.map((partner) => (
              <Link
                key={partner.alt}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${partner.alt} website`}
                className="h-24 sm:w-30 md:w-35 lg:w-45 flex items-center justify-center px-4"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    sizes="256px"
                    className="object-contain"
                    style={{ transform: getDesktopLogoScale(partner.alt) }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
