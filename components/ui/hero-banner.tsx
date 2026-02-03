import Image from "next/image";

import backgroundGraphics from "@/assets/background-graphics2.svg";
import ellipse1 from "@/assets/ellipse-1.svg";
import ellipse1522 from "@/assets/ellipse-152-2.svg";
import ellipse152 from "@/assets/ellipse-152.svg";
import ellipse1542 from "@/assets/ellipse-154-2.svg";
import ellipse154 from "@/assets/ellipse-154.svg";
import ellipse1552 from "@/assets/ellipse-155-2.svg";
import ellipse155 from "@/assets/ellipse-155.svg";
import ellipse1562 from "@/assets/ellipse-156-2.svg";
import ellipse156 from "@/assets/ellipse-156.svg";
import ellipse158 from "@/assets/ellipse-158.svg";
import ellipse162 from "@/assets/ellipse-162.svg";
import ellise152 from "@/assets/ellise-152.svg";

export default function HeroBanner() {
  return (
    <section
      aria-label="Hero Banner"
      className="relative w-full h-full min-h-[110vh] overflow-visible z-0"
    >
      
      {/* 1. SHTRESA E POSHTME: Orbita kryesore (Ellipse 162) - Më e vogël */}
      <div className="absolute inset-0 z-[50] flex items-center justify-center pointer-events-none">
        <div className="relative w-[85%] h-[95%] opacity-70">
          <Image
            src={ellipse162}
            alt=""
            fill
            className="object-contain"
          />
          {/* Planet Dots */}
          <div className="absolute w-[8px] h-[8px] rounded-full bg-white top-[20%] right-[15%] shadow-[0_0_20px_white]" />
          <div className="absolute w-[8px] h-[8px] rounded-full bg-white bottom-[25%] left-[12%] shadow-[0_0_20px_white]" />
        </div>
      </div>

      {/* 2. SHTRESA E SIPËRME: Orbitat anësore (me Background Graphics të integruar) */}
      <div className="absolute inset-0 gap-4 z-[0] pointer-events-none overflow-visible">
        
        {/* LEFT GROUP */}
        <div className="absolute w-[60%] aspect-square top-[13%] left-[0%] rotate-[0.59deg] overflow-visible">
          
          {/* Background Graphics (I përshtatur brenda orbitës dhe i rrotulluar) */}
          <Image
            src={backgroundGraphics}
            alt=""
            fill
            className="object-cover opacity-100 overflow-visible z-[40]" // Opacity e ulur pak që mos mbulojë unazat
            priority
          />

          {/* <Image src={ellipse154} alt="" className="absolute inset-0 w-full h-full object-contain" />
          // <Image src={ellipse155} alt="" className="absolute inset-0 w-full h-full object-contain mix-blend-overlay opacity-70" />
          // <Image src={ellipse152} alt="" className="absolute inset-0 w-full h-full object-contain opacity-90" />
          // <Image src={ellipse156} alt="" className="absolute inset-0 w-full h-full object-contain opacity-80" /> */}
        </div>

        {/* RIGHT GROUP */}
        <div className="absolute w-[55%] aspect-square top-[-10%] right-[0%] rotate-[-180.59deg]">
          
          {/* Background Graphics (I përshtatur brenda orbitës dhe i rrotulluar) */}
          <Image
            src={backgroundGraphics}
            alt=""
            fill
            className="object-cover opacity-200 overflow-visible"
            priority
          />

          {/* Unazat e orbitës */}
          {/* <Image src={ellipse1} className="absolute inset-0 w-full h-full object-contain" alt="" />
          <Image src={ellipse1542} className="absolute inset-0 w-full h-full object-contain opacity-90" alt="" />
          <Image src={ellipse1552} className="absolute inset-0 w-full h-full object-contain mix-blend-overlay opacity-70" alt="" />
          <Image src={ellipse1522} className="absolute inset-0 w-full h-full object-contain opacity-90" alt="" />
          <Image src={ellipse1562} className="absolute inset-0 w-full h-full object-contain opacity-80" alt="" /> */}
        </div>

        {/* Floating Side Elements */}
        <Image className="absolute w-[12%] h-[27%] top-[-10%] left-[63%] opacity-50" src={ellise152} alt="" />
        <Image className="absolute w-[12%] h-[27%] top-[45%] left-[-5%] opacity-50" src={ellipse158} alt="" />
      </div>
    </section>
  );
}