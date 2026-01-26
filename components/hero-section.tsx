'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import droneIcon from '@/assets/drone-svgrepo-com(1) 2.png'

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 lg:px-8 lg:pt-40">
            <div className="w-full max-w-7xl mx-auto">
                <div className="relative flex justify-center">
                    {/* Desktop: Left-side decorative elements */}
                    <div className="hidden lg:block absolute left-10 top-10">
                        <div className="flex flex-col items-end gap-8">
                            {/* Drone Icon - Double border: outer grey, inner gradient */}
                            <div className="w-16 h-16 rounded-full p-[3.4px] flex items-center justify-center"
                            style={{
                                backgroundColor: '#313331'
                            }}
                            >
                                {/* Inner border with gradient from black to grey */}
                                <div 
                                    className="w-[85%] h-[85%] rounded-full flex items-center justify-center"
                                    style={{
                                        background: 'linear-gradient(to top,rgb(35, 35, 35), #000000)'
                                    }}
                                >
                                    <div className="w-full h-full rounded-full flex items-center justify-center">
                                        <Image
                                            src={droneIcon}
                                            alt="Drone icon"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6 object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content - Centered */}
                    <div className="relative w-full max-w-3xl mx-auto text-center lg:text-left">
                        {/* ADAPTIVE SECURITY - Vertical text on the left */}
                        <div className="hidden lg:block absolute left-0 top-73 -translate-x-full -translate-y-1/2 pr-6">
                            <div className="flex flex-col h-full justify-center">
                                <div className="text-white text-xs font-light uppercase opacity-80 whitespace-nowrap" style={{ 
                                    writingMode: 'horizontal-tb',
                                    textOrientation: 'upright',
                                    letterSpacing: '2.5em',
                                    lineHeight: '2.5em'
                                }}>
                                    ADAPTIVE<br />SECURITY
                                </div>
                            </div>
                        </div>

                        {/* Category Tag */}
                        <div className="inline-flex items-center mb-6 lg:mb-8">
                            <span className="px-4 py-1.5 rounded-full border  text-white text-xs font-medium uppercase tracking-wider"
                             style={{
                                background: 'linear-gradient(to top,rgb(35, 35, 35), #000000)',
                                borderColor: '#313331'
                             }}
                            >
                                AIR DEFENCE
                            </span>
                        </div>

                        {/* Main Heading with Mobile Drone Icon */}
                        <div className="relative mb-6 lg:mb-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[500] text-white leading-tight max-w-4xl mx-auto lg:mx-0 pr-16 lg:pr-0">
                            <span className="block">
                            Command &
                            </span>

                            <span className="block">
                            Control for <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">Drone</span>
                            </span>

                            <span className="block">
                            Detection and
                            </span>

                            <span className="block">
                            Monitoring
                            </span>
                        </h1>

                        {/* Mobile Drone Icon */}
                        <div className="lg:hidden absolute top-2 right-0">
                            <div className="w-12 h-12 rounded-full border border-gray-500 bg-gray-900/60 flex items-center justify-center p-2">
                            <Image
                                src={droneIcon}
                                alt="Drone icon"
                                width={24}
                                height={24}
                                className="w-6 h-6 object-contain"
                            />
                            </div>
                        </div>
                        </div>
                        {/* Descriptive Paragraph */}
                        <p className="text-base md:text-lg text-[#A9A9A9] mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0">
                        <span className='block'>A centralized system for real-time drone detection,</span>
                        <span className='block'>visualization, and post-event analysis within defined</span>
                        <span className='block'>operational areas.</span>
                        </p>

                        {/* CTA Button - Single button with left-pointing arrow and fading line */}
                        <div className="flex justify-center lg:justify-start mb-12 lg:mb-16">
                            <div className="relative inline-flex items-center">
                                {/* Fading line extending to the left */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-white/40"></div>
                                
                                <Link
                                    href="#"
                                    className="group relative inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full border border-gray-500 bg-black/60 text-white font-semibold text-sm md:text-base uppercase tracking-wide hover:bg-black/80 transition-all"
                                >
                                    {/* Left-pointing arrow icon */}
                                    <ArrowLeft className="w-5 h-5 text-white flex-shrink-0" />
                                    
                                    <span className="relative z-10">Get Protected Today</span>
                                </Link>
                            </div>
                        </div>

                        {/* Statistics */}
                        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 justify-center lg:justify-start">
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl md:text-3xl font-bold text-white">1,600+</span>
                                <span className="text-sm md:text-base text-gray-400 uppercase tracking-wide">USER ACTIVE</span>
                            </div>
                            
                            {/* Plus sign */}
                            <div className="hidden md:block text-white text-xl">+</div>
                            
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl md:text-3xl font-bold text-white">300+</span>
                                <span className="text-sm md:text-base text-gray-400 uppercase tracking-wide">TECHNOLOGIES</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
