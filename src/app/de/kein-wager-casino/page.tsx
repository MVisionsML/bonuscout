import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kein Wager Casino 2026 — 0x Umsatzbedingungen | BonusScout',
  description: 'Casinos ohne Umsatzbedingungen 2026. Gewinne sofort auszahlen ohne Playthrough. Alle 0x Wager Angebote getestet.',
  alternates: { canonical: 'https://www.bonuscout.com/de/kein-wager-casino' }
}

const noWager = casinos.filter(c => c.wagering === 0)
const lowWager = casinos.filter(c => c.wagering > 0 && c.wagering <= 30)

export default function DeKeinWagerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
        <span className="mx-2">›</span>
        <Link href="/de/niedrigste-umsatzbedingungen" className="hover:text-[#F5A623]">Niedrigste Umsatzbedingungen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Kein Wager Casino</span>
      </div>

      <div className="bg-gradient-to-r from-green-900/40 to-green-800/10 border border-green-500/30 rounded-2xl p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Kein Wager Casino 2026</h1>
        <p className="text-gray-400 text-lg max-w-2xl">Behalten Sie alles, was Sie gewinnen. Casinos ohne Umsatzbedingungen ermöglichen sofortige Auszahlungen von Bonusgewinnen.</p>
      </div>

      {noWager.length > 0 && (
        <>
          <h2 className="text-xl font-black text-white mb-4">0x Umsatzbedingungen Casinos</h2>
          <div className="space-y-4 mb-8">
            {noWager.map((casino, index) => (
              <div key={casino.id} className="bg-[#161820] border border-green-500/30 rounded-xl p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl">{casino.logo}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-black text-white">{casino.name}</span>
                      <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full font-bold">0x Umsatz</span>
                    </div>
                    <div className="text-[#F5A623] font-bold">{casino.bonus}</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                      className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm px-5 py-2.5 rounded-lg transition-colors text-center">
                      Bonus holen
                    </a>
                    <Link href={`/de/bewertungen/${casino.slug}`} className="text-center text-xs text-gray-500 hover:text-[#F5A623]">Bewertung</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <h2 className="text-xl font-black text-white mb-4">Nächstbeste — 30x Umsatzbedingungen</h2>
      <div className="space-y-4">
        {lowWager.map(casino => (
          <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-green-500/30 rounded-xl p-5 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl">{casino.logo}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-black text-white">{casino.name}</span>
                  <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full font-bold">{casino.wagering}x</span>
                </div>
                <div className="text-[#F5A623] font-bold">{casino.bonus}</div>
              </div>
              <div className="flex flex-col gap-2">
                <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                  className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm px-5 py-2.5 rounded-lg transition-colors text-center">
                  Holen
                </a>
                <Link href={`/de/bewertungen/${casino.slug}`} className="text-center text-xs text-gray-500 hover:text-[#F5A623]">Test</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
