# SEO Audit & Action Plan — 18 April 2026

Baseline captured from Google Search Console export
(`https___oparc.in_-Performance-on-Search-2026-04-18.xlsx`).

## 1. Baseline — what's actually happening

Two GSC exports compared (2-day delta):

| Metric | 16-Apr file | 18-Apr file | Delta |
|---|---|---|---|
| Total clicks (rolling window) | 18 | 22 | +4 |
| Total impressions (rolling window) | 509 | 1,150 | **+126%** |
| Best day impressions | 165 (14-Apr) | 384 (16-Apr) | +133% |

**Per-day impressions trajectory (clear exponential):**
11-Apr: 42 → 12-Apr: 77 → 13-Apr: 99 → 14-Apr: 165 → 15-Apr: 257 → 16-Apr: 384

Clicks are lagging impressions — this is expected when new pages first surface at
rank 10–40 and need internal link juice + CTR signals to climb into the
click-zone (top 5). The site is indexing fine; the bottleneck is not discovery,
it is conversion of impressions into clicks and improvement of page-2
positions to page-1 positions.

**What is working:**
- Homepage: 10 clicks / 113 imps / **8.85% CTR at position 3.0** — healthy for
  brand query ("oparc").
- Long-tail ranking well: "amc expired" (pos 3.3), "disposal and write off
  difference" (pos 1.0), "purchase requisition multi-level approval workflow"
  (pos 3.2).
- Tally + CARO-IFC + invoice-matching guides all surfacing at 66–96 impressions
  from single-digit positions.
- Average position improving week on week (13 → 7–9 range).

**What is not working:**
- CTR on site average is dropping as impressions scale (5% → 1.9%) — many new
  impressions are at pos 10–40, below the click-fold.
- **Seven pages are ranked page-1 (pos 5–9) but getting zero clicks** — see Tier 1.
- Largest single untapped page: `asset-verification-guide` — 120 impressions at
  position 23 (page 3), only 2 clicks.

## 2. Full audit — four tiers by effort × impact

### Tier 1 — Title/meta rewrites (highest ROI, ≤2 hours total)

Seven pages ranked page-1 with zero or near-zero clicks. Title rewrite is
3–5 minutes each.

| # | URL | Imps | Pos | Clicks | Issue | Priority |
|---|---|---:|---:|---:|---|---|
| 1.1 | `/asset-write-off-scrap-disposal-guide` | 72 | 5.72 | 0 | Ranks #1 for three "difference" queries but title doesn't contain the word "difference" — SERP intent mismatch | **P1 (ship first)** |
| 1.2 | `/invoice-matching-guide` | 96 | 7.36 | 0 | "Resolving Mismatches Systematically" is PR-speak; meta hook is good but title blunts it | P2 |
| 1.3 | `/approval-bottleneck-tracking-guide` | 90 | 6.09 | 0 | Generic "Find and Fix"; no concrete tooling signal | P2 |
| 1.4 | `/purchase-approval-workflow-guide` | 91 | 6.68 | 0 | "Configuring Procurement Governance" is abstract; query uses concrete words (department, amount, category) | P2 |
| 1.5 | `/caro-ifc-compliance-guide` | 66 | 8.55 | 0 | "Compliance Guide" is generic; auditor-fear angle stronger | P3 |
| 1.6 | `/tally-asset-integration-guide` | 46 | 7.22 | 1 | Long title; missing "GST & TDS" qualifiers that searchers add | P3 |
| 1.7 | `/fixed-asset-register-companies-act` | 88 | 8.28 | 1 | Needs to match "fixed asset register as per Companies Act 2013" verbatim | P4 |

### Tier 2 — Internal link juice (medium effort, big ranking impact)

Three pages at pos 15–30 with high impressions. Internal links from
high-authority pages can push them into page 1.

