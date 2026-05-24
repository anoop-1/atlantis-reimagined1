#!/usr/bin/env python3
"""Fetch Vercel deploy logs using token from a non-shell source.
The token is passed via stdin to avoid leaking it into process args."""
import sys, json, urllib.request

token = sys.stdin.readline().strip()
deploy_id = sys.argv[1]

req = urllib.request.Request(
    f'https://api.vercel.com/v3/deployments/{deploy_id}/events?limit=300&direction=forward&follow=0',
    headers={'Authorization': f'Bearer {token}'}
)
try:
    with urllib.request.urlopen(req, timeout=60) as resp:
        body = resp.read().decode('utf-8', errors='replace')
except Exception as e:
    print('ERR:', e); sys.exit(1)

events = []
try:
    events = json.loads(body)
except Exception:
    for line in body.split('\n'):
        line = line.strip()
        if not line: continue
        try: events.append(json.loads(line))
        except: pass

if not events:
    print('NO EVENTS. raw:', body[:600])
    sys.exit(0)

for e in events[-100:]:
    if not isinstance(e, dict): continue
    txt = ''
    if isinstance(e.get('payload'), dict):
        txt = e['payload'].get('text', '')
    if not txt:
        txt = e.get('text', '')
    typ = e.get('type', '')
    if txt:
        print(f'[{typ:8}] {txt[:400]}')
