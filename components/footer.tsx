'use client'
import Image from 'next/image'
import Link from 'next/link'
import footerBackground from '@/assets/Footer (1).png'

export default function Footer() {
  return (
    <footer className="relative w-full bg-black overflow-hidden min-h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={footerBackground}
          alt="Footer background"
          fill
          className="object-fit"
          priority
          unoptimized
        />
      </div>

      {/* Animated blur on left side */}
      <div 
        className="absolute left-[50px] top-40 w-[200px] h-[150px] z-[5] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 200px 150px at 50% 50%, rgba(255, 255, 255, 0.27) 0%, rgba(255, 255, 255, 0.18) 40%, transparent 70%)',
          filter: 'blur(30px)',
          clipPath: 'ellipse(300px 250px at 90% 90%)',
          animation: 'moveUpDown 4s infinite',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 xl:px-24 py-10 lg:py-12">
        {/* Top Section - Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Left Block - Company Identity and Action */}
          <div className="flex flex-col">
            {/* Logo/Company Name */}
            <div className="flex items-start gap-3 mb-6">
              <div className="w-5 h-17 bg-white mt-1" />
              <div>
                <h2 className="text-white text-2xl lg:text-3xl font-semibold uppercase leading-tight">
                  <span className="block">DATA CAPTURE</span>
                  <span className="block">SYSTEMS</span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm lg:text-base mb-8 max-w-md leading-relaxed">
              A command-and-control platform for drone detection, monitoring, and data recording.
            </p>

            {/* Contact Us Button */}
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-white font-medium text-sm w-fit hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Block - Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: About */}
            <div>
              <h3 className="text-white font-semibold text-base mb-4">About</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Download
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h3 className="text-white font-semibold text-base mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    How we work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Press Room
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h3 className="text-white font-semibold text-base mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Security Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Cookie Settings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t pt-8" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <p className="text-white text-sm text-center">
            © Copyright 2025 DCS. Design & Developed by Protecht
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes moveUpDown {
          0% {
            transform: translateY(50px);
          }
          15% {
            transform: translateY(-120px);
          }
          35% {
            transform: translateY(-120px);
          }
          50% {
            transform: translateY(-120px);
          }
          65% {
            transform: translateY(50px);
          }
          85% {
            transform: translateY(50px);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </footer>
  )
}
