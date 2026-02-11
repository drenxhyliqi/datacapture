'use client'

import { HeroHeader } from '@/components/header'
import Image from 'next/image'
import ellipseShadow from '@/assets/Ellipse 8.svg'
import solutionsHero from "@/assets/herosolutuion.png"
import Footer from '@/components/footer'
import { useForm, ValidationError } from '@formspree/react'

const FORMSPREE_FORM_ID = 'xqedawjw'

export default function ContactUsPage() {
    const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID)

    return (
        <div className="relative min-h-screen bg-[#101210] overflow-x-clip">
            {/* HERO - z-20 që titulli të dalë mbi elementët e tjerë */}
            <div className="relative">
                {/* HEADER */}
                <div className="relative z-50">
                    <HeroHeader />
                </div>

                {/* HERO IMAGE - behind text */}
                <div className="pointer-events-none absolute -top-35 inset-0 flex z-0 justify-center object-contain">
                    <div className="relative w-[200vh] h-[80vh] py-30 aspect-square md:w-[150vh] md:h-[120vh] lg:w-[190vh] lg:h-[60vh] transform rotate-60 md:rotate-10 md:-top-20 lg:rotate-0 lg:py-0">
                        <Image
                            src={solutionsHero}
                            priority
                            alt="Contact Hero"
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* HERO TEXT */}
                <div className="relative z-20 mx-auto max-w-4xl pt-30 md:pt-5 pb-24 text-center">
                    <p className="text-white tracking-widest text-sm md:text-base">
                        CONTACT US
                    </p>
                    <h1 className="mt-6 text-white text-4xl md:text-6xl font-[400] leading-tight">
                        We are there for you
                    </h1>
                    <p className="mt-6 text-white/60 max-w-2xl mx-auto">
                        Get in touch with our team for support, questions, or feedback.
                    </p>
                </div>
            </div>

            {/* STATIC RIGHT SHADOW */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
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
            <section className="relative overflow-hidden z-20">
                {/* LEFT MOVING SHADOW */}
                <div className="absolute -left-16 inset-0 pointer-events-none z-0 md:z-[15] overflow-hidden">
                    <div
                        className="animate-system-blur absolute left-0 -top-32 w-[55vw] max-w-[520px] h-full -translate-x-1/2 opacity-90"
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
                    <div className="w-full max-w-7xl mx-auto py-20 lg:py-32">
                        {/* LEFT: CONTACT FORM */}
                        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
                            <h2 className="text-3xl md:text-4xl font-[400] text-gray-900 mb-6">
                                Get in touch with us
                            </h2>

                            {state.succeeded ? (
                                <p className="text-gray-700 text-lg py-4">
                                    Thanks for your message! We&apos;ll get back to you soon.
                                </p>
                            ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* First Name & Last Name */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last name"
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
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm mt-1 block" />
                                </div>

                                {/* Phone */}
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Leave a message..."
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
                                    />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1 block" />
                                </div>

                                {/* Privacy Checkbox */}
                                <div className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        name="agreeToPrivacy"
                                        id="privacy"
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
                                    disabled={state.submitting}
                                    className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {state.submitting ? 'Sending...' : 'Send message'}
                                </button>
                            </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
                body, html {
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </div>
    )
}
