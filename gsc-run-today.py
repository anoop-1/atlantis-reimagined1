#!/usr/bin/env python3
"""GSC daily indexing drip-feeder — run this from your workspace folder"""

import glob, os, json, sys, datetime, time

# ── 1. Discover workspace ────────────────────────────────────────────────────
# When run manually, use the script's own directory as the workspace
workspace = os.path.dirname(os.path.abspath(__file__))
print(f"✓ Workspace: {workspace}")

# ── 2. Find service account credentials ─────────────────────────────────────
sa_path = None
for f in glob.glob(os.path.join(workspace, '**', '*.json'), recursive=True):
    try:
        with open(f) as fp:
            data = json.load(fp)
            if data.get('type') == 'service_account':
                sa_path = f
                break
    except Exception:
        pass

if not sa_path:
    print("ERROR: No service account JSON found. Place your Google service account key in this folder.")
    sys.exit(1)

print(f"✓ Credentials: {sa_path}")

# ── 3. Load URL batches ──────────────────────────────────────────────────────
batch_candidates = [
    os.path.join(workspace, 'gsc-drip-batches.json'),
    os.path.join(workspace, 'software', 'visapath', 'gsc-drip-batches.json'),
]
batches = {}
batch_file = None
for path in batch_candidates:
    if os.path.exists(path):
        with open(path) as f:
            batches = json.load(f)
        batch_file = path
        print(f"✓ Batch file: {batch_file}")
        break
if not batch_file:
    print("⚠ No gsc-drip-batches.json found — GoVisa/satellite URLs will be skipped")

# ── 4. Load or initialise state ──────────────────────────────────────────────
state_path = os.path.join(workspace, 'gsc-indexing-state.json')
if os.path.exists(state_path):
    with open(state_path) as f:
        state = json.load(f)
    print(f"✓ State loaded: {state_path}")
else:
    state = {
        "last_updated": "",
        "priority1_ndt": {"last_position": 0, "submitted": [], "already_indexed": [], "errors": []},
        "priority2_govisa": {"last_position": 0, "submitted": [], "already_indexed": [], "errors": []},
        "priority3_satellites": {"last_position": 0, "submitted": [], "already_indexed": [], "errors": []}
    }
    print(f"⚠ No state file found — starting fresh")

# ── 5. Build NDT URL list ────────────────────────────────────────────────────
BASE = "https://ndt-connect.com"
SERVICES = [
    "ultrasonic-testing","magnetic-particle-inspection","liquid-penetrant-testing",
    "radiographic-testing","visual-inspection","eddy-current-testing",
    "phased-array-ultrasonic-testing","time-of-flight-diffraction","computed-tomography",
    "digital-radiography","guided-wave-testing","remote-visual-inspection",
    "acoustic-emission-testing","thermographic-inspection","leak-testing",
    "hardness-testing","positive-material-identification","ferrite-testing",
]
INDUSTRIES = [
    "oil-gas","aerospace","automotive","power-generation","construction","manufacturing",
    "marine","railway","chemical","nuclear","petrochemical","wind-energy","pipeline","pressure-vessels",
]
CITIES = [
    "houston","new-york","los-angeles","chicago","dallas","philadelphia","phoenix",
    "san-antonio","san-diego","san-jose","austin","jacksonville","fort-worth",
    "columbus","charlotte","indianapolis","san-francisco","seattle","denver",
    "abu-dhabi","dubai","riyadh","doha","kuwait-city","muscat",
]
STATIC = [
    "/","/about","/services","/contact","/blog","/industries","/case-studies",
    "/resources","/faq","/pricing","/careers","/team","/partners","/certifications",
    "/news","/events","/gallery","/testimonials","/sitemap.xml",
]

ndt_urls = []
ndt_urls += [BASE + p for p in STATIC]
ndt_urls += [f"{BASE}/services/{s}" for s in SERVICES]
ndt_urls += [f"{BASE}/industries/{i}" for i in INDUSTRIES]
ndt_urls += [f"{BASE}/services/{s}/{c}" for s in SERVICES for c in CITIES]
ndt_urls += [f"{BASE}/{i}/{s}" for i in INDUSTRIES for s in SERVICES]
ndt_urls += [f"{BASE}/services/{s}/applications" for s in SERVICES]
ndt_urls += [f"{BASE}/services/{s}/standards" for s in SERVICES]
ndt_urls += [f"{BASE}/services/{s}/equipment" for s in SERVICES]

already_done_ndt = set(state["priority1_ndt"]["submitted"] + state["priority1_ndt"]["already_indexed"])
remaining_ndt = [u for u in ndt_urls if u not in already_done_ndt]

govisa_urls = batches.get("priority3_visapath", [])
already_done_govisa = set(state["priority2_govisa"]["submitted"] + state["priority2_govisa"]["already_indexed"])
remaining_govisa = [u for u in govisa_urls if u not in already_done_govisa]

