import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beste Casino Boni 2026 — Alle Angebote Getestet | BonusScout',
  description: 'Alle Casino Boni 2026 getestet und verglichen. Keine Einzahlung, Freispiele, Willkommensbonus und Cashback. Umsatzbedingungen geprüft.',
  alternates: { canonical: 'https://www.bonuscout.com/de/boni' }
}

export default function DeBoniPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Boni</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Casino Boni 2026</h1>
      <p className="text-gray-400 mb-8">Wir lesen alle AGB, damit Sie es nicht müssen. Umsatz, Limits, Ablauf — alles geprüft.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {[
          { label: 'Ohne Einzahlung', icon: '💰', href: '/de/boni/kein-einzahlungsbonus', desc: 'Gratis spielen ohne Risiko' },
          { label: 'Willkommensbonus', icon: '🎁', href: '/de/boni/willkommensbonus', desc: 'Erste Einzahlung verdoppeln' },
          { label: 'Freispiele', icon: '🎰', href: '/de/boni/freispiele', desc: 'Gratis Spins auf Slots' },
          { label: 'Cashback', icon: '🔄', href: '/de/boni/cashback', desc: 'Verluste zurückerhalten' },
        ].map(b => (
          <Link key={b.label} href={b.href}
            className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/40 rounded-xl p-6 group transition-all">
            <div className="text-3xl mb-3">{b.icon}</div>
            <div className="font-black text-white group-hover:text-[#F5A623] mb-2">{b.label}</div>
            <div className="text-gray-500 text-xs mb-3">{b.desc}</div>
            <div className="text-[#F5A623] text-xs font-bold">Angebote ansehen →</div>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-black text-white mb-6">Alle Casino Boni</h2>
      <div className="space-y-3">
        {casinos.map((casino, index) => (
          <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 transition-all">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 items-center justify-center text-xs font-black text-[#F5A623]">{index+1}</div>
              <div className="w-10 h-10 bg-[#252830] rounded-xl flex items-center justify-center text-xl flex-shrink-0">{casino.logo}</div>
              <div className="flex-1 min-w-0">
                <div className="font-black text-white mb-0.5">{casino.name}</div>
                <div className="text-[#F5A623] font-bold text-sm">{casino.bonus}</div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Umsatz: <span className={casino.wagering <= 30 ? 'text-green-400 font-bold' : casino.wagering <= 35 ? 'text-yellow-400 font-bold' : 'text-red-400 font-bold'}>{casino.wagering}x</span>
                  {' · '}Min: €{casino.minDeposit}
                </div>
              </div>
              <div className="flex flex-col gap-1.5 flex-shrink-0">
                <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                  className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-xs px-4 py-2 rounded-lg transition-colors text-center">
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
