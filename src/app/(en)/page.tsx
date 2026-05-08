import Link from 'next/link'
import CasinoCard from '@/components/casino/CasinoCard'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { WebsiteSchema } from '@/components/seo/SchemaMarkup'
import HeroSection from '@/components/home/HeroSection'

export const metadata: Metadata = {
  title: 'Best Casino Bonuses & Reviews 2026 | BonusScout',
  description: 'We test casinos for bonuses, withdrawals, support, and terms before we rank them. Independent casino bonus reviews updated monthly.',
}

export default function HomePage() {
  return (
    <>
      <WebsiteSchema />
      <div>
      <HeroSection />

      <div id="casinos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">

        {/* Methodology note */}
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-4 mb-8 flex items-start gap-3">
          <span className="text-[#F5A623] font-bold text-sm mt-0.5">✓</span>
          <p className="text-sm text-gray-400 leading-relaxed">
            <span className="text-white font-bold">Our rankings are not bought.</span>{' '}
            No casino can pay for a higher position. Every rating reflects what we found during testing —
            including the things casinos would rather we didn&apos;t mention.
          </p>
        </div>

        {/* How we rank */}
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-10">
          <h2 className="text-white font-black text-lg mb-4">How we rank casinos</h2>
          <p className="text-gray-400 text-sm mb-4">
            We score each casino across six categories. Every score is based on our own testing — not what the casino tells us about itself.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Bonus value', 'Wagering fairness', 'Withdrawal speed', 'Payment options', 'Support quality', 'Overall trust'].map(c => (
              <span key={c} className="bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs px-3 py-1 rounded-full font-medium">
                {c}
              </span>
            ))}
          </div>
          <Link href="/methodology" className="text-[#F5A623] text-sm font-bold hover:underline">
            See full methodology →
          </Link>
        </div>

        {/* Casino list */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-white">
            Best Casino Bonuses — May 2026
          </h2>
          <Link href="/casinos" className="text-[#F5A623] text-sm font-bold hover:underline">
            View all →
          </Link>
        </div>

        <div className="space-y-4 mb-14">
          {casinos.map((casino, index) => (
            <CasinoCard key={casino.id} casino={casino} rank={index + 1} />
          ))}
        </div>

        {/* Editor's Pick */}
        {(() => {
          const luckywins = casinos.find(c => c.slug === 'luckywins-casino')!
          return (
            <div className="bg-[#161820] border border-[#F5A623]/30 rounded-2xl p-6 md:p-8 mb-14">
              <div className="text-xs text-[#F5A623] font-bold mb-3 uppercase tracking-wide">Editor&apos;s Pick</div>
              <div className="flex items-start gap-5 flex-wrap">
                <div className="w-16 h-16 bg-[#252830] rounded-xl flex items-center justify-center text-3xl flex-shrink-0">{luckywins.logo}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-black text-white mb-1">{luckywins.name}</h3>
                  <div className="text-[#F5A623] font-bold text-lg mb-2">{luckywins.bonus}</div>
                  <p className="text-gray-400 text-sm mb-3">{luckywins.verdict}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                    <span>Wagering: <span className="text-yellow-400 font-bold">{luckywins.wagering}x</span></span>
                    <span>Min deposit: €{luckywins.minDeposit}</span>
                    <span>Withdrawal: {luckywins.withdrawalTime}</span>
                    <span>Rating: <span className="text-[#F5A623] font-bold">{luckywins.rating}/{luckywins.ratingMax}</span></span>
                  </div>
                  <div className="flex gap-3">
                    <a href={luckywins.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                      className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm px-6 py-2.5 rounded-lg transition-colors">
                      Claim Bonus
                    </a>
                    <Link href="/reviews/luckywins-casino" className="border border-[#252830] hover:border-[#F5A623]/30 text-gray-400 hover:text-[#F5A623] text-sm font-bold px-5 py-2.5 rounded-lg transition-all">
                      Read Full Review →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })()}

        {/* Lowest wagering */}
        {(() => {
          const lowestWagering = [...casinos].sort((a, b) => a.wagering - b.wagering).slice(0, 3)
          return (
            <div className="bg-[#161820] border border-green-500/20 rounded-2xl p-6 md:p-8 mb-14">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-black text-white">Lowest Wagering Casinos</h2>
                  <p className="text-gray-500 text-sm mt-1">Ranked by wagering requirement — lowest first</p>
                </div>
                <Link href="/lowest-wagering-casinos" className="text-green-400 text-sm font-bold hover:underline">See all →</Link>
              </div>
              <div className="space-y-3">
                {lowestWagering.map((casino, i) => (
                  <div key={casino.id} className="flex items-center gap-4 bg-[#0D0F14] rounded-xl p-4">
                    <span className="text-gray-500 font-black w-6 text-sm flex-shrink-0">#{i+1}</span>
                    <span className="text-2xl flex-shrink-0">{casino.logo}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-sm">{casino.name}</div>
                      <div className="text-[#F5A623] text-xs">{casino.bonus}</div>
                    </div>
                    <div className={`font-black text-xl flex-shrink-0 ${casino.wagering === 0 ? 'text-green-400' : casino.wagering <= 30 ? 'text-green-400' : 'text-yellow-400'}`}>
                      {casino.wagering}x
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                        className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-xs px-3 py-1.5 rounded-lg transition-colors">
                        Claim
                      </a>
                      <Link href={`/reviews/${casino.slug}`} className="text-xs text-gray-500 hover:text-[#F5A623] border border-[#252830] px-3 py-1.5 rounded-lg">
                        Review
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })()}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-black text-white mb-2">Looking for no deposit bonuses?</h2>
          <p className="text-gray-400 mb-6">Play for free without risking your own money at verified, licensed casinos.</p>
          <Link
            href="/bonuses/no-deposit"
            className="inline-block bg-[#F5A623] hover:bg-[#E09520] text-black font-black px-8 py-4 rounded-xl transition-colors text-lg"
          >
            See No Deposit Bonuses →
          </Link>
        </div>

      </div>
    </div>
    </>
  )
}
