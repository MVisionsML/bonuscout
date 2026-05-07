import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beste Online Casinos 2026 — Getestet & Bewertet | BonusScout',
  description: 'Die besten Online Casinos 2026 unabhängig getestet. Echte Einzahlungen, Auszahlungen und Bonusbedingungen geprüft. Aktualisiert Mai 2026.',
  alternates: { canonical: 'https://www.bonuscout.com/de/casinos' }
}

export default function DeCasinosPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Online Casinos</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Beste Online Casinos 2026</h1>
      <p className="text-gray-400 mb-8 max-w-2xl">Jedes Casino wurde von unserem Team getestet — echte Einzahlungen, echte Auszahlungen, echte Bewertungen.</p>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-4 mb-8 flex items-start gap-3">
        <span className="text-[#F5A623] font-bold mt-0.5">✓</span>
        <p className="text-sm text-gray-400">
          <span className="text-white font-bold">Unsere Rankings sind nicht käuflich.</span>{' '}
          Kein Casino kann für eine bessere Position bezahlen.
        </p>
      </div>

      <div className="space-y-4">
        {casinos.map((casino, index) => (
          <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-5 transition-all">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 items-center justify-center text-xs font-black text-[#F5A623]">{index+1}</div>
              <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{casino.logo}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-black text-white">{casino.name}</span>
                  {casino.tag && <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">{casino.tag}</span>}
                </div>
                <div className="text-[#F5A623] font-bold text-sm">{casino.bonus}</div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Umsatz: <span className={casino.wagering <= 30 ? 'text-green-400 font-bold' : casino.wagering <= 35 ? 'text-yellow-400 font-bold' : 'text-red-400 font-bold'}>{casino.wagering}x</span>
                  {' · '}Min: €{casino.minDeposit} · {casino.licenses.join(', ')}
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
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
