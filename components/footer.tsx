'use client'
import Image from 'next/image'
import Link from 'next/link'
import footerBackground from '@/assets/Footer (1).png'
import footerBackgroundMobile from '@/assets/footerBackgroundMobile.png'
import footerBackgroundTablet from '@/assets/Footer (5).png'
import { useTranslations } from '@/lib/i18n/LocaleContext'

export default function Footer() {
  const t = useTranslations()
  return (
    <>
      <footer className="relative w-full bg-[#101210] overflow-hidden min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]">
      <div className="absolute inset-0 z-0 w-full h-full md:hidden">
        <Image
          src={footerBackgroundMobile}
          alt="Footer background"
          fill
          sizes="100vw"
          unoptimized
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center bottom' }}
        />
      </div>
      
      <div className="absolute inset-0 z-0 w-full h-full hidden md:block lg:hidden">
        <Image
          src={footerBackgroundTablet}
          alt="Footer background tablet"
          fill
          sizes="100vw"
          unoptimized
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 z-0 w-full h-full hidden lg:block">
        <Image
          src={footerBackground}
          alt="Footer background desktop"
          fill
          sizes="100vw"
          unoptimized
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div
        className="animate-footer-blur hidden lg:block absolute left-[50px] top-40 w-[200px] h-[150px] z-[5] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 200px 150px at 50% 50%, rgba(255, 255, 255, 0.27) 0%, rgba(255, 255, 255, 0.18) 40%, transparent 70%)',
          filter: 'blur(30px)',
          clipPath: 'ellipse(300px 250px at 90% 90%)',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-30 py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          <div className="flex flex-col">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-5 h-17 bg-white mt-1" />
              <div>
                <h2 className="text-white text-2xl lg:text-3xl font-semibold uppercase leading-tight">
                  <span className="block">DATA CAPTURE</span>
                  <span className="block">SYSTEMS</span>
                </h2>
              </div>
            </div>

            <p className="text-gray-400 text-sm lg:text-base mb-8 max-w-[70%] lg:max-w-md leading-relaxed">
              {t('footer.tagline')}
            </p>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-white font-medium text-sm w-fit hover:bg-white/10 transition-all"
            >
              {t('footer.contactUs')}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h3 className="text-white font-[400] text-base mb-4">{t('footer.company')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/company-section" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('footer.aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('footer.contactUs')}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('footer.services')}
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/data-capture-systems-gmbh/posts/?feedView=all" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('footer.blog')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-base mb-4">{t('footer.products')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/products/gnns" className="text-gray-400 hover:text-white transition-colors text-sm">
                    GNNS
                  </Link>
                </li>
                <li>
                  <Link href="/products/radar" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Radar
                  </Link>
                </li>
                <li>
                  <Link href="/products/uav" className="text-gray-400 hover:text-white transition-colors text-sm">
                    UAV
                  </Link>
                </li>
                <li>
                  <Link href="/products/mobile-cuas" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Mobile CUAS
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-[400] text-base mb-4">{t('footer.legal')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('footer.termsOfUse')}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('footer.privacyPolicy')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t pt-8" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <p className="text-white text-sm text-center">
            {t('footer.copyright')}{' '}
            <Link
              href="https://protecht.ch/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:no-underline"
            >
              {t('footer.protecht')}
            </Link>
          </p>
        </div>
      </div>

    </footer>
    </>
  )
}
