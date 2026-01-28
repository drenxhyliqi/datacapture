import Image from "next/image";
import { GradientCard } from "@/components/ui/GradientCard";
import { GradientLine } from "@/components/ui/GradientLine";
import droneSection from "@/assets/droneSection.png";

type UseItem = {
  title: string;
  description: string;
  href?: string;
};

const items: UseItem[] = [
  {
    title: "Live Monitoring",
    description:
      "View detected drones and operational zones in real time through the Real-Time Screen.",
    href: "#",
  },
  {
    title: "Mission Preparation",
    description:
      "Configure sensors and restricted airspace before or during an operation.",
    href: "#",
  },
  {
    title: "Post-Operation Analysis",
    description:
      "Review recorded drone activity through the Debrief function for analysis and reporting.",
    href: "#",
  },
];

export default function OperationalUseSection() {
  return (
    <section className="w-full">
      {/* CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        {/* HEADER */}
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.28em] text-white/70">
            SOLUTIONS
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Operational Use
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/60 sm:text-base">
            DCS supports operators across monitoring, configuration, and review
            phases through clearly separated system screens and controlled
            workflows.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 items-stretch">
          {/* IMAGE */}
          <GradientCard>
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <div className="relative w-full aspect-[16/11]">
                <Image
                  src={droneSection}
                  alt="Operational use"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </GradientCard>

          {/* LIST */}
          <div className="h-full flex flex-col justify-between ">
            {items.map((it) => (
              <div
                key={it.title}
                className="
                  relative group flex-1 rounded-sm
                  p-5 sm:p-6
                  flex flex-col justify-between
                  transition-all duration-300 ease-out
                "
              >
                {/* GRADIENT GLOW */}
                <span
                  className="
                    pointer-events-none absolute inset-0 
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                  "
                  style={{
                    background:
                      "radial-gradient(120% 120% at left center, rgba(255,255,255,0.08), transparent 60%)",
                  }}
                />

                {/* GRADIENT LINE */}
                <GradientLine
                  position="left"
                  width="w-1"
                  className="
                    top-0	
                    opacity-0 scale-y-75
                    transition-all duration-300 ease-out
                    group-hover:opacity-100
                    group-hover:scale-y-100
                  "
                />

                {/* CONTENT */}
                <div className="relative z-10">
                  <h3 className="text-base font-semibold text-white">
                    {it.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {it.description}
                  </p>
                </div>

                {/* LINK */}
                <a
                  href={it.href ?? "#"}
                  className="
                    relative z-10 mt-4 inline-flex items-center gap-2
                    text-sm font-medium text-white/70
                    transition-colors duration-200
                    hover:text-white
                  "
                >
                  Learn more <span aria-hidden>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
