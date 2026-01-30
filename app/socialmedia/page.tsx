'use client'

import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function SocialMediaPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <Navigation />

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondo2.jpeg"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-60"
          priority
        />
        {/* Overlay oscuro para mejor contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Efectos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-[150px]" />
      </div>

      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center w-full max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
            CONNECT WITH US
          </h1>
          <p className="text-gray-300 mb-16 text-lg">
            Follow Kojin on your favorite platforms and join our community!
          </p>

          {/* Contenedor de Iconos Flotantes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">

            {/* X (Twitter) */}
            <a
              href="https://x.com/RealmsDotGame"
              target="_blank"
              rel="noopener noreferrer"
              className="float-animation delay-1 group"
            >
              <div className="icon-card glass p-8 rounded-3xl transition-all duration-300 w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
                <svg className="w-10 h-10 md:w-12 md:h-12 fill-current group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <span className="block mt-4 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity text-white">X (TWITTER)</span>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/n4zVPeAFwk"
              target="_blank"
              rel="noopener noreferrer"
              className="float-animation delay-2 group"
            >
              <div className="icon-card glass p-8 rounded-3xl transition-all duration-300 w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
                <svg className="w-10 h-10 md:w-12 md:h-12 fill-current group-hover:text-indigo-400 transition-colors" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.156 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                </svg>
              </div>
              <span className="block mt-4 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity text-white">DISCORD</span>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@RealmsDotGame"
              target="_blank"
              rel="noopener noreferrer"
              className="float-animation delay-3 group"
            >
              <div className="icon-card glass p-8 rounded-3xl transition-all duration-300 w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
                <svg className="w-10 h-10 md:w-12 md:h-12 fill-current group-hover:text-red-500 transition-colors" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <span className="block mt-4 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity text-white">YOUTUBE</span>
            </a>

            {/* Epic Games */}
            <a
              href="https://store.epicgames.com/en-US/p/realms-42b0fb"
              target="_blank"
              rel="noopener noreferrer"
              className="float-animation delay-4 group"
            >
              <div className="icon-card glass p-8 rounded-3xl transition-all duration-300 w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
                <Image
                  src="/epicgames.png"
                  alt="Epic Games"
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12 invert brightness-0 invert group-hover:brightness-125 transition-all"
                />
              </div>
              <span className="block mt-4 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity text-white">EPIC GAMES</span>
            </a>

          </div>
        </div>
      </main>

      <Footer />

      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .float-animation {
          animation: float 4s ease-in-out infinite;
        }

        .delay-1 { animation-delay: 0.5s; }
        .delay-2 { animation-delay: 1.2s; }
        .delay-3 { animation-delay: 0.8s; }
        .delay-4 { animation-delay: 1.5s; }

        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .icon-card:hover {
          transform: scale(1.1) translateY(-10px);
          box-shadow: 0 0 30px rgba(245, 158, 11, 0.4);
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  )
}
