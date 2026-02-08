import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Loading from "./loading";
import LoadingGate from "./LoadingGate";

const CRITICAL_STYLES =
  "html,body{background-color:#101210 !important;min-height:100%;} body{transition:opacity ease-in .2s} body[unresolved]{opacity:0}";

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
      <head>
        <style dangerouslySetInnerHTML={{ __html: CRITICAL_STYLES }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#101210" }}
      >
        <Suspense fallback={<Loading />}>
          <LoadingGate>{children}</LoadingGate>
        </Suspense>
      </body>
    </html>
  );
}
