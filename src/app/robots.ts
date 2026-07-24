import { MetadataRoute } from 'next'

// CRITICAL: never Disallow /_next/. Google renders pages with JavaScript
// during indexing — blocking Next.js static chunks means Googlebot fetches
// the HTML shell but not the CSS/JS/images/fonts needed to build the page.
// Result is a broken render, followed by algorithmic de-ranking. This is
// exactly what happened on bonuscout starting 2026-06-26: impressions
// collapsed 99% within 24 hours of a build that added '/_next/' here.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      }
    ],
    sitemap: 'https://www.bonuscout.com/sitemap.xml',
  }
}
