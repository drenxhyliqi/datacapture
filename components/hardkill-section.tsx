'use client'

import Image from "next/image"
import hardkillfeature2 from "@/assets/hardkill-2.png"
import hardkillfeature3 from "@/assets/hardkill-3.png"
import hardkillfeature4 from "@/assets/hardkill-4.png"
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

const specs = [
    { label: "CALIBER", value: "NATO 7.62×51mm`" },
    { label: "CYCLIC RATE OF FIRE (RDS/MIN)", value: "850" },
    { label: "WEIGHT (W/O AMMO)", value: "300 lbs" },
    { label: "POINTING ACCURACY (MOA)CALIBER", value: "< 1 MOA" },
    { label: "DEFEATS", value: "Groups 1–3" },
  ];

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

                {/* FEATURES 1*/}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 mb-10 mt-20">
                    <div className="mt-10 space-y-2">
                        <h2 className="text-3xl text-white font-semibold">
                            BULLFROG M240
                        </h2> <br />
                        <p className="text-base text-white">ENGINEERED FOR AUTONOMOUS PROTECTION AGAINST UAVS</p><br />
                        <p className="text-base text-white">BULLFROG™ IS A LIGHTWEIGHT, LOW-POWER AUTONOMOUS WEAPON STATION DESIGNED TO DETECT, IDENTIFY, AND NEUTRALIZE ENEMY UXS. ENGINEERED FOR MOBILITY AND VERSATILITY, BULLFROG™ EXCELS IN BOTH ON-THE-MOVE OPERATIONS AND THE PROTECTION OF HIGH-VALUE TARGETS LIKE POWER SUBSTATIONS. CAPABLE OF ENGAGING GROUP 1-3 UAS, IT OFFERS BOTH AUTONOMOUS AND SEMI-AUTONOMOUS MODES, DELIVERING FLEXIBLE, RELIABLE DEFENSE AT EVERY TURN.</p>
                    </div>

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
                </div>

                <div className="w-full flex flex-col items-center justify-center lg:justify-start mb-30">
                    <h1 className="text-5xl text-orange-300 font-semibold">Defeats</h1><br />
                    <p className="text-base text-3xl text-white">Groups 1–3</p>
                    <p className="text-base text-3xl text-white">Maximum Effective Range: 800m</p>
                </div>
              
                

                {/* FEATURES 2 */}
                <div className="text-center mb-16 mt-10 mb-24">
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
                        src={hardkillfeature3}
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-30 sm:gap-6 lg:gap-7">
                    {hardkillFeatures.map((feature) => (
                        <HardKillCard key={feature.title} service={feature} />
                    ))}
                </div>

                {/* Feature 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 mb-6 mt-30">
                    <div className="mt-10 space-y-2">
                        <h2 className="text-3xl text-white font-semibold">
                            System Charateristics
                        </h2>
                        {specs.map((s) => (
                            <div
                            key={s.label}
                            className="grid grid-cols-[1fr_auto] items-baseline gap-x-10"
                            >
                            <div className="text-2xl text-white uppercase leading-tight">
                                {s.label}
                            </div>

                            <div className="text-2xl text-white text-right whitespace-nowrap">
                                {s.value}
                            </div>
                            </div>
                        ))}
                    </div>

                    {/* IMAGE */}
                    <div className="w-full flex justify-center lg:justify-start">
                        <Image
                        src={hardkillfeature4}
                        alt="GNNS Product"
                        className="
                            object-contain
                            w-full
                            max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px]
                            h-auto
                        "
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
