'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Sparkles, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLocale } from '@/lib/i18n/LocaleContext'

type MenuChild = { name: string; href: string; hidden?: boolean; tKey: string }
type MenuItem = {
  name: string
  href: string
  tKey: string
  children?: MenuChild[]
}

const menuItems: MenuItem[] = [
  { name: 'Home Page', href: '/', tKey: 'nav.homePage' },
  {
    name: 'Solutions',
    href: '/solutions',
    tKey: 'nav.solutions',
    children: [
      { name: 'Solutions CUAS', href: '/solutions/use-cases', tKey: 'nav.solutionsCuas' },
      { name: 'Solutions SRAD', href: '/solutions/srad', tKey: 'nav.solutionsSrad' },
    ],
  },
  { name: 'Services', href: '/services', tKey: 'nav.services' },
  {
    name: 'Products',
    href: '/products',
    tKey: 'nav.products',
    children: [
      { name: 'GNNS', href: '/products/gnns', tKey: 'nav.gnns' },
      { name: 'Hard-kill', href: '/products/hard-kill', hidden: true, tKey: 'nav.hardKill' },
      { name: 'Radar', href: '/products/radar', tKey: 'nav.radar' },
      { name: 'UAV', href: '/products/uav', tKey: 'nav.uav' },
      { name: 'Mobile CUAS', href: '/products/mobile-cuas', tKey: 'nav.mobileCuas' },
    ],
  },
  { name: 'Company', href: '/company-section', tKey: 'nav.company' },
  { name: 'Contact Us', href: '/contact-us', tKey: 'nav.contactUs' },
]

const languages = [
  { code: 'EN' as const, name: 'English', locale: 'en' as const },
  { code: 'DE' as const, name: 'German', locale: 'de' as const },
]

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname.startsWith(href)
}

function itemIsActive(pathname: string, item: MenuItem) {
  if (isActivePath(pathname, item.href)) return true
  if (item.children?.length) return item.children.some((c) => isActivePath(pathname, c.href))
  return false
}

