#!/usr/bin/env python3
"""Submit 12 new blog URLs to Google Indexing API. Uses one SA keyfile.

Run: python scripts/gsc-submit-12-blog-batch.py
"""
import os, sys, time, json, glob

# Pick the first available SA keyfile from E:\software\Atlantis
SA_GLOB = r'E:\software\Atlantis\atlantis-gsc-*.json'
keyfiles = [f for f in glob.glob(SA_GLOB) if 'Copy' not in f]
if not keyfiles:
    print('No SA keyfile found at', SA_GLOB); sys.exit(1)
sa_path = keyfiles[0]
print(f'Using SA: {sa_path}')

URLS_FILE = r'E:\software\Atlantis\atlantis-reimagined1\scripts\gsc-launch-blog-batch-2026-05-17.txt'
urls = [u.strip() for u in open(URLS_FILE).read().splitlines() if u.strip()]
print(f'URLs: {len(urls)}')

try:
    from google.oauth2 import service_account
    import google.auth.transport.requests
    import requests
except ImportError:
    import subprocess
    subprocess.run([sys.executable, '-m', 'pip', 'install', '-q',
                    'google-auth', 'google-auth-httplib2',
                    'google-api-python-client', 'requests'], check=True)
    from google.oauth2 import service_account
    import google.auth.transport.requests
    import requests

SCOPES = ['https://www.googleapis.com/auth/indexing']
creds = service_account.Credentials.from_service_account_file(sa_path, scopes=SCOPES)

def token():
    if not creds.valid or creds.expired:
        creds.refresh(google.auth.transport.requests.Request())
    return creds.token

results = []
for i, url in enumerate(urls, 1):
    try:
        r = requests.post(
            'https://indexing.googleapis.com/v3/urlNotifications:publish',
            headers={'Authorization': f'Bearer {token()}', 'Content-Type': 'application/json'},
            json={'url': url, 'type': 'URL_UPDATED'},
            timeout=20,
        )
        ok = r.status_code in (200, 202)
        marker = 'OK' if ok else f'FAIL {r.status_code}'
        body_snip = r.text[:120].replace('\n', ' ')
        print(f'  [{i:02d}] {marker} {url} | {body_snip}')
        results.append({'url': url, 'status': r.status_code, 'ok': ok, 'body': r.text})
        time.sleep(0.4)
    except Exception as e:
        print(f'  [{i:02d}] EXC {url} | {e}')
        results.append({'url': url, 'status': 0, 'ok': False, 'error': str(e)})

ok_count = sum(1 for x in results if x['ok'])
print()
print(f'Submitted: {ok_count}/{len(urls)}')

# Save log
out = r'E:\software\Atlantis\atlantis-reimagined1\scripts\gsc-launch-blog-batch-2026-05-17.log.json'
with open(out, 'w') as f:
    json.dump({'sa': sa_path, 'submitted_at': time.strftime('%Y-%m-%dT%H:%M:%S'), 'results': results}, f, indent=2)
print(f'Log: {out}')
