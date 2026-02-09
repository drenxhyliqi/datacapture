import Image from "next/image";
import insideEllipse from "@/assets/background/InsideEllipse2.svg";
import leftBackground from "@/assets/background/LeftBackground.svg";
import rightBackground from "@/assets/background/RightBackground.svg";

const ellipseSrc = typeof insideEllipse === "string" ? insideEllipse : (insideEllipse as { src: string }).src;
const leftBgSrc = typeof leftBackground === "string" ? leftBackground : (leftBackground as { src: string }).src;
const rightBgSrc = typeof rightBackground === "string" ? rightBackground : (rightBackground as { src: string }).src;

export default function HeroBanner() {
  return (
    <section
      aria-label="Hero background"
      className="absolute inset-0 flex min-h-[100dvh] w-full items-center justify-center"
      style={{ marginTop: '-50px' }}
    >
      <div className="hero-bg-left" aria-hidden style={{ marginRight: '300px' }}>
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
          sizes="(max-width: 1024px) 98vw, (max-width: 1536px) 80.14vw, 100vw"
          priority
          style={{ padding: '25px' }}
        />
      </div>
      <div className="hero-green-shadow" aria-hidden />
      <div className="hero-blue-shadow" aria-hidden />
    </section>
  );
}
