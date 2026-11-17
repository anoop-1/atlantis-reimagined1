#!/usr/bin/env python3
"""
Submit sitemaps to Google Search Console through the Search Console API (2026-11-17).

WHY. Sitemap resubmission used to be done in the GSC UI through the browser extension
(CLAUDE.md §62.4b). The API does the same with the service-account key the trends puller
uses. Submitting a sitemap is the sanctioned way to tell Google about new and changed URLs
on this site (no Indexing API: owner rule). It does not request indexing of single URLs.

SCOPE. Needs https://www.googleapis.com/auth/webmasters (read-only is not enough) and a
service account added to the property with Full or Owner permission. A 403 means the
account lacks that permission: add it in GSC Settings -> Users and permissions, or submit
in the UI (Sitemaps -> https://atlantisndt.com/sitemap-index.xml).

KEY: scripts/gsc-service-account.json (gitignored). Never print or commit it.

USAGE
  python3 scripts/gsc-sitemap-submit.py                 # submit sitemap-index.xml, then list status
  python3 scripts/gsc-sitemap-submit.py --list          # list only
  python3 scripts/gsc-sitemap-submit.py --also-children # also submit every sitemap the index lists
"""
import argparse, base64, json, os, re, subprocess, sys, tempfile, time, urllib.parse, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
KEY = os.environ.get('GSC_KEY', os.path.join(HERE, 'gsc-service-account.json'))
SCOPE = 'https://www.googleapis.com/auth/webmasters'
API = 'https://www.googleapis.com/webmasters/v3/sites/{site}/sitemaps'
SITES = ['https://atlantisndt.com/', 'https://atlantisndt.com', 'sc-domain:atlantisndt.com']
INDEX = 'https://atlantisndt.com/sitemap-index.xml'


def b64(b):
    return base64.urlsafe_b64encode(b).rstrip(b'=').decode()


def token():
    sa = json.load(open(KEY))
    now = int(time.time())
    head = b64(json.dumps({'alg': 'RS256', 'typ': 'JWT'}).encode())
    claim = b64(json.dumps({'iss': sa['client_email'], 'scope': SCOPE, 'aud': sa['token_uri'],
                            'iat': now, 'exp': now + 3600}).encode())
    with tempfile.NamedTemporaryFile('w', delete=False, suffix='.pem') as f:
        f.write(sa['private_key']); pem = f.name
    try:
        sig = subprocess.run(['openssl', 'dgst', '-sha256', '-sign', pem], input=f'{head}.{claim}'.encode(),
                             capture_output=True, check=True).stdout
    finally:
        os.unlink(pem)
    body = urllib.parse.urlencode({'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                                   'assertion': f'{head}.{claim}.{b64(sig)}'}).encode()
    return json.load(urllib.request.urlopen(sa['token_uri'], body))['access_token'], sa['client_email']


def call(method, url, tok):
    req = urllib.request.Request(url, method=method, headers={'Authorization': f'Bearer {tok}'})
    try:
        with urllib.request.urlopen(req) as r:
            raw = r.read().decode()
            return r.status, (json.loads(raw) if raw.strip() else {})
    except urllib.error.HTTPError as e:
        return e.code, {'error': e.read().decode()[:300]}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--list', action='store_true')
    ap.add_argument('--also-children', action='store_true')
    a = ap.parse_args()
    tok, who = token()
    print(f'service account: {who.split("@")[0]}@…')
    site = None
    for s in SITES:
        st, _ = call('GET', API.format(site=urllib.parse.quote(s, safe='')), tok)
        if st == 200:
            site = s; break
    if not site:
        print('No property form answered 200; the account may not be a user of the property.'); sys.exit(1)
    print(f'property: {site}')
    base = API.format(site=urllib.parse.quote(site, safe=''))
    if not a.list:
        feeds = [INDEX]
        if a.also_children:
            xml = urllib.request.urlopen(INDEX).read().decode()
            feeds += re.findall(r'<loc>\s*([^<\s]+)\s*</loc>', xml)
        for f in feeds:
            st, body = call('PUT', f'{base}/{urllib.parse.quote(f, safe="")}', tok)
            print(f'submit {f}: HTTP {st} {body.get("error", "") if isinstance(body, dict) else ""}')
    st, body = call('GET', base, tok)
    for sm in (body.get('sitemap') or []):
        n = sum(int(c.get('submitted', 0)) for c in sm.get('contents', []))
        print(f"{sm.get('path')}  lastSubmitted={sm.get('lastSubmitted', '-')[:19]}  lastDownloaded={sm.get('lastDownloaded', '-')[:19]}"
              f"  pending={sm.get('isPending')}  errors={sm.get('errors')}  warnings={sm.get('warnings')}  urls={n}")


if __name__ == '__main__':
    main()