export const HeroHeader = () => {
  const pathname = usePathname()
  const { locale, setLocale, t } = useLocale()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = React.useState(false)
  const selectedLanguage = languages.find((l) => l.locale === locale) ?? languages[0]

  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = React.useState<Record<string, boolean>>({
    Solutions: false,
    Products: false,
  })

  const handleLanguageSelect = (lang: (typeof languages)[0]) => {
    setLocale(lang.locale)
    setIsLanguageOpen(false)
  }

  const closeAll = () => {
    setOpenDropdown(null)
    setIsLanguageOpen(false)
  }

  return (
    <>
      <header className={cn('relative top-0 left-0 right-0 z-[9998] w-full', isMobileMenuOpen && 'max-lg:hidden')}>
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between py-6">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center gap-1" aria-label="Data Capture Systems Home">
            <div className="h-11 w-[14px] bg-white " />
            <div className="flex flex-col text-white font-sans">
              <span className="text-xs font-[500] leading-tight tracking-wide">DATA</span>
              <span className="text-xs font-[500] leading-tight tracking-wide">CAPTURE</span>
              <span className="text-xs font-[500]  leading-tight tracking-wide">SYSTEMS</span>
            </div>
          </Link>

          {/* Center Navigation Menu - Desktop Only */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
            <div
              className="relative rounded-full border border-white/30 px-8 py-3"
              style={{
                background: `
                  linear-gradient(173deg, rgba(0, 0, 0, 0.97) 0%, rgba(57, 76, 107, 0.5) 100%, rgb(19, 23, 51) 95%),
                  linear-gradient(180deg, #1E1E1E 30%,rgba(5, 27, 59, 0) 120%)
                `,
                backgroundBlendMode: 'overlay',
              }}
            >
              <ul className="flex items-center gap-10">
                {menuItems.map((item) => {
                  const active = itemIsActive(pathname, item)
                  const visibleChildren = item.children?.filter((c) => !c.hidden) ?? []
                  const hasChildren = visibleChildren.length > 0
                  const isOpen = openDropdown === item.name

                  if (!hasChildren) {
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeAll}
                          className={cn(
                            'text-sm font-medium transition-colors duration-150 whitespace-nowrap',
                            active ? 'text-white' : 'text-gray-500 hover:text-white'
                          )}
                        >
                          {item.tKey === 'nav.homePage' ? (locale === 'de' ? 'Start' : 'Home') : t(item.tKey)}
                        </Link>
                      </li>
                    )
                  }

                  return (
                    <li
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenDropdown((v) => (v === item.name ? null : item.name))}
                        className={cn(
                          'flex items-center gap-1 text-sm font-medium transition-colors duration-150 whitespace-nowrap',
                          active ? 'text-white' : 'text-gray-500 hover:text-white'
                        )}
                        aria-haspopup="menu"
                        aria-expanded={isOpen}
                      >
                        <span>{t(item.tKey)}</span>
                        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', isOpen && 'rotate-180')} />
                      </button>

                      {isOpen && (
                        <>
                          {/* click outside */}
                          <div className="fixed inset-0 z-[90]" onClick={() => setOpenDropdown(null)} />

                          <div
                            className="absolute left-0 top-full mt-3 z-[100] min-w-[220px] rounded-xl border border-white/15 overflow-hidden backdrop-blur-md shadow-xl"
                            style={{ backgroundColor: 'rgba(57, 76, 107, 0.3) 100%' }}
                            role="menu"
                          >
                            {visibleChildren.map((c) => {
                              const childActive = isActivePath(pathname, c.href)
                              return (
                                <Link
                                  key={c.href}
                                  href={c.href}
                                  onClick={closeAll}
                                  className={cn(
                                    'block px-4 py-2 text-sm font-medium transition-colors',
                                    childActive
                                      ? 'text-white'
                                      : 'text-gray-500 hover:text-white'
                                  )}
                                  role="menuitem"
                                >
                                  {t(c.tKey)}
                                </Link>
                              )
                            })}
                          </div>
                        </>
                      )}
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
                type="button"
                onClick={() => {
                  setIsLanguageOpen((v) => !v)
                  setOpenDropdown(null)
                }}
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-gradient-to-b from-black/60 to-gray-900/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors"
                style={{ backgroundColor: 'rgba(16, 18, 16, 0.6)' }}
                aria-label="Select language"
              >
                <span>{selectedLanguage.code}</span>
                <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', isLanguageOpen && 'rotate-180')} />
              </button>

              {isLanguageOpen && (
                <>
                  <div className="fixed inset-0 z-[90]" onClick={() => setIsLanguageOpen(false)} />
                  <div
                    className="absolute right-0 top-full mt-2 z-[100] min-w-[140px] rounded-lg border border-white/20 backdrop-blur-md shadow-lg overflow-hidden"
                    style={{ backgroundColor: 'rgba(16, 18, 16, 0.9)' }}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang)}
                        className={cn(
                          'w-full px-4 py-2 text-left text-sm font-medium transition-colors',
                          lang.code === selectedLanguage.code
                            ? 'bg-white/10 text-white'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
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
              href="/contact-us"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-b from-black/60 to-gray-900/60 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-black/80"
            >
              <Sparkles className="h-4 w-4" />
              <span>{t('nav.getInTouch')}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="lg:hidden text-white p-2"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[99] lg:hidden" style={{ backgroundColor: '#101210' }}>
          <div className="flex h-full flex-col">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center gap-1" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="h-11 w-[14px] bg-white" />
                <div className="flex flex-col text-white font-sans">
                  <span className="text-xs font-[500] leading-tight tracking-wide">DATA</span>
                  <span className="text-xs font-[500] leading-tight tracking-wide">CAPTURE</span>
                  <span className="text-xs font-[500] leading-tight tracking-wide">SYSTEMS</span>
                </div>
              </Link>

              <button type="button" onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-5">
                {menuItems.map((item) => {
                  const active = itemIsActive(pathname, item)
                  const visibleChildren = item.children?.filter((c) => !c.hidden) ?? []
                  const hasChildren = visibleChildren.length > 0

                  if (!hasChildren) {
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            'block text-2xl font-bold transition-colors',
                            active ? 'text-white' : 'text-gray-300'
                          )}
                        >
                          {item.tKey === 'nav.homePage' ? (locale === 'de' ? 'Start' : 'Home') : t(item.tKey)}
                        </Link>
                      </li>
                    )
                  }

                  const open = !!mobileOpen[item.name]

                  return (
                    <li key={item.name} className="rounded-2xl overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setMobileOpen((s) => ({ ...s, [item.name]: !s[item.name] }))}
                        className={cn(
                          'w-full flex items-center justify-between text-left text-2xl font-bold',
                          active ? 'text-white bg-white/5 p-2' : 'text-gray-200'
                        )}
                      >
<span>{t(item.tKey)}</span>
                                        <ChevronDown className={cn('h-5 w-5 transition-transform', open && 'rotate-180')} />
                      </button>

                      {open && (
                        <div className="px-2 pb-2">
                          {visibleChildren.map((c) => {
                            const childActive = isActivePath(pathname, c.href)
                            return (
                              <Link
                                key={c.href}
                                href={c.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  'block px-3 py-2 rounded-xl text-base transition-colors',
                                  childActive ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                )}
                              >
                                {t(c.tKey)}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Bottom Section - Language Selector */}
            <div className="border-t border-white/10 px-6 py-6">
              <div className="flex items-center gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageSelect(lang)
                      setIsMobileMenuOpen(false)
                    }}
                    className={cn(
                      'px-4 py-2 text-sm font-medium transition-colors',
                      lang.code === selectedLanguage.code
                        ? 'rounded-full border border-white/30 text-white'
                        : 'text-gray-400'
                    )}
                    style={
                      lang.code === selectedLanguage.code ? { backgroundColor: 'rgba(16, 18, 16, 0.6)' } : {}
                    }
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
