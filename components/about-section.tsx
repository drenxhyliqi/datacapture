'use client'
import Image from 'next/image'
import droneImage from '@/assets/drone.png'

export default function AboutSection() {
    return (
        <section className="relative w-full py-20 lg:py-32 px-6 lg:px-8 mt-3">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative">
                    {/* Left Section - Text Content */}
                    <div className="relative z-10 pl-8 md:pl-12">
                        {/* Gradient Effect - Positioned on the right side of text, from white at top to transparent at bottom */}
                        <div 
                            className="absolute -left-0 top-0 bottom-0 pointer-events-none w-1 md:w-1.5 lg:w-[7px]"
                            style={{
                                background: `
                                    linear-gradient(180deg,
                                        rgba(255, 255, 255, 0.25) 0%,
                                        rgba(220, 200, 255, 0.3) 15%,
                                        rgba(180, 150, 220, 0.2) 30%,
                                        rgba(120, 80, 180, 0.15) 50%,
                                        rgba(80, 40, 120, 0.1) 70%,
                                        rgba(40, 20, 60, 0.05) 85%,
                                        transparent 100%
                                    )
                                `
                            }}
                        />
                        
                        {/* Decorative dot - Positioned on top of gradient */}
                        <div className="absolute -left-0 top-0 flex items-center justify-center pointer-events-none z-20">
                            <div className="w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 uppercase tracking-wide">
                            ABOUT DCS
                        </h2>

                        {/* Main Headline */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                            An integrated platform for operational drone awareness.
                        </h3>

                        {/* Paragraphs */}
                        <div className="space-y-6 text-base md:text-lg text-white/90 leading-relaxed">
                            <p>
                                The DCS system collects data from sensors, processes it centrally, and presents drone activity through a unified graphical interface.
                            </p>
                            <p>
                                It supports real-time monitoring, operational configuration, and recorded data review for operators before, during, and after missions.
                            </p>
                            <p>
                                The system emphasizes situational awareness, controlled access, and structured workflows across monitoring, mission planning, and system configuration.
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Image with Slider Effect */}
                    <div className="relative w-full">
                        {/* Drone Image */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/20 z-10">
                            <Image
                                src={droneImage}
                                alt="Drone in operation"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
