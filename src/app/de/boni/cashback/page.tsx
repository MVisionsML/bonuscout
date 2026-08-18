import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beste Casino Cashback Bonus 2026 — Verluste Zurückbekommen',
  description: 'Die besten Casino Cashback Boni 2026. Holen Sie sich 10–25% Ihrer Nettoverluste zurück. Niedrige Umsatzbedingungen — alle Angebote aus veröffentlichten Anbieterbedingungen verglichen.',
  alternates: { canonical: 'https://www.bonuscout.com/de/boni/cashback' }
}

const cashbackCasinos = casinos.filter(c => c.bonusType === 'cashback')
const others = casinos.filter(c => c.bonusType !== 'cashback').slice(0, 3)

export default function DeCashbackPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
        <span className="mx-2">›</span>
        <Link href="/de/boni" className="hover:text-[#F5A623]">Boni</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Cashback</span>
      </div>

      <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl p-8 mb-8">
        <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Cashback
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Casino Cashback Bonus 2026</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">Cashback erstattet einen Teil Ihrer Nettoverluste zurück. Im Gegensatz zu Willkommensboni hat Cashback meist nur 1x Umsatz — der fairste Bonustyp im Online-Glücksspiel.</p>
        <div className="flex flex-wrap gap-4 mt-5 text-sm">
          <span className="text-green-400">✓ Meist 1x Umsatz oder weniger</span>
          <span className="text-green-400">✓ Basiert auf echten Verlusten</span>
          <span className="text-green-400">✓ Keine Maximaleinsatz-Beschränkung</span>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-8">
        <h2 className="font-black text-white mb-3">Was ist ein Cashback Bonus?</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">Ein Cashback Bonus ist eine Erstattung eines Prozentsatzes Ihrer Verluste über einen bestimmten Zeitraum — meist wöchentlich oder monatlich. Verlieren Sie €400 in einer Woche bei 25% Cashback, erhalten Sie €100 zurück.</p>
        <div className="bg-[#0D0F14] rounded-xl p-4 font-mono text-sm">
          <div className="text-green-400 mb-1">Beispiel — Nettoverlust: €400 · Cashback: 25%</div>
          <div className="text-gray-300">Sie erhalten zurück: €400 × 25% = <span className="text-[#F5A623] font-black">€100</span></div>
        </div>
      </div>

      {cashbackCasinos.length > 0 && (
        <>
          <h2 className="text-2xl font-black text-white mb-6">Casinos mit Cashback Bonus ({cashbackCasinos.length})</h2>
          <div className="space-y-4 mb-10">
            {cashbackCasinos.map((casino, index) => (
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
        </>
      )}

      <h2 className="text-2xl font-black text-white mb-3">Weitere empfehlenswerte Boni</h2>
      <p className="text-sm text-gray-500 mb-5">Wenn kein Cashback verfügbar ist, bieten diese Alternativen die fairsten Umsatzbedingungen laut den veröffentlichten Bonusbedingungen der Anbieter.</p>
      <div className="space-y-4 mb-10">
        {others.map((casino, index) => (
          <div key={casino.id} className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-5 transition-all">
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex w-8 h-8 rounded-full bg-[#252830] items-center justify-center text-xs font-black text-gray-400">{cashbackCasinos.length + index + 1}</div>
              <div className="w-12 h-12 bg-[#252830] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{casino.logo}</div>
              <div className="flex-1 min-w-0">
                <div className="font-black text-white mb-0.5">{casino.name}</div>
                <div className="text-[#F5A623] font-bold text-sm">{casino.bonus}</div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Umsatz: <span className={casino.wagering <= 30 ? 'text-green-400 font-bold' : casino.wagering <= 35 ? 'text-yellow-400 font-bold' : 'text-red-400 font-bold'}>{casino.wagering}x</span>
                  {' · '}Min: €{casino.minDeposit}
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
        <h2 className="text-white font-black text-xl mb-4">Cashback vs. Willkommensbonus — was ist besser?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <div className="text-green-400 font-bold mb-3">Vorteile von Cashback</div>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2"><span className="text-green-400">+</span> 1x Umsatz (oder gar keiner)</li>
              <li className="flex items-start gap-2"><span className="text-green-400">+</span> Keine Maximaleinsatz-Beschränkung</li>
              <li className="flex items-start gap-2"><span className="text-green-400">+</span> Gilt für alle Spiele gleichermaßen</li>
              <li className="flex items-start gap-2"><span className="text-green-400">+</span> Kein Zeitdruck beim Umsetzen</li>
            </ul>
          </div>
          <div>
            <div className="text-red-400 font-bold mb-3">Nachteile von Cashback</div>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2"><span className="text-red-400">−</span> Gilt nur bei Verlusten</li>
              <li className="flex items-start gap-2"><span className="text-red-400">−</span> Meist auf geringere Beträge gedeckelt</li>
              <li className="flex items-start gap-2"><span className="text-red-400">−</span> Weniger Schlagzeilenwert als Match-Boni</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-4">Warum Cashback der ehrlichste Bonus ist</h2>
        <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>Cashback-Boni unterscheiden sich grundlegend von allen anderen Bonusarten im Online-Casino – und das aus einem einfachen Grund: Sie werden im Nachhinein gezahlt. Während Sie bei einem klassischen Willkommensbonus erst Geld erhalten und anschließend hohe Umsatzbedingungen erfüllen müssen, funktioniert Cashback umgekehrt. Sie spielen mit Ihrem eigenen Guthaben, und falls Sie verlieren, bekommen Sie einen Prozentsatz zurück. Diese Umkehrung der Logik macht Cashback zum statistisch ehrlichsten Bonus auf dem deutschen Markt.</p>

          <p>Die Mathematik dahinter ist entscheidend. Nehmen wir an, Sie zahlen €500 ein und spielen Spielautomaten mit einer Auszahlungsquote (RTP) von 96%. Statistisch werden Sie über lange Sicht etwa 4% des umgesetzten Volumens verlieren – nicht der Einzahlung, sondern des gesamten Spielvolumens. Bei einem 25%-Cashback auf Nettoverluste bekommen Sie ein Viertel dieses Verlusts zurück, was Ihren effektiven Hausvorteil auf rund 3% reduziert. Bei einem 100%-Match-Bonus mit 40-facher Umsatzbedingung müssten Sie hingegen das Doppelte umsetzen – Sie spielen mehr, verlieren statistisch mehr, und die Mathematik kippt zu Ungunsten des Spielers.</p>

          <p>Ein konkretes Beispiel aus der Praxis: Sie zahlen €200 ein. Über eine Woche setzen Sie diese €200 mehrmals um und stehen am Sonntag bei einem Nettoverlust von €120. Bei 20% wöchentlichem Cashback erhalten Sie €24 zurück – ohne Umsatzbedingung oder mit nur 1x. Das Geld ist sofort auszahlbar. Vergleichen Sie das mit einem 100%-Bonus, bei dem Sie für €200 Bonusguthaben erst €8.000 umsetzen müssten, bevor irgendetwas auszahlbar wäre. In dieser Zeit haben Sie statistisch bereits mehr verloren, als der Bonus jemals wert war.</p>

          <p>Die größten Vorteile von Cashback im Überblick: keine Maximaleinsatz-Beschränkung beim Spielen (bei Welcome-Boni häufig auf €5 pro Spin gedeckelt), keine Spielausschlüsse (Live-Casino und Tischspiele zählen meist voll mit), und Sie behalten die volle Kontrolle über Ihre Bankroll. Sie können jederzeit aufhören, ohne dass ein nicht freigespielter Bonus verfällt. Auch Boni-Jagd-Strategien wie Bonus-Hunting funktionieren mit Cashback nicht – aber das ist genau der Punkt: Es ist kein Lockmittel, sondern ein echter Loyalitätsmechanismus.</p>

          <p>Tipps zur Maximierung Ihres Cashback-Werts: Erstens, wählen Sie Casinos mit wöchentlicher statt monatlicher Auszahlung – die kürzere Periode reduziert die Varianz und führt zu konstanteren Auszahlungen. Zweitens, prüfen Sie, ob Cashback auf alle Spiele gilt oder nur auf Slots. Drittens, achten Sie auf die Mindestverlust-Schwelle: einige Casinos zahlen erst ab €50 Nettoverlust aus. Viertens, kombinieren Sie Cashback mit Spielen hoher Auszahlungsquote – Slots mit 96–97% RTP funktionieren mathematisch besser als 92%-Titel. Und fünftens, lesen Sie immer die AGB zur „Negativ-Saldo-Klausel&quot;: Wenn Sie in der Vorwoche im Plus standen, wird das oft mit Verlusten der Folgewoche verrechnet, was den effektiven Cashback-Wert reduziert.</p>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-5">Häufig gestellte Fragen</h2>
        <div className="space-y-5 text-sm">
          <div>
            <div className="text-white font-bold mb-1">Wird Cashback auf Brutto- oder Nettoverluste berechnet?</div>
            <p className="text-gray-400 leading-relaxed">Fast immer auf Nettoverluste — also Einzahlungen minus Auszahlungen über den Zeitraum. Lesen Sie die AGB, einige Casinos rechnen anders.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Wie oft wird Cashback ausgezahlt?</div>
            <p className="text-gray-400 leading-relaxed">Meist wöchentlich, manchmal monatlich. Einige Casinos zahlen es automatisch auf Ihren Account aus, andere verlangen eine manuelle Anforderung.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Hat Cashback Umsatzbedingungen?</div>
            <p className="text-gray-400 leading-relaxed">Oft nur 1x — manchmal gar keine. Das macht Cashback zum fairsten Bonus, weil Gewinne fast sofort auszahlbar sind.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Kann ich Cashback mit anderen Boni kombinieren?</div>
            <p className="text-gray-400 leading-relaxed">In der Regel nicht — Cashback wird meist nur auf Echtgeld-Verluste angewendet, nicht auf Bonusguthaben. Prüfen Sie die AGB im Einzelfall.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
        <h2 className="font-black text-white mb-4">Verwandte Seiten</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Niedrigste Umsatzbedingungen', href: '/de/niedrigste-umsatzbedingungen' },
            { label: 'Kein Wager Casino', href: '/de/kein-wager-casino' },
            { label: 'Alle Boni', href: '/de/boni' },
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
