'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/lore', label: 'Lore', icon: '📖' },
    { href: '/nfts', label: 'NFTs', icon: '👑' },
    { href: '/houses', label: 'Houses', icon: '🏠' },
    { href: '/items', label: 'Items & Crafting', icon: '⚙️' },
    { href: '/abilities', label: 'Abilities', icon: '⚡' },
    { href: '/aiagents', label: 'AI Agents', icon: '🤖' },
    { href: '/maps', label: 'Maps', icon: '🗺️' },
    { href: '/missions', label: 'Missions', icon: '🎯' },
    { href: '/gamemodes', label: 'Game Modes', icon: '🎮' },
    { href: '/lastsales', label: 'Last Sales', icon: '💰' },
    { href: '/team', label: 'Team', icon: '👥' },
    { href: '/unrealwednesday', label: 'Unreal Wednesday', icon: '🖥️' },
    { href: '/socialmedia', label: 'Social Media', icon: '📱' },
    { href: '/checker', label: 'Checker', icon: '✅' },
    { href: '/checkin', label: 'Check-In Top', icon: '🏆' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent p-0.5 group-hover:glow-pulse transition-all">
              <img src="/kojins.png" alt="KOJIN Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">KOJIN</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between flex-1 ml-4">
            {sections.slice(1).map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="px-1.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-card rounded-md transition-colors duration-200 whitespace-nowrap"
              >
                {section.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-card transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-1">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-card rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.icon} {section.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
