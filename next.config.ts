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
      // The 5 forward-mapped /articles/<brand>-casino-review URLs (had >=50
      // impressions when phase 1 ran on 2026-06-22) redirect to /reviews/{slug}.
      // All sources land directly at their destination — no chains, no loops.
      { source: "/articles/vegashero-casino-review",   destination: "/reviews/vegashero-casino",          permanent: true },
      { source: "/articles/spinfever-casino-review",   destination: "/reviews/spin-fever-casino",         permanent: true },
      { source: "/articles/jackpoty-casino-review",    destination: "/reviews/jackpoty",                  permanent: true },
      { source: "/articles/luckymax-casino-review",    destination: "/reviews/luckymax-casino",           permanent: true },
      { source: "/articles/crocoslots-casino-review",  destination: "/reviews/crocoslots",                permanent: true },

      // ── Bonus-lane specialization (2026-08-27) ───────────────────────────
      // talismania + wonaco-casino specialised from general-review
      // /articles/{slug}-casino-review URLs to bonus-only /articles/{slug}-bonus
      // URLs. Aligns with BC's declared bonuses-only scope and resolves the
      // review-lane cannibalization with BR (BR keeps /reviews/talismania and
      // /reviews/wonaco-casino as the general-review lane). All slugs stay
      // on-domain — no cross-domain 301, honouring the locked "three separate
      // sites, no cross-domain 301s" policy. Content rewritten to hedged
      // bonus-only structural framing (no fabricated specifics — Talismania
      // and Wonaco are NOT in the 4-casino verified pilot). See
      // src/app/(en)/articles/{talismania,wonaco-casino}-bonus/page.mdx.
      //
      // Both /reviews/{slug} rules previously reverse-canonicalised to
      // /articles/{slug}-casino-review (phase-2, 2026-06-30). Now point
      // directly at the new bonus URLs to preserve the single-hop chain.
      { source: "/articles/talismania-casino-review",  destination: "/articles/talismania-bonus",         permanent: true },
      { source: "/articles/wonaco-casino-review",      destination: "/articles/wonaco-casino-bonus",      permanent: true },
      { source: "/reviews/talismania",                 destination: "/articles/talismania-bonus",         permanent: true },
      { source: "/reviews/wonaco-casino",              destination: "/articles/wonaco-casino-bonus",      permanent: true },

      // ── Cannibalization cleanup, phase 3 REVERSED (2026-07-25) ───────────
      // The three cross-domain 301s that used to send /reviews/luckymax-casino,
      // /reviews/playio, and /de/bewertungen/luckymax-casino to bonusreviewers
      // have been REMOVED to honour the locked "three separate sites, no
      // cross-domain 301s" policy. LuckyMax + Playio are once again independent
      // bonuscout review pages with their own Organization schema. See the
      // restored entries in src/data/casinos/index.ts.

      // /luckymax-vs-jackpoty is an intra-site redirect (both URLs are on
      // bonuscout.com) — it does NOT violate the no-cross-domain policy so
      // it stays. The comparison page itself remains deleted; residual
      // traffic still lands on-domain at /reviews/jackpoty. If the comparison
      // page is restored in a separate change, remove this redirect at the
      // same time.
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
