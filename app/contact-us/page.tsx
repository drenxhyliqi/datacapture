'use client'

import { useState } from 'react'
import { HeroHeader } from '@/components/header'
import Image from 'next/image'
import ellipseShadow from '@/assets/Ellipse 8.svg'
import { Mail, Phone } from 'lucide-react'
import solutionsHero from "@/assets/herosolutuion.png"
import Footer from '@/components/footer'

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        agreeToPrivacy: false,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }))
    }

    return (
        <div className="relative w-full min-h-screen bg-[#101210] overflow-x-clip">
            {/* HERO */}
            <div className="relative">
                {/* HEADER */}
                <div className="relative z-30">
                    <HeroHeader />
                </div>

                {/* HERO IMAGE */}
                <div className="pointer-events-none absolute inset-0 flex z-10 justify-center object-contain">
                    <div className="relative w-[200vh] h-[80vh] py-30 aspect-square md:w-[150vh] md:h-[120vh] lg:w-[155vh] lg:h-[60vh] transform rotate-60 md:rotate-10 md:-top-20 lg:rotate-0 lg:py-0">
                        <Image
                            src={solutionsHero}
                            priority
                            alt="Contact Hero"
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* HERO TEXT */}
                <div className="relative z-20 mx-auto max-w-4xl px-6 pt-30 md:pt-32 pb-24 text-center">
                    <p className="text-white/70 tracking-widest text-sm md:text-base">
                        CONTACT US
                    </p>
                    <h1 className="mt-6 text-white text-4xl md:text-6xl font-semibold leading-tight">
                        We are there for you
                    </h1>
                    <p className="mt-6 text-white/60 max-w-2xl mx-auto">
                        Get in touch with our team for support, questions, or feedback.
                    </p>
                </div>
            </div>

            {/* STATIC RIGHT SHADOW */}
            <div className="pointer-events-none absolute inset-0 z-0 md:z-[15] overflow-hidden">
                <div className="absolute right-5 top-100 w-[70vw] max-w-[700px] h-[300vh] aspect-square translate-x-1/2 -translate-y-1/20 opacity-80 blur-[80px]">
                    <Image
                        src={ellipseShadow}
                        alt="Shadow effect"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* CONTENT */}
            <section className="relative overflow-hidden">
                {/* LEFT MOVING SHADOW */}
                <div className="absolute -left-[5px] inset-0 pointer-events-none z-0 md:z-[15] overflow-hidden">
                    <div
                        className="absolute left-0 top-0 w-[70vw] max-w-[700px] h-full -translate-x-1/2 opacity-90"
                        style={{ animation: 'slideVertical 5s linear infinite' }}
                    >
                        <Image
                            src={ellipseShadow}
                            alt="Shadow effect"
                            fill
                            className="object-contain"
                            style={{ filter: 'blur(10px)' }}
                        />
                    </div>
                </div>

                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* LEFT: CONTACT FORM */}
                        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Get in touch with us
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* First Name & Last Name */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Company */}
                                <div>
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Leave a message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
                                    />
                                </div>

                                {/* Privacy Checkbox */}
                                <div className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        name="agreeToPrivacy"
                                        id="privacy"
                                        checked={formData.agreeToPrivacy}
                                        onChange={handleChange}
                                        className="mt-1 w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-400"
                                    />
                                    <label
                                        htmlFor="privacy"
                                        className="text-sm text-gray-600"
                                    >
                                        You agree to our friendly{' '}
                                        <a
                                            href="#"
                                            className="underline hover:text-gray-900"
                                        >
                                            privacy policy
                                        </a>
                                        .
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200"
                                >
                                    Send message
                                </button>
                            </form>
                        </div>

                        {/* RIGHT: CONTACT INFORMATION CARDS */}
                        <div className="h-full flex flex-col gap-6">
                            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-2xl font-bold text-gray-900 mb-1">
                                            info@ipsum.com
                                        </p>
                                        <p className="text-sm font-medium text-gray-700 mb-2">
                                            General Support & Feedback
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Whether you need help or want to share your thoughts,
                                            our team is always here for you.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Email Card 2 */}
                            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-2xl font-bold text-gray-900 mb-1">
                                            info@ipsum.com
                                        </p>
                                        <p className="text-sm font-medium text-gray-700 mb-2">
                                            General Support & Feedback
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Whether you need help or want to share your thoughts,
                                            our team is always here for you.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-2xl font-bold text-gray-900 mb-1">
                                            +383 49 884 555
                                        </p>
                                        <p className="text-sm font-medium text-gray-700 mb-2">
                                            Anything else
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Whether you need help or want to share your thoughts,
                                            our team is always here for you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
                @keyframes slideVertical {
                    0% {
                        transform: translateY(-30%);
                    }
                    50% {
                        transform: translateY(60%);
                    }
                    100% {
                        transform: translateY(-30%);
                    }
                }
                body, html {
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </div>
    )
}