| # | URL | Imps | Pos | Strategy |
|---|---|---:|---:|---|
| 2.1 | `/asset-verification-guide` | **120** | 23 | **Biggest untapped opportunity.** Add contextual links from: index, asset-management, compliance, asset-tagging-verification, fixed-asset-register, caro-ifc-compliance-guide |
| 2.2 | `/duplicate-vendor-payment-prevention` | 66 | 17.94 | Links from invoice-matching-guide, purchase-approval-workflow-guide, vendor-management, procurement |
| 2.3 | `/asset-tagging-verification` | 31 | 21.55 | Links from asset-verification-guide, fixed-asset-register, caro-ifc-compliance-guide, lost-stolen-assets-no-tracking |

### Tier 3 — Infrastructure / housekeeping (≤15 min total)

| # | Action | Why |
|---|---|---|
| 3.1 | Add redirect: `/reports.html /reports 301` in `_redirects` | One impression at position 5 on `/reports.html` — someone (or a cache) still has the `.html` URL |
| 3.2 | Monitor `/procurement-governance-software` — pos 4.15, 13 imps, 0 clicks | Launched 16-Apr; still gathering data. Do not touch yet |
| 3.3 | Monitor `/advisory` — just launched 18-Apr | Not indexed yet; will appear in GSC ~21–22 Apr |

### Tier 4 — Ignore

- `("nfmims" or "inclusion detection system" or "ids" …)` — 13 imps — scraper
  or academic query reusing our keyword density, not a real visitor.
- `"computer services in jigani bangalore"` — location-based mis-match (Google
  inferring our Bangalore schema address). Not our audience.
- `"asset validatie/ validation"` — Dutch query, pos 74, low intent.
- `"assetsonar"` — competitor-brand search; ICAI comparative-platform rule says
  we do not optimise for competitor names.

## 3. P1 action — shipping first (18-Apr-2026)

### 3.1 What changes
File: `asset-write-off-scrap-disposal-guide.html`

| Field | Current | New |
|---|---|---|
| `<title>` | Asset Write-Off, Scrap, and Disposal — Governed Processes for Removing Assets from the Register \| Oparc | Write-Off vs Scrap vs Disposal — The Difference and When to Use Each \| Oparc |
| `og:title` | Asset Write-Off, Scrap, and Disposal — Governed Processes for Removing Assets from the Register | Write-Off vs Scrap vs Disposal — The Difference and When to Use Each |
| `twitter:title` | Asset Write-Off, Scrap, and Disposal — Governed Processes for Removing Assets from the Register | Write-Off vs Scrap vs Disposal — The Difference and When to Use Each |
| Schema `headline` | Asset Write-Off, Scrap, and Disposal — Governed Processes for Removing Assets from the Register | Write-Off vs Scrap vs Disposal — The Difference and When to Use Each |
| `<h1>` | Asset Write-Off, Scrap, and Disposal — Governed Processes for Removing Assets from the Register | Write-Off vs Scrap vs Disposal — The Difference and When to Use Each |

### 3.2 Why this is P1, not bundled with the other six

We are making a hypothesis: **SERP intent mismatch suppresses CTR even at
position #1.** Shipping this fix alone lets us attribute any CTR change
cleanly. If the hypothesis is right, clicks should rise within 5–7 days on
this URL. If CTR does not move, something else (SERP features, SaaS competitor
sitelinks, brand bias) is suppressing clicks — and we need to investigate
before rewriting the other six titles with the same style.

### 3.3 Body content left unchanged
The article content is already aligned — it covers exactly the "what is the
difference" intent. Only the surfacing signals (title, OG, schema, H1) are
being corrected. No body rewrite, no meta description change.

## 4. Measurement protocol

### 4.1 What to measure
Source: GSC export filtered to `Page = /asset-write-off-scrap-disposal-guide`.

| Metric | Baseline (18-Apr) | Success bar at T+7 | Success bar at T+14 |
|---|---:|---:|---:|
| Impressions | 72 (rolling window) | ≥ 72 (stable) | ≥ 90 |
| **CTR** | **0.0%** | **≥ 3.0%** | **≥ 6.0%** |
| Clicks | 0 | ≥ 2 | ≥ 5 |
| Position | 5.72 | 3.0–6.0 (stable or better) | 3.0–6.0 (stable or better) |

