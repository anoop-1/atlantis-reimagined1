#!/usr/bin/env python3
"""
SEO trends pull — GSC + GA4 through the APIs (2026-11-17).

WHY. Owner, 2026-11-17: gather GSC and GA4 trends with the service-account keys
listed in Tokens.docx, not the browser extension. One command now pulls every
view the SEO cycle needs and writes a compact summary that can be committed.

KEYS (never commit, never print):
  scripts/gsc-service-account.json   (gitignored; copy of a gsc-indexer key)
  Source on the owner's Mac: Documents/Atlantis softwares/NDT Connect/
  seo-analysis/credentials/atlantis-gsc-*.json. Tokens.docx lists the accounts.
  Override with GSC_KEY_FILE=/path/key.json.

WHAT IT PULLS (window A = last 28 final days, B = the 28 before):
  GSC  date (120 d, site + USA) · country A/B · page A/B · query A/B ·
       page A/B with country=usa · query+page A with country=usa
  GA4  date x channel (120 d) · country A/B · landing page A/B (all + US) ·
       event A/B (all + US)

RULES baked in (CLAUDE.md §20.11, §21.8, §23.2, §31.2):
  * trailing-slash variants are SUMMED, never collapsed into one key
  * every list is sorted client-side
  * USA page/query pulls are SHAPE only (anonymisation); use the country
    dimension for US totals

OUTPUT
  scripts/seo-trends-raw/<date>/*.json      raw rows (gitignored)
  reports/seo-trends-<date>.json            compact summary (commit this)

USAGE
  python3 scripts/seo-trends-pull.py            # pull + summarise
  python3 scripts/seo-trends-pull.py --summary  # re-summarise the latest raw pull
"""
import argparse, datetime as dt, importlib.util, json, os, re, sys, urllib.parse
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
spec = importlib.util.spec_from_file_location('puller', os.path.join(HERE, 'mac-gsc-ga4-pull.py'))
P = importlib.util.module_from_spec(spec); spec.loader.exec_module(P)

SITE = 'https://atlantisndt.com'
PROPERTY = '517088706'
GSC_URL = f'https://www.googleapis.com/webmasters/v3/sites/{urllib.parse.quote(SITE, safe="")}/searchAnalytics/query'
GA4_URL = f'https://analyticsdata.googleapis.com/v1beta/properties/{PROPERTY}:runReport'


def windows(today=None):
    end = (today or dt.date.today()) - dt.timedelta(days=3)
    a = (end - dt.timedelta(days=27), end)
    b = (a[0] - dt.timedelta(days=28), a[0] - dt.timedelta(days=1))
    return {'A': a, 'B': b, 'long': (end - dt.timedelta(days=119), end)}


def gsc(tok, start, end, dims, country=None):
    q = {'startDate': str(start), 'endDate': str(end), 'dimensions': dims, 'rowLimit': 25000, 'dataState': 'final'}
    if country:
        q['dimensionFilterGroups'] = [{'filters': [{'dimension': 'country', 'operator': 'equals', 'expression': country}]}]
    rows, start_row = [], 0
    while True:
        q['startRow'] = start_row
        r = P.post(GSC_URL, tok, q).get('rows', [])
        rows += [{**{d: k for d, k in zip(dims, x['keys'])}, 'clicks': x['clicks'], 'impressions': x['impressions'],
                  'position': x['position']} for x in r]
        if len(r) < 25000:
            return rows
        start_row += 25000


def ga4(tok, start, end, dims, metrics, country=None, limit=25000):
    body = {'dateRanges': [{'startDate': str(start), 'endDate': str(end)}],
            'dimensions': [{'name': d} for d in dims], 'metrics': [{'name': m} for m in metrics], 'limit': limit}
    if country:
        body['dimensionFilter'] = {'filter': {'fieldName': 'country', 'stringFilter': {'value': country}}}
    r = P.post(GA4_URL, tok, body)
    return [{**{d: v['value'] for d, v in zip(dims, x['dimensionValues'])},
             **{m: float(v['value']) for m, v in zip(metrics, x['metricValues'])}} for x in r.get('rows', [])]


