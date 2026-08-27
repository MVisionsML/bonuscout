import { casinos , casinoUrl } from '@/data/casinos'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const casino = casinos.find(c => c.slug === slug)
  if (!casino) return {}
  // Per-slug DE seoTitleDe/seoDescriptionDe override the generic bonus-targeted
  // template for high-impression pages where a targeted title lifts CTR
  // (see 2026-07 GSC audit). Mirrors the EN seoTitle/seoDescription pattern.
  const title = casino.seoTitleDe
    ?? `${casino.name} Bonus 2026 — Willkommensangebot, Freispiele & Bonusbedingungen`
  const description = casino.seoDescriptionDe
    ?? `Jeder aktive ${casino.name} Bonus an einem Ort: ${casino.bonus} Willkommensangebot bei ${casino.wagering}x Umsatzbedingungen, Freispiele und die vollständigen Bonusbedingungen — aus den veröffentlichten Anbieter-AGB aufgeschlüsselt.`
  // Hybrid-strategy metadata (2026-06-26): the DE side now mirrors the EN
  // C1 repositioning — bonuscout owns BONUS intent (welcome / no-deposit /
  // cashback / free spins) in both languages; bonusreviewers owns REVIEW /
  // TRUST intent ("{brand} Erfahrungen" / "Auszahlungstest" / "KYC") in both.
  // Previously every brand here had a hand-written "Erfahrungen" / "Getestet"
  // title that competed head-on with bonusreviewers.com/de/reviews/{slug} for
  // the same query family. Removed the per-brand customTitles override so
  // every brand takes the single bonus-targeted template below — same shape
  // as the EN /reviews/[slug] template after C1.
  // Target query family: "{brand} bonus", "{brand} willkommensbonus",
  // "{brand} freispiele", "{brand} bonus code", "{brand} bonusangebot".
  // hreflang omission (2026-08-27): talismania + wonaco-casino EN counterparts
  // are now bonus-only /articles/{slug}-bonus URLs (bonus-lane specialization),
  // while these DE bewertungen pages still render general-review content. The
  // two are no longer language variants of the same content, so we omit
  // hreflang 'en' for these slugs — signalling a false language pair to Google
  // would emit a bad hreflang signal. DE bonus-only twins are tracked in the
  // audit action #4 (BC DE-gap remediation) to resolve the mismatch properly.
  const SPECIALIZED_EN_ONLY = new Set(['talismania', 'wonaco-casino'])
  const enHref = SPECIALIZED_EN_ONLY.has(slug)
    ? undefined
    : `https://www.bonuscout.com${casinoUrl(slug)}`
  const languages: Record<string, string> = { 'de': `https://www.bonuscout.com/de/bewertungen/${slug}` }
  if (enHref) languages['en'] = enHref
  return {
    title,
    description,
    alternates: {
      canonical: `https://www.bonuscout.com/de/bewertungen/${slug}`,
      languages,
    }
  }
}

export async function generateStaticParams() {
  return casinos.map(c => ({ slug: c.slug }))
}

