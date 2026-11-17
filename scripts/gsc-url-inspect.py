#!/usr/bin/env python3
"""
GSC URL Inspection through the API (2026-11-17).

WHY. Replaces the browser-extension URL Inspection checks (GSC UI quota ~10
requests/day). The API allows 2,000 inspections/day per property, read-only:
it reports index status, coverage state, Google's chosen canonical and the last
crawl. It does NOT request indexing (no Indexing API on this site: sitemaps +
IndexNow only, owner rule).

KEY: scripts/gsc-service-account.json (gitignored), as seo-trends-pull.py.

USAGE
  python3 scripts/gsc-url-inspect.py /path-a /path-b ...
  python3 scripts/gsc-url-inspect.py --file urls.txt [--out result.json]
"""
import argparse, importlib.util, json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('puller', os.path.join(HERE, 'mac-gsc-ga4-pull.py'))
P = importlib.util.module_from_spec(spec); spec.loader.exec_module(P)
API = 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect'
SITES = ['https://atlantisndt.com', 'https://atlantisndt.com/', 'sc-domain:atlantisndt.com']


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('paths', nargs='*')
    ap.add_argument('--file')
    ap.add_argument('--out')
    a = ap.parse_args()
    paths = list(a.paths)
    if a.file:
        paths += [l.strip() for l in open(a.file) if l.strip()]
    tok = P.token()
    site = None
    out = []
    for p in paths:
        url = p if p.startswith('http') else 'https://atlantisndt.com' + p
        tries = [site] if site else SITES
        res = None
        for s in tries:
            try:
                import urllib.request
                req = urllib.request.Request(API, json.dumps({'inspectionUrl': url, 'siteUrl': s}).encode(),
                                             {'Authorization': f'Bearer {tok}', 'Content-Type': 'application/json'})
                res = json.load(urllib.request.urlopen(req)); site = s; break
            except Exception as e:  # wrong siteUrl form → try the next
                err = getattr(e, 'read', lambda: b'')().decode()[:160]
        if res is None:
            print(f'FAIL {url} {err}'); continue
        r = res.get('inspectionResult', {}).get('indexStatusResult', {})
        row = {'url': url, 'verdict': r.get('verdict'), 'coverage': r.get('coverageState'),
               'indexing': r.get('indexingState'), 'lastCrawl': r.get('lastCrawlTime'),
               'googleCanonical': r.get('googleCanonical'), 'userCanonical': r.get('userCanonical'),
               'robots': r.get('robotsTxtState'), 'fetch': r.get('pageFetchState')}
        out.append(row)
        print(f"{row['verdict'] or '-':8s} {row['coverage'] or '-':40s} {(row['lastCrawl'] or '-')[:10]} {url.replace('https://atlantisndt.com', '')}")
    if a.out:
        json.dump(out, open(a.out, 'w'), indent=1)


if __name__ == '__main__':
    main()