### 4.2 When to measure
- **T+3 days (21-Apr):** Google typically re-crawls a title change within 48–72
  hours. First data point — check impressions held or grew (if impressions
  drop sharply, the change hurt ranking and we revert).
- **T+7 days (25-Apr):** primary measurement. CTR is the headline number.
- **T+14 days (02-May):** confirm the lift is durable, not a re-crawl spike.

### 4.3 Decision rules

| Observation at T+7 | Interpretation | Action |
|---|---|---|
| CTR ≥ 3%, impressions stable | Hypothesis confirmed — SERP intent match lifts CTR | Ship the other six title rewrites (Tier 1.2–1.7) in one commit |
| CTR 1–3%, impressions stable | Partial lift — the rewrite helped but not dramatically. SERP features or competitor listings are eating clicks | Ship the others cautiously — one at a time, measured weekly |
| CTR still 0%, impressions stable | Title is not the bottleneck. SERP features or query intent is informational (user reads snippet, does not click) | Pause title rewrites. Investigate: inspect the actual SERP, check competitor listings, consider if FAQ schema on the page would yield a People-Also-Ask box |
| Impressions drop ≥ 25% | Title change hurt relevance signal — Google de-ranked us | **Revert immediately.** Investigate keyword drop |

### 4.4 Track record document
Append results to this file under section 6 ("Results log") after each measurement
window. Do not create a new file per measurement.

## 5. Plan beyond P1

Sequential, each gated on the previous step's measurement.

### Stage A — P1 ships (18-Apr, today)
See section 3.

### Stage B — Tier 2.1 internal links for `asset-verification-guide` (approx 21-Apr)
Independent of P1's outcome. 30-minute task — add contextual links from 6 pages.
This is a ranking play, not a CTR play, so it does not confound the P1 CTR measurement.

### Stage C — T+7 decision point on P1 (25-Apr)
Ship Tier 1.2–1.6 title rewrites based on Stage A result per the decision rules
in section 4.3.

### Stage D — Tier 2.2 and 2.3 internal links (approx 28-Apr)
Once Tier 2.1 shows ranking lift (or at T+10 if unchanged).

### Stage E — Advisory page first measurement (approx 28-Apr, ten days after launch)
New page typically reaches stable GSC appearance by day 7–10.
Measure baseline CTR, position. Iterate title if needed.

### Stage F — Tier 3 housekeeping (anytime during the above)
`/reports.html` redirect. 5-minute task. Do not batch with anything else —
just commit separately whenever convenient.

## 6. Results log

### 18-Apr-2026 — P1 shipped
- Commit: `746fd75`
- File: `asset-write-off-scrap-disposal-guide.html`
- Changes: title, og:title, twitter:title, schema headline, H1 — all rewritten to
  "Write-Off vs Scrap vs Disposal — The Difference and When to Use Each".
- Baseline snapshot: 72 imps, 0 clicks, 0% CTR, position 5.72.

### 18-Apr-2026 — Stage B shipped (internal links for asset-verification-guide)
- Existing inbound links (15 pages) use good keyword-rich anchors
  ("physical verification", "verification campaigns") — no rewrites needed.
- Added 3 new inbound links from the three high-authority pages that were
  missing links:
  - `index.html` — inline link on "Physical asset verification campaigns" in
    the "Start Simple, Grow As You Need / Full Governance" column.
  - `asset-management.html` — "Read: how structured physical asset verification
    works →" appended to the Verification Campaigns feature card paragraph.
  - `compliance.html` — inline link on "Physical verification at reasonable
    intervals" in the CARO 2020 Clause 3(i) compliance card.
- Baseline snapshot for `asset-verification-guide`: 120 imps, 2 clicks, 1.67%
  CTR, position 23.07.
- Stage B is a ranking play — success bar at T+14 (02-May): position ≤ 15 and
  impressions on the "physical asset verification" cluster queries climbing
  out of pos 40+ into pos 20–30.

### 21-Apr-2026 — T+3 check
_To be filled in._

### 25-Apr-2026 — T+7 decision point
_To be filled in._

### 02-May-2026 — T+14 confirmation
_To be filled in._
