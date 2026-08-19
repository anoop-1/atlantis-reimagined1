# Deploy runbook — citation-spec programme

Branch: `seo/citation-spec-2026-08-18`
Prepared: 2026-08-18, updated 2026-08-19 · Preflight: **10/10**

**Urgency note (19 Aug data):** clicks fell another 18% week-over-week while US
impressions rose 7% — the definitional/AI-Overview decay continues, and every
counter-measure in this branch is undeployed. Each day unpushed is a day of decay
with the fix sitting in git.

Everything below is built, verified and committed. **Nothing is live.** Vercel auto-deploys
from `main`, so the push *is* the deploy.

---

## 1. Deploy

```bash
cd e:/software/Atlantis/atlantis-reimagined1

# Confirm the branch is clean and preflight still passes
npm run build
node scripts/preflight.mjs          # expect 10/10

git checkout main
git merge --ff-only seo/citation-spec-2026-08-18
git push origin main                # Vercel auto-deploys from here
```

The merge is a clean fast-forward — `main` and `origin/main` were identical when the branch
was cut.

### What is different about this deploy

This is the **first deploy where Vercel builds `dist` itself.** The committed build output
was removed from version control, because Vercel runs `package.json` `build` and outputs to
`dist` anyway, so the committed copy was uploaded on every deploy for nothing and risked
serving stale output.

Watch the first build log. Expect roughly: Vite ~1 min, then `prerender.mjs` generating
5,629 pages, then the FAQ/breadcrumb schema pass, then the citation gate reporting. The gate
reports and never fails the build — a copy warning must not block a deploy.

If the build times out or errors, the fallback is `git revert` of the `chore: drop build
output` commit, which restores committed `dist`.

---

## 2. Immediately after the deploy is live

### 2a. Verify propagation, then submit

```bash
node scripts/submit-citation-batch.mjs --check    # readiness only
node scripts/submit-citation-batch.mjs            # submits via IndexNow
```

This refuses to submit any URL that is not already serving 200 **with its citation layer
present**. Submitting a 404 teaches the engine the page is missing, and that first
impression costs more than the days saved. Before the deploy it correctly refuses all 32.

IndexNow reaches Bing, Yandex and Seznam instantly. Bing is roughly a quarter of this site's
organic sessions and has never been worked deliberately. Google discovery is via the
regenerated sitemaps plus the cluster mesh — Google's Indexing API is documented for
JobPosting and BroadcastEvent only, so it is deliberately not used here.

### 2b. Verify the service account, then triage indexing

The second `google-site-verification` meta tag in `index.html`
(`oR8Bl881JCut-lR52gnNHy9RFePcb76J-EYU3w9XJKY`) is inert until deployed. Once live, trigger
verification for that token in Search Console.

This unblocks the URL Inspection API, which is currently 403 for **all eleven** service
accounts. They already report `permissionLevel: siteOwner` — the block is that URL
Inspection requires a *verified* owner, and an account added through the GSC interface is
only a *delegated* one. Do not "grant owner access"; they already have it.

Then:

```bash
node scripts/_index-sample.mjs      # index coverage on recently submitted URLs
```

That closes the 2,446-unindexed question, which cannot be answered before this step.

---

## 3. The measurement that decides the next quarter

### The thesis test

`/blog/cwi-pass-rate-by-part-a-b-c-breakdown` sits at position 3.9 with real impressions and
now carries a citation layer. **If CTR does not move there at constant position after
recrawl, the diagnosis is wrong** and the rest of the programme should be re-argued rather
than funded. Give it 3–4 weeks for recrawl.

Measure at constant position, not raw clicks — raw clicks are confounded by the ongoing
decay of the definitional layer.

```bash
node scripts/kpi-weekly.mjs         # organic isolated, paid quarantined, bots flagged
node scripts/lint-citation-spec.mjs # 31 priority pages
node scripts/preflight.mjs          # 10 pre-deploy checks
```

### The citation panel

```bash
node scripts/track-citations.mjs --baseline
node scripts/track-citations.mjs --record c01=cited,k01=absent,...
node scripts/track-citations.mjs --report
```

75 frozen prompts, versioned to 2027-08-18. Do not edit the panel to chase good news — a
moving panel produces a series that cannot be compared with itself. Extend only as a
labelled second cohort with its own baseline.

The automated path measures a proxy (does the domain appear in the organic set a retriever
draws from). Manual checks against the assistants are authoritative and are stored
separately.

---

## 4. What shipped

| Area | State (updated 2026-08-19) |
|---|---|
| Citation layers | 150+ pages, 70/116 of the 80%-of-clicks cohort |
| New depth pages | 46 — consulting industries, method x level matrix, US regions |
| Cluster mesh | 83 pages across 12 clusters |
| Author entity | `/authors/anoop-rayavarapu`, Person + hasCredential in static HTML |
| Training | 16 upgrades + 12 method x level pages + 14 US regions, enquiry CTA on all 489 training routes |
| Enquiry funnel | ms_form_click was 6/90d (all from /training); Forms CTA now on 445/445 training pages in dist |
| Favicon | /favicon.ico rebuilt with the trident (was the Lovable template icon) |
| AI crawlers | 9 newer retrieval agents added to robots.txt |
| Routes | 5,653 |

### Defects found and fixed on the way

- **A live pricing-policy breach.** `/blog/best-erp-software-malaysia-construction-oil-gas-2026`
  published "USD $9,000 one-time installation and USD $4,800/year for remote support",
  attributed to us in the next sentence.
- **15 broken H1s** — 14 pages emitting two identical H1s, one emitting none. Now all 5,629
  pages have exactly one.
- **`/digital-twin-vs-idms` shipped noindexed** on the day it was built. The zero-impression
  prune cannot tell a dead page from one that shipped this morning.
- **23 trailing-slash duplicate URL pairs** indexed at both `/path` and `/path/`.
- **97 pricing-sweep placeholders** ("a scoped, quoted figure") on ranking pages.
- **No SPA `page_view`** — GA4 recorded 1.26 views/session on a site averaging 200s+ visits.

---

## 5. Known-open

- **70 of the 116** top-click pages still need a citation layer.
- **217 glossary pages** unconverted. Worth checking demand before spending: the layer lost
  82% of its impressions to AI Overviews at unchanged positions, so only the pages that
  still earn are worth converting.
- **Bing Webmaster API** pulls remain blocked — `scripts/bing-webmaster-pull.mjs` is a
  template and no API key exists. Needs an account action.
- **Off-domain entity work** not started. Branded mentions correlate ~3x more strongly with
  AI visibility than backlinks.
- **The July paid-search cliff** is still unexplained: GA4 recorded 10,276 `google / cpc`
  sessions in July and 138 in August. If you were watching GA4 totals rather than Search
  Console, that is the crash you saw, and it has nothing to do with organic.

---

## 6. Standing constraints these tools enforce

- No Atlantis price anywhere — enforced by `preflight.mjs` and both content validators.
  Third-party exam fees and industry salary bands are explicitly permitted.
- No personal email public — `info@atlantisndt.com` only.
- Permutation generators are frozen. Eight of them throw unless `ALLOW_PERMUTATION_GEN=1`.
  ERP returns 0.06 clicks/page against 2.14 for a written depth page.
- Additive only. Nothing published has been deleted, noindexed or redirected.
- **React never reaches crawlers.** `prerender.mjs` builds static HTML from its own
  `bodyContent` strings. Any SEO-visible element — answer block, table, schema, canonical,
  H1 — must be emitted there. Verify in `dist/`, never the dev server.
