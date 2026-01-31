'use client'

import Image from "next/image";
import solutions4 from "@/assets/selections4.svg";
import solutions5 from "@/assets/selections5.png";

export default function ContentSection() {
  return (
    <section className="relative w-full mb-2 px-6 justify-center items-center z-10">
      
        {/* ===== SECTION 4 ===== */}
      <div className="py-5 justify-center items-center">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 justify-between items-center mb-5">
          
          {/* TEXT */}
          <div>
            <span className="inline-block mb-4 px-3 py-1 text-xs tracking-widest text-white/60 border border-white/10 rounded-full">
              DCS SYSTEM
            </span>

            <h2 className="text-4xl lg:text-5xl font-[400] text-white leading-tight">
              Centralized Control<br />
              of Drone Monitoring<br />
              Operations
            </h2>

            <p className="mt-6 text-base text-white/70 max-w-lg">
              DCS provides a single interface to manage live monitoring,
              mission configuration, and system settings. Operators can
              switch between real-time observation, mission setup, and
              administrative tasks through clearly separated system screens.
            </p>
          </div>

          {/* SVG */}
          <div className="relative block justify-center">
            <Image
              src={solutions4}
              alt="Centralized drone monitoring"
              className="w-full h-auto max-w-sm "
              priority
            />
          </div>
        </div>
      </div>

      {/* ===== SECTION 5 ===== */}
      <div className="py-5">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 justify-between items-center">

            {/* SVG — LEFT */}
            <div className="relative block justify-center ">
            <Image
                src={solutions5}
                alt="System updates and maintenance"
                className="w-full h-auto max-w-sm "
                priority
            />
            </div>

            {/* TEXT — RIGHT */}
            <div>
            <span className="inline-block mb-4 px-3 py-1 text-xs tracking-widest text-white/60 border border-white/10 rounded-full">
                Support
            </span>

            <h2 className="text-4xl lg:text-5xl font-[400] text-white leading-tight">
                System Updates and<br />
                Maintenance
            </h2>

            <p className="mt-6 text-base text-white/70 max-w-lg">
                The DCS system supports secure software updates through
                authorized channels, including VPN-based updates and
                offline updates via approved USB media. System status
                and sensor connectivity are visible to operators at all times.
            </p>
            </div>

        </div>
    </div>

    </section>
  );
}
