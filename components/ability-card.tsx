'use client'

import { useState } from 'react'

export function AbilityCard({ title, trait, description, videoThumbnail, color }: {
  title: string
  trait: string
  description: string
  videoThumbnail: string
  color: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${color}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-12 h-12 text-white/60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div className={`absolute inset-0 bg-black/20 ${isHovered ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-primary text-sm font-medium mb-3">Trait: {trait}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
