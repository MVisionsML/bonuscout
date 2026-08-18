// ── Substantiable schema policy (2026-07-25 Phase 0.1) ────────────────────
// This module emits ONLY schema types that can be substantiated from public
// data. No self-authored Review, no fabricated AggregateRating, no invalid
// @type:'Casino'. Every optional field is emitted only when the source data
// contains a real, verified value.

interface CasinoOrganizationSchemaProps {
  casino: {
    name: string
    founded: number
    homepage?: string
    legalName?: string
    licenseAuthority?: string
    licenseNumber?: string
  }
}

export function CasinoOrganizationSchema({ casino }: CasinoOrganizationSchemaProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: casino.name,
    foundingDate: casino.founded.toString(),
  }
  if (casino.homepage) schema.url = casino.homepage
  if (casino.legalName) schema.legalName = casino.legalName
  if (casino.licenseAuthority) {
    const identifier: Record<string, string> = {
      '@type': 'PropertyValue',
      propertyID: `${casino.licenseAuthority} Gaming Licence`,
    }
    if (casino.licenseNumber) identifier.value = casino.licenseNumber
    schema.identifier = identifier
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BonusCout',
    url: 'https://www.bonuscout.com',
    description: 'Independent casino bonus reviews. We test every bonus before we recommend it.',
    publisher: {
      '@type': 'Organization',
      name: 'BonusCout',
      url: 'https://www.bonuscout.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.bonuscout.com/logo.png'
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.bonuscout.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  section?: string
}

export function ArticleSchema({ article }: { article: ArticleSchemaProps }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    articleSection: article.section || 'News',
    author: { '@type': 'Organization', name: 'BonusCout', url: 'https://www.bonuscout.com' },
    publisher: {
      '@type': 'Organization',
      name: 'BonusCout',
      logo: { '@type': 'ImageObject', url: 'https://www.bonuscout.com/logo.png' }
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': article.url }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface GameSchemaProps {
  name: string
  url: string
  provider: string
  description: string
}

export function GameSchema({ game }: { game: GameSchemaProps }) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Game',
    name: game.name,
    url: game.url,
    description: game.description,
    publisher: { '@type': 'Organization', name: game.provider }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ItemListSchema({ items, name }: { items: { name: string; url: string }[]; name: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
