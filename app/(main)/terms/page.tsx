'use client'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { useTranslations } from '@/lib/i18n/LocaleContext'

export default function TermsSection() {
  const t = useTranslations()
  return (
    <div className="relative min-h-screen bg-[#101210] overflow-x-clip overflow-hidden">
      <div className="relative">
        <div className="relative z-[9998]">
          <HeroHeader />
        </div>
      </div>

      <section className="relative z-10 overflow-hidden">
        <section className="relative w-full bg-[#101210] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div
              className="about-dcs-fade-border rounded-2xl bg-[#121212] px-[30px] py-8 sm:py-10"
            >
              <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
                {t('company.termsSectionTitle')}
              </h2>
              <div className="space-y-6 text-left text-white/95 text-[18px]">
                <p className="leading-relaxed">{t('company.termsP1')}</p>
                <strong className="text-white">{t('company.strongP1')}</strong>
                <p className="leading-relaxed">{t('company.termsP2')}</p>
                <strong className="text-white">{t('company.strongP2')}</strong>
                <p className="leading-relaxed">{t('company.termsP3')}</p>
                <strong className="text-white">{t('company.strongP3')}</strong>
                <p className="leading-relaxed">{t('company.termsP4')}</p>
                <strong className="text-white">{t('company.strongP4')}</strong>
                <p className="leading-relaxed">{t('company.termsP5')}</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />

      <style jsx global>{`
        .about-dcs-fade-border {
          position: relative;
        }
        .about-dcs-fade-border::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 1px solid rgba(255, 255, 255, 0.22);
          pointer-events: none;
          z-index: 1;
          mask-image: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
          mask-size: 100% 100%;
          -webkit-mask-size: 100% 100%;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
        }
      `}</style>
    </div>
  )
}
