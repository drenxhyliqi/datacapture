'use client'

import { Check } from 'lucide-react'

type ServiceBulletListProps = {
    bullets: string[]
}

export function ServiceBulletList({ bullets }: ServiceBulletListProps) {
    return (
        <ul className="space-y-3 mt-6">
            {bullets.map((bullet, index) => (
                <li
                    key={index}
                    className="flex items-start gap-3 group cursor-pointer transition-all duration-300 hover:translate-x-2"
                >
                    <div className="flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/30 group-hover:border-white/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5),0_0_40px_rgba(255,255,255,0.2)]">
                            <Check className="w-3 h-3 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                    </div>
                    <span className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                        {bullet}
                    </span>
                </li>
            ))}
        </ul>
    )
}
