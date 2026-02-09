"use client";

import Image from "next/image";

export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
    >
      {/* Background image - FULL WIDTH & HEIGHT */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        className="-z-30 object-cover"
      />

      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* LEFT - Large green energy glow */}
      <div
        className="absolute -left-[20%] top-1/3 h-[800px] w-[800px] rounded-full
          bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.5)_0%,rgba(34,197,94,0.3)_30%,transparent_70%)]
          blur-[140px]
          animate-float-slow"
        style={{ animationDuration: "20s" }}
      />

      {/* RIGHT - Large blue energy glow */}
      <div
        className="absolute -right-[20%] top-1/4 h-[850px] w-[850px] rounded-full
          bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.5)_0%,rgba(59,130,246,0.3)_30%,transparent_70%)]
          blur-[150px]
          animate-float-slow-reverse"
        style={{ animationDuration: "25s" }}
      />

      {/* Grain / noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay
          bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHJlc3VsdD0ibm9pc2UiLz48ZmVDb2xvck1hdHJpeCBpbj0ibm9pc2UiIHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')]
          bg-repeat"
      />
    </div>
  );
}
