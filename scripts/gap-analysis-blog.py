#!/usr/bin/env python3
"""Gap analysis: find GSC queries with impressions we don't answer with a blog post yet."""
import json, os, re, sys

AUDIT = r'E:\software\Atlantis\atlantis-reimagined1\scripts\gsc-audit-2026-04.json'
BLOG_DIR = r'E:\software\Atlantis\atlantis-reimagined1\src\pages\blog'

data = json.load(open(AUDIT, encoding='utf-8'))

# Existing blog slugs (to avoid duplicating)
existing = set()
if os.path.isdir(BLOG_DIR):
    for f in os.listdir(BLOG_DIR):
        if f.endswith('.tsx'):
            existing.add(f[:-4].lower())

print("=" * 90)
print("EXISTING BLOG POSTS")
print("=" * 90)
for s in sorted(existing):
    print(" ", s)
print()

for site in ('https://atlantisndt.com', 'https://ndt-connect.com'):
    for win in ('90d', '28d'):
        sd = data['sites'][site][win]
        print("=" * 90)
        print(f"{site} — {win} ({sd['range']['startDate']} to {sd['range']['endDate']})")
        print(f"  totals: {sd['totals']}")
        print("=" * 90)

        qs = sorted(sd['queries'], key=lambda x: -x['impressions'])

        # All top 60 queries by impressions
        print(f"\n-- TOP 60 by IMPRESSIONS --")
        print(f"{'query':<60} {'clk':>5} {'impr':>6} {'ctr%':>6} {'pos':>6}")
        for q in qs[:60]:
            qq = q['query']
            mark = ''
            # heuristic: any existing blog slug words in query?
            for slug in existing:
                slug_words = set(slug.replace('-', ' ').split())
                q_words = set(qq.lower().replace('-', ' ').split())
                if len(slug_words & q_words) >= 2:
                    mark = ' [COVERED?]'
                    break
            print(f"{qq[:60]:<60} {q['clicks']:>5} {q['impressions']:>6} {q['ctr']*100:>5.1f}% {q['position']:>6.1f}{mark}")

        # Question-style queries with impressions but few clicks
        print(f"\n-- QUESTION QUERIES (what/how/why/which/can/is/does/pass rate/exam/pattern) --")
        question_re = re.compile(r'\b(what|how|why|which|can|is|are|does|do|when|where|pass\s*rate|exam|syllabus|pattern|difference|vs|cost|salary|requirements|eligibility|fees|duration|validity|renewal|recertification|sample|mock|questions|book|study|preparation|guide|format|number of questions|passing\s*score|how many|how long|how much|how to)\b', re.I)
        for q in qs:
            if question_re.search(q['query']) and q['impressions'] >= 5:
                qq = q['query']
                mark = ''
                for slug in existing:
                    slug_words = set(slug.replace('-', ' ').split())
                    q_words = set(qq.lower().replace('-', ' ').split())
                    if len(slug_words & q_words) >= 2:
                        mark = ' [COVERED?]'
                        break
                print(f"{qq[:60]:<60} {q['clicks']:>5} {q['impressions']:>6} {q['ctr']*100:>5.1f}% {q['position']:>6.1f}{mark}")

        # Certification cluster
        print(f"\n-- CERTIFICATION QUERIES (api 510/653, asnt, iso 9712, cswip, etc.) --")
        cert_re = re.compile(r'\b(api\s*510|api\s*653|api\s*570|api\s*580|api\s*1169|asnt|iso\s*9712|snt[-\s]?tc[-\s]?1a|cp[-\s]?189|cswip|aws|level\s*[123]|nas\s*410|en\s*4179|ndt\s*level|certification|certified|cert)\b', re.I)
        for q in qs:
            if cert_re.search(q['query']) and q['impressions'] >= 5:
                qq = q['query']
                mark = ''
                for slug in existing:
                    slug_words = set(slug.replace('-', ' ').split())
                    q_words = set(qq.lower().replace('-', ' ').split())
                    if len(slug_words & q_words) >= 2:
                        mark = ' [COVERED?]'
                        break
                print(f"{qq[:60]:<60} {q['clicks']:>5} {q['impressions']:>6} {q['ctr']*100:>5.1f}% {q['position']:>6.1f}{mark}")

        print()
