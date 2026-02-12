'use client'

import Image from "next/image"
import radarFeature2 from "@/assets/mhr.svg"
import radarFeature3 from "@/assets/radar-3.png"
import radarFeature4 from "@/assets/gan.svg"
import radarFeature5 from "@/assets/radar-5.png"
import radarFeature6 from "@/assets/scanner.svg"


export default function RadarSection() {
  return (
    <section className="container mx-auto relative w-full py-10 lg:py-32 px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-6">
            {"Designed for operational missions"}
          </h2>
          <div className="max-w-6xl mx-auto space-y-3 text-base md:text-lg text-white/80">
            <p>
              {"Designed for mission-critical operations, the Multi-Mission Hemispheric Radar (MHR) delivers full hemispheric protection, enhances situational awareness, protects critical assets, supports flexible defense strategies, and integrates seamlessly into existing security architectures."}
            </p>
          </div>
        </div>

        {/* FEATURES 1*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 mb-10 mt-20">
          <div className="mt-10 space-y-2">
            <h2 className="text-3xl text-white font-semibold">
              {"MHR® "}
            </h2>
            <h2 className="text-3xl text-white font-semibold">
              {"Multi-Mission Hemispheric Radar"}
            </h2>{" "}
            <br />
            <p className="text-base text-white">
              {"Leonardo DRS’s Multi-Mission Hemispheric Radar (MHR) is a cutting-edge, software-defined 4D AESA pulse-Doppler radar platform that can host a variety of operational"}
            </p>{" "}
            <br />
            <p className="text-base text-white">
              {"Leonardo DRS’s Multi-Mission Hemispheric Radar (MHR) is a cutting-edge, software-defined 4D AESA pulse-Doppler radar platform that can host a variety of operational missions."}
            </p>
            <p className="text-base text-white">
              {"It provides full hemispheric protection for the maneuver force by improving active defense capabilities and real-time situational awareness on the battlefield. Whether stationary or on-the-move, the MHR has the power to support warfighters across a broad spectrum of missions."}
            </p>
            <br />
            <p className="text-base text-white">
              {"The MHR’s versatility and superior SWaP-C make it a critical addition to your force at an unprecedented price."}
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full flex justify-center lg:justify-start">
              <Image
                src={radarFeature2}
                alt="MHR Multi-Mission Hemispheric Radar"
                className="object-contain w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px] h-auto"
              />
          </div>
        </div>

        <div className="text-center mt-20 items-center justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-6">
            {"TRL-9 Combat-Proven Technology"}
          </h2>
        </div>

        {/* FEATURES 2*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 mb-10 mt-20">
          {/* IMAGE */}
          <div className="w-full flex justify-center lg:justify-start">
              <Image
                src={radarFeature3}
                alt="GNNS Product"
                className="
                                object-contain
                                w-full
                                max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px]
                                h-auto
                            "
              />
          </div>

          <div className="mt-10 space-y-2">
            <h2 className="text-3xl text-white font-semibold">
              {"Key Features"}
            </h2>{" "}
            <br />
            <p className="text-base text-white">
              {"Pulse-Doppler, AESA (Active Electronically Scanned Array) Antenna based on GAN amplifiers"}
            </p>{" "}
            <br />
            <p className="text-base text-white">
              {"Non rotating, solid state, digital radar"}
            </p>{" "}
            <br />
            <p className="text-base text-white">
              {"Multi Mission Radar platforms: can host varied operational missions simultaneously"}
            </p>{" "}
            <br />
            <p className="text-base text-white">
              {"Software-Defined Radars, Fully Configurable for specific requirements"}
            </p>{" "}
            <br />
            <p className="text-base text-white">
              {"A single radar platform provides 120º azimuth coverage. Hemispheric coverage is achieved when four interchangeable radars are employed as a system"}
            </p>{" "}
            <br />
            <p className="text-base text-white">
              {"Electronic counter-countermeasures (ECCM) capabilities"}
            </p>{" "}
            <br />
          </div>
        </div>

        {/* FEATURES 3*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 mb-10 mt-20">
          <div className="mt-10 space-y-2">
            <h2 className="text-3xl text-white font-semibold">
              {"KEY CHARACTERISTICS"}
            </h2>{" "}
            <br />
            <p className="text-base text-white">
              {"Innovative GaN Semiconductor Technology: Reduced package size & improved thermal"}
            </p>{" "}
            <br />
            <p className="text-base text-white">
              {"Automated target detection & improved multipath mitigation through advanced signal processing and algorithms."}
            </p>{" "}
            <br />
            <p className="text-base text-white">
              {"Handles hundreds of targets through Track While Search."}
            </p>{" "}
            <br />
            <p className="text-base text-white">
              {"Passive Cooling reduces integration complexity and eliminates the need for ancillary cooling systems."}
            </p>{" "}
            <br />
            <p className="text-base text-white">
              {"Designed for easy integration into higher level systems"}
            </p>{" "}
            <br />
          </div>

          {/* IMAGE */}
          <div className="w-full flex justify-center lg:justify-start">
              <Image
                src={radarFeature4}
                alt="GNNS Product"
                className="object-contain w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px] h-auto"
              />
          </div>
        </div>

        {/* FEATURES 4*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 mb-10 mt-20">
          {/* IMAGE */}
          <div className="w-full flex justify-center lg:justify-start">
              <Image
                src={radarFeature5}
                alt="GNNS Product"
                className="object-contain w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px] h-auto"
              />
          </div>
          <div className="mt-10 space-y-2">
            <h2 className="text-3xl text-white font-semibold">
              {"aCHR / eCHR"}
            </h2>{" "}
            <br />
            <p className="text-base text-white">
              {"While the aCHR is tailored for Active Protection Systems (APS) Vehicle Protection Systems (VPS) and Hostile Fire Detection (HFD), the eCHR is optimized for Counter-Unmanned Aircraft System (C-UAS) and Very Short-Range Air Defense (VSHORAD) missions. Both these advanced radars offer best-of-breed radar sensors for air defense and active defense against all types of aerial threats."}
            </p>{" "}
            <br />
          </div>
        </div>

        {/* FEATURES 5*/}

      </div>
    </section>
  )
}
