#!/usr/bin/env python3
"""
Submit URLs to the Google Indexing API (URL_UPDATED) across all available
service accounts.  RUN AFTER DEPLOY ONLY — submitting URLs that are not yet
live makes Google crawl 404s / stale content.

Caps: 200 URLs per service account per day, global cap = 200 * (#accounts).
With 10 accounts that is 2000 URLs/day.

Usage:
    python3 submit-indexing.py seo-changed-urls.txt            # live submit
    python3 submit-indexing.py seo-changed-urls.txt --dry-run  # preview only

Requires: pip install google-api-python-client google-auth
The service-account JSON files (gsc-service-account-*.json) must live in this
scripts/ folder and be added as Owners of the GSC property, with the
"Indexing API" enabled in their Google Cloud projects.
"""
import sys, os, json, time, glob, datetime

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SA_GLOB = os.path.join(SCRIPT_DIR, "gsc-service-account-*.json")
PER_ACCOUNT_DAILY = 200
SCOPES = ["https://www.googleapis.com/auth/indexing"]
LEDGER = os.path.join(SCRIPT_DIR, ".indexing-submit-ledger.jsonl")
STATE  = os.path.join(SCRIPT_DIR, ".indexing-daily-state.json")


def load_state():
    today = str(datetime.date.today())
    if os.path.exists(STATE):
        try:
            s = json.load(open(STATE))
            if s.get("day") == today:
                return s
        except Exception:
            pass
    return {"day": today, "perAccount": {}}


def main():
    from google.oauth2 import service_account
    from googleapiclient.discovery import build

    argv = sys.argv[1:]
    dry = "--dry-run" in argv
    files = [a for a in argv if not a.startswith("--")]
    if not files:
        print(__doc__); return
    urls = [u.strip() for u in open(files[0], encoding="utf-8") if u.strip() and not u.startswith("#")]
    # de-dupe, keep order
    seen = set(); urls = [u for u in urls if not (u in seen or seen.add(u))]

    sas = sorted(glob.glob(SA_GLOB))
    if not sas:
        print("No service-account files found at", SA_GLOB); return

    state = load_state()
    cap = PER_ACCOUNT_DAILY * len(sas)
    print(f"{len(urls)} URLs | {len(sas)} accounts | daily cap {cap} | already used today: {sum(state['perAccount'].values())}")

    svcs = []
    for f in sas:
        try:
            creds = service_account.Credentials.from_service_account_file(f, scopes=SCOPES)
            svcs.append((os.path.basename(f), build("indexing", "v3", credentials=creds, cache_discovery=False)))
        except Exception as e:
            print("  skip", os.path.basename(f), str(e)[:100])
    if not svcs:
        print("No usable service accounts."); return

    led = open(LEDGER, "a", encoding="utf-8")
    sent = 0; i = 0
    for url in urls:
        if sent >= cap:
            print("Global daily cap reached."); break
        placed = False
        for _ in range(len(svcs)):
            name, svc = svcs[i % len(svcs)]; i += 1
            if state["perAccount"].get(name, 0) >= PER_ACCOUNT_DAILY:
                continue
            if dry:
                print(f"[dry] {url}  ->  {name}")
            else:
                try:
                    svc.urlNotifications().publish(body={"url": url, "type": "URL_UPDATED"}).execute()
                    led.write(json.dumps({"ts": datetime.datetime.utcnow().isoformat(), "url": url, "sa": name}) + "\n")
                except Exception as e:
                    print("  ERR", url, name, str(e)[:120]); continue
            state["perAccount"][name] = state["perAccount"].get(name, 0) + 1
            sent += 1; placed = True; break
        if not placed:
            print(f"All accounts exhausted today after {sent} URLs."); break
        if not dry:
            time.sleep(0.3)
    json.dump(state, open(STATE, "w"), indent=1); led.close()
    print(f"Done. {'(dry-run) ' if dry else ''}Submitted {sent} URLs.")


if __name__ == "__main__":
    main()
