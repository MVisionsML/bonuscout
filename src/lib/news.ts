import fs from 'node:fs'
import path from 'node:path'
import type { NewsArticle, NewsFrontmatter } from './news-shared'

export type { NewsArticle, NewsFrontmatter } from './news-shared'
export { categoryColor } from './news-shared'

const NEWS_DIR = path.join(process.cwd(), 'content', 'news')

// Minimal YAML frontmatter parser — handles the flat key:"value" structure agent 17 emits.
function parseFrontmatter(raw: string): { data: Partial<NewsFrontmatter>; body: string } {
  const m = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  if (!m) return { data: {}, body: raw }
  const block = m[1]
  const body = m[2]
  const data: Record<string, string> = {}
  for (const line of block.split('\n')) {
    const kv = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s*(.+?)\s*$/)
    if (!kv) continue
    const key = kv[1]
    let val = kv[2].trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    data[key] = val
  }
  return { data: data as Partial<NewsFrontmatter>, body }
}

export function listNewsArticles(): NewsArticle[] {
  if (!fs.existsSync(NEWS_DIR)) return []
  const files = fs.readdirSync(NEWS_DIR).filter(f => f.endsWith('.mdx'))
  const articles: NewsArticle[] = []
  for (const filename of files) {
    const filePath = path.join(NEWS_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf8')
    const { data, body } = parseFrontmatter(raw)
    if (!data.title || !data.date) continue
    articles.push({
      slug: filename.replace(/\.mdx$/, ''),
      filePath,
      source: body,
      title: data.title,
      date: data.date,
      category: data.category || 'Industry',
      author: data.author || 'BonusScout Team',
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || '',
      coverImagePrompt: data.coverImagePrompt,
    })
  }
  articles.sort((a, b) => b.date.localeCompare(a.date))
  return articles
}

export function getNewsArticle(slug: string): NewsArticle | null {
  return listNewsArticles().find(a => a.slug === slug) || null
}