def pull(outdir):
    tok = P.token()
    w = windows()
    os.makedirs(outdir, exist_ok=True)
    jobs = {
        'gsc-date': lambda: gsc(tok, *w['long'], ['date']),
        'gsc-date-usa': lambda: gsc(tok, *w['long'], ['date'], 'usa'),
        'gsc-country-A': lambda: gsc(tok, *w['A'], ['country']),
        'gsc-country-B': lambda: gsc(tok, *w['B'], ['country']),
        'gsc-page-A': lambda: gsc(tok, *w['A'], ['page']),
        'gsc-page-B': lambda: gsc(tok, *w['B'], ['page']),
        'gsc-query-A': lambda: gsc(tok, *w['A'], ['query']),
        'gsc-query-B': lambda: gsc(tok, *w['B'], ['query']),
        'gsc-page-usa-A': lambda: gsc(tok, *w['A'], ['page'], 'usa'),
        'gsc-page-usa-B': lambda: gsc(tok, *w['B'], ['page'], 'usa'),
        'gsc-query-page-usa-A': lambda: gsc(tok, *w['A'], ['query', 'page'], 'usa'),
        'gsc-query-page-A': lambda: gsc(tok, *w['A'], ['query', 'page']),
        'ga4-date-channel': lambda: ga4(tok, *w['long'], ['date', 'sessionDefaultChannelGroup'],
                                        ['sessions', 'engagedSessions', 'keyEvents']),
        'ga4-country-A': lambda: ga4(tok, *w['A'], ['country'], ['sessions', 'engagedSessions', 'averageSessionDuration', 'keyEvents']),
        'ga4-country-B': lambda: ga4(tok, *w['B'], ['country'], ['sessions', 'engagedSessions', 'averageSessionDuration', 'keyEvents']),
        'ga4-landing-A': lambda: ga4(tok, *w['A'], ['landingPage', 'sessionDefaultChannelGroup'], ['sessions', 'engagedSessions', 'keyEvents']),
        'ga4-landing-B': lambda: ga4(tok, *w['B'], ['landingPage', 'sessionDefaultChannelGroup'], ['sessions', 'engagedSessions', 'keyEvents']),
        'ga4-landing-usa-A': lambda: ga4(tok, *w['A'], ['landingPage', 'sessionDefaultChannelGroup'], ['sessions', 'engagedSessions', 'keyEvents'], 'United States'),
        'ga4-landing-usa-B': lambda: ga4(tok, *w['B'], ['landingPage', 'sessionDefaultChannelGroup'], ['sessions', 'engagedSessions', 'keyEvents'], 'United States'),
        'ga4-event-A': lambda: ga4(tok, *w['A'], ['eventName'], ['eventCount']),
        'ga4-event-B': lambda: ga4(tok, *w['B'], ['eventName'], ['eventCount']),
        'ga4-event-usa-A': lambda: ga4(tok, *w['A'], ['eventName'], ['eventCount'], 'United States'),
        'ga4-event-usa-B': lambda: ga4(tok, *w['B'], ['eventName'], ['eventCount'], 'United States'),
        'ga4-event-page-A': lambda: ga4(tok, *w['A'], ['eventName', 'pagePath'], ['eventCount']),
    }
    meta = {'pulled': str(dt.date.today()), 'windows': {k: [str(v[0]), str(v[1])] for k, v in w.items()}}
    for name, fn in jobs.items():
        rows = fn()
        json.dump(rows, open(os.path.join(outdir, f'{name}.json'), 'w'))
        print(f'  {name}: {len(rows)} rows')
    json.dump(meta, open(os.path.join(outdir, '_meta.json'), 'w'), indent=1)
    return outdir


# ── classification ────────────────────────────────────────────────────────────
def norm(u):
    p = urllib.parse.urlparse(u).path if u.startswith('http') else u
    p = p.split('?')[0].split('#')[0]
    return p.rstrip('/') or '/'


US_CITY = None


def us_cities():
    global US_CITY
    if US_CITY is None:
        try:
            d = json.load(open(os.path.join(ROOT, 'src/data/us-conventional-ndt-2026-11/_cities.json')))
            US_CITY = {c['slug'] for c in (d if isinstance(d, list) else d.get('cities', []))}
        except Exception:
            US_CITY = set()
    return US_CITY


US_IND = None


def us_industry_paths():
    global US_IND
    if US_IND is None:
        try:
            US_IND = {p['path'] for p in json.load(open(os.path.join(ROOT, 'src/data/us-industry-ndt-2026-11/_pages.json')))['pages']}
        except Exception:
            US_IND = set()
    return US_IND


