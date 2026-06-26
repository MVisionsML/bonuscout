import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'
import { FAQSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Stake Casino vs Blockspins 2026 — Best Crypto Casino?',
  description: 'Stake Casino vs Blockspins compared. Both crypto casinos tested side by side. Wagering, withdrawals, games and bonuses compared. Which is better?',
  alternates: { canonical: 'https://www.bonuscout.com/stake-vs-blockspins' }
}

const faqs = [
  { q: 'Is Stake Casino better than Blockspins?', a: 'For most players yes. Stake offers 0x wagering on promos, a larger game library and faster withdrawals. Blockspins is better for smaller crypto deposits and provably fair games specifically.' },
  { q: 'Do both Stake and Blockspins accept Bitcoin?', a: 'Yes. Both are crypto-native casinos accepting Bitcoin and other cryptocurrencies. Stake also accepts a wider range of altcoins.' },
  { q: 'Which has faster crypto withdrawals?', a: 'Stake processes crypto withdrawals in 1-4 hours — among the fastest we have tested. Blockspins is comparable at 1-4 hours for Bitcoin withdrawals.' },
]

export default function StakeVsBlockspinsPage() {
  const stake = casinos.find(c => c.slug === 'stake-casino')!
  const blockspins = casinos.find(c => c.slug === 'blockspins-casino')!

  const criteria = [
    { label: 'Welcome Bonus', s: stake.bonus, b: blockspins.bonus, winner: 'tie' },
    { label: 'Wagering', s: `${stake.wagering}x`, b: `${blockspins.wagering}x`, winner: 'tie' },
    { label: 'Withdrawal Time', s: stake.withdrawalTime, b: blockspins.withdrawalTime, winner: 'tie' },
    { label: 'Games', s: `${stake.games.toLocaleString()}+`, b: `${blockspins.games.toLocaleString()}+`, winner: 's' },
    { label: 'Our Rating', s: `${stake.rating}/5`, b: `${blockspins.rating}/5`, winner: 's' },
    { label: 'Crypto Focus', s: '✓ Full', b: '✓ Full', winner: 'tie' },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#F5A623]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/reviews" className="hover:text-[#F5A623]">Reviews</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-300">Stake vs Blockspins</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Stake Casino vs Blockspins 2026</h1>
        <p className="text-gray-400 mb-8">Two of the best crypto casinos compared. We tested both — here&apos;s what we found.</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {[stake, blockspins].map(casino => (
            <div key={casino.id} className="bg-[#161820] border border-[#252830] rounded-xl p-5 text-center">
              <div className="text-4xl mb-2">{casino.logo}</div>
              <div className="font-black text-white mb-1">{casino.name}</div>
              <div className="text-[#F5A623] font-bold text-sm mb-1">{casino.bonus}</div>
              <div className="text-green-400 text-xs mb-3">{casino.wagering}x wagering</div>
              <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                className="block w-full bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm py-2.5 rounded-lg transition-colors">
                Claim Bonus
              </a>
            </div>
          ))}
        </div>

        <div className="bg-[#161820] border border-[#252830] rounded-xl overflow-hidden mb-8">
          <div className="grid grid-cols-3 bg-[#252830] p-4">
            <div className="text-gray-400 text-sm font-bold">Category</div>
            <div className="text-white text-sm font-black text-center">Stake</div>
            <div className="text-white text-sm font-black text-center">Blockspins</div>
          </div>
          {criteria.map((row, i) => (
            <div key={row.label} className={`grid grid-cols-3 p-4 ${i % 2 === 0 ? 'bg-[#161820]' : 'bg-[#0D0F14]'}`}>
              <div className="text-gray-400 text-sm">{row.label}</div>
              <div className={`text-sm text-center font-bold ${row.winner === 's' ? 'text-green-400' : 'text-white'}`}>{row.s} {row.winner === 's' && '✓'}</div>
              <div className={`text-sm text-center font-bold ${row.winner === 'b' ? 'text-green-400' : 'text-white'}`}>{row.b} {row.winner === 'b' && '✓'}</div>
            </div>
          ))}
        </div>

        <div className="bg-[#161820] border border-[#F5A623]/20 rounded-xl p-6 mb-8">
          <h2 className="font-black text-white text-xl mb-4">Our Verdict</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">Stake Casino is the better all-round crypto casino. Its 0x wagering on promotional offers, larger game library and faster withdrawal pipeline make it the standout choice for most crypto players.</p>
          <p className="text-gray-400 text-sm leading-relaxed">Blockspins is the better choice if you specifically want provably fair games and are depositing smaller amounts in Bitcoin. For everything else, Stake wins.</p>
        </div>

        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-8">
          <h2 className="font-black text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className={i > 0 ? 'border-t border-[#252830] pt-6' : ''}>
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
          <h2 className="font-black text-white mb-4">Read Full Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/reviews/stake-casino" className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 group transition-all">
              <div className="font-bold text-white group-hover:text-[#F5A623]">Stake Casino Full Review →</div>
              <div className="text-gray-500 text-sm mt-1">{stake.bonus}</div>
            </Link>
            <Link href="/reviews/blockspins-casino" className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 group transition-all">
              <div className="font-bold text-white group-hover:text-[#F5A623]">Blockspins Full Review →</div>
              <div className="text-gray-500 text-sm mt-1">{blockspins.bonus}</div>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}
