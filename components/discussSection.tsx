'use client'
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import heroBackground from "@/assets/heroBackground.png";
import { GradientCard } from "./ui/GradientCard";
import { useTranslations } from "@/lib/i18n/LocaleContext";

export default function DiscussSection() {
  const t = useTranslations()
  return (
    <section className="relative w-full mx-auto py-16 lg:py-24 ">
      <div className="container mx-auto max-w-8xl px-[5%] sm lg:px-25">
        <GradientCard>
        <div className="relative rounded-[20px] overflow-hidden min-h-[400px] w-full">
        
          <Image
            src={heroBackground}
            alt="Operational background"
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div className="relative z-10 px-8 py-12 lg:px-16 lg:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-8xl font-semibold text-white leading-tight mb-6">
              <span className="block">{t('discuss.line1')}</span>
              <span className="block">{t('discuss.line2')}</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('discuss.description')}
            </p>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold text-sm tracking-wide rounded-full hover:bg-gray-100 transition-all border border-gray-200/50"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('discuss.contactUs')}</span>
            </Link>
          </div>
          </div>
        </GradientCard>
      </div>
    </section>
  );
}
