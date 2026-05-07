import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bestes Krypto Casino Bonus 2026 — Bitcoin Casino Deutschland | BonusScout',
  description: 'Die besten Krypto Casino Boni 2026. Bitcoin, Ethereum und kryptofreundliche Casinos mit den besten Willkommensangeboten. Alle getestet.',
  alternates: { canonical: 'https://www.bonuscout.com/de/krypto-casino-bonus' }
}

const cryptoCasinos = casinos.filter(c =>
  c.pros.some(p => p.toLowerCase().includes('crypto') || p.toLowerCase().includes('bitcoin')) ||
  c.slug === 'stake-casino' || c.slug === 'blockspins-casino'
)

export default function DeKryptoCasinoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Krypto Casino Bonus</span>
      </div>

      <div className="bg-gradient-to-r from-orange-900/30 to-orange-800/10 border border-orange-500/20 rounded-2xl p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Bestes Krypto Casino Bonus 2026</h1>
        <p className="text-gray-400 text-lg max-w-2xl">Bitcoin- und kryptofreundliche Casinos mit den besten Bonusangeboten. Auszahlungszeiten und Umsatzbedingungen unabhängig geprüft.</p>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-8">
        <h2 className="font-black text-white mb-4">Vorteile von Krypto Casinos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
          {[
            { icon: '⚡', title: 'Schnellere Auszahlungen', desc: 'Krypto-Auszahlungen in 1-4 Stunden statt 1-5 Werktagen.' },
            { icon: '🔒', title: 'Provably Fair', desc: 'Blockchain-Technologie ermöglicht die unabhängige Überprüfung jedes Spielergebnisses.' },
            { icon: '💰', title: '0x Umsatzbedingungen', desc: 'Einige Krypto-Casinos wie Stake bieten Boni ohne Umsatzbedingungen.' },
            { icon: '🌍', title: 'Weniger Beschränkungen', desc: 'Krypto-Zahlungen umgehen viele regionale Zahlungsbeschränkungen.' },
          ].map(item => (
            <div key={item.title} className="flex gap-3">
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <div>
                <div className="font-bold text-white mb-1">{item.title}</div>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-black text-white mb-6">Beste Krypto Casinos</h2>
      <div className="space-y-4">
        {cryptoCasinos.map((casino, index) => (
          <div key={casino.id} className="bg-[#161820] border border-orange-500/20 hover:border-orange-400/40 rounded-xl p-5 transition-all">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 items-center justify-center text-xs font-black text-orange-400">{index+1}</div>
              <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl">{casino.logo}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-black text-white">{casino.name}</span>
                  <span className="text-xs bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded-full font-bold">Krypto</span>
                  {casino.wagering === 0 && <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full font-bold">0x Umsatz</span>}
                </div>
                <div className="text-[#F5A623] font-bold">{casino.bonus}</div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Umsatz: <span className={`font-bold ${casino.wagering === 0 ? 'text-green-400' : 'text-yellow-400'}`}>{casino.wagering}x</span>
                  {' · '}Auszahlung: {casino.withdrawalTime}
                </div>
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
    </div>
  )
}
