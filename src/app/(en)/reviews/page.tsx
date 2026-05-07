import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casino Reviews 2026 — Tested by Our Team | BonusScout',
  description: 'In-depth casino reviews based on real testing. We deposit, withdraw and test support before publishing any review.',
}

export default function ReviewsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Reviews</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Casino Reviews</h1>
        <p className="text-gray-400 max-w-2xl">Every review is based on real testing — not casino marketing material.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {casinos.map((casino) => (
          <Link
            key={casino.id}
            href={"/reviews/" + casino.slug}
            className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/40 rounded-xl p-5 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                {casino.logo}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-black text-white group-hover:text-[#F5A623] transition-colors">
                    {casino.name}
                  </span>
                  {casino.tag && (
                    <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">
                      {casino.tag}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className={"text-sm " + (s <= Math.round(casino.rating) ? "text-[#F5A623]" : "text-gray-700")}>★</span>
                  ))}
                  <span className="text-white font-bold text-sm ml-1">{casino.rating}</span>
                  <span className="text-gray-500 text-xs">/{casino.ratingMax}</span>
                </div>
                <div className="text-[#F5A623] text-sm font-bold mb-2">{casino.bonus}</div>
                <div className="text-xs text-gray-500 flex gap-3">
                  <span>Wagering: <span className={casino.wagering <= 30 ? "text-green-400" : casino.wagering <= 35 ? "text-yellow-400" : "text-red-400"}>{casino.wagering}x</span></span>
                  <span>Min: €{casino.minDeposit}</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed line-clamp-2">{casino.verdict}</p>
            <div className="mt-3 text-xs text-[#F5A623] font-bold">Read full review →</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
