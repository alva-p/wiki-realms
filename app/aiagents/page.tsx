 'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { TwitterTweetEmbed } from 'react-twitter-embed'

export default function AIAgents() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />

      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 w-full">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Agents
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn how AI Agents will work in Kojin, explained by Berlin
          </p>
        </div>

        {/* Video Section */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl p-0">
            <div className="flex justify-center [&>div]:!w-full [&_twitter-widget]:!w-full [&_twitter-widget]:!max-w-none">
              <TwitterTweetEmbed
                tweetId="1888351710168666143"
                options={{
                  theme: 'dark',
                  align: 'center',
                  conversation: 'none',
                }}
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://x.com/Kojin_gg/status/1888351710168666143"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-500 hover:bg-amber-500/30 hover:text-amber-400 transition-all text-base font-medium"
              >
                View on X →
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
