import Image from "next/image";
import leftBackground from "@/assets/background/secondBanner/leftBackground.svg";
import rightBackground from "@/assets/background/secondBanner/rightBackground.svg";


const leftBgSrc = typeof leftBackground === "string" ? leftBackground : (leftBackground as { src: string }).src;
const rightBgSrc = typeof rightBackground === "string" ? rightBackground : (rightBackground as { src: string }).src;

export default function SecondHeroBanner() {
  return (
    <section className="second-hero-section">
        <div className="second-hero-bg-left " aria-hidden>
            <Image src={leftBgSrc} alt="" fill priority className="object-contain left-hero-background" />
        </div>

        <div className="second-hero-bg-right" aria-hidden>
            <Image src={rightBgSrc} alt="" fill priority className="object-contain right-hero-background" />
        </div>

        {/* content */}
    </section>  
  );
}
