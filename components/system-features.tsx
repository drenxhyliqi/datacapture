import { FeatureCard } from "./ui/features-cards";
import { features } from "./ui/features-data";

export default function SystemFeatures() {
    return (
        <section
            className="relative w-full py-10 lg:py-32 px-6 lg:px-8 "
            
        >
            <div className="w-full max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-4">
                        System Features
                    </h2>
                    <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
                        Key functions supporting drone detection, monitoring,
                        configuration, and post-operation review.
                    </p>
                </div>

                {/* FEATURES */}
                <div className="space-y-6 lg:space-y-8">
                    {/* ROW 1 — 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                        {features.slice(0, 3).map((feature: typeof features[0]) => (
                            <FeatureCard
                                key={feature.title}
                                feature={feature}
                            />
                        ))}
                    </div>

                    {/* ROW 2 — 2 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        {features.slice(3, 5).map((feature: typeof features[0]) => (
                            <FeatureCard
                                key={feature.title}
                                feature={feature}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}