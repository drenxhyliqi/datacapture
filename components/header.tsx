'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown, Sparkles, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Home Page', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '#' },
    { name: 'Company', href: '/company-section' },
    { name: 'Contact Us', href: '#' },
]

const languages = [
    { code: 'EN', name: 'English', active: true },
    { code: 'DE', name: 'German', active: false },
]

export const HeroHeader = () => {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isLanguageOpen, setIsLanguageOpen] = React.useState(false)
    const [selectedLanguage, setSelectedLanguage] = React.useState(languages[0])

    const handleLanguageSelect = (lang: typeof languages[0]) => {
        setSelectedLanguage(lang)
        setIsLanguageOpen(false)
    }

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 w-full">
                <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                    {/* Logo - Left Side */}
                    <Link
                        href="/"
                        className="flex items-center gap-3"
                        aria-label="Data Capture Systems Home"
                    >
                        {/* White vertical bar */}
                        <div className="h-14 w-1.5 bg-white" />
                        {/* Logo text */}
                        <div className="flex flex-col text-white font-sans">
                            <span className="text-xs font-semibold leading-tight tracking-wide">DATA</span>
                            <span className="text-xs font-semibold leading-tight tracking-wide">CAPTURE</span>
                            <span className="text-xs font-semibold leading-tight tracking-wide">SYSTEMS</span>
                        </div>
                    </Link>

                    {/* Center Navigation Menu - Desktop Only */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                        <div className="relative rounded-full border border-white/30 px-8 py-3" style={{
                           background: `
                            linear-gradient(173deg, rgba(0, 0, 0, 0.97) 0%, rgba(57, 76, 107, 0.5) 100%, rgb(19, 23, 51) 95%),
                            linear-gradient(180deg, #1E1E1E 30%,rgba(5, 27, 59, 0) 120%)
                         `,
                         backgroundBlendMode: 'overlay',}}>
                            <ul className="flex items-center gap-10">
                                {menuItems.map((item, index) => {
                                    const isActive =
                                        item.href === '/'
                                            ? pathname === '/'
                                            : pathname !== '/' && pathname.startsWith(item.href)

                                    return (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "text-sm font-medium transition-colors duration-150 whitespace-nowrap",
                                                    isActive
                                                        ? "text-white"
                                                        : "text-gray-300 hover:text-white"
                                                )}
                                            >
                                                {item.name === 'Home Page' ? 'Home' : item.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Right Side - Desktop: Language Selector & CTA Button */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Language Selector with Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-gradient-to-b from-black/60 to-gray-900/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors"
                                style={{ backgroundColor: 'rgba(16, 18, 16, 0.6)' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(16, 18, 16, 0.8)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(16, 18, 16, 0.6)'}
                                aria-label="Select language"
                            >
                                <span>{selectedLanguage.code}</span>
                                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isLanguageOpen && "rotate-180")} />
                            </button>
                            
                            {/* Language Dropdown Menu */}
                            {isLanguageOpen && (
                                <>
                                    <div 
                                        className="fixed inset-0 z-40" 
                                        onClick={() => setIsLanguageOpen(false)}
                                    />
                                    <div className="absolute right-0 top-full mt-2 z-50 min-w-[120px] rounded-lg border border-white/20 backdrop-blur-md shadow-lg overflow-hidden" style={{ backgroundColor: 'rgba(16, 18, 16, 0.9)' }}>
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => handleLanguageSelect(lang)}
                                                className={cn(
                                                    "w-full px-4 py-2 text-left text-sm font-medium transition-colors",
                                                    lang.code === selectedLanguage.code
                                                        ? "bg-white/10 text-white"
                                                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                                                )}
                                            >
                                                {lang.code} - {lang.name}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Get Started Button */}
                        <Link
                            href="#"
                            className="flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-b from-black/60 to-gray-900/60 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-black/80"
                        >
                            <Sparkles className="h-4 w-4" />
                            <span>Get Started!</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-white p-2"
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden" style={{ backgroundColor: '#101210' }}>
                    <div className="flex h-full flex-col">
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between px-6 py-4">
                            {/* Logo */}
                            <Link
                                href="/"
                                className="flex items-center gap-3"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <div className="h-14 w-1.5 bg-white" />
                                <div className="flex flex-col text-white font-sans">
                                    <span className="text-xs font-semibold leading-tight tracking-wide">DATA</span>
                                    <span className="text-xs font-semibold leading-tight tracking-wide">CAPTURE</span>
                                    <span className="text-xs font-semibold leading-tight tracking-wide">SYSTEMS</span>
                                </div>
                            </Link>

                            {/* Close Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white p-2"
                                aria-label="Close menu"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 px-6 py-8">
                            <ul className="space-y-6">
                                {menuItems.map((item, index) => {
                                    const isActive =
                                        item.href === '/'
                                            ? pathname === '/'
                                            : pathname.startsWith(item.href)

                                    return (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={cn(
                                                    "block text-2xl font-bold text-white transition-colors",
                                                    isActive && "text-white"
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>

                        {/* Bottom Section - Language Selector */}
                        <div className="border-t border-gray-700 px-6 py-6">
                            <div className="flex items-center gap-3">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            handleLanguageSelect(lang)
                                            setIsMobileMenuOpen(false)
                                        }}
                                        className={cn(
                                            "px-4 py-2 text-sm font-medium transition-colors",
                                            lang.code === selectedLanguage.code
                                                ? "rounded-full border border-gray-500 text-white"
                                                : "text-gray-400"
                                        )}
                                        style={lang.code === selectedLanguage.code ? { backgroundColor: 'rgba(16, 18, 16, 0.6)' } : {}}
                                    >
                                        {lang.code}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
