import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Loading from "./loading";
import LoadingGate from "./LoadingGate";
import BackToTop from "@/components/BackToTop";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Data Capture",
  description: "Data Capture Systems is a company that provides data capture systems for the military and government.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#101210" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#101210" }}
      >
        <LocaleProvider>
          <Suspense fallback={<Loading />}>
            <LoadingGate>{children}</LoadingGate>
          </Suspense>
        </LocaleProvider>
        <BackToTop />
      </body>
    </html>
  );
}