def family(p):
    m = re.match(r'^/(ultrasonic|magnetic-particle|penetrant|radiographic|visual|eddy-current)-testing-([a-z0-9-]+)$', p)
    if p in us_industry_paths():
        return 'us-industry-job'
    if m and m.group(2) in us_cities():
        return 'us-method-city' if m.group(1) in ('ultrasonic', 'magnetic-particle', 'penetrant') else 'us-rt-city'
    if m:
        return 'method-city-other'
    if p.startswith('/maritime'):
        return 'maritime'
    if p.startswith('/blog/'):
        return 'blog'
    if p.startswith('/glossary') or p.startswith('/standards') or p.startswith('/compliance'):
        return 'reference'
    if re.match(r'^/inspection-services-[a-z-]+$', p):
        return 'inspection-hub'
    if p.startswith('/inspection') or p.startswith('/api-inspection') or p.startswith('/services/'):
        return 'inspection'
    if re.match(r'^/ndt-training-[a-z-]+$', p) or p.startswith('/training/'):
        return 'training-geo'
    if re.search(r'(training|course|certification|level-[123i]|practice|exam|snt-tc|asnt|salary)', p):
        return 'training'
    if p.startswith('/consulting') or 'consulting' in p:
        return 'consulting'
    if p.startswith('/erp') or p.startswith('/ndt-erp') or 'software' in p:
        return 'erp-software'
    if p.startswith('/practical-ndt') or p.startswith('/tools'):
        return 'practical-tools'
    if p.startswith('/digital-twin') or p.startswith('/3d-scanning'):
        return 'dt-3d'
    return 'other'


def sum_pages(rows, key='page'):
    out = defaultdict(lambda: {'c': 0, 'i': 0, 'pw': 0.0})
    for r in rows:
        k = norm(r[key])
        o = out[k]; o['c'] += r['clicks']; o['i'] += r['impressions']; o['pw'] += r['position'] * r['impressions']
    return {k: {'c': v['c'], 'i': v['i'], 'pos': round(v['pw'] / v['i'], 1) if v['i'] else None} for k, v in out.items()}


def tot(rows):
    c = sum(r['clicks'] for r in rows); i = sum(r['impressions'] for r in rows)
    pw = sum(r['position'] * r['impressions'] for r in rows)
    return {'clicks': c, 'impressions': i, 'ctr': round(100 * c / i, 2) if i else 0, 'position': round(pw / i, 1) if i else None}


def by_family(pages):
    f = defaultdict(lambda: {'pages': 0, 'c': 0, 'i': 0, 'pw': 0.0})
    for p, v in pages.items():
        o = f[family(p)]; o['pages'] += 1; o['c'] += v['c']; o['i'] += v['i']; o['pw'] += (v['pos'] or 0) * v['i']
    return {k: {'pages_with_impr': v['pages'], 'clicks': v['c'], 'impressions': v['i'],
                'position': round(v['pw'] / v['i'], 1) if v['i'] else None} for k, v in sorted(f.items(), key=lambda x: -x[1]['c'])}


def ga_sum(rows, key, metrics):
    out = defaultdict(lambda: defaultdict(float))
    for r in rows:
        k = norm(r[key]) if key in ('landingPage', 'pagePath') else r[key]
        for m in metrics:
            out[k][m] += r[m]
    return out


