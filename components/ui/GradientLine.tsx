'use client'

type GradientLineProps = {
    position?: 'left' | 'right'
    width?: string
    className?: string
}

export function GradientLine({ 
    position = 'left', 
    width = 'w-1 md:w-1.5 lg:w-[7px]',
    className = '' 
}: GradientLineProps) {
    const positionClass = position === 'left' ? '-left-0' : '-right-0'
    
    return (
        <div 
            className={`absolute ${positionClass} top-0 bottom-0 pointer-events-none ${width} ${className}`}
            style={{
                background: `
                    linear-gradient(180deg,
                        rgba(255, 255, 255, 0.25) 0%,
                        rgba(220, 200, 255, 0.3) 15%,
                        rgba(180, 150, 220, 0.2) 30%,
                        rgba(120, 80, 180, 0.15) 50%,
                        rgba(80, 40, 120, 0.1) 70%,
                        rgba(40, 20, 60, 0.05) 85%,
                        transparent 100%
                    )
                `
            }}
        />
    )
}
