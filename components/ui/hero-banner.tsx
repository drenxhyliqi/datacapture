import Image from "next/image";
import insideEllipse from "@/assets/background/insideEllipse.svg";
import smallEllipse from "@/assets/background/smallEllipse.svg";
import leftBackground from "@/assets/background/LeftBackground.svg";
import rightBackground from "@/assets/background/RightBackground.svg";

const ellipseSrc = typeof insideEllipse === "string" ? insideEllipse : (insideEllipse as { src: string }).src;
const smallEllipseSrc = typeof smallEllipse === "string" ? smallEllipse : (smallEllipse as { src: string }).src;
const leftBgSrc = typeof leftBackground === "string" ? leftBackground : (leftBackground as { src: string }).src;
const rightBgSrc = typeof rightBackground === "string" ? rightBackground : (rightBackground as { src: string }).src;

export default function HeroBanner() {
  return (
    <section
      aria-label="Hero background"
      className="absolute inset-0 z-0 flex min-h-[100dvh] w-full items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Sizing is 100% in globals.css: .hero-bg-left, .hero-bg-right, .hero-banner-ellipse – no fixed dimensions here */}
      <div className="hero-bg-left" aria-hidden>
        <Image src={leftBgSrc} alt="" fill className="object-contain object-left" sizes="80vw" priority />
      </div>
      <div className="hero-bg-right" aria-hidden>
        <Image src={rightBgSrc} alt="" fill className="object-contain object-right" sizes="80vw" priority />
      </div>
      <div className="hero-banner-ellipse">
        <Image
          src={ellipseSrc}
          alt=""
          fill
          sizes="(max-width: 1024px) 98vw, (max-width: 1536px) 80.14vw, 75vw"
          priority
        />
        {/* Small ellipse – bottom-left (inside main ellipse) */}
        <div className="absolute left-[22%] bottom-[18%] w-4 h-4 z-10">
          <Image src={smallEllipseSrc} alt="" width={16} height={16} className="w-full h-full object-contain" />
        </div>
        {/* Small ellipse – top-right (inside main ellipse) */}
        <div className="absolute right-[22%] top-[18%] w-4 h-4 z-10">
          <Image src={smallEllipseSrc} alt="" width={16} height={16} className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
