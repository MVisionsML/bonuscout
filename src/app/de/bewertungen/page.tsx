import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casino Bewertungen 2026 — Von Unserem Team Getestet | BonusScout',
  description: 'Detaillierte Casino-Bewertungen basierend auf echten Tests. Wir zahlen ein, heben ab und testen den Support bevor wir eine Bewertung veröffentlichen.',
  alternates: { canonical: 'https://www.bonuscout.com/de/bewertungen' }
}

export default function DeBewertungenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Bewertungen</span>
      </div>
      <h1 className="text-3xl font-black text-white mb-3">Casino Bewertungen 2026</h1>
      <p className="text-gray-400 mb-8">Jede Bewertung basiert auf echten Tests — nicht auf Casino-Marketingmaterial.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {casinos.map(casino => (
          <Link key={casino.id} href={`/de/bewertungen/${casino.slug}`}
            className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/40 rounded-xl p-5 group transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{casino.logo}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-black text-white group-hover:text-[#F5A623] transition-colors">{casino.name}</span>
                  {casino.tag && <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">{casino.tag}</span>}
                </div>
                <div className="text-[#F5A623] font-bold text-sm mb-1">{casino.bonus}</div>
                <div className="text-xs text-gray-500">Umsatz: <span className={casino.wagering <= 30 ? 'text-green-400 font-bold' : casino.wagering <= 35 ? 'text-yellow-400 font-bold' : 'text-red-400 font-bold'}>{casino.wagering}x</span></div>
                <div className="mt-2 text-xs text-[#F5A623] font-bold">Bewertung lesen →</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
