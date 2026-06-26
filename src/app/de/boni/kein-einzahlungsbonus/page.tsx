import Link from 'next/link'
import { casinos } from '@/data/casinos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kein Einzahlungsbonus 2026 — Gratis Bonus Ohne Einzahlung',
  description: 'Die besten Casino Boni ohne Einzahlung 2026. Gratis Guthaben oder Freispiele nur für die Registrierung — keine Einzahlung nötig. Alle Angebote geprüft.',
  alternates: { canonical: 'https://www.bonuscout.com/de/boni/kein-einzahlungsbonus' }
}

const noDeposit = casinos.filter(c => c.bonusType === 'no-deposit')
const alternatives = casinos.filter(c => c.bonusType !== 'no-deposit').slice(0, 3)

export default function DeKeinEinzahlungsbonusPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
        <span className="mx-2">›</span>
        <Link href="/de/boni" className="hover:text-[#F5A623]">Boni</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Kein Einzahlungsbonus</span>
      </div>

      <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl p-8 mb-8">
        <div className="inline-block bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Ohne Einzahlung
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Kein Einzahlungsbonus 2026</h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">Mit echtem Geld spielen, ohne eigenes Risiko. Diese Boni werden allein für die Registrierung gutgeschrieben — eine Einzahlung ist nicht erforderlich.</p>
        <div className="flex flex-wrap gap-4 mt-5 text-sm">
          <span className="text-green-400">✓ Keine Einzahlung nötig</span>
          <span className="text-green-400">✓ Echtgeld-Gewinne möglich</span>
          <span className="text-green-400">✓ Casino vor Einzahlung testen</span>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-4 mb-8 flex items-start gap-3">
        <span className="text-[#F5A623] font-bold mt-0.5">!</span>
        <p className="text-sm text-gray-400 leading-relaxed">
          <span className="text-white font-bold">Wichtig:</span> Boni ohne Einzahlung haben fast immer Umsatzbedingungen und Maximalauszahlungen. Lesen Sie die AGB sorgfältig — wir erklären alle Bedingungen in den jeweiligen Bewertungen.
        </p>
      </div>

      {noDeposit.length > 0 ? (
        <>
          <h2 className="text-2xl font-black text-white mb-6">Casinos mit Bonus ohne Einzahlung ({noDeposit.length})</h2>
          <div className="space-y-4 mb-10">
            {noDeposit.map((casino, index) => (
              <CasinoRow key={casino.id} casino={casino} rank={index + 1} />
            ))}
          </div>
        </>
      ) : (
        <div className="bg-[#161820] border border-[#252830] rounded-xl p-8 text-center mb-10">
          <p className="text-gray-400 leading-relaxed">Derzeit keine dedizierten Boni ohne Einzahlung verfügbar. Schauen Sie bald wieder vorbei — wir aktualisieren monatlich.</p>
        </div>
      )}

      <div className="mb-10">
        <h2 className="text-2xl font-black text-white mb-3">Alternativen — Willkommensboni mit Freispielen</h2>
        <p className="text-sm text-gray-500 mb-5">Diese Casinos bieten keinen reinen Bonus ohne Einzahlung, ihr Willkommenspaket enthält jedoch Freispiele, die ähnlich funktionieren.</p>
        <div className="space-y-4">
          {alternatives.map((casino, index) => (
            <CasinoRow key={casino.id} casino={casino} rank={noDeposit.length + index + 1} />
          ))}
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-6">So funktioniert ein Bonus ohne Einzahlung</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Registrieren', desc: 'Kostenloses Konto anlegen. In diesem Schritt ist keine Zahlungsmethode erforderlich.' },
            { step: '2', title: 'Bonus erhalten', desc: 'Guthaben oder Freispiele werden automatisch gutgeschrieben. Manche Angebote erfordern einen Bonuscode.' },
            { step: '3', title: 'Spielen & auszahlen', desc: 'Umsatzbedingung erfüllen und anschließend Gewinne auf Ihre Zahlungsmethode auszahlen.' },
          ].map(s => (
            <div key={s.step} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-[#F5A623] font-black text-sm">{s.step}</span>
              </div>
              <div>
                <div className="text-white font-bold mb-1">{s.title}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-4">No Deposit Boni — was Sie wirklich wissen müssen</h2>
        <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>Ein Bonus ohne Einzahlung ist eine kleine Geldgabe – meist €5 bis €25 in Bargeld oder 10 bis 50 Freispiele – die ein Casino neuen Spielern allein für die Kontoeröffnung gewährt. Anders als beim klassischen Willkommensbonus müssen Sie kein eigenes Geld einsetzen. Der Zweck dieses Marketinginstruments ist eindeutig: Casinos wollen Sie durch den KYC-Prozess führen und einen langfristigen Kunden gewinnen. Genau aus diesem Grund kompensieren die Anbieter das Risiko durch strenge Bedingungen, die viele Spieler unterschätzen.</p>

          <p>Die detaillierte Schritt-für-Schritt-Anleitung umfasst mehr Stationen, als die meisten denken. Zunächst wählen Sie ein lizenziertes Casino aus unserer Liste – Curaçao oder MGA gelten als Mindeststandard. Bei der Registrierung müssen Sie Ihre echten Daten verwenden: falscher Name oder erfundenes Geburtsdatum führen später zur KYC-Sperre und damit zur Konfiszierung sämtlicher Gewinne. Nach der E-Mail- oder SMS-Verifizierung wird der Bonus entweder automatisch gutgeschrieben oder Sie müssen einen Bonuscode im Kassenbereich eintragen – beides ist meist innerhalb von 24 Stunden zu erledigen, sonst verfällt das Angebot.</p>

          <p>Die Umsatzbedingungen liegen bei No-Deposit-Boni typischerweise zwischen 35x und 60x – höher als bei Willkommensboni, weil das Risiko für das Casino größer ist. Bei €10 Bonus mit 40x Wagering setzen Sie €400 um. Beachten Sie auch die Maximalauszahlung: Fast immer ist Ihr Auszahlungsbetrag auf €50 bis €100 gedeckelt, unabhängig davon, ob Sie €500 oder €5.000 gewonnen haben. Wer das vorab nicht weiß, erlebt eine böse Überraschung. Hinzu kommt fast immer ein Maximaleinsatz von €1 bis €5 pro Spin sowie eine Spielausschlussliste – Live-Casino und progressive Jackpots zählen meistens nicht.</p>

          <p>Die größten Fehler beim Einlösen von No-Deposit-Angeboten: Erstens, Überschreiten des Maximaleinsatzes – schon ein einzelner €6-Spin kann den gesamten Bonus annullieren. Zweitens, Spielen auf ausgeschlossenen Titeln, ohne die AGB zu prüfen. Drittens, Mehrfachregistrierung im selben Haushalt – Casinos erkennen IP-Adressen und Geräte-Fingerprints und sperren Doppelkonten ohne Vorwarnung. Viertens, das Ignorieren des Zeitfensters: meist haben Sie 7 bis 30 Tage zum Umsetzen, andernfalls erlischt der Bonus samt Gewinnen. Fünftens, KYC-Dokumente erst nach Auszahlungsantrag einreichen – wer Ausweis und Adressnachweis bereits beim Registrieren hochlädt, spart Tage Wartezeit.</p>

          <p>Tipps zur Maximierung des realen Werts: Wählen Sie Boni mit niedrigem Wagering (unter 40x) und mit hoher Maximalauszahlung (möglichst €100 oder mehr). Spielen Sie ausschließlich Slots mit RTP von 96% oder höher – jeder Prozentpunkt schlägt rechnerisch auf Ihre Gewinnchance durch. Setzen Sie konsequent am unteren Ende des erlaubten Einsatzes, um Varianz zu reduzieren. Lesen Sie die „Bonus-Missbrauchsklausel&quot; in den AGB – sie erlaubt es Casinos, „verdächtiges&quot; Spielverhalten (etwa konsequentes Niedrigvarianz-Spiel auf Roulette) als Bonus-Missbrauch zu klassifizieren. Wer diese Punkte beachtet, holt aus einem €10-Bonus realistisch zwischen €30 und €80 Echtgeld – nicht garantiert, aber statistisch erwartbar.</p>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-white font-black text-xl mb-5">Häufig gestellte Fragen</h2>
        <div className="space-y-5 text-sm">
          <div>
            <div className="text-white font-bold mb-1">Kann ich Gewinne aus einem Bonus ohne Einzahlung wirklich auszahlen?</div>
            <p className="text-gray-400 leading-relaxed">Ja, aber erst nach Erfüllung der Umsatzbedingungen. Außerdem gibt es meist eine Maximalauszahlung (oft €50–€100), unabhängig davon, wie viel Sie gewonnen haben.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Muss ich meine Identität verifizieren?</div>
            <p className="text-gray-400 leading-relaxed">Vor der ersten Auszahlung verlangen alle seriösen Casinos eine KYC-Verifizierung (Ausweis und Adressnachweis). Das schützt vor Mehrfachregistrierungen.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Wie hoch sind die Umsatzbedingungen bei Boni ohne Einzahlung?</div>
            <p className="text-gray-400 leading-relaxed">Meist zwischen 30x und 50x — höher als bei Willkommensboni, weil das Risiko für das Casino größer ist. Unter 35x gilt als fair.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Brauche ich einen Bonuscode?</div>
            <p className="text-gray-400 leading-relaxed">Manche Casinos verlangen einen Code bei der Registrierung. Wenn nötig, finden Sie den Code in unserer jeweiligen Casino-Bewertung.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6">
        <h2 className="font-black text-white mb-4">Verwandte Seiten</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Willkommensbonus', href: '/de/boni/willkommensbonus' },
            { label: 'Freispiele', href: '/de/boni/freispiele' },
            { label: 'Niedrigste Umsatzbedingungen', href: '/de/niedrigste-umsatzbedingungen' },
            { label: 'Alle Boni', href: '/de/boni' },
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
