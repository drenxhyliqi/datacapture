"use client"

import React, { useMemo } from "react"

type Props = {
  className?: string
  /** rrotullimi i gjithë orbitave (gradë) */
  rotateDeg?: number
  /** madhësia e orbitës së madhe (në % ndaj container-it) */
  outerSizePercent?: number
  /** madhësia e orbitës së vogël (në % ndaj container-it) */
  innerSizePercent?: number
  /** trashësia e vijës së orbitës */
  strokePx?: number
}

/**
 * Background i stilit si foto:
 * - dy rrethe (jo elipsa) të rrotulluara 160°
 * - arc/glow i madh në kënde (si “ring” i prerë)
 * - 2 glow “caps” jashtë orbitës së madhe (në majë)
 * - 2 pika të bardha (planete) në orbitën e vogël
 */
export default function EllipsesGlowOrbitCanvas({
  className,
  rotateDeg = 160,
  outerSizePercent = 92,
  innerSizePercent = 62,
  strokePx = 2,
}: Props) {
  const outerStyle = useMemo<React.CSSProperties>(
    () => ({
      width: `${outerSizePercent}%`,
      height: `${outerSizePercent}%`,
      aspectRatio: "1.35 / 1",
      transform: `translate(-50%, -50%) rotate(${rotateDeg}deg)`,
    }),
    [outerSizePercent, rotateDeg]
  )

  const innerStyle = useMemo<React.CSSProperties>(
    () => ({
      width: `${innerSizePercent}%`,
      height: `${innerSizePercent}%`,
      aspectRatio: "1 / 1",
      transform: `translate(-50%, -50%) rotate(${rotateDeg}deg)`,
    }),
    [innerSizePercent, rotateDeg]
  )

  return (
    <div
      className={
        "relative w-full h-[520px] md:h-[640px] lg:h-[720px] overflow-hidden rounded-3xl bg-[#07090d] " +
        (className ?? "")
      }
    >
      {/* ===== Background gradients (si foto) ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* vignette */}
        <div className="absolute inset-0" style={{
          background:
            "radial-gradient(120% 90% at 50% 45%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.00) 52%), radial-gradient(140% 120% at 50% 60%, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.65) 68%, rgba(0,0,0,0.92) 100%)",
        }} />

        {/* big corner arc glows */}
        <CornerArc className="-left-[38%] -bottom-[55%]" />
        <CornerArc className="-right-[36%] -top-[50%] rotate-180" />

        {/* soft fog */}
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-white/10 blur-3xl opacity-60" />
        <div className="absolute -right-28 top-12 h-72 w-72 rounded-full bg-white/10 blur-3xl opacity-50" />
      </div>

      {/* ===== Orbits holder (square => circles) ===== */}
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-[980px] aspect-[1.35/1] -translate-x-1/2 -translate-y-1/2">
        {/* OUTER CIRCLE */}
        <div className="absolute left-1/2 top-1/2" style={outerStyle}>
          {/* Thin orbit line */}
          <div
            className="absolute inset-0 rounded-full border border-white/20"
            style={{ borderWidth: strokePx }}
          />

          {/* subtle conic highlight on orbit */}
          <div
            className="absolute inset-0 rounded-full opacity-80"
            style={{
              background:
                "conic-gradient(from 220deg, rgba(255,255,255,0.00), rgba(255,255,255,0.22), rgba(255,255,255,0.02), rgba(255,255,255,0.00))",
              WebkitMaskImage:
                "radial-gradient(circle at center, transparent 73%, black 74%)",
              maskImage:
                "radial-gradient(circle at center, transparent 73%, black 74%)",
            }}
          />

          {/* Top glow caps OUTSIDE the orbit */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[120%]">
            <GlowCap className="glow-cap" />
            <GlowCap className="glow-cap glow-cap-2" />
          </div>

          {/* A couple of orbit dots (opsionale si foto) */}
          <div className="absolute left-[92%] top-[22%] h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.45)]" />
          <div className="absolute left-[7%] top-[84%] h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.45)]" />
        </div>

        {/* INNER CIRCLE */}
        <div className="absolute left-1/2 top-1/2" style={innerStyle}>
          <div
            className="absolute inset-0 rounded-full border border-white/12"
            style={{ borderWidth: Math.max(1, Math.round(strokePx * 0.9)) }}
          />

          {/* 2 white planets */}
          <PlanetDot className="planet-1" />
          <PlanetDot className="planet-2" />
        </div>
      </div>

      <style jsx>{`
        .glow-cap {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-60%, 0);
          animation: pulse 3.8s ease-in-out infinite;
        }
        .glow-cap-2 {
          transform: translate(10%, -12%);
          opacity: 0.85;
          animation-duration: 4.3s;
          animation-delay: 0.15s;
        }

        @keyframes pulse {
          0% {
            transform: translate(-60%, 0) scale(1);
          }
          50% {
            transform: translate(-60%, 0) scale(1.08);
          }
          100% {
            transform: translate(-60%, 0) scale(1);
          }
        }

        .planet-1 {
          position: absolute;
          left: 18%;
          top: 34%;
          animation: drift 6.5s ease-in-out infinite;
        }

        .planet-2 {
          position: absolute;
          left: 78%;
          top: 64%;
          animation: drift 7.4s ease-in-out infinite;
          animation-delay: 0.2s;
        }

        @keyframes drift {
          0% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(-6px, 4px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }
      `}</style>
    </div>
  )
}

function CornerArc({ className }: { className?: string }) {
  return (
    <div className={"absolute " + (className ?? "") + " h-[120%] w-[120%] rounded-full"}>
      {/* thick ring arc */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 90deg, rgba(255,255,255,0.00) 0deg, rgba(255,255,255,0.00) 210deg, rgba(255,255,255,0.55) 260deg, rgba(255,255,255,0.10) 310deg, rgba(255,255,255,0.00) 360deg)",
          filter: "blur(2px)",
          WebkitMaskImage:
            "radial-gradient(circle at center, transparent 54%, black 56%)",
          maskImage:
            "radial-gradient(circle at center, transparent 54%, black 56%)",
        }}
      />
      {/* outer glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 90deg, rgba(255,255,255,0.00) 0deg, rgba(255,255,255,0.00) 220deg, rgba(255,255,255,0.35) 270deg, rgba(255,255,255,0.00) 340deg)",
          filter: "blur(30px)",
          WebkitMaskImage:
            "radial-gradient(circle at center, transparent 46%, black 52%)",
          maskImage:
            "radial-gradient(circle at center, transparent 46%, black 52%)",
          opacity: 0.85,
        }}
      />
    </div>
  )
}

function GlowCap({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative">
        {/* core capsule */}
        <div className="h-7 w-20 rounded-full bg-white/18" />
        {/* crisp highlight */}
        <div className="absolute inset-0 h-7 w-20 rounded-full bg-white/10 blur-[1px]" />
        {/* glow out */}
        <div className="absolute inset-0 h-7 w-20 rounded-full bg-white/35 blur-[18px]" />
        {/* long tail */}
        <div className="absolute left-1/2 top-1/2 h-12 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/14 blur-[30px]" />
      </div>
    </div>
  )
}

function PlanetDot({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative">
        <div className="h-3.5 w-3.5 rounded-full bg-white" />
        <div className="absolute inset-0 rounded-full bg-white/40 blur-[12px]" />
      </div>
    </div>
  )
}
