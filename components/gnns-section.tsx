'use client'

import Image from "next/image"
import gnnsContent from "@/assets/gnns-2.png"
import gnnsProduct from "@/assets/gnns-3.png"
import img1 from "@/assets/gnns-slide-1.png"
import img2 from "@/assets/gnns-slide-2.png"
import img3 from "@/assets/gnns-slide-3.png"
import { GradientCard } from "./ui/GradientCard"
import DiscussSection from "./discussSection"
import Slideshow from "./slideshow"

const keyRequirements = [
    {
        title: "Multi-Constellation Support",
        description: "Comprehensive coverage across GPS, GLONASS, Galileo, and BeiDou constellations on both L1 and L2/L5 frequency bands."
    },
    {
        title: "Versatile Interception Modes",
        description: "Push-back, hold pattern, and static location modes provide tactical flexibility for any operational scenario."
    },
    {
        title: "Extended Operational Range",
        description: "Effective range up to 1.5km with omnidirectional antennas, extending to 4km with directional configuration."
    },
    {
        title: "All-Weather Performance",
        description: "IP67-rated construction ensures reliable operation from -40°C to +50°C, including direct sun exposure."
    },
]

const operationalModes = [
    {
        title: "Push-back Mode",
        description: "Forces drones to retreat from protected areas by creating navigation signals that make the drone believe it's moving in the wrong direction, causing automatic course correction away from the target."
    },
    {
        title: "Hold pattern Mode",
        description: "Traps drones in a circular holding pattern with configurable radius, effectively neutralizing the threat while maintaining visual tracking capability."
    },
    {
        title: "Static location Mode",
        description: "Creates fixed location signals that can trigger No-Fly Zone responses in commercial drones, forcing automatic landing or return-to-home protocols"
    }
]

export default function GnnsSection() {
    return (
        <section className="container mx-auto relative w-full py-10 lg:py-10 px-6 lg:px-8">
            <div className="w-full max-w-6xl mx-auto">
                {/* HEADER */}
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-6">
                        Designed for operational missions
                    </h2>
                    <div className="max-w-6xl mx-auto space-y-3 text-base md:text-lg text-white/80">
                        <p>
                        Designed for mission-critical operations, this GNSS Spoofer neutralizes unauthorized systems, enhances operational control, protects critical assets, supports flexible countermeasure strategies, and integrates seamlessly into existing security architectures.
                        </p>
                    </div>
                </div>

                {/* FEATURES */}
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-6">
                        GNNS Manipulation
                    </h2>
                    <div className="max-w-6xl mx-auto space-y-3 text-base md:text-lg text-white/80">
                        <p>
                        The Regulus GNSS Spoofer represents the pinnacle of counter-drone technology, utilizing proprietary GNSS manipulation techniques to create an impenetrable defensive shield. Thiscombat-proven system generates sophisticated falsified GNSS signals that seamlessly override legitimate satellite navigation, providing operators with unprecedented control over unmanned threats.
                        </p>
                    </div>
                    <div className="relative w-full h-full mt-10">
                        <GradientCard>
                            <Image src={gnnsContent} alt="GNNS Content" className="object-contain"/>
                        </GradientCard>
                    </div>
                </div>

                {/* FEATURES */}
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-6">
                    TRL-9 Combat-Proven Technology
                    </h2>
                    <div className="max-w-6xl mx-auto space-y-3 text-base md:text-lg text-white/80">
                        <p>
                        TRL-9 Combat-Proven Technology Deployed by leading western militaries • Verified against dozens of real threats • Selected by US DoD</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 mb-6">
                    {/* IMAGE */}
                    <div className="w-full flex justify-center lg:justify-start">
                        <Image
                        src={gnnsProduct}
                        alt="GNNS Product"
                        className="
                            object-contain
                            w-full
                            max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px]
                            h-auto
                        "
                        />
                    </div>

                    {/* TEXT */}
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-2xl md:text-3xl font-[400] text-white">
                        Key Requirements
                        </h3>

                        <div className="space-y-6">
                        {keyRequirements.map((requirement) => (
                            <div key={requirement.title}>
                            <h4 className="text-lg md:text-xl font-[400] text-white">
                                {requirement.title}
                            </h4>
                            <p className="text-base md:text-lg text-white/80 leading-relaxed">
                                {requirement.description}
                            </p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                
                <div className="grid grid-cols-1 lg:grid-cols-1 items-center gap-8 lg:gap-12 mb-20 mt-20">
                <div className="flex flex-col items-start gap-4">
                        <h3 className="text-2xl md:text-3xl font-[400] text-white">
                            Advanced Operational Modes
                        </h3>
                        <h2 className="text-xl md:text-2xl font-[400] text-white mb-2">
                            Interception Capabilities
                        </h2>
                        <div className="space-y-6">
                        {operationalModes.map((mode) => (
                            <div key={mode.title}>
                            <h4 className="text-lg md:text-xl font-[400] text-white">
                                {mode.title}
                            </h4>
                            <p className="text-base md:text-md text-white/80 leading-relaxed">
                                {mode.description}
                            </p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                <Slideshow
                    slides={[
                        { src: img1 },
                        { src: img2 },
                        { src: img3 }

                    ]}
                    delayMs={2000}
                    />
            </div>
        </section>
    )
}
