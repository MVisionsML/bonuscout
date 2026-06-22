import type { NextConfig } from "next"
import createMDX from "@next/mdx"
import remarkFrontmatter from "remark-frontmatter"

const nextConfig: NextConfig = {
  // Treat .mdx files as page files alongside existing .tsx pages.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      // Canonical domain: any request to bare bonuscout.com (http or https) → https://www.bonuscout.com.
      // Cloudflare in front of Vercel typically handles this at the edge; this is a defence-in-depth
      // fallback at the application layer in case any request makes it through.
      {
        source: "/:path*",
        has: [{ type: "host", value: "bonuscout.com" }],
        destination: "https://www.bonuscout.com/:path*",
        permanent: true,
      },
      { source: "/home", destination: "/", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      // /methodology → /how-we-rate. The two pages diverged in scope (methodology =
      // process detail, how-we-rate = scoring weights) and we want the scoring page
      // as the canonical entry; old inbound links and search results land there.
      { source: "/methodology", destination: "/how-we-rate", permanent: true },
      // Explicit trailing-slash normalisation for /news/ → /news.
      // Next.js does this implicitly with trailingSlash:false, but Google flagged
      // /news/ as a "Redirect error" — making the rule explicit (and putting it
      // ahead of the built-in normalisation) gives the crawler a clean single hop.
      { source: "/news/", destination: "/news", permanent: true },
      // Phantom /games URL (likely from an old WordPress site or external link) → real /free-games page.
      { source: "/games/:path*", destination: "/free-games", permanent: true },
      // Specific known-broken WordPress endpoint before the catch-all (first match wins).
      { source: "/wp-json/elementskit/v1/", destination: "/", permanent: true },
      // Catch-all for any other lingering /wp-json/* requests from the old WordPress site.
      { source: "/wp-json/:path*", destination: "/", permanent: true },

      // ── Hybrid-strategy article cleanup, phase 1 (2026-06-22) ────────────
      // 9 review-style /articles/* deleted in this commit because they had
      // <50 GSC impressions in the last 28 days AND 0 clicks — no real-money
      // risk to consolidate. Each 301s to the matching /reviews/<brand>.
      // bitstarz has no /reviews/ counterpart (not in catalog) → routed to the
      // best-crypto-casino-bonus list, which is the closest topical match.
      //
      // 7 sibling URLs (crocoslots-casino-review, jackpoty-casino-review,
      // luckymax-casino-review, spinfever-casino-review, talismania-casino-review,
      // vegashero-casino-review, wonaco-casino-review) were HELD from this batch
      // because they had >=50 GSC impressions. They remain live; their cleanup
      // is deferred pending external backlink verification (DataForSEO 402'd).
      // Documented in seo-agent/output/redirect-map.json.
      { source: "/articles/billionaire-spin-casino-review",                                            destination: "/reviews/billionaire-spin",          permanent: true },
      { source: "/articles/binobet-casino-review",                                                     destination: "/reviews/binobet-casino",            permanent: true },
      { source: "/articles/bitstarz-casino-review-2026-bonuses-games-crypto-payments-honest-verdict",  destination: "/articles/best-crypto-casino-bonus", permanent: true },
      { source: "/articles/blockspins-casino-review",                                                  destination: "/reviews/blockspins-casino",         permanent: true },
      { source: "/articles/blockspins-crypto-casino-review",                                           destination: "/reviews/blockspins-casino",         permanent: true },
      { source: "/articles/rooster-bet-casino-review",                                                 destination: "/reviews/rooster-bet",               permanent: true },
      { source: "/articles/stake-casino-review",                                                       destination: "/reviews/stake-casino",              permanent: true },
      { source: "/articles/vegashero-live-casino-review",                                              destination: "/reviews/vegashero-casino",          permanent: true },
      { source: "/articles/winningz-casino-review",                                                    destination: "/reviews/winningz-casino",           permanent: true },
    ]
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // YAML frontmatter at the top of MDX files would otherwise be rendered as page text.
    // remarkFrontmatter recognises it as metadata and skips it during rendering.
    // (Our SEO-agent pipeline writes title/slug/canonical/schema in YAML at the top of each .mdx.)
    remarkPlugins: [["remark-frontmatter", "yaml"]],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
