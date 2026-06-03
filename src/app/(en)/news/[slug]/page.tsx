import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import { listNewsArticles, getNewsArticle, categoryColor } from '@/lib/news'
import { mdxComponents } from '../../../../../mdx-components'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return listNewsArticles().map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getNewsArticle(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `https://www.bonuscout.com/news/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.coverImage ? [article.coverImage] : [],
      type: 'article',
      publishedTime: article.date,
    },
  }
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getNewsArticle(slug)
  if (!article) notFound()

  // Find 3 related articles — same category, exclude current.
  const allArticles = listNewsArticles()
  const related = allArticles
    .filter(a => a.slug !== slug && a.category === article.category)
    .slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#F5A623]">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/news" className="hover:text-[#F5A623]">News</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-300 line-clamp-1">{article.title}</span>
      </div>

      {article.coverImage && (
        <div className="relative aspect-[16/9] bg-[#0D0F14] rounded-2xl overflow-hidden mb-8">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="(min-width: 768px) 896px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="flex items-center gap-3 mb-4 text-sm">
        <span className={`text-xs font-bold px-2 py-1 rounded-full border ${categoryColor(article.category)}`}>
          {article.category}
        </span>
        <span className="text-gray-500">{formatDate(article.date)}</span>
        <span className="text-gray-500">·</span>
        <span className="text-gray-500">By {article.author}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">{article.title}</h1>

      <article>
        <MDXRemote
          source={article.source}
          components={mdxComponents}
          options={{ parseFrontmatter: false }}
        />
      </article>

      {related.length > 0 && (
        <div className="mt-16 pt-10 border-t border-[#252830]">
          <h2 className="text-2xl font-black text-white mb-6">Related articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map(r => (
              <Link
                key={r.slug}
                href={`/news/${r.slug}`}
                className="block bg-[#161820] border border-[#252830] hover:border-[#F5A623]/40 rounded-xl overflow-hidden group transition-all"
              >
                <div className="relative aspect-[16/10] bg-[#0D0F14]">
                  {r.coverImage && (
                    <Image src={r.coverImage} alt={r.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${categoryColor(r.category)}`}>
                      {r.category}
                    </span>
                    <span className="text-xs text-gray-500">{formatDate(r.date)}</span>
                  </div>
                  <h3 className="font-bold text-white text-sm leading-snug group-hover:text-[#F5A623] transition-colors line-clamp-2">
                    {r.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
