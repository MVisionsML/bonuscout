import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casino Reviews 2026 — Honest, Tested Reviews',
  description: 'Read our in-depth casino reviews for 2026. Every casino is tested with real deposits and withdrawals before we publish a rating.',
}

const safetyConfig = {
  high: { label: 'High Safety', color: 'text-green-400', dot: 'bg-green-400' },
  medium: { label: 'Medium Safety', color: 'text-yellow-400', dot: 'bg-yellow-400' },
  low: { label: 'Low Safety', color: 'text-red-400', dot: 'bg-red-400' },
}

export default function ReviewsPage() {
  const sorted = [...casinos].sort((a, b) => b.rating - a.rating)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="mb-10">
        <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Reviews
        </div>
        <h1 className="text-4xl font-black text-white mb-3">Casino Reviews 2026</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Every review is based on real testing. We deposit, play, withdraw, and contact support before writing a word.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sorted.map((casino, index) => {
          const safety = safetyConfig[casino.safetyIndex]
          const stars = Math.round(casino.rating)
          return (
            <Link
              key={casino.id}
              href={`/reviews/${casino.slug}`}
              className="group bg-[#161820] border border-[#252830] hover:border-[#F5A623]/40 hover:bg-[#1A1C24] rounded-2xl p-5 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-3xl border border-[#2E3040] flex-shrink-0">
                  {casino.logo}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-black text-white group-hover:text-[#F5A623] transition-colors">{casino.name}</span>
                    <span className="text-xs text-gray-500">#{index + 1}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex items-center gap-0.5">
                      {[1,2,3,4,5].map(s => (
                        <span key={s} className={`text-xs ${s <= stars ? 'text-[#F5A623]' : 'text-gray-700'}`}>★</span>
                      ))}
                    </div>
                    <span className="text-white font-bold text-xs">{casino.rating}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5A623]/5 border border-[#F5A623]/10 rounded-lg p-3 mb-4">
                <div className="text-xs text-gray-500 mb-0.5">Bonus</div>
                <div className="text-[#F5A623] font-bold text-sm">{casino.bonus}</div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${safety.dot}`}></span>
                  <span className={safety.color}>{safety.label}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <span>{casino.wagering}x wagering</span>
                  {casino.depositTested && <span className="text-green-400">Tested ✓</span>}
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-400 leading-relaxed line-clamp-2">
                {casino.verdict}
              </div>

              <div className="mt-3 text-[#F5A623] text-xs font-bold group-hover:underline">
                Read full review →
              </div>
            </Link>
          )
        })}
      </div>

    </div>
  )
}
