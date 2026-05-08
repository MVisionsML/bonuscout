import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casino Ratgeber 2026 — Experten Guides | BonusScout',
  description: 'Experten Casino Ratgeber. Umsatzbedingungen erklärt, Kein Einzahlungsbonus holen, Freispiele Guide und Krypto Casino erklärt. Aktualisiert Mai 2026.',
  alternates: { canonical: 'https://www.bonuscout.com/de/ratgeber' }
}

const guides = [
  { title: 'Umsatzbedingungen Erklärt', slug: 'umsatzbedingungen-erklaert', desc: 'Was Umsatzbedingungen bedeuten, wie man sie berechnet und welche Casinos die niedrigsten haben.', readTime: '5 Min. Lesezeit' },
  { title: 'Kein Einzahlungsbonus Holen', slug: 'kein-einzahlungsbonus-guide', desc: 'Schritt-für-Schritt Anleitung zum Holen von Gratis-Bonus ohne Einzahlung.', readTime: '4 Min. Lesezeit' },
  { title: 'Freispiele Guide', slug: 'freispiele-guide', desc: 'Alles über Freispiele — Wert pro Spin, Umsatz auf Gewinne und wie man die besten Angebote findet.', readTime: '5 Min. Lesezeit' },
  { title: 'Krypto Casino Guide', slug: 'krypto-casino-guide', desc: 'Bitcoin, Ethereum und Krypto-Glücksspiel erklärt. Vorteile, Einzahlungen und die besten Krypto-Boni.', readTime: '10 Min. Lesezeit' },
]

export default function DeRatgeberPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">Ratgeber</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Casino Ratgeber</h1>
      <p className="text-gray-400 mb-10">Alles, was Sie über Casino-Boni wissen müssen — von unserem Testteam verfasst.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {guides.map(g => (
          <Link key={g.slug} href={`/de/ratgeber/${g.slug}`}
            className="bg-[#161820] border border-[#252830] hover:border-[#F5A623]/40 rounded-xl p-6 group transition-all">
            <div className="text-xs text-[#F5A623] font-bold mb-2">{g.readTime}</div>
            <h2 className="font-black text-white group-hover:text-[#F5A623] transition-colors mb-2">{g.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed">{g.desc}</p>
            <div className="mt-4 text-[#F5A623] text-sm font-bold">Ratgeber lesen →</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
