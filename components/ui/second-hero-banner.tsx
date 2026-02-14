import Image from "next/image";
import leftBackground from "@/assets/background/secondBanner/leftBackground.svg";
import rightBackground from "@/assets/background/secondBanner/rightBackground.svg";
import mobileLeftBackground from "@/assets/background/secondBanner/mobile-leftbackground.svg";
import mobileRightBackground from "@/assets/background/secondBanner/mobile-rightbackground.svg";

const toSrc = (img: unknown) =>
  typeof img === "string" ? img : (img as { src: string }).src;

export default function SecondHeroBanner() {
  return (
    <section className="second-hero-bg-container">
        <div className="second-hero-section">
            <div className="second-hero-bg-left" aria-hidden="true">
                <Image
                src={toSrc(leftBackground)}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 0px"
                className="object-contain left-hero-background"
                />
            </div>

            <div className="second-hero-bg-right" aria-hidden="true">
                <Image
                src={toSrc(rightBackground)}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 0px"
                className="object-contain right-hero-background"
                />
            </div>
        </div>

        <div className="second-hero-mobile-section">
            <div className="second-hero-mobile-left" aria-hidden="true">
                <Image
                src={toSrc(mobileLeftBackground)}
                alt=""
                fill
                priority
                className="object-cover mobile-left-hero-background"
                />
            </div>

            <div className="second-hero-mobile-right" aria-hidden="true">
                <Image
                src={toSrc(mobileRightBackground)}
                alt=""
                fill
                priority
                className="object-cover mobile-right-hero-background"
                />
            </div>
        </div>
    </section>
  );
}
