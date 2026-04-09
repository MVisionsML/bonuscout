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