sat_base = batches.get("priority4_satellites", [
    "https://passport-power-index.vercel.app/",
    "https://visa-free-destinations.vercel.app/",
    "https://evisa-guide.vercel.app/",
    "https://digital-nomad-visas.vercel.app/",
    "https://travel-docs-checklist.vercel.app/",
])
sat_urls = list(sat_base) + [u.rstrip('/') + '/sitemap.xml' for u in sat_base]
already_done_sat = set(state["priority3_satellites"]["submitted"] + state["priority3_satellites"]["already_indexed"])
remaining_sat = [u for u in sat_urls if u not in already_done_sat]

print(f"\n📊 Remaining URLs:")
print(f"  Priority 1 (NDT):        {len(remaining_ndt):,} of {len(ndt_urls):,}")
print(f"  Priority 2 (GoVisa):     {len(remaining_govisa):,} of {len(govisa_urls):,}")
print(f"  Priority 3 (Satellites): {len(remaining_sat):,} of {len(sat_urls):,}")

# ── 6. Auth ───────────────────────────────────────────────────────────────────
try:
    from google.oauth2 import service_account
    import google.auth.transport.requests
    import requests as req_lib
except ImportError:
    import subprocess
    print("\n📦 Installing google-auth + requests...")
    subprocess.run([sys.executable, "-m", "pip", "install",
                    "google-auth", "google-auth-httplib2",
                    "google-api-python-client", "requests",
                    "--break-system-packages", "-q"], check=True)
    from google.oauth2 import service_account
    import google.auth.transport.requests
    import requests as req_lib

SCOPES = [
    "https://www.googleapis.com/auth/webmasters",
    "https://www.googleapis.com/auth/indexing",
]
creds = service_account.Credentials.from_service_account_file(sa_path, scopes=SCOPES)

def get_token():
    if not creds.valid or creds.expired:
        creds.refresh(google.auth.transport.requests.Request())
    return creds.token

def site_for(url):
    for domain in ["ndt-connect.com","go-visa.vercel.app","passport-power-index.vercel.app",
                   "visa-free-destinations.vercel.app","evisa-guide.vercel.app",
                   "digital-nomad-visas.vercel.app","travel-docs-checklist.vercel.app"]:
        if domain in url:
            return f"https://{domain}/"
    return "/".join(url.split("/")[:3]) + "/"

def check_indexed(url):
    token = get_token()
    r = req_lib.post(
        "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
        json={"inspectionUrl": url, "siteUrl": site_for(url)},
        timeout=15,
    )
    if r.status_code == 200:
        res = r.json().get("inspectionResult", {}).get("indexStatusResult", {})
        return res.get("verdict") == "PASS" or "indexed" in res.get("coverageState", "").lower()
    return False

def submit_url(url):
    token = get_token()
    r = req_lib.post(
        "https://indexing.googleapis.com/v3/urlNotifications:publish",
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
        json={"url": url, "type": "URL_UPDATED"},
        timeout=15,
    )
    return r.status_code in (200, 202)

# ── 7. Build today's batch ────────────────────────────────────────────────────
today_batch = [
    ("priority1_ndt",        remaining_ndt[:120]),
    ("priority2_govisa",     remaining_govisa[:60]),
    ("priority3_satellites", remaining_sat[:20]),
]
total = sum(len(u) for _, u in today_batch)
print(f"\n🚀 Submitting up to {total} URLs today")

# ── 8. Submit ─────────────────────────────────────────────────────────────────
submitted = already_indexed = errors = 0
today = datetime.date.today().isoformat()

for key, urls in today_batch:
    if not urls:
        continue
    print(f"\n── {key} ({len(urls)} URLs) ──")
    for i, url in enumerate(urls, 1):
        try:
            if check_indexed(url):
                state[key]["already_indexed"].append(url)
                already_indexed += 1
                print(f"  ✓ [{i:03d}] Already indexed: {url}")
            else:
                if submit_url(url):
                    state[key]["submitted"].append(url)
                    submitted += 1
                    print(f"  📤 [{i:03d}] Submitted: {url}")
                else:
                    state[key]["errors"].append(url)
                    errors += 1
                    print(f"  ✗ [{i:03d}] Error: {url}")
            time.sleep(0.3)
        except Exception as e:
            state[key]["errors"].append(url)
            errors += 1
            print(f"  ✗ [{i:03d}] Exception ({url}): {e}")

# ── 9. Save state ─────────────────────────────────────────────────────────────
state["last_updated"] = today
with open(state_path, 'w') as f:
    json.dump(state, f, indent=2)

print(f"""
════════════════════════════════════════
  GSC INDEXING RUN — {today}
════════════════════════════════════════
  📤 Newly submitted  : {submitted}
  ✓  Already indexed  : {already_indexed}
  ✗  Errors           : {errors}
  📁 State saved      : {state_path}

  Cumulative:
    NDT        {len(state['priority1_ndt']['submitted']):,} submitted, {len(state['priority1_ndt']['already_indexed']):,} indexed
    GoVisa     {len(state['priority2_govisa']['submitted'])} submitted, {len(state['priority2_govisa']['already_indexed'])} indexed
    Satellites {len(state['priority3_satellites']['submitted'])} submitted, {len(state['priority3_satellites']['already_indexed'])} indexed
════════════════════════════════════════
""")
