import Image from "next/image";
import { GradientCard } from "@/components/ui/GradientCard";
import droneSection from "@/assets/droneSection.png";
import { GradientLine } from "@/components/ui/GradientLine";

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
    <section className="container relative mx-auto justify-center w-full ">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Content */}
        <div className="grid items-start gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-10">
          <GradientCard>
              <Image
                src={droneSection}
                alt="Operational use"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
          </GradientCard>

          {/* Right list */}
          <div className="space-y-4 sm:space-y-5">
            {items.map((it, idx) => {
              const isActive = true;

              return (
                <div
                  key={it.title}
                  className="relative rounded-md  p-5 sm:p-6"
                >
                  {isActive && (
                    <GradientLine position="left" width="w-1" className="top-2" />
                  )}

                  <h3 className="text-base font-semibold text-white">
                    {it.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {it.description}
                  </p>

                  <a
                    href={it.href ?? "#"}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
                  >
                    Learn more <span aria-hidden>→</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
