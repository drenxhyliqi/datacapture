'use client'

import { ReactNode } from 'react'

type GradientCardProps = {
    children: ReactNode
    offset?: number
    duration?: number
}

export function GradientCard({
    children,
    offset = 12,
    duration = 150,
}: GradientCardProps) {
    return (
        <div
            className="
                relative group h-full flex flex-col
                rounded-2xl
                border-t-1 border-white/70
                backdrop-blur-sm
                transition-all
                hover:border-b-1 hover:border-t-0 hover:border-white/70
            "
            style={{ 
                backgroundColor: '#1F1F1F',
                transitionDuration: `${duration}ms`
            }}
        >
            {/* LEFT BORDER GRADIENT - Normal (top to bottom) */}
            <span
                className="pointer-events-none absolute left-0 transition-opacity opacity-100 group-hover:opacity-0 rounded"
                style={{
                    top: `${offset}px`,
                    bottom: 0,
                    width: '1px',
                    background:
                        'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                    transitionDuration: `${duration}ms`
                }}
            />
            {/* LEFT BORDER GRADIENT - Hover (bottom to top) */}
            <span
                className="pointer-events-none absolute left-0 transition-opacity opacity-0 group-hover:opacity-100 rounded"
                style={{
                    top: 0,
                    bottom: `${offset}px`,
                    width: '1px',
                    background:
                        'linear-gradient(0deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                    transitionDuration: `${duration}ms`
                }}
            />

            {/* RIGHT BORDER GRADIENT - Normal (top to bottom) */}
            <span
                className="pointer-events-none absolute right-0 transition-opacity opacity-100 group-hover:opacity-0 rounded"
                style={{
                    top: `${offset}px`,
                    bottom: 0,
                    width: '1px',
                    background:
                        'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                    transitionDuration: `${duration}ms`
                }}
            />
            {/* RIGHT BORDER GRADIENT - Hover (bottom to top) */}
            <span
                className="pointer-events-none absolute right-0 transition-opacity opacity-0 group-hover:opacity-100 rounded"
                style={{
                    top: 0,
                    bottom: `${offset}px`,
                    width: '1px',
                    background:
                        'linear-gradient(0deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                    transitionDuration: `${duration}ms`
                }}
            />

            {/* CONTENT */}
            <div className="relative z-10">{children}</div>
        </div>
    )
}
