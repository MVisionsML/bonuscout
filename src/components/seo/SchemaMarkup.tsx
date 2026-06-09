interface ReviewSchemaProps {
  casino: {
    name: string
    slug: string
    rating: number
    ratingMax: number
    bonus: string
    founded: number
    licenses: string[]
  }
}

export function ReviewSchema({ casino }: ReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: `${casino.name} Casino Review`,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: casino.rating,
      bestRating: casino.ratingMax,
      worstRating: 0
    },
    author: {
      '@type': 'Organization',
      name: 'BonusScout',
      url: 'https://www.bonuscout.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'BonusScout',
      url: 'https://www.bonuscout.com'
    },
    itemReviewed: {
      '@type': 'Casino',
      name: casino.name,
      url: `https://www.bonuscout.com/reviews/${casino.slug}`,
      description: `${casino.name} online casino — ${casino.bonus}`,
      foundingDate: casino.founded.toString(),
    },
    reviewBody: `${casino.name} is reviewed by BonusScout. Rating: ${casino.rating}/${casino.ratingMax}. License: ${casino.licenses.join(', ')}.`
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
    name: 'BonusScout',
    url: 'https://www.bonuscout.com',
    description: 'Independent casino bonus reviews. We test every bonus before we recommend it.',
    publisher: {
      '@type': 'Organization',
      name: 'BonusScout',
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
    author: { '@type': 'Organization', name: 'BonusScout', url: 'https://www.bonuscout.com' },
    publisher: {
      '@type': 'Organization',
      name: 'BonusScout',
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
  rating?: number
  ratingMax?: number
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
  if (game.rating !== undefined) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: game.rating,
      bestRating: game.ratingMax || 10,
      worstRating: 0,
      ratingCount: 1
    }
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
