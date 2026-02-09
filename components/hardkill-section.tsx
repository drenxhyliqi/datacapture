'use client'

import Image from "next/image"
import hardkillfeature2 from "@/assets/hardkill-3.png"
import { GradientCard } from "./ui/GradientCard"
import DiscussSection from "./discussSection"
import Slideshow from "./slideshow"
import { HardKillCard } from "./hardkillCard"
import { hardkillFeatures } from "./ui/hardkill-features-data"

const feature2 = [
    {
        title: "LOW-COLLATERAL DEFEAT CAPABILITIES",
        description: "Bullfrog integrates with less-than-lethal options including laser dazzlers and composite/rubber bullets."
    },
    {
        title: "LOW-COLLATERAL DEFEAT CAPABILITIES",
        description: "- 300 yard effective range, zero collateral damage from falling bullet"
    },
    {
        title: "Laser Detection",
        description: "- Dazzle (saturate sensor so it can't view) up to 2km away\n- Disable (destroy focal plane) up to 1km away\n- Designate: can issue encrypted drone commands (e.g. 'Return to Home,' 'Land') for non-kinetic takedown of drones"
    }
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

export default function HardkillSection() {
    return (
        <section className="container mx-auto relative w-full py-10 lg:py-32 px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
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
                        src={hardkillfeature2}
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
                        <div className="space-y-6">
                        {feature2.map((feature) => (
                            <div key={feature.title}>
                            <h4 className="text-lg md:text-xl font-[400] text-white">
                                {feature.title}
                            </h4>
                            <p className={`text-base md:text-lg text-white/80 leading-relaxed ${feature.title === "Laser Detection" ? "whitespace-pre-line line-height-1.5" : ""}`}>
                                {feature.description}
                            </p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 sm:gap-6 lg:gap-7">
                    {hardkillFeatures.map((feature) => (
                        <HardKillCard key={feature.title} service={feature} />
                    ))}
                </div>
            </div>
        </section>
    )
}
