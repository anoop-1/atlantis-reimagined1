#!/usr/bin/env python3
"""
Zero-dependency GSC + GA4 puller for the Mac (2026-10-10).

WHY THIS EXISTS: the Mac has no Node, so the repo's gsc-*.mjs / ga4-*.mjs
scripts cannot run there, and the system Python has no google-auth. This
signs the service-account JWT with the system `openssl` binary and calls the
REST APIs directly with urllib. Same credentials file the Node scripts use:
scripts/gsc-service-account.json (gitignored, from Tokens.docx — never commit).

Rules baked in (CLAUDE.md): trailing-slash variants are SUMMED, never collapsed
(§20.11/§21.8); rows are sorted client-side (§23.2); country-filtered pulls are
shape-only — use --dims country for totals (§31.2).

Usage:
  python3 scripts/mac-gsc-ga4-pull.py gsc --days 28 --dims query,page [--country usa] [--out f.json]
  python3 scripts/mac-gsc-ga4-pull.py gsc --days 90 --dims country
  python3 scripts/mac-gsc-ga4-pull.py ga4 --days 28 [--property 517088706]
"""
import argparse, base64, datetime as dt, json, os, subprocess, sys, tempfile, time
import urllib.parse, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
KEY = os.environ.get('GSC_KEY_FILE', os.path.join(HERE, 'gsc-service-account.json'))
SITE = 'https://atlantisndt.com'
SCOPES = 'https://www.googleapis.com/auth/webmasters.readonly https://www.googleapis.com/auth/analytics.readonly'


def b64(b):
    return base64.urlsafe_b64encode(b).rstrip(b'=').decode()


def token():
    if not os.path.exists(KEY):
        sys.exit(f'Missing {KEY}. Copy the service-account JSON from Tokens.docx there (gitignored).')
    sa = json.load(open(KEY))
    now = int(time.time())
    head = b64(json.dumps({'alg': 'RS256', 'typ': 'JWT'}).encode())
    claim = b64(json.dumps({'iss': sa['client_email'], 'scope': SCOPES,
                            'aud': 'https://oauth2.googleapis.com/token', 'iat': now, 'exp': now + 3600}).encode())
    signing_input = f'{head}.{claim}'.encode()
    with tempfile.NamedTemporaryFile('w', suffix='.pem', delete=False) as f:
        f.write(sa['private_key']); pem = f.name
    try:
        os.chmod(pem, 0o600)
        sig = subprocess.run(['openssl', 'dgst', '-sha256', '-sign', pem], input=signing_input,
                             capture_output=True, check=True).stdout
    finally:
        os.unlink(pem)
    body = urllib.parse.urlencode({'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                                   'assertion': f'{head}.{claim}.{b64(sig)}'}).encode()
    try:
        return json.load(urllib.request.urlopen('https://oauth2.googleapis.com/token', body))['access_token']
    except urllib.error.HTTPError as e:
        sys.exit(f'Token exchange failed ({e.code}): {e.read().decode()[:300]}')


def post(url, tok, payload):
    req = urllib.request.Request(url, json.dumps(payload).encode(),
                                 {'Authorization': f'Bearer {tok}', 'Content-Type': 'application/json'})
    try:
        return json.load(urllib.request.urlopen(req))
    except urllib.error.HTTPError as e:
        sys.exit(f'HTTP {e.code}: {e.read().decode()[:400]}')


def gsc(a, tok):
    end = dt.date.today() - dt.timedelta(days=3)          # GSC finalises ~3 days behind
    start = end - dt.timedelta(days=a.days - 1)
    dims = a.dims.split(',')
    q = {'startDate': str(start), 'endDate': str(end), 'dimensions': dims, 'rowLimit': 25000, 'dataState': 'final'}
    if a.country:
        q['dimensionFilterGroups'] = [{'filters': [{'dimension': 'country', 'operator': 'equals', 'expression': a.country}]}]
    url = f'https://www.googleapis.com/webmasters/v3/sites/{urllib.parse.quote(SITE, safe="")}/searchAnalytics/query'
    rows, start_row = [], 0
    while True:
        q['startRow'] = start_row
        got = post(url, tok, q).get('rows', [])
        rows += got
        if len(got) < 25000: break
        start_row += 25000
    merged = {}
    for r in rows:
        keys = [k.replace(SITE, '') for k in r['keys']]
        if 'page' in dims:                               # sum slash variants, never overwrite
            i = dims.index('page'); keys[i] = keys[i].rstrip('/') or '/'
        k = tuple(keys)
        m = merged.setdefault(k, {'clicks': 0, 'impressions': 0, 'posw': 0.0})
        m['clicks'] += r['clicks']; m['impressions'] += r['impressions']; m['posw'] += r['position'] * r['impressions']
    out = [{**dict(zip(dims, k)), 'clicks': v['clicks'], 'impressions': v['impressions'],
            'ctr': round(v['clicks'] / v['impressions'], 4) if v['impressions'] else 0,
            'position': round(v['posw'] / v['impressions'], 1) if v['impressions'] else None}
           for k, v in merged.items()]
    out.sort(key=lambda r: -r['impressions'])
    return {'window': [str(start), str(end)], 'dims': dims, 'country': a.country, 'rows': out}


def ga4(a, tok):
    body = {'dateRanges': [{'startDate': f'{a.days}daysAgo', 'endDate': 'yesterday'}],
            'dimensions': [{'name': 'sessionDefaultChannelGroup'}, {'name': 'country'}],
            'metrics': [{'name': n} for n in ('sessions', 'engagedSessions', 'averageSessionDuration', 'keyEvents')],
            'limit': 1000}
    r = post(f'https://analyticsdata.googleapis.com/v1beta/properties/{a.property}:runReport', tok, body)
    rows = [{'channel': x['dimensionValues'][0]['value'], 'country': x['dimensionValues'][1]['value'],
             **{m: float(v['value']) for m, v in zip(('sessions', 'engaged', 'avgDuration', 'keyEvents'), x['metricValues'])}}
            for x in r.get('rows', [])]
    rows.sort(key=lambda r: -r['sessions'])
    return {'days': a.days, 'property': a.property, 'rows': rows}


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('source', choices=['gsc', 'ga4'])
    ap.add_argument('--days', type=int, default=28)
    ap.add_argument('--dims', default='query,page')
    ap.add_argument('--country')
    ap.add_argument('--property', default='517088706')
    ap.add_argument('--out')
    a = ap.parse_args()
    tok = token()
    res = gsc(a, tok) if a.source == 'gsc' else ga4(a, tok)
    text = json.dumps(res, indent=1)
    if a.out:
        open(a.out, 'w').write(text); print(f'wrote {a.out}: {len(res["rows"])} rows')
    else:
        print(text[:4000])
