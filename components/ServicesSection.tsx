'use client'

import { ServiceCard } from './ServiceCard'
import { services } from './ui/services-data'

export default function ServicesSection() {
    return (
        <section className="relative w-full py-10 lg:py-32 px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-6">
                        Designed for operational missions
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-4 text-base md:text-lg text-white/80">
                        <p>
                            DCS is designed to support mission-driven operations by providing
                            real-time situational awareness, controlled configuration, and recorded
                            operational data.
                        </p>
                        <p>
                            All system functions are accessed through a unified graphical interface
                            to support consistent operational workflows.
                        </p>
                    </div>
                </div>

                {/* SERVICES */}
                <div className="space-y-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
