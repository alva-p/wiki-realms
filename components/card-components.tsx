'use client'

export function NFTCategory({ title, description, items, icon, gradient }: {
  title: string
  description: string
  items: number
  icon: string
  gradient: string
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-primary font-semibold">{items} Items</span>
        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient}`} />
      </div>
    </div>
  )
}

export function MapCard({ name, description, difficulty, level, color }: {
  name: string
  description: string
  difficulty: string
  level: string
  color: string
}) {
  const getDifficultyColor = (diff: string) => {
    switch(diff) {
      case 'Easy': return 'text-green-400'
      case 'Medium': return 'text-yellow-400'
      case 'Hard': return 'text-orange-400'
      case 'Very Hard': return 'text-red-400'
      case 'Legendary': return 'text-purple-400'
      default: return 'text-blue-400'
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
      <div className={`h-32 bg-gradient-to-br ${color} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className={`font-semibold text-sm ${getDifficultyColor(difficulty)}`}>{difficulty}</span>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{level}</span>
        </div>
      </div>
    </div>
  )
}

export function MissionCard({ title, description, rewards, difficulty, progress }: {
  title: string
  description: string
  rewards: string
  difficulty: string
  progress: number
}) {
  const getDifficultyColor = (diff: string) => {
    switch(diff) {
      case 'Hard': return 'bg-orange-500/20 text-orange-300'
      case 'Legendary': return 'bg-purple-500/20 text-purple-300'
      default: return 'bg-blue-500/20 text-blue-300'
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <span className={`text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-4 ${getDifficultyColor(difficulty)}`}>
          {difficulty}
        </span>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-sm text-primary mb-3 font-semibold">Rewards: {rewards}</p>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs text-muted-foreground mt-2 inline-block">{progress}% Complete</span>
      </div>
    </div>
  )
}

export function ItemCard({ name, rarity, type, stats, rarityColor }: {
  name: string
  rarity: string
  type: string
  stats: string
  rarityColor: string
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-xs text-muted-foreground">{type}</p>
        </div>
        <div className={`px-2 py-1 rounded text-xs font-bold bg-gradient-to-r ${rarityColor} text-white`}>
          {rarity}
        </div>
      </div>
      <p className="text-sm text-primary mt-3">{stats}</p>
    </div>
  )
}
