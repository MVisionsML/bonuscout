import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bester Willkommensbonus Casino 2026',
  description: 'Die besten Casino Willkommensboni 2026. Match-Boni, Einzahlungsboni und Erstangebote — bewertet nach Wert und Fairness aus veröffentlichten Bonusbedingungen der Anbieter.',
  alternates: { canonical: 'https://www.bonuscout.com/de/boni/willkommensbonus' }
}

const welcome = casinos.filter(c => c.bonusType === 'welcome')
const avgWagering = welcome.length ? Math.round(welcome.reduce((sum, c) => sum + c.wagering, 0) / welcome.length) : 0
const lowestWagering = welcome.length ? Math.min(...welcome.map(c => c.wagering)) : 0
const lowestCasino = welcome.find(c => c.wagering === lowestWagering)

export default function DeWillkommensbonusPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
        <span className="mx-2">›</span>
        <Link href="/de/boni" className="hover:text-[#F5A623]">Boni</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Willkommensbonus</span>
      </div>

      <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl p-8 mb-8">
        <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Willkommensbonus
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Bester Willkommensbonus 2026</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">Ein Willkommensbonus verdoppelt Ihre erste Einzahlung — meist 100% bis zu einem festgelegten Limit. Wir bewerten nach echtem Wert nach Umsatz, nicht nach Schlagzeilenzahlen.</p>
        <div className="flex flex-wrap gap-4 mt-5 text-sm">
          <span className="text-green-400">✓ Einzahlung wird verdoppelt</span>
          <span className="text-green-400">✓ Oft mit Freispielen kombiniert</span>
          <span className="text-green-400">✓ Mehrstufige Pakete möglich</span>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-5 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <div className="text-[#F5A623] font-bold mb-1">Durchschnittlicher Umsatz</div>
          <div className="text-white font-black text-2xl">{avgWagering}x</div>
          <div className="text-gray-500 text-xs">über {welcome.length} Casinos</div>
        </div>
        <div>
          <div className="text-[#F5A623] font-bold mb-1">Niedrigster Umsatz</div>
          <div className="text-white font-black text-2xl">{lowestWagering}x</div>
          <div className="text-gray-500 text-xs">{lowestCasino?.name}</div>
        </div>
        <div>
          <div className="text-[#F5A623] font-bold mb-1">Willkommensangebote</div>
          <div className="text-white font-black text-2xl">{welcome.length}</div>
          <div className="text-gray-500 text-xs">Aus veröffentlichten AGB der Anbieter</div>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-8">
        <h2 className="font-black text-white mb-3">Was ist ein Willkommensbonus?</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">Ein Willkommensbonus (auch Begrüßungsbonus oder Einzahlungsbonus) ist ein einmaliges Angebot für neue Spieler. Das Casino verdoppelt Ihre Einzahlung um einen festgelegten Prozentsatz — meist 100% bis zu einem Maximalbetrag, oft kombiniert mit Freispielen.</p>
        <div className="bg-[#0D0F14] rounded-xl p-4 font-mono text-sm">
          <div className="text-green-400 mb-1">Beispiel — Einzahlung €100 · Bonus 100% bis €500</div>
          <div className="text-gray-300">Bonusguthaben: <span className="text-[#F5A623] font-black">€100</span> · Gesamt-Spielguthaben: €200</div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-white mb-6">Willkommensboni im Ranking ({welcome.length})</h2>
      <div className="space-y-4 mb-10">
        {welcome.map((casino, index) => (
          <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-5 transition-all">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 items-center justify-center text-xs font-black text-[#F5A623]">{index + 1}</div>
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
        ))}
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-4">Checkliste für Willkommensboni</h2>
        <ul className="space-y-3 text-sm text-gray-400">
          {[
            'Umsatzbedingung prüfen — unter 30x ist fair, über 40x lohnt sich selten',
            'Mindesteinzahlung beachten, die den Bonus aktiviert',
            'Maximaleinsatz während des Umsetzens prüfen (meist €5)',
            'Welche Spiele zählen zu 100% — Slots fast immer, Tischspiele oft nicht',
            'Bonus-Ablaufdatum notieren — 7 Tage ist knapp, 30 Tage entspannt',
            'Maximalgewinn aus dem Bonus prüfen — manche Casinos deckeln Auszahlungen',
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#F5A623] mt-0.5 flex-shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-5">Häufig gestellte Fragen</h2>
        <div className="space-y-5 text-sm">
          <div>
            <div className="text-white font-bold mb-1">Was bedeutet 100% Willkommensbonus?</div>
            <p className="text-gray-400 leading-relaxed">Das Casino verdoppelt Ihre Einzahlung. Bei einer Einzahlung von €100 erhalten Sie €100 zusätzliches Bonusguthaben — Gesamt-Spielguthaben €200.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Kann ich den Willkommensbonus mehrfach beanspruchen?</div>
            <p className="text-gray-400 leading-relaxed">Nein — der Willkommensbonus gilt pro Person und Haushalt einmalig. Mehrfachregistrierungen führen zu Kontosperrung und Verfall der Gewinne.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Wann muss ich den Bonus aktivieren?</div>
            <p className="text-gray-400 leading-relaxed">Meist direkt bei der ersten Einzahlung. Einige Casinos verlangen einen Bonuscode, andere aktivieren ihn automatisch. Nach der Einzahlung lässt er sich oft nicht mehr nachträglich anfordern.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Was passiert, wenn ich die Umsatzbedingung nicht erfülle?</div>
            <p className="text-gray-400 leading-relaxed">Nach Ablauf der Frist (meist 7–30 Tage) verfallen Bonusguthaben und alle daraus erzielten Gewinne. Ihr Echtgeld bleibt davon unberührt.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Welcher Willkommensbonus ist der beste?</div>
            <p className="text-gray-400 leading-relaxed">Der „beste&quot; Bonus hängt von Ihrem Einzahlungsbetrag und Spielstil ab. Niedrige Umsatzbedingungen (30x oder weniger) sind oft wertvoller als ein größerer Bonus mit 45x Umsatz.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
        <h2 className="font-black text-white mb-4">Verwandte Seiten</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Freispiele', href: '/de/boni/freispiele' },
            { label: 'Kein Einzahlungsbonus', href: '/de/boni/kein-einzahlungsbonus' },
            { label: 'Cashback', href: '/de/boni/cashback' },
            { label: 'Niedrigste Umsatzbedingungen', href: '/de/niedrigste-umsatzbedingungen' },
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
