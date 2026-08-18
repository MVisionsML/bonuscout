import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Niedrigste Umsatzbedingungen Casino 2026 — 30x und Weniger',
  description: 'Casinos mit den niedrigsten Umsatzbedingungen 2026. Von 0x bis 30x — alle aus veröffentlichten Anbieterbedingungen verglichen. Aktualisiert Mai 2026.',
  alternates: { canonical: 'https://www.bonuscout.com/de/niedrigste-umsatzbedingungen' }
}

const sorted = [...casinos].sort((a, b) => a.wagering - b.wagering)

export default function DeNiedrigsteUmsatzPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Niedrigste Umsatzbedingungen</span>
      </div>

      <div className="bg-gradient-to-r from-green-900/30 to-green-800/10 border border-green-500/20 rounded-2xl p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Niedrigste Umsatzbedingungen Casino 2026</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">Wir sortieren alle Casinos nach Umsatzbedingungen — von 0x bis 45x. Niedrigere Umsatzbedingungen bedeuten mehr auszahlbare Gewinne.</p>
        <div className="flex flex-wrap gap-4 mt-5 text-sm">
          <span className="text-green-400">✓ 0x — 30x = Beste Kategorie</span>
          <span className="text-yellow-400">✓ 35x = Fair</span>
          <span className="text-red-400">✓ 40x+ = Hoch</span>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-8">
        <h2 className="font-black text-white mb-3">Was sind Umsatzbedingungen?</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">Umsatzbedingungen (auch Playthrough genannt) geben an, wie oft Sie Ihren Bonusbetrag setzen müssen, bevor Sie Gewinne daraus auszahlen können.</p>
        <div className="bg-[#0D0F14] rounded-xl p-4 font-mono text-sm">
          <div className="text-green-400 mb-1">Beispiel — Bonus: €100 · Umsatz: 35x</div>
          <div className="text-gray-300">Sie müssen setzen: €100 × 35 = <span className="text-[#F5A623] font-black">€3.500</span></div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-white mb-6">Alle Casinos nach Umsatzbedingungen</h2>
      <div className="space-y-4 mb-10">
        {sorted.map((casino, index) => (
          <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-5 transition-all">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#252830] items-center justify-center text-xs font-black text-gray-400">{index+1}</div>
              <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{casino.logo}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-black text-white">{casino.name}</span>
                  {casino.tag && <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">{casino.tag}</span>}
                </div>
                <div className="text-[#F5A623] font-bold text-sm">{casino.bonus}</div>
                <div className="text-xs text-gray-500 mt-0.5">Min: €{casino.minDeposit} · {casino.licenses.join(', ')}</div>
              </div>
              <div className="flex-shrink-0 text-center mr-2">
                <div className={`text-2xl font-black ${casino.wagering === 0 ? 'text-green-400' : casino.wagering <= 30 ? 'text-green-400' : casino.wagering <= 35 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {casino.wagering}x
                </div>
                <div className="text-xs text-gray-500">Umsatz</div>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                  className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm px-4 py-2.5 rounded-lg transition-colors text-center">
                  Holen
                </a>
                <Link href={`/de/bewertungen/${casino.slug}`} className="text-center text-xs text-gray-500 hover:text-[#F5A623]">Test</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
        <h2 className="font-black text-white mb-4">Verwandte Seiten</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Kein Wager Casino', href: '/de/kein-wager-casino' },
            { label: 'Krypto Casino Bonus', href: '/de/krypto-casino-bonus' },
            { label: 'Ohne Einzahlung', href: '/de/boni/kein-einzahlungsbonus' },
            { label: 'Beste Boni', href: '/de/boni' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 text-sm font-bold text-white hover:text-[#F5A623] transition-all">
              {item.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