export default async function DeCasinoReview({ params }: Props) {
  const { slug } = await params
  const casino = casinos.find(c => c.slug === slug)
  if (!casino) notFound()

  const stars = Math.round(casino.rating)
  const related = casinos.filter(c => c.slug !== slug).slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/de" className="hover:text-[#F5A623]">Startseite</Link>
        <span className="mx-2">›</span>
        <Link href="/de/bewertungen" className="hover:text-[#F5A623]">Bewertungen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300">{casino.name} Bonus 2026</span>
      </div>

      {/* Header */}
      <div className="bg-[#161820] border border-[#252830] rounded-2xl p-6 md:p-8 mb-6">
        <div className="flex items-start gap-6 flex-wrap">
          <div className="w-20 h-20 bg-[#252830] rounded-xl flex items-center justify-center text-4xl border border-[#2E3040] flex-shrink-0">{casino.logo}</div>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="text-2xl md:text-3xl font-black text-white">{casino.name} Bonus 2026</h1>
              <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20 px-2 py-1 rounded-full font-bold">Verifiziert Mai 2026</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              {[1,2,3,4,5].map(s => (
                <span key={s} className={`text-xl ${s <= stars ? 'text-[#F5A623]' : 'text-gray-700'}`}>★</span>
              ))}
              <span className="text-2xl font-black text-white ml-1">{casino.rating}</span>
              <span className="text-gray-500">/{casino.ratingMax}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-sm px-3 py-1 rounded-full font-medium">✓ Aus AGB &amp; Lizenzunterlagen</span>
              {casino.licenses.map(l => (
                <span key={l} className="bg-[#252830] text-gray-400 border border-[#2E3040] text-sm px-3 py-1 rounded-full font-medium">{l}</span>
              ))}
            </div>
            <div className="bg-[#F5A623]/5 border border-[#F5A623]/10 rounded-xl p-4 mb-4">
              <div className="text-xs text-gray-500 mb-1">Aktuelles Angebot</div>
              <div className="text-[#F5A623] font-black text-xl">{casino.bonus}</div>
            </div>
            <a href={casino.affiliateLink} target="_blank" rel="nofollow noopener noreferrer"
              className="inline-block bg-[#F5A623] hover:bg-[#E09520] text-black font-black px-8 py-3 rounded-xl transition-colors">
              Bonus bei {casino.name} holen →
            </a>
            <p className="text-xs text-gray-600 mt-2">18+ | Verantwortungsvoll spielen | AGB gelten</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        {[
          { label: 'Gegründet', value: casino.founded },
          { label: 'Min. Einzahlung', value: `€${casino.minDeposit}` },
          { label: 'Auszahlung', value: casino.withdrawalTime },
          { label: 'Umsatz', value: `${casino.wagering}x` },
          { label: 'Spiele', value: `${casino.games.toLocaleString()}+` },
        ].map(s => (
          <div key={s.label} className="bg-[#161820] border border-[#252830] rounded-xl p-4 text-center">
            <div className="text-xl font-black text-white">{s.value}</div>
            <div className="text-xs text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Overview */}
      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8 mb-6">
        <h2 className="text-xl font-black text-white mb-4">{casino.name} — Überblick</h2>
        <div className="text-gray-400 text-sm leading-relaxed space-y-3">
          <p>{casino.name} ist ein Online-Casino, das seit {casino.founded} in Betrieb ist und von {casino.licenses.join(' und ')} lizenziert wird. Das Casino bietet eine Spielbibliothek mit {casino.games.toLocaleString()}+ Titeln von Anbietern wie {casino.software.join(', ')}.</p>
          <p>Jede {casino.name}-Bewertung wird aus den vom Betreiber veröffentlichten Allgemeinen Geschäftsbedingungen, der Kassiererseite und den Lizenzunterlagen erstellt — dokumentarische Verifizierung, keine Erst-Test-Einzahlungen oder -Auszahlungen.</p>
          <p>Das aktuelle Willkommensangebot beträgt {casino.bonus} mit einer Umsatzbedingung von {casino.wagering}x und einer Mindesteinzahlung von €{casino.minDeposit}.</p>
        </div>
      </div>

      {/* Bonus breakdown */}
      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 md:p-8 mb-6">
        <h2 className="text-xl font-black text-white mb-4">{casino.name} Bonus — Vollständige Analyse</h2>
        <div className="bg-[#F5A623]/5 border border-[#F5A623]/10 rounded-xl p-4 mb-4">
          <div className="text-[#F5A623] font-black text-2xl mb-1">{casino.bonus}</div>
          <div className="text-gray-400 text-sm">Aktuelles Willkommensangebot</div>
        </div>
        <div className="text-gray-400 text-sm leading-relaxed space-y-3">
          <p>Die Umsatzbedingung bei {casino.name} beträgt {casino.wagering}x. Das bedeutet: Bei einem Bonus von €100 müssen Sie €{casino.wagering * 100} setzen, bevor Sie Gewinne aus dem Bonus auszahlen können.</p>
          <p>{casino.wagering <= 30 ? `Mit ${casino.wagering}x gehört dies zu den niedrigsten Umsatzbedingungen in unserem Vergleich — ein echter Vorteil.` : casino.wagering <= 35 ? `Mit ${casino.wagering}x entspricht dies dem Branchenstandard und ist ein faires Angebot.` : `Mit ${casino.wagering}x liegt dies über dem Branchendurchschnitt. Berücksichtigen Sie dies bei Ihrer Entscheidung.`}</p>
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#161820] border border-green-500/20 rounded-xl p-6">
          <h3 className="font-black text-green-400 mb-4">✓ Vorteile</h3>
          <ul className="space-y-3">
            {casino.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">+</span><span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#161820] border border-red-500/20 rounded-xl p-6">
          <h3 className="font-black text-red-400 mb-4">✗ Nachteile</h3>
          <ul className="space-y-3">
            {casino.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">−</span><span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Verdict */}
      <div className="bg-[#161820] border border-[#F5A623]/20 rounded-xl p-6 md:p-8 mb-6">
        <h2 className="font-black text-white mb-3">Unser Fazit — Ist {casino.name} empfehlenswert?</h2>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(s => (
              <span key={s} className={`text-2xl ${s <= stars ? 'text-[#F5A623]' : 'text-gray-700'}`}>★</span>
            ))}
          </div>
          <span className="text-3xl font-black text-white">{casino.rating}</span>
          <span className="text-gray-500">/ {casino.ratingMax}</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{casino.verdict}</p>
      </div>

      {/* Related */}
      <div className="bg-[#161820] border border-[#252830] rounded-xl p-6 mb-6">
        <h2 className="font-black text-white mb-4">Ähnliche Casinos vergleichen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {related.map(rc => (
            <Link key={rc.id} href={`/de/bewertungen/${rc.slug}`}
              className="bg-[#0D0F14] border border-[#252830] hover:border-[#F5A623]/30 rounded-xl p-4 group transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{rc.logo}</span>
                <span className="font-bold text-white group-hover:text-[#F5A623] text-sm">{rc.name}</span>
              </div>
              <div className="text-[#F5A623] text-xs font-bold mb-1">{rc.bonus}</div>
              <div className="text-gray-500 text-xs">Umsatz: {rc.wagering}x</div>
              <div className="text-[#F5A623] text-xs mt-2 font-bold">Bewertung lesen →</div>
            </Link>
          ))}
        </div>
      </div>

      {/* English link */}
      <div className="bg-[#161820] border border-[#252830] rounded-xl p-4 text-center">
        <p className="text-gray-500 text-sm">
          Read this review in English: {' '}
          <Link href={casinoUrl(casino.slug)} className="text-[#F5A623] hover:underline font-bold">
            {casino.name} Review →
          </Link>
        </p>
      </div>

    </div>
  )
}
