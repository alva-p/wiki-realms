'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface MapSliderProps {
  title: string
  images: string[]
  description?: string
}

export function MapSlider({ title, images, description }: MapSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 transition-all duration-500">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={image}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Title centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg px-4 tracking-wide">
            {title}
          </h2>
        </div>

        {/* Hover description overlay (appears on group hover) */}
        {description && (
          <div className="absolute inset-0 flex items-end">
            <div className="w-full flex justify-center pb-6 pointer-events-none">
              <div className="max-w-lg bg-black/70 text-white text-sm rounded-lg p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto">
                {description}
              </div>
            </div>
          </div>
        )}

        {/* Slide indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-amber-500 w-6'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
