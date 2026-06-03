'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { NewsArticle } from '@/lib/news-shared'
import { categoryColor } from '@/lib/news-shared'

interface Props {
  categories: string[]
  featured: NewsArticle
  rest: NewsArticle[]
}

function formatDate(iso: string): string {
  // Accept either '2026-06-03' or '2026-06-03T...' — render as 'Jun 3, 2026'.
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function NewsCategoryFilter({ categories, featured, rest }: Props) {
  const [active, setActive] = useState<string>('All')

  const visible = useMemo(() => {
    if (active === 'All') return { featured, rest }
    const all = [featured, ...rest].filter(a => a.category === active)
    return { featured: all[0], rest: all.slice(1) }
  }, [active, featured, rest])

  const featuredItem = visible.featured

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8 border-b border-[#252830] pb-1">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-sm font-bold px-4 py-2 rounded-t-lg transition-colors ${
              active === cat
                ? 'bg-[#F5A623] text-black'
                : 'text-gray-400 hover:text-white hover:bg-[#161820]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {!featuredItem ? (
        <div className="bg-[#161820] border border-[#252830] rounded-2xl p-12 text-center">
          <p className="text-gray-400">No articles in this category yet.</p>
        </div>
      ) : (
        <>
          <Link
            href={`/news/${featuredItem.slug}`}
            className="block bg-[#161820] border border-[#252830] hover:border-[#F5A623]/40 rounded-2xl overflow-hidden group transition-all mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[16/10] md:aspect-auto bg-[#0D0F14]">
                {featuredItem.coverImage && (
                  <Image
                    src={featuredItem.coverImage}
                    alt={featuredItem.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    priority
                  />
                )}
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${categoryColor(featuredItem.category)}`}>
                    {featuredItem.category}
                  </span>
                  <span className="text-xs text-gray-500">{formatDate(featuredItem.date)}</span>
                  <span className="text-xs text-gray-500 hidden sm:inline">·</span>
                  <span className="text-xs text-gray-500 hidden sm:inline">By {featuredItem.author}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-[#F5A623] transition-colors">
                  {featuredItem.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">{featuredItem.excerpt}</p>
                <span className="text-[#F5A623] font-bold text-sm mt-4">Read full article →</span>
              </div>
            </div>
          </Link>

          {visible.rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visible.rest.map(article => (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="block bg-[#161820] border border-[#252830] hover:border-[#F5A623]/40 rounded-2xl overflow-hidden group transition-all"
                >
                  <div className="relative aspect-[16/9] bg-[#0D0F14]">
                    {article.coverImage && (
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${categoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
                    </div>
                    <h3 className="text-lg font-black text-white mb-2 group-hover:text-[#F5A623] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="text-xs text-gray-500">By {article.author}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}
