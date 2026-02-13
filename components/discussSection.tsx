'use client'
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import heroBackground from "@/assets/heroBackground.png";
import { GradientCard } from "./ui/GradientCard";

export default function DiscussSection() {
  return (
    <section className="relative w-full mx-auto py-16 lg:py-24 ">
      <div className="container mx-auto max-w-7xl px-[5%] sm:px-[0%] lg:px-5">
        <GradientCard>
        {/* Dark card with rounded corners */}
        <div className="relative rounded-[20px] overflow-hidden min-h-[400px] w-full">
        
          {/* Background image within the card - blurred and desaturated */}
          <Image
            src={heroBackground}
            alt="Operational background"
            fill
            sizes="100vw"
            className="object-cover"
          />

          {/* Content overlay */}
          <div className="relative z-10 px-8 py-12 lg:px-16 lg:py-20 text-center">
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-8xl font-semibold text-white leading-tight mb-6">
              <span className="block">Discuss Your Operational</span>
              <span className="block">Requirements</span>
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us to review system capabilities and configuration options.
            </p>

            {/* Contact Us Button */}
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold text-sm tracking-wide rounded-full hover:bg-gray-100 transition-all border border-gray-200/50"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
          </div>
          </div>
        </GradientCard>
      </div>
    </section>
  );
}
