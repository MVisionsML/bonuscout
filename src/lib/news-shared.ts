// Pure helpers + types used by both server and client code in the news system.
// MUST NOT import 'node:fs' or any other Node-only module — this file is bundled to the client.

export interface NewsFrontmatter {
  title: string
  date: string
  category: 'Crypto' | 'Regulation' | 'Bonuses' | 'Industry' | string
  author?: string
  excerpt: string
  coverImage: string
  coverImagePrompt?: string
}

export interface NewsArticle extends NewsFrontmatter {
  slug: string
  filePath: string
  source: string
}

export function categoryColor(cat: string): string {
  switch (cat) {
    case 'Crypto':     return 'bg-orange-500/10 text-orange-400 border-orange-500/20'
    case 'Regulation': return 'bg-red-500/10 text-red-400 border-red-500/20'
    case 'Bonuses':    return 'bg-green-500/10 text-green-400 border-green-500/20'
    case 'Industry':   return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    default:           return 'bg-gray-500/10 text-gray-400 border-gray-500/20'
  }
}
