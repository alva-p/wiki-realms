'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function AIAgents() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          AI Agents
        </h1>
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Discover the intelligent AI companions in REALMS. These advanced agents provide assistance, strategy, and unique gameplay experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Placeholder content - you can customize this */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">Strategy Assistant</h2>
            <p className="text-muted-foreground">AI companion that analyzes battles and provides tactical recommendations.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">Quest Guide</h2>
            <p className="text-muted-foreground">Intelligent guide that helps navigate complex quests and storylines.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">Combat Coach</h2>
            <p className="text-muted-foreground">AI trainer that improves your combat skills through personalized coaching.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">Resource Manager</h2>
            <p className="text-muted-foreground">Smart agent that optimizes resource gathering and inventory management.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}