def summarise(raw):
    L = lambda n: json.load(open(os.path.join(raw, f'{n}.json')))
    meta = json.load(open(os.path.join(raw, '_meta.json')))
    S = {'meta': meta}

    # GSC site + US totals per window (from date rows = full totals)
    dates = L('gsc-date'); dates_us = L('gsc-date-usa')
    wa, wb = meta['windows']['A'], meta['windows']['B']
    inw = lambda r, w: w[0] <= r['date'] <= w[1]
    S['gsc_site'] = {'A': tot([r for r in dates if inw(r, wa)]), 'B': tot([r for r in dates if inw(r, wb)])}
    S['gsc_usa'] = {'A': tot([r for r in dates_us if inw(r, wa)]), 'B': tot([r for r in dates_us if inw(r, wb)])}
    # weekly trend (Mon-start weeks) for 120 d
    wk = defaultdict(list); wku = defaultdict(list)
    for r in dates:
        d = dt.date.fromisoformat(r['date']); wk[str(d - dt.timedelta(days=d.weekday()))].append(r)
    for r in dates_us:
        d = dt.date.fromisoformat(r['date']); wku[str(d - dt.timedelta(days=d.weekday()))].append(r)
    S['gsc_weekly'] = [{'week': k, **tot(v), 'usa': tot(wku.get(k, []))} for k, v in sorted(wk.items())]

    # countries
    ca = {r['country']: r for r in L('gsc-country-A')}; cb = {r['country']: r for r in L('gsc-country-B')}
    S['gsc_countries'] = [{'country': k, 'A_clicks': v['clicks'], 'A_impr': v['impressions'], 'A_pos': round(v['position'], 1),
                           'B_clicks': cb.get(k, {}).get('clicks', 0), 'B_impr': cb.get(k, {}).get('impressions', 0)}
                          for k, v in sorted(ca.items(), key=lambda x: -x[1]['clicks'])[:20]]

    # families, all + US shape
    pa, pb = sum_pages(L('gsc-page-A')), sum_pages(L('gsc-page-B'))
    pua, pub = sum_pages(L('gsc-page-usa-A')), sum_pages(L('gsc-page-usa-B'))
    S['families_all'] = {'A': by_family(pa), 'B': by_family(pb)}
    S['families_usa_shape'] = {'A': by_family(pua), 'B': by_family(pub)}

    # movers (pages)
    def movers(a, b, n=25):
        keys = set(a) | set(b)
        d = [(k, a.get(k, {}).get('c', 0) - b.get(k, {}).get('c', 0), a.get(k, {}), b.get(k, {})) for k in keys]
        up = sorted(d, key=lambda x: -x[1])[:n]; down = sorted(d, key=lambda x: x[1])[:n]
        f = lambda x: {'page': x[0], 'family': family(x[0]), 'd_clicks': x[1], 'A': x[2], 'B': x[3]}
        return {'up': [f(x) for x in up], 'down': [f(x) for x in down]}
    S['page_movers'] = movers(pa, pb)

    # queries movers + striking distance
    qa = {r['query']: r for r in L('gsc-query-A')}; qb = {r['query']: r for r in L('gsc-query-B')}
    S['query_movers_down'] = sorted([{'q': k, 'A': {'c': v['clicks'], 'i': v['impressions'], 'pos': round(v['position'], 1)},
                                      'B': {'c': qb[k]['clicks'], 'i': qb[k]['impressions'], 'pos': round(qb[k]['position'], 1)}}
                                     for k, v in qa.items() if k in qb and qb[k]['impressions'] >= 150],
                                    key=lambda x: (x['A']['c'] - x['B']['c']))[:30]
    S['striking_distance'] = sorted([{'q': k, 'c': v['clicks'], 'i': v['impressions'], 'pos': round(v['position'], 1)}
                                     for k, v in qa.items() if 4 <= v['position'] <= 20 and v['impressions'] >= 100],
                                    key=lambda x: -x['i'])[:60]

    # US query shape for the conventional NDT + training + industry clusters
    qp = L('gsc-query-page-usa-A')
    clusters = {'ut': r'ultrason|\but\b', 'mt': r'magnetic|\bmpi\b|\bmt\b|mag particle', 'pt': r'penetrant|\bdye\b|\bpt\b',
                'training': r'training|course|class|school|certif|level [123i]|snt|asnt', 'near_me': r'near me'}
    S['usa_query_clusters'] = {}
    for name, rx in clusters.items():
        rows = [r for r in qp if re.search(rx, r['query'], re.I)]
        t = tot(rows)
        landing = defaultdict(lambda: {'c': 0, 'i': 0, 'pw': 0.0})
        for r in rows:
            o = landing[norm(r['page'])]; o['c'] += r['clicks']; o['i'] += r['impressions']; o['pw'] += r['position'] * r['impressions']
        top = sorted(landing.items(), key=lambda x: -x[1]['i'])[:15]
        S['usa_query_clusters'][name] = {**t, 'queries': len({r['query'] for r in rows}),
                                         'top_landing': [{'page': k, 'family': family(k), 'c': v['c'], 'i': v['i'],
                                                          'pos': round(v['pw'] / v['i'], 1)} for k, v in top]}
    # US place-named queries (city/state) for MT/PT/UT + training
    S['usa_place_queries'] = sorted([{'q': r['query'], 'page': norm(r['page']), 'c': r['clicks'], 'i': r['impressions'],
                                      'pos': round(r['position'], 1)} for r in qp
                                     if re.search(r'ultrason|magnetic|penetrant|ndt|inspection|testing', r['query'], re.I)
                                     and re.search(r'\b(in|near)\b|houston|texas|chicago|dallas|denver|ohio|indiana|michigan|'
                                                   r'california|louisiana|alabama|florida|georgia|jersey|york|pennsylvania|'
                                                   r'washington|seattle|phoenix|arizona|oklahoma|tulsa|detroit|atlanta|'
                                                   r'carolina|virginia|tennessee|kentucky|illinois|wisconsin|minnesota|'
                                                   r'missouri|kansas|utah|colorado|oregon|nevada|alaska|baton|orleans|mobile', r['query'], re.I)
                                     and r['impressions'] >= 5], key=lambda x: -x['i'])[:80]

    # new 2026-11-14/17 families: which pages earn already
    S['new_pages_earning'] = {k: sorted([{'page': p, **v} for p, v in pa.items() if family(p) == k],
                                        key=lambda x: -x['i'])[:25] for k in ('us-industry-job', 'us-method-city', 'maritime')}

    # GA4
    ch = L('ga4-date-channel')
    agg = lambda rows, w: ga_sum([r for r in rows if w[0].replace('-', '') <= r['date'] <= w[1].replace('-', '')],
                                 'sessionDefaultChannelGroup', ['sessions', 'engagedSessions', 'keyEvents'])
    S['ga4_channels'] = {'A': agg(ch, wa), 'B': agg(ch, wb)}
    gca = {r['country']: r for r in L('ga4-country-A')}; gcb = {r['country']: r for r in L('ga4-country-B')}
    S['ga4_countries'] = [{'country': k, 'A_sessions': v['sessions'], 'A_engaged': v['engagedSessions'],
                           'A_avgDur': round(v['averageSessionDuration']), 'A_key': v['keyEvents'],
                           'B_sessions': gcb.get(k, {}).get('sessions', 0), 'B_key': gcb.get(k, {}).get('keyEvents', 0)}
                          for k, v in sorted(gca.items(), key=lambda x: -x[1]['sessions'])[:15]]

    def landing_fam(name):
        rows = L(name)
        f = defaultdict(lambda: defaultdict(float))
        for r in rows:
            if r['sessionDefaultChannelGroup'] != 'Organic Search':
                continue
            o = f[family(norm(r['landingPage']))]
            for m in ('sessions', 'engagedSessions', 'keyEvents'):
                o[m] += r[m]
        return {k: dict(v) for k, v in sorted(f.items(), key=lambda x: -x[1]['sessions'])}
    S['ga4_organic_landing_family'] = {'all': {'A': landing_fam('ga4-landing-A'), 'B': landing_fam('ga4-landing-B')},
                                       'usa': {'A': landing_fam('ga4-landing-usa-A'), 'B': landing_fam('ga4-landing-usa-B')}}
    ev = lambda n: {r['eventName']: r['eventCount'] for r in L(n)}
    KEY = ['generate_lead', 'training_enquiry', 'training_enrolment', 'training_register_buy_click', 'level3_consulting_enquiry',
           'erp_demo_request', 'inspection_rfq_submit', 'ndt_simulation_demo_request', 'contact_cta_click', 'form_start',
           'inline_enquiry_view', 'intent_route_click', 'ms_form_click', 'template_download', 'qualified_lead', 'tool_use']
    ea, eb, eua, eub = ev('ga4-event-A'), ev('ga4-event-B'), ev('ga4-event-usa-A'), ev('ga4-event-usa-B')
    S['ga4_events'] = {k: {'A': ea.get(k, 0), 'B': eb.get(k, 0), 'usa_A': eua.get(k, 0), 'usa_B': eub.get(k, 0)} for k in KEY}
    ep = L('ga4-event-page-A')
    S['ga4_lead_pages'] = {}
    for k in ('inspection_rfq_submit', 'training_enquiry', 'generate_lead', 'level3_consulting_enquiry', 'training_register_buy_click'):
        rows = sorted([{'page': norm(r['pagePath']), 'n': r['eventCount']} for r in ep if r['eventName'] == k], key=lambda x: -x['n'])[:15]
        S['ga4_lead_pages'][k] = rows
    return S


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--summary', action='store_true', help='re-summarise the latest raw pull only')
    a = ap.parse_args()
    base = os.path.join(HERE, 'seo-trends-raw')
    if a.summary:
        raw = os.path.join(base, sorted(os.listdir(base))[-1])
    else:
        raw = pull(os.path.join(base, str(dt.date.today())))
    S = summarise(raw)
    os.makedirs(os.path.join(ROOT, 'reports'), exist_ok=True)
    out = os.path.join(ROOT, 'reports', f'seo-trends-{S["meta"]["pulled"]}.json')
    json.dump(S, open(out, 'w'), indent=1, default=float)
    print('wrote', out)


if __name__ == '__main__':
    main()
