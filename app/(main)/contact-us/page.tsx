'use client'

import { HeroHeader } from '@/components/header'
import Image from 'next/image'
import ellipseShadow from '@/assets/Ellipse 8.svg'
import Footer from '@/components/footer'
import { useForm, ValidationError } from '@formspree/react'
import SecondHeroBanner from '@/components/ui/secondHeroBanner'
import { useTranslations } from '@/lib/i18n/LocaleContext'
import { useEffect, useRef } from "react"

const FORMSPREE_FORM_ID = 'xqedawjw'

export default function ContactUsPage() {
    const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID)
    const t = useTranslations()
    const shadowRef = useRef<HTMLDivElement | null>(null)
    const aboutRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!aboutRef.current || !shadowRef.current) return

            const aboutTop = aboutRef.current.offsetTop
            const aboutHeight = aboutRef.current.offsetHeight
            const scrollY = window.scrollY
            const shadowHeight = shadowRef.current.offsetHeight
            const fixedTopOffset = -100

            const startFix = aboutTop - fixedTopOffset
            const endFix = aboutTop + aboutHeight - shadowHeight - fixedTopOffset

            if (scrollY >= startFix && scrollY <= endFix) {
                shadowRef.current.style.position = "fixed"
                shadowRef.current.style.top = `${fixedTopOffset}px`
            } else if (scrollY < startFix) {
                shadowRef.current.style.position = "absolute"
                shadowRef.current.style.top = "0px"
            } else {
                shadowRef.current.style.position = "absolute"
                shadowRef.current.style.top = `${aboutHeight - shadowHeight}px`
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        window.addEventListener("resize", handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
        }
    }, [])


    return (
        <div className="relative min-h-screen bg-[#101210] overflow-x-clip">
            <div className="relative">
                <div className="relative z-50">
                    <HeroHeader />
                </div>

                <SecondHeroBanner />
                <div className="relative z-20 mx-auto max-w-4xl pt-10 md:pt-5 pb-24 text-center">
                    <p className="text-white tracking-widest text-sm md:text-base">
                        {t('contact.label')}
                    </p>
                    <h1 className="mt-6 text-white text-4xl md:text-6xl font-[400] leading-tight">
                        {t('contact.headline')}
                    </h1>
                    <p className="mt-6 text-white/60 max-w-2xl mx-auto">
                        {t('contact.subtext')}
                    </p>
                </div>
            </div>

            {/* Shadow + Features + Description */}
            <section ref={aboutRef} className="relative overflow-hidden z-20">
                {/* Shadow */}
                <div
                    ref={shadowRef}
                    className="pointer-events-none z-0"
                    style={{
                        position: "absolute",
                        left: "0",
                        transform: "translateX(-50%)",
                        width: "40vw",
                        height: "150vh",
                    }}
                >
                    <Image
                        src={ellipseShadow}
                        alt="Shadow effect"
                        fill
                        className="object-contain opacity-70"
                        style={{ filter: "blur(60px)" }}
                        sizes="40vw"
                    />
                </div>

                <div className="relative z-10">
                    <div className="w-full max-w-6xl mx-auto py-20 px-5 lg:py-32">
                        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
                            <h2 className="text-3xl md:text-4xl font-[400] text-gray-900 mb-6">
                                {t('contact.formTitle')}
                            </h2>

                            {state.succeeded ? (
                                <p className="text-gray-700 text-lg py-4">
                                    {t('contact.thanks')}
                                </p>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder={t('contact.firstName')}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder={t('contact.lastName')}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder={t('contact.company')}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder={t('contact.email')}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm mt-1 block" />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder={t('contact.phone')}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder={t('contact.message')}
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
                                        />
                                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1 block" />
                                    </div>
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
                                            {t('contact.privacyLabel')}{' '}
                                            <a
                                                href="#"
                                                className="underline hover:text-gray-900"
                                            >
                                                {t('contact.privacyLink')}
                                            </a>
                                            .
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {state.submitting ? t('contact.sending') : t('contact.submit')}
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
