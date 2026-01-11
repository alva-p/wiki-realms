'use client'

import Image from 'next/image'
import { StatTrait, statNames } from '@/data/stat-traits'

interface StatTraitCardProps {
  trait: StatTrait
  categoryColor: {
    text: string
    bg: string
    border: string
  }
}

export function StatTraitCard({ trait, categoryColor }: StatTraitCardProps) {
  const CardContent = (
    <div
      className={`relative group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-4 border-2 transition-all duration-200 hover:scale-105 ${
        trait.traitType === 'wings' 
          ? 'border-purple-500/50 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20' 
          : 'border-fuchsia-500/50 hover:border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/20'
      }`}
    >
      {/* Gradient overlay for distinction */}
      <div className={`absolute inset-0 rounded-lg opacity-10 ${
        trait.traitType === 'wings' 
          ? 'bg-gradient-to-br from-purple-500 to-violet-600' 
          : 'bg-gradient-to-br from-fuchsia-500 to-pink-600'
      }`} />
      
      {/* Trait Image */}
      <div className="relative w-[100px] h-[100px] mx-auto mb-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden">
        {trait.image ? (
          <Image 
            src={trait.image} 
            alt={trait.name} 
            width={100}
            height={100}
            className="object-contain p-2"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl opacity-50">
              {trait.traitType === 'wings' ? '🪽' : '✨'}
            </div>
          </div>
        )}
      </div>

      {/* Trait Name */}
      <h3 className={`font-semibold text-center text-sm mb-2 transition-colors ${
        trait.traitType === 'wings' 
          ? 'text-purple-100 group-hover:text-purple-300' 
          : 'text-fuchsia-100 group-hover:text-fuchsia-300'
      }`}>
        {trait.name}
      </h3>

      {/* Stat Badge */}
      <div className="flex justify-center">
        <div className={`${categoryColor.bg} ${categoryColor.text} text-xs px-3 py-1.5 rounded-full font-bold`}>
          +{trait.statValue}% {statNames[trait.stat]}
        </div>
      </div>
    </div>
  )

  // Si tiene marketplaceUrl, envolver en link
  if (trait.marketplaceUrl) {
    return (
      <a 
        href={trait.marketplaceUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        {CardContent}
      </a>
    )
  }

  return CardContent
}
