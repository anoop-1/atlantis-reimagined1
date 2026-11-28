# Brief: independent fact review of API exam-prep pages (atlantisndt.com)

You did not write these pages. Your job is to find and fix factual errors before they go live. Repo:
/home/claude/atlantis-reimagined1 (branch api-training-2026-11). Do NOT commit, push or run the site build.

Read first: `scripts/api-training-refine/page-brief.md` (the rules and the facts already verified on api.org) and
`scripts/api-training-2026-11.mjs` (the guard). Records are JSON in `src/data/api-training-2026-11/{slug}.json`;
edit the `html` / `faq` / `title` / `description` strings in place (Python, `newline=''`, keep valid JSON). If a
writer left a generator script in the scratchpad, ignore it — edit the JSON.

For every page you review, check against primary or official sources (api.org pages and Body of Knowledge /
Publications Effectivity Sheet PDFs, code text you can read, operator and regulator pages, EIA, state statutes and
rules). Use WebSearch; fetch only URLs a WebSearch returned to you.

Check especially:
1. **Every number and formula** in worked examples: code formulas (ASME VIII UG-27/UG-32, B31.3 304.1.2, API 653
   shell t-min and bottom minimums, API 510/570 interval and remaining-life rules, test pressures, B16.5 ratings,
   API 570 piping-class intervals), the arithmetic itself (recompute every example), and units. If a formula or
   limit cannot be confirmed, generalise it (describe the method without the number) rather than leave a guess.
2. **Exam facts** must match the verified list in the brief (question counts, open/closed-book split, durations,
   eligibility, recertification, API 580 remote proctoring where API offers it). Code editions named must match the
   Publications Effectivity Sheet actually read; otherwise remove the edition.
3. **Named facilities, owners, statuses and regulators** (refineries, terminals, closures, conversions, state boiler
   and tank programmes, rule numbers): correct owner names, current status as of late 2026. No CITGO, nothing about
   Russia, Venezuela or Iran, no incident narratives.
4. **Offer wording**: self-paced online with instructor Q&A, no course length, no prices, no API-approval claims,
   API administers and certifies, no named instructor, the founder never tied to an API credential, no Atlantis
   classroom, no US radiography offer, no FFS offer.

After editing, keep each page at 2,000+ own words and run
`node scripts/api-training-2026-11.mjs --check <slug> …` until it prints OK.

Reply with: for each page, the corrections made (old → new, one line each), what you removed as unverifiable, and
anything you are unsure about. Keep the reply compact.
