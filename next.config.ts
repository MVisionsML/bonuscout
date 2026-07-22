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

      // ── Hybrid-strategy article cleanup, phase 2 (2026-06-30) ────────────
      // The 7 held /articles/<brand>-casino-review URLs (had >=50 impressions
      // when phase 1 ran on 2026-06-22) are now mapped per the 90-day GSC
      // inventory + position-differential analysis:
      //
      //  Forward (6 of 7): keep /reviews/{slug} as canonical, redirect
      //  /articles/{slug}-casino-review → /reviews/{slug}. Standard direction.
      //
      //  Reverse (2 of 7): /reviews/talismania and /reviews/wonaco-casino
      //  redirect to their /articles/ counterparts — those article URLs hold
      //  materially better position (talismania 14.1 vs 32.9; wonaco 16.8 vs
      //  28.3). Reverse direction preserves the accumulated authority on the
      //  article URL rather than throwing it away.
      //
      // All sources land directly at their destination — no chains, no loops.
      // Internal-link audit covered separately to ensure no <Link> still
      // points at a redirected source.
      { source: "/articles/vegashero-casino-review",   destination: "/reviews/vegashero-casino",          permanent: true },
      { source: "/articles/spinfever-casino-review",   destination: "/reviews/spin-fever-casino",         permanent: true },
      { source: "/articles/jackpoty-casino-review",    destination: "/reviews/jackpoty",                  permanent: true },
      { source: "/articles/luckymax-casino-review",    destination: "/reviews/luckymax-casino",           permanent: true },
      { source: "/articles/crocoslots-casino-review",  destination: "/reviews/crocoslots",                permanent: true },
      // Reverse pair: /articles/ rank > /reviews/ rank → /articles/ becomes canonical.
      { source: "/reviews/talismania",                 destination: "/articles/talismania-casino-review", permanent: true },
      { source: "/reviews/wonaco-casino",              destination: "/articles/wonaco-casino-review",     permanent: true },

      // ── Cannibalization cleanup, phase 3 (2026-07-22) ────────────────────
      // Cross-domain 301s to bonusreviewers.com for slugs where BR ranks
      // materially better than the bonuscout equivalent — consolidates
      // review authority on the site that owns review intent.
      //
      //   luckymax-casino: BR pos 10.3 (page 1) vs BC pos 29.6 (page 3)
      //   luckymax-casino DE: BR pos 20.8 with 168 impr vs BC pos 13.9 with 8 impr (BR carries 21x the volume)
      //   playio: BR pos 14.4 vs BC pos 20.0
      //
      // These are the only slugs where BR is clearly stronger. For all
      // other cannibalized brand queries, bonuscout ranks better and we
      // hold the URL (metadata already bonus-angled per phase-1 audit).
      { source: "/reviews/luckymax-casino",            destination: "https://www.bonusreviewers.com/reviews/luckymax-casino",       permanent: true },
      { source: "/reviews/playio",                     destination: "https://www.bonusreviewers.com/reviews/playio",                permanent: true },
      { source: "/de/bewertungen/luckymax-casino",     destination: "https://www.bonusreviewers.com/de/reviews/luckymax-casino",    permanent: true },

      // /luckymax-vs-jackpoty page deleted (2026-07-22) because it hard-referenced
      // the luckymax slug we just removed from the casinos array. Redirect to
      // the surviving brand's page so any residual SERP or backlink traffic
      // lands on relevant on-domain content.
      { source: "/luckymax-vs-jackpoty",               destination: "/reviews/jackpoty",                                            permanent: true },
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
