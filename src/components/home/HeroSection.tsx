'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const TICKER_ITEMS = [
  '19 Casinos Tested', 'Updated May 2026', '0x Wagering Available', 'Real Deposits & Withdrawals',
  'Bonus Terms Verified', 'Independent Rankings', '24h Withdrawal Tested', 'Licensed Casinos Only',
  '19 Casinos Tested', 'Updated May 2026', '0x Wagering Available', 'Real Deposits & Withdrawals',
  'Bonus Terms Verified', 'Independent Rankings', '24h Withdrawal Tested', 'Licensed Casinos Only',
]

const STATS = [
  { value: '19', label: 'Casinos Tested' },
  { value: '0x', label: 'Lowest Wagering' },
  { value: '€8K', label: 'Biggest Bonus' },
  { value: '4h', label: 'Fastest Payout' },
]

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let chips: { x: number; y: number; r: number; speed: number; opacity: number; rotation: number; rotationSpeed: number; color: string }[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const initChips = () => {
      chips = []
      const count = Math.floor(canvas.width / 40)
      for (let i = 0; i < count; i++) {
        chips.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          r: 6 + Math.random() * 14,
          speed: 0.15 + Math.random() * 0.35,
          opacity: 0.04 + Math.random() * 0.10,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.008,
          color: Math.random() > 0.5 ? '#F5A623' : '#1a1c24',
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const chip of chips) {
        chip.y += chip.speed
        chip.rotation += chip.rotationSpeed
        if (chip.y > canvas.height + chip.r * 2) {
          chip.y = -chip.r * 2
          chip.x = Math.random() * canvas.width
        }
        ctx.save()
        ctx.translate(chip.x, chip.y)
        ctx.rotate(chip.rotation)
        ctx.globalAlpha = chip.opacity
        ctx.beginPath()
        ctx.ellipse(0, 0, chip.r, chip.r * 0.6, 0, 0, Math.PI * 2)
        ctx.fillStyle = chip.color
        ctx.fill()
        ctx.strokeStyle = chip.color === '#F5A623' ? '#d4891a' : '#252830'
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.beginPath()
        ctx.ellipse(0, 0, chip.r * 0.6, chip.r * 0.35, 0, 0, Math.PI * 2)
        ctx.strokeStyle = chip.color === '#F5A623' ? '#d4891a' : '#2a2d38'
        ctx.lineWidth = 0.5
        ctx.stroke()
        ctx.restore()
      }
      animationId = requestAnimationFrame(draw)
    }

    resize()
    initChips()
    draw()

    window.addEventListener('resize', () => { resize(); initChips() })
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', () => { resize(); initChips() })
    }
  }, [])

  return (
    <>
      {/* Scrolling ticker */}
      <div className="bg-[#0a0c10] border-b border-[#151720] overflow-hidden">
        <div className="animate-ticker flex items-center whitespace-nowrap py-2">
          {/* Live indicator */}
          <span className="flex-shrink-0 ml-4 mr-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
          </span>
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="text-[10px] uppercase tracking-[0.2em] text-white mx-6 flex-shrink-0">
              {item} <span className="text-[#F5A623] mx-2">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#080a0f] overflow-hidden" style={{ height: '420px', maxHeight: '420px' }}>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">
          {/* Badge */}
          <div className="mb-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 border border-[#1a1c24] px-4 py-1.5 rounded-full">
              Independent Casino Reviews · May 2026
            </span>
          </div>

          {/* Main title */}
          <h1 className="mb-3">
            <span className="block text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-none">
              BONU<span className="text-[#F5A623]">$</span>COUT
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gray-500 mb-6 max-w-lg">
            Best casino bonuses · Tested before we rank them
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link href="#casinos"
              className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl transition-colors">
              View Top Bonuses
            </Link>
            <Link href="/reviews"
              className="border border-[#252830] hover:border-[#F5A623]/40 text-gray-400 hover:text-white font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all">
              Casino Reviews
            </Link>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {STATS.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>
    </>
  )
}
