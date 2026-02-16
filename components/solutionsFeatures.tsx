import { FeatureCard } from "./ui/featuresCards";
import { solutionsFeatures } from "./ui/solutionsFeaturesData";

type SolutionsFeaturesProps = {
  showUavCard?: boolean;
};

export default function SolutionsFeatures({ showUavCard = true }: SolutionsFeaturesProps) {
  return (
    <section className="relative w-full py-10 lg:py-32 px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white">
                Tailor made air security
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-base md:text-lg text-white/80">
                The DCS system is designed to operate within specific operational areas, integrating sensor data into a
                centralized command-and-control interface. It enables operators to monitor drone activity, define
                restricted zones, and review recorded data through structured system workflows.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:space-y-8 ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutionsFeatures.slice(0, 3).map((feature: typeof solutionsFeatures[0]) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>

          {showUavCard && (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8">
              <div className="lg:col-span-1">
                {solutionsFeatures.slice(3, 4).map((feature: typeof solutionsFeatures[0]) => (
                  <FeatureCard key={feature.title} feature={feature} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
