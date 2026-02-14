"use client"

import * as React from "react"
import Image, { StaticImageData } from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

type Slide = { src: StaticImageData | string; alt?: string }

function buildLoopSlides(slides: Slide[]) {
  if (slides.length >= 6) return slides
  const times = slides.length <= 3 ? 4 : 2
  return Array.from({ length: times }).flatMap(() => slides)
}

export default function GallerySlideshow({
  slides,
  className,
  delayMs = 3000,
}: {
  slides: Slide[]
  className?: string
  delayMs?: number
}) {
  const loopSlides = React.useMemo(() => buildLoopSlides(slides), [slides])

  const autoplay = React.useMemo(
    () =>
      Autoplay({
        delay: delayMs,
        stopOnInteraction: false,
      }),
    [delayMs]
  )

  return (
    <Carousel
      className={className ?? "w-full"}
      plugins={[autoplay]}
      opts={{ loop: true, align: "start" }}
      onMouseEnter={autoplay.stop}
      onMouseLeave={autoplay.reset}
    >
      <CarouselContent className="-ml-4">
        {loopSlides.map((s, i) => (
          <CarouselItem
            key={i}
            className="pl-4 basis-[85%] sm:basis-[55%] lg:basis-[40%]"
          >
            <div className="relative overflow-hidden lg:rounded-lg rounded-none w-89 lg:w-full h-50 lg:h-110 aspect-video">
              <Image
                src={s.src}
                alt={s.alt ?? `Slide ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover "
                priority={i === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
