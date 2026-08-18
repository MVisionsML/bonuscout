import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beste Casino Boni 2026 — Aus veröffentlichten Anbieterbedingungen',
  description: 'Die besten Casino Boni 2026 aus den veröffentlichten Bonusbedingungen der Anbieter zusammengestellt. Bonus ohne Einzahlung, Freispiele, niedrigste Umsatzbedingungen und Willkommensboni verglichen. Aktualisiert Mai 2026.',
  alternates: {
    canonical: 'https://www.bonuscout.com/de',
    languages: { 'en': 'https://www.bonuscout.com', 'de': 'https://www.bonuscout.com/de' }
  }
}

export default function DeHomePage() {
  const topCasinos = casinos.slice(0, 8)
  const lowestWagering = [...casinos].sort((a, b) => a.wagering - b.wagering).slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#161820] border-b border-[#252830] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            Aktualisiert Mai 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
            Beste Casino Boni<br />
            <span className="text-[#F5A623]">Aus veröffentlichten Anbieterbedingungen</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Jede Bewertung wird aus den vom Betreiber veröffentlichten Allgemeinen Geschäftsbedingungen, der Kassiererseite und den Lizenzunterlagen erstellt. {casinos.length} Casinos aus veröffentlichten Anbieterbedingungen bewertet.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-10">
            {[
              { icon: '💳', label: 'Veröffentlichte Kassiererbedingungen' },
              { icon: '⚡', label: 'Auszahlungsfenster laut AGB' },
              { icon: '📋', label: 'Bonusbedingungen manuell geprüft' },
              { icon: '🔄', label: 'Monatlich aktualisiert' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2">
                <span>{item.icon}</span><span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Ohne Einzahlung', href: '/de/boni/kein-einzahlungsbonus' },
              { label: 'Niedrigste Umsatzbedingungen', href: '/de/niedrigste-umsatzbedingungen' },
              { label: 'Freispiele', href: '/de/boni/freispiele' },
              { label: 'Cashback', href: '/de/boni/cashback' },
              { label: 'Krypto Casino', href: '/de/krypto-casino-bonus' },
            ].map(b => (
              <Link key={b.label} href={b.href}
                className="bg-[#252830] hover:bg-[#2E3040] border border-[#2E3040] hover:border-[#F5A623]/30 text-gray-300 hover:text-[#F5A623] text-sm font-medium px-4 py-2 rounded-full transition-all">
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Independence notice */}
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-4 mb-8 flex items-start gap-3">
          <span className="text-[#F5A623] font-bold text-sm mt-0.5">✓</span>
          <p className="text-sm text-gray-400 leading-relaxed">
            <span className="text-white font-bold">Unsere Rankings sind nicht käuflich.</span>{' '}
            Kein Casino kann für eine bessere Platzierung bezahlen. Jede Bewertung wendet unsere veröffentlichte 10-Dimensionen-Methodik auf die aktuellen veröffentlichten Daten des Anbieters an.
          </p>
        </div>

        {/* Casino list */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-white">Beste Casino Boni — Mai 2026</h2>
            <p className="text-gray-500 text-sm mt-1">{casinos.length} Casinos aus veröffentlichten AGB und Lizenzunterlagen bewertet</p>
          </div>
          <Link href="/de/casinos" className="text-[#F5A623] text-sm font-bold hover:underline">Alle anzeigen →</Link>
        </div>

        <div className="space-y-4 mb-14">
          {topCasinos.map((casino, index) => (
            <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-5 transition-all">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex w-9 h-9 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 items-center justify-center text-xs font-black text-[#F5A623]">#{index+1}</div>
                <div className="w-14 h-14 bg-[#252830] rounded-xl flex items-center justify-center text-3xl flex-shrink-0">{casino.logo}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-black text-white">{casino.name}</span>
                    {casino.tag && <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">{casino.tag}</span>}
                  </div>
                  <div className="text-[#F5A623] font-bold">{casino.bonus}</div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Umsatzbedingungen: <span className={casino.wagering <= 30 ? 'text-green-400 font-bold' : casino.wagering <= 35 ? 'text-yellow-400 font-bold' : 'text-red-400 font-bold'}>{casino.wagering}x</span>
                    {' · '}Min: €{casino.minDeposit}
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
                    className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-sm px-5 py-2.5 rounded-lg transition-colors text-center">
                    Bonus holen
                  </a>
                  <Link href={`/de/bewertungen/${casino.slug}`} className="text-center text-xs text-gray-500 hover:text-[#F5A623]">
                    Bewertung
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lowest wagering */}
        <div className="bg-[#161820] border border-green-500/20 rounded-2xl p-6 md:p-8 mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-black text-white">Niedrigste Umsatzbedingungen</h2>
              <p className="text-gray-500 text-sm mt-1">Nach Umsatzbedingungen sortiert — niedrigste zuerst</p>
            </div>
            <Link href="/de/niedrigste-umsatzbedingungen" className="text-green-400 text-sm font-bold hover:underline">Alle →</Link>
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
                    className="bg-[#F5A623] hover:bg-[#E09520] text-black font-black text-xs px-3 py-1.5 rounded-lg">
                    Claim
                  </a>
                  <Link href={`/de/bewertungen/${casino.slug}`} className="text-xs text-gray-500 hover:text-[#F5A623] border border-[#252830] px-3 py-1.5 rounded-lg">
                    Test
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus categories */}
        <div className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">Boni nach Typ</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'Ohne Einzahlung', icon: '💰', href: '/de/boni/kein-einzahlungsbonus', desc: 'Gratis spielen' },
              { label: 'Freispiele', icon: '🎰', href: '/de/boni/freispiele', desc: '500+ Spins' },
              { label: 'Cashback', icon: '🔄', href: '/de/boni/cashback', desc: 'Verluste zurück' },
              { label: 'Krypto', icon: '₿', href: '/de/krypto-casino-bonus', desc: '0x Umsatz' },
              { label: 'Willkommen', icon: '🎁', href: '/de/boni/willkommensbonus', desc: 'Bis €8.000' },
            ].map(b => (
              <Link key={b.label} href={b.href}
                className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/40 rounded-xl p-4 group transition-all text-center">
                <div className="text-3xl mb-2">{b.icon}</div>
                <div className="font-black text-white group-hover:text-[#F5A623] transition-colors text-sm">{b.label}</div>
                <div className="text-gray-500 text-xs mt-1">{b.desc}</div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
