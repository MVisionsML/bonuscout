import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beste Casino Freispiele 2026 — Gratis Spins Angebote',
  description: 'Die besten Casino Freispiele 2026. Gratis Spins auf echten Slots bei lizenzierten Casinos — alle Angebote aus veröffentlichten Bonusbedingungen der Anbieter zusammengestellt.',
  alternates: { canonical: 'https://www.bonuscout.com/de/boni/freispiele' }
}

const dedicatedSpins = casinos.filter(c => c.bonusType === 'free-spins')
const withSpins = casinos.filter(c => c.bonus.toLowerCase().includes('spin') || c.bonus.toLowerCase().includes('freispiel'))
const list = dedicatedSpins.length || withSpins.length ? (dedicatedSpins.length ? dedicatedSpins : withSpins) : casinos

export default function DeFreispielePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
        <span className="mx-2">›</span>
        <Link href="/de/boni" className="hover:text-[#F5A623]">Boni</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Freispiele</span>
      </div>

      <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl p-8 mb-8">
        <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Freispiele
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Casino Freispiele 2026</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">Mit Freispielen drehen Sie echte Slot-Runden kostenlos. Die meisten sind Teil eines Willkommenspakets — einige Casinos bieten jedoch eigenständige Freispiel-Aktionen.</p>
        <div className="flex flex-wrap gap-4 mt-5 text-sm">
          <span className="text-green-400">✓ Echte Slot-Runden ohne Einsatz</span>
          <span className="text-green-400">✓ Gewinne werden gutgeschrieben</span>
          <span className="text-green-400">✓ Im Willkommenspaket oder separat</span>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-8">
        <h2 className="font-black text-white mb-3">Was sind Freispiele?</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">Freispiele (Free Spins) sind kostenlose Drehungen an einem oder mehreren Slot-Spielen. Gewinne aus Freispielen werden meist als Bonusguthaben gutgeschrieben und unterliegen einer Umsatzbedingung, bevor sie ausgezahlt werden können.</p>
        <div className="bg-[#0D0F14] rounded-xl p-4 font-mono text-sm">
          <div className="text-green-400 mb-1">Beispiel — 100 Freispiele · Spinwert €0,10 · Umsatz 30x</div>
          <div className="text-gray-300">Bonuswert: €10 · Umsatz: <span className="text-[#F5A623] font-black">€300</span> bevor Auszahlung möglich</div>
        </div>
      </div>

      {dedicatedSpins.length > 0 && (
        <>
          <h2 className="text-2xl font-black text-white mb-6">Spezielle Freispiel-Angebote ({dedicatedSpins.length})</h2>
          <div className="space-y-4 mb-10">
            {dedicatedSpins.map((casino, index) => (
              <CasinoRow key={casino.id} casino={casino} rank={index + 1} />
            ))}
          </div>
        </>
      )}

      <h2 className="text-2xl font-black text-white mb-3">
        {dedicatedSpins.length > 0 ? 'Willkommensboni mit Freispielen' : `Casinos mit Freispielen (${list.length})`}
      </h2>
      <p className="text-sm text-gray-500 mb-5">
        {dedicatedSpins.length > 0
          ? 'Diese Boni enthalten Freispiele als Teil eines Einzahlungspakets.'
          : 'Diese Casinos bieten Freispiele als Teil ihres Willkommenspakets — Bedingungen aus den veröffentlichten AGB der Anbieter zusammengestellt.'}
      </p>
      <div className="space-y-4 mb-10">
        {(dedicatedSpins.length > 0 ? withSpins : list).map((casino, index) => (
          <CasinoRow key={casino.id} casino={casino} rank={dedicatedSpins.length + index + 1} />
        ))}
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-4">Was Freispiele wirklich wert sind</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
          <div>
            <div className="text-[#F5A623] font-bold mb-2">Die Mathematik</div>
            <p className="leading-relaxed">Die meisten Freispiele haben einen Wert von €0,10 pro Spin. 100 Freispiele entsprechen also einem Bonuswert von €10. Bei 30x Umsatz müssen Sie €300 setzen, um auszahlen zu können.</p>
          </div>
          <div>
            <div className="text-[#F5A623] font-bold mb-2">Freispiele ohne Umsatz</div>
            <p className="leading-relaxed">Einige Casinos bieten &quot;Freispiele ohne Umsatzbedingungen&quot; an — die Gewinne sind sofort auszahlbar. Diese sind selten, aber deutlich wertvoller.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-5">Häufig gestellte Fragen</h2>
        <div className="space-y-5 text-sm">
          <div>
            <div className="text-white font-bold mb-1">Auf welchen Slots kann ich Freispiele verwenden?</div>
            <p className="text-gray-400 leading-relaxed">Das hängt vom Casino ab. Oft sind Freispiele auf bestimmte Slots beschränkt — beliebte Titel sind Book of Dead, Starburst und Big Bass Bonanza.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Werden Gewinne aus Freispielen sofort ausgezahlt?</div>
            <p className="text-gray-400 leading-relaxed">Meist nicht. Gewinne werden als Bonusguthaben gutgeschrieben und müssen umgesetzt werden. Nur &quot;No-Wager-Freispiele&quot; sind sofort auszahlbar.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Wie lange habe ich Zeit, Freispiele zu nutzen?</div>
            <p className="text-gray-400 leading-relaxed">In der Regel zwischen 24 Stunden und 7 Tagen ab Gutschrift. Ungenutzte Freispiele verfallen — prüfen Sie die Frist in den Bonusbedingungen.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Gibt es eine Maximaleinsatz-Regel bei Freispielen?</div>
            <p className="text-gray-400 leading-relaxed">Beim Umsetzen der Gewinne gilt fast immer ein Maximaleinsatz — meist €5 pro Spin oder Setzrunde. Bei Verstoß wird der Bonus storniert.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
        <h2 className="font-black text-white mb-4">Verwandte Seiten</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Willkommensbonus', href: '/de/boni/willkommensbonus' },
            { label: 'Kein Einzahlungsbonus', href: '/de/boni/kein-einzahlungsbonus' },
            { label: 'Niedrigste Umsatzbedingungen', href: '/de/niedrigste-umsatzbedingungen' },
            { label: 'Alle Bewertungen', href: '/de/bewertungen' },
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

function CasinoRow({ casino, rank }: { casino: typeof casinos[number]; rank: number }) {
  return (
    <div className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-5 transition-all">
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 items-center justify-center text-xs font-black text-[#F5A623]">{rank}</div>
        <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{casino.logo}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-black text-white">{casino.name}</span>
            {casino.tag && <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-0.5 rounded-full font-bold">{casino.tag}</span>}
          </div>
          <div className="text-[#F5A623] font-bold text-sm">{casino.bonus}</div>
          <div className="text-xs text-gray-500 mt-0.5">
            Umsatz: <span className={casino.wagering <= 30 ? 'text-green-400 font-bold' : casino.wagering <= 35 ? 'text-yellow-400 font-bold' : 'text-red-400 font-bold'}>{casino.wagering}x</span>
            {' · '}Min: €{casino.minDeposit}
            {' · '}{casino.licenses.join(', ')}
          </div>
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
  )
}
