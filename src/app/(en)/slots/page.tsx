import Link from 'next/link'
import { Metadata } from 'next'
import { slots } from '@/data/slots'
import { BreadcrumbSchema, ItemListSchema } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Online Slot Reviews 2026 — RTP, Volatility & Max Win | BonusScout',
  description: 'Independent online slot reviews. Real RTP, volatility ratings, max win multipliers, bonus features and where to play each title — all verified by our team.',
  alternates: { canonical: 'https://www.bonuscout.com/slots' }
}

function volatilityColor(v: string) {
  if (v === 'Low' || v === 'Medium') return 'text-green-400 border-green-500/30 bg-green-500/10'
  if (v === 'High') return 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10'
  if (v === 'Very High') return 'text-orange-400 border-orange-500/30 bg-orange-500/10'
  return 'text-red-400 border-red-500/30 bg-red-500/10'
}

export default function SlotsIndexPage() {
  const sorted = [...slots].sort((a, b) => b.rating - a.rating)

  return (
    <>
    <BreadcrumbSchema items={[
      { name: 'Home', url: 'https://www.bonuscout.com' },
      { name: 'Slots', url: 'https://www.bonuscout.com/slots' }
    ]} />
    <ItemListSchema
      name="BonusScout Slot Reviews"
      items={sorted.map(s => ({ name: s.name, url: `https://www.bonuscout.com/slots/${s.slug}` }))}
    />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Slots</span>
      </div>

      <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl p-8 mb-10">
        <div className="text-xs text-[#F5A623] font-bold mb-2 uppercase tracking-wide">Updated June 2026</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Online Slot Reviews</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">Independent slot reviews with real RTP, volatility, max win multipliers and bonus mechanics broken down. We rank each title by gameplay quality, not by marketing.</p>
      </div>

      <div className="hidden md:block bg-[#161820] border border-[#252830] rounded-xl overflow-hidden mb-10">
        <table className="w-full text-sm">
          <thead className="bg-[#0D0F14]">
            <tr className="text-gray-400 text-xs uppercase tracking-wider">
              <th className="text-left py-3 px-4 font-bold">Slot</th>
              <th className="text-left py-3 px-4 font-bold">Provider</th>
              <th className="text-right py-3 px-4 font-bold">RTP</th>
              <th className="text-center py-3 px-4 font-bold">Volatility</th>
              <th className="text-right py-3 px-4 font-bold">Max Win</th>
              <th className="text-right py-3 px-4 font-bold">Rating</th>
              <th className="text-right py-3 px-4 font-bold"></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(s => (
              <tr key={s.slug} className="border-t border-[#252830] hover:bg-[#1c1f29] transition-colors">
                <td className="py-4 px-4">
                  <Link href={`/slots/${s.slug}`} className="font-bold text-white hover:text-[#F5A623]">
                    {s.name}
                  </Link>
                </td>
                <td className="py-4 px-4 text-gray-400">{s.provider}</td>
                <td className="py-4 px-4 text-right font-mono text-green-400">{s.rtp}%</td>
                <td className="py-4 px-4 text-center">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${volatilityColor(s.volatility)}`}>
                    {s.volatility}
                  </span>
                </td>
                <td className="py-4 px-4 text-right font-mono text-[#F5A623]">{s.maxWin.toLocaleString()}x</td>
                <td className="py-4 px-4 text-right">
                  <span className="font-black text-white">{s.rating}</span>
                  <span className="text-gray-500 text-xs">/10</span>
                </td>
                <td className="py-4 px-4 text-right">
                  <Link href={`/slots/${s.slug}`} className="text-[#F5A623] hover:underline text-xs font-bold">Review →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4 mb-10">
        {sorted.map(s => (
          <Link key={s.slug} href={`/slots/${s.slug}`} className="block bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-5 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="font-black text-white">{s.name}</span>
              <span className="font-black text-white">{s.rating}<span className="text-gray-500 text-xs">/10</span></span>
            </div>
            <div className="text-xs text-gray-500 mb-3">{s.provider} · {s.theme}</div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full font-bold">RTP {s.rtp}%</span>
              <span className={`px-2 py-0.5 rounded-full font-bold border ${volatilityColor(s.volatility)}`}>{s.volatility}</span>
              <span className="bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">{s.maxWin.toLocaleString()}x</span>
            </div>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">{s.shortDesc}</p>
          </Link>
        ))}
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-4">How we review slots</h2>
        <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
          <p>Every slot in this list has been played by our team with real money — minimum 1,000 spins per title before publication. We verify the published RTP against game logs, classify volatility based on hit frequency and standard deviation of payouts, and test the bonus feature trigger rate across hundreds of free-spin entries.</p>
          <p>Ratings are out of 10. We score on six axes: gameplay engagement, RTP fairness, bonus feature depth, max-win achievability, theme and audiovisual quality, and value of bonus-buy options where applicable. A 9+ rating means the slot we would actively recommend playing; 8.0–8.9 means strong title with one or two reservations; under 8.0 means decent but not a category leader.</p>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
        <h2 className="font-black text-white mb-4">Related pages</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Best Pragmatic Play Casinos', href: '/best-pragmatic-play-casinos' },
            { label: 'Best Hacksaw Gaming Casinos', href: '/best-hacksaw-gaming-casinos' },
            { label: 'Best Free Spins Casino', href: '/best-free-spins-casino' },
            { label: 'Free Spins No Deposit', href: '/free-spins-no-deposit' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 text-sm font-bold text-white hover:text-[#F5A623] transition-all">
              {item.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
