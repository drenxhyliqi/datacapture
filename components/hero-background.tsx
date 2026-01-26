"use client";

export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
    >
      {/* Base black background */}
      <div className="absolute inset-0 bg-black" />

      {/* LEFT - Large green energy glow */}
      <div
        className="absolute -left-[20%] top-1/3 h-[800px] w-[800px] rounded-full
          bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.5)_0%,rgba(34,197,94,0.3)_30%,transparent_70%)]
          blur-[140px]
          animate-float-slow"
        style={{
          animationDuration: "20s",
        }}
      />

      {/* RIGHT - Large blue energy glow */}
      <div
        className="absolute -right-[20%] top-1/4 h-[850px] w-[850px] rounded-full
          bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.5)_0%,rgba(59,130,246,0.3)_30%,transparent_70%)]
          blur-[150px]
          animate-float-slow-reverse"
        style={{
          animationDuration: "25s",
        }}
      />

      {/* Soft white glow halos - scattered throughout */}
      {/* Top center white halo */}
      <div
        className="absolute left-1/2 top-[15%] h-[500px] w-[500px] -translate-x-1/2 rounded-full
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.1)_40%,transparent_70%)]
          blur-[100px]"
      />

      {/* Center-left white halo */}
      <div
        className="absolute left-[15%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_40%,transparent_70%)]
          blur-[90px]"
      />

      {/* Bottom-right white halo */}
      <div
        className="absolute bottom-[10%] right-[20%] h-[450px] w-[450px] rounded-full
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.07)_40%,transparent_70%)]
          blur-[95px]"
      />

      {/* Dark glass-like shapes - organic rounded blobs */}
      {/* Large central arc/blob - rotated */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-slow" style={{ animationDuration: "30s" }}>
        <div
          className="h-[600px] w-[900px] rotate-[-25deg]
            rounded-[45%]
            bg-gradient-to-br from-[rgba(20,20,20,0.85)] via-[rgba(15,15,15,0.75)] to-[rgba(10,10,10,0.65)]
            blur-[2px]
            opacity-90"
          style={{
            clipPath: "ellipse(60% 40% at 50% 50%)",
          }}
        />
      </div>

      {/* Secondary blob - top right */}
      <div className="absolute right-[10%] top-[20%] animate-float-slow-reverse" style={{ animationDuration: "35s" }}>
        <div
          className="h-[500px] w-[600px] rotate-[35deg]
            rounded-[50%]
            bg-gradient-to-br from-[rgba(18,18,18,0.8)] via-[rgba(12,12,12,0.7)] to-[rgba(8,8,8,0.6)]
            blur-[1px]
            opacity-85"
          style={{
            clipPath: "ellipse(50% 35% at 50% 50%)",
          }}
        />
      </div>

      {/* Tertiary blob - bottom left */}
      <div className="absolute bottom-[15%] left-[8%] animate-float-slow" style={{ animationDuration: "28s" }}>
        <div
          className="h-[550px] w-[700px] rotate-[15deg]
            rounded-[48%]
            bg-gradient-to-br from-[rgba(22,22,22,0.75)] via-[rgba(16,16,16,0.65)] to-[rgba(11,11,11,0.55)]
            blur-[1.5px]
            opacity-80"
          style={{
            clipPath: "ellipse(55% 38% at 50% 50%)",
          }}
        />
      </div>

      {/* Smaller accent blob - center-right */}
      <div className="absolute right-[25%] top-1/2 -translate-y-1/2 animate-float-slow-reverse" style={{ animationDuration: "32s" }}>
        <div
          className="h-[350px] w-[450px] rotate-[-10deg]
            rounded-[42%]
            bg-gradient-to-br from-[rgba(19,19,19,0.7)] to-[rgba(13,13,13,0.5)]
            blur-[1px]
            opacity-75"
          style={{
            clipPath: "ellipse(45% 30% at 50% 50%)",
          }}
        />
      </div>

      {/* Subtle grain/noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay
          bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHJlc3VsdD0ibm9pc2UiLz48ZmVDb2xvck1hdHJpeCBpbj0ibm9pc2UiIHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')]
          bg-repeat"
      />
    </div>
  );
}
