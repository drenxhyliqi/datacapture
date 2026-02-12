'use client'
import Image from 'next/image'
import { GradientLine } from '@/components/ui/GradientLine'
import { GradientCard } from './ui/GradientCard'

export default function AboutSection() {
    return (
        <section className="relative w-full py-20 lg:pt-32 px-6 lg:px-8 mt-20 lg:mt-32">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative">
                    {/* Left Section - Text Content */}
                    <div className="relative z-10 pl-8 md:pl-12 py-10">
                        {/* Gradient Effect - Positioned on the right side of text, from white at top to transparent at bottom */}
                        <GradientLine position="left" className="top-10" />
                        
                        {/* Decorative dot - Positioned on top of gradient */}
                        <div className="absolute -left-0 top-10 flex items-center justify-center pointer-events-none z-20">
                            <div className="w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-1xl md:text-1xl lg:text-1xl font-[400] text-white mb-6 uppercase tracking-wide">
                            ABOUT DCS
                        </h2>

                        {/* Main Headline */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white mb-8 leading-tight">
                            An Integrated Platform for Drone Awareness and Security Operations
                        </h3>

                        {/* Paragraphs */}
                        <div className="space-y-6 text-base md:text-lg text-[#D9D9D9] leading-relaxed">
                            <p>
                                Data Capture Systems GmbH is a German technology company specializing in state-of-the-art counter-drone and cybersecurity solutions. We address the rapidly growing security requirements of government authorities, armed forces, critical infrastructure operators, and commercial organizations worldwide.
                            </p>
                            <p>
                                The company provides future-proof, highly reliable protection solutions that integrate seamlessly into existing command, sensor, and security architectures. Our systems are designed for deployment in military, governmental, maritime, and civilian environments.
                            </p>
                            <p>
                                At the core of our product portfolio is a proprietary multi-sensor system that enables the precise detection, identification, and neutralization of all types of drones.
                            </p>
                            <p>
                                Operations are managed via in-house, user-friendly C2 software, which consolidates all sensor data into a clear, real-time common operating picture, enabling fast, secure, and effective decision-making.
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Image with Slider Effect */}
                    
                        <div className="relative w-full lg:mt-[40%]">
                            {/* Drone Image */}
                            <GradientCard>
                                <div className="relative h-[60vh] w-full min-h-[280px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/about-image.png"
                                    alt="Operational use"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover object-center"
                                    priority
                                />
                                </div>  
                            </GradientCard>
                        </div>
                   
                </div>
            </div>
        </section>
    )
}
