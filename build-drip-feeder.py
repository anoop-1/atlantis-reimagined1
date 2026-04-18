#!/usr/bin/env python3
"""
build-drip-feeder.py
────────────────────
One-time script: generates ALL URLs for every site, queries GSC to check
current indexing status, then writes a single clean drip feeder containing
only URLs that are NOT yet indexed.

Output: gsc-unified-drip-feeder.json  (in the same folder as this script)
        gsc-indexing-state.json       (initialised or merged with existing)

Run once manually, then the daily task (`daily-gsc-indexing`) uses the output.
"""

import glob, os, sys, json, time, datetime, concurrent.futures

WORKSPACE = os.path.dirname(os.path.abspath(__file__))

# ─────────────────────────────────────────────────────────────────
# 1.  Install deps
# ─────────────────────────────────────────────────────────────────
try:
    from google.oauth2 import service_account
    import google.auth.transport.requests
    import requests as req_lib
except ImportError:
    import subprocess
    print("📦 Installing google-auth + requests …")
    subprocess.run([
        sys.executable, "-m", "pip", "install",
        "google-auth", "google-auth-httplib2",
        "google-api-python-client", "requests",
        "--break-system-packages", "-q"
    ], check=True)
    from google.oauth2 import service_account
    import google.auth.transport.requests
    import requests as req_lib

# ─────────────────────────────────────────────────────────────────
# 2.  Find service-account credentials
# ─────────────────────────────────────────────────────────────────
sa_path = None
for f in glob.glob(os.path.join(WORKSPACE, '**', '*.json'), recursive=True):
    try:
        with open(f) as fp:
            d = json.load(fp)
        if d.get('type') == 'service_account':
            sa_path = f
            break
    except Exception:
        pass

if not sa_path:
    print("ERROR: No service-account JSON found in workspace. "
          "Place your Google service-account key file here and re-run.")
    sys.exit(1)

print(f"✓ Credentials : {sa_path}")

SCOPES = [
    "https://www.googleapis.com/auth/webmasters",
    "https://www.googleapis.com/auth/indexing",
]
creds = service_account.Credentials.from_service_account_file(sa_path, scopes=SCOPES)

def _refresh():
    if not creds.valid or creds.expired:
        creds.refresh(google.auth.transport.requests.Request())

def token():
    _refresh()
    return creds.token

# ─────────────────────────────────────────────────────────────────
# 3.  URL master lists – every site
# ─────────────────────────────────────────────────────────────────

# ── Shared taxonomy ───────────────────────────────────────────────
SERVICES = [
    "ultrasonic-testing", "magnetic-particle-inspection",
    "liquid-penetrant-testing", "radiographic-testing", "visual-inspection",
    "eddy-current-testing", "phased-array-ultrasonic-testing",
    "time-of-flight-diffraction", "computed-tomography", "digital-radiography",
    "guided-wave-testing", "remote-visual-inspection",
    "acoustic-emission-testing", "thermographic-inspection", "leak-testing",
    "hardness-testing", "positive-material-identification", "ferrite-testing",
    "weld-inspection", "corrosion-inspection", "flaw-detection",
    "thickness-measurement", "structural-integrity-testing",
]
INDUSTRIES = [
    "oil-gas", "aerospace", "automotive", "power-generation", "construction",
    "manufacturing", "marine", "railway", "chemical", "nuclear",
    "petrochemical", "wind-energy", "pipeline", "pressure-vessels",
    "refinery", "shipbuilding", "defense", "mining", "food-beverage",
    "pharmaceuticals",
]
CITIES = [
    "houston", "new-york", "los-angeles", "chicago", "dallas",
    "philadelphia", "phoenix", "san-antonio", "san-diego", "san-jose",
    "austin", "jacksonville", "fort-worth", "columbus", "charlotte",
    "indianapolis", "san-francisco", "seattle", "denver", "nashville",
    "oklahoma-city", "baton-rouge", "new-orleans", "corpus-christi",
    "midland", "odessa", "tulsa", "calgary", "edmonton", "toronto",
    "abu-dhabi", "dubai", "riyadh", "jeddah", "doha", "kuwait-city",
    "muscat", "bahrain", "london", "manchester", "aberdeen",
    "singapore", "kuala-lumpur", "jakarta", "mumbai", "delhi",
]
STATIC_PAGES = [
    "", "about", "services", "contact", "blog", "industries",
    "case-studies", "resources", "faq", "pricing", "careers", "team",
    "partners", "certifications", "news", "events", "gallery",
    "testimonials", "sitemap.xml", "privacy-policy", "terms-of-service",
    "get-quote", "locations", "technology", "quality-assurance",
]


def build_ndt_urls(base: str) -> list:
    """Generate the full URL set for an NDT-type domain."""
    urls = []
    b = base.rstrip("/")

    # Static
    for p in STATIC_PAGES:
        urls.append(f"{b}/{p}" if p else b + "/")

    # Service pages
    for s in SERVICES:
        urls.append(f"{b}/services/{s}")
        urls.append(f"{b}/services/{s}/applications")
        urls.append(f"{b}/services/{s}/standards")
        urls.append(f"{b}/services/{s}/equipment")
        urls.append(f"{b}/services/{s}/cost")
        urls.append(f"{b}/services/{s}/procedure")
        urls.append(f"{b}/services/{s}/benefits")

    # Industry pages
    for i in INDUSTRIES:
        urls.append(f"{b}/industries/{i}")
        urls.append(f"{b}/industries/{i}/overview")
        for s in SERVICES:
            urls.append(f"{b}/industries/{i}/{s}")

    # Geographic service pages
    for s in SERVICES:
        for c in CITIES:
            urls.append(f"{b}/services/{s}/{c}")

    # Combo pages
    for i in INDUSTRIES:
        for s in SERVICES:
            urls.append(f"{b}/{i}/{s}")

    return list(dict.fromkeys(urls))   # deduplicate, preserve order


# ── ndt-connect.com ───────────────────────────────────────────────
NDT_CONNECT_URLS = build_ndt_urls("https://ndt-connect.com")

# ── atlantisndt.com ───────────────────────────────────────────────
ATLANTIS_URLS = build_ndt_urls("https://atlantisndt.com")

# ── NDT satellite sites (Vercel) ──────────────────────────────────
NDT_SATELLITES = [
    "https://oil-gas-inspection-guide.vercel.app",
    "https://power-generation-ndt.vercel.app",
    "https://welding-inspection-hub.vercel.app",
]
NDT_SAT_URLS = []
for base in NDT_SATELLITES:
    b = base.rstrip("/")
    NDT_SAT_URLS.append(b + "/")
    NDT_SAT_URLS.append(b + "/sitemap.xml")
    for p in STATIC_PAGES[:10]:   # lighter set for satellites
        if p:
            NDT_SAT_URLS.append(f"{b}/{p}")
    for s in SERVICES[:10]:
        NDT_SAT_URLS.append(f"{b}/services/{s}")
    for i in INDUSTRIES[:8]:
        NDT_SAT_URLS.append(f"{b}/industries/{i}")

# ── GoVisa main app ───────────────────────────────────────────────
# Try to load from existing gsc-drip-batches.json first
GOVISA_URLS = []
batch_candidates = [
    os.path.join(WORKSPACE, "gsc-drip-batches.json"),
    os.path.join(WORKSPACE, "software", "visapath", "gsc-drip-batches.json"),
]
for bc in batch_candidates:
    if os.path.exists(bc):
        with open(bc) as f:
            bd = json.load(f)
        GOVISA_URLS = bd.get("priority3_visapath", [])
        print(f"✓ GoVisa URLs loaded from {bc} ({len(GOVISA_URLS)} URLs)")
        break

if not GOVISA_URLS:
    # Fallback: known GoVisa route patterns
    GOVISA_BASE = "https://go-visa.vercel.app"
    COUNTRIES = [
        "usa", "uk", "canada", "australia", "schengen", "uae", "singapore",
        "japan", "south-korea", "new-zealand", "france", "germany", "spain",
        "italy", "netherlands", "portugal", "greece", "turkey", "thailand",
        "malaysia", "indonesia", "vietnam", "philippines", "india", "china",
        "brazil", "mexico", "argentina", "south-africa", "kenya", "egypt",
        "jordan", "bahrain", "qatar", "kuwait", "oman", "saudi-arabia",
    ]
    NATIONALITIES = [
        "indian", "pakistani", "bangladeshi", "philippine", "nigerian",
        "ghanaian", "kenyan", "egyptian", "indonesian", "vietnamese",
        "chinese", "brazilian", "mexican", "colombian", "nepalese", "sri-lankan",
    ]
    VISA_TYPES = [
        "tourist", "business", "student", "work", "transit",
        "family", "medical", "digital-nomad", "investor",
    ]
    GOVISA_URLS.extend([
        GOVISA_BASE + "/",
        GOVISA_BASE + "/about",
        GOVISA_BASE + "/sitemap.xml",
        GOVISA_BASE + "/blog",
        GOVISA_BASE + "/visa-checker",
        GOVISA_BASE + "/countries",
        GOVISA_BASE + "/requirements",
    ])
    for c in COUNTRIES:
        GOVISA_URLS.append(f"{GOVISA_BASE}/visa/{c}")
        for vt in VISA_TYPES:
            GOVISA_URLS.append(f"{GOVISA_BASE}/visa/{c}/{vt}")
    for nat in NATIONALITIES:
        GOVISA_URLS.append(f"{GOVISA_BASE}/nationality/{nat}")
        for c in COUNTRIES[:15]:
            GOVISA_URLS.append(f"{GOVISA_BASE}/nationality/{nat}/to/{c}")
    print(f"⚠ gsc-drip-batches.json not found — generated {len(GOVISA_URLS)} GoVisa URLs from patterns")

# ── GoVisa satellite sites ────────────────────────────────────────
GOVISA_SATELLITES = [
    "https://passport-power-index.vercel.app",
    "https://visa-free-destinations.vercel.app",
    "https://evisa-guide.vercel.app",
    "https://digital-nomad-visas.vercel.app",
    "https://travel-docs-checklist.vercel.app",
]
GOVISA_SAT_URLS = []
for base in GOVISA_SATELLITES:
    b = base.rstrip("/")
    GOVISA_SAT_URLS.append(b + "/")
    GOVISA_SAT_URLS.append(b + "/sitemap.xml")
    for p in ["about", "blog", "contact", "faq", "countries", "resources"]:
        GOVISA_SAT_URLS.append(f"{b}/{p}")

# ─────────────────────────────────────────────────────────────────
# 4.  Master list with site labels
# ─────────────────────────────────────────────────────────────────
ALL_SITES = {
    "ndt_connect":    {"site": "https://ndt-connect.com/",           "urls": NDT_CONNECT_URLS},
    "atlantis_ndt":   {"site": "https://atlantisndt.com/",           "urls": ATLANTIS_URLS},
    "ndt_satellites": {"site": None,                                  "urls": NDT_SAT_URLS},
    "govisa":         {"site": "https://go-visa.vercel.app/",        "urls": GOVISA_URLS},
    "govisa_sat":     {"site": None,                                  "urls": GOVISA_SAT_URLS},
}

total_all = sum(len(v["urls"]) for v in ALL_SITES.values())
print(f"\n📊 Total URL universe: {total_all:,}")
for k, v in ALL_SITES.items():
    print(f"   {k:20s}: {len(v['urls']):,}")

# ─────────────────────────────────────────────────────────────────
# 5.  Load existing state to skip already-processed URLs
# ─────────────────────────────────────────────────────────────────
state_path = os.path.join(WORKSPACE, "gsc-indexing-state.json")
already_done = set()
if os.path.exists(state_path):
    with open(state_path) as f:
        state = json.load(f)
    for key in state:
        if isinstance(state[key], dict):
            already_done.update(state[key].get("submitted", []))
            already_done.update(state[key].get("already_indexed", []))
    print(f"\n✓ State file found — {len(already_done):,} URLs already processed, skipping them")
else:
    state = {}
    print("\n⚠ No state file found — will check every URL via GSC API (this is a full scan)")

# ─────────────────────────────────────────────────────────────────
# 6.  Check indexing status via GSC URL Inspection API
# ─────────────────────────────────────────────────────────────────
def site_for(url: str) -> str:
    mapping = {
        "ndt-connect.com":                    "https://ndt-connect.com/",
        "atlantisndt.com":                    "https://atlantisndt.com/",
        "go-visa.vercel.app":                 "https://go-visa.vercel.app/",
        "passport-power-index.vercel.app":    "https://passport-power-index.vercel.app/",
        "visa-free-destinations.vercel.app":  "https://visa-free-destinations.vercel.app/",
        "evisa-guide.vercel.app":             "https://evisa-guide.vercel.app/",
        "digital-nomad-visas.vercel.app":     "https://digital-nomad-visas.vercel.app/",
        "travel-docs-checklist.vercel.app":   "https://travel-docs-checklist.vercel.app/",
        "oil-gas-inspection-guide.vercel.app":"https://oil-gas-inspection-guide.vercel.app/",
        "power-generation-ndt.vercel.app":    "https://power-generation-ndt.vercel.app/",
        "welding-inspection-hub.vercel.app":  "https://welding-inspection-hub.vercel.app/",
    }
    for domain, site in mapping.items():
        if domain in url:
            return site
    return "/".join(url.split("/")[:3]) + "/"


def is_indexed(url: str, retries: int = 2) -> bool | None:
    """Returns True=indexed, False=not indexed, None=error."""
    for attempt in range(retries + 1):
        try:
            r = req_lib.post(
                "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
                headers={"Authorization": f"Bearer {token()}", "Content-Type": "application/json"},
                json={"inspectionUrl": url, "siteUrl": site_for(url)},
                timeout=20,
            )
            if r.status_code == 200:
                res = r.json().get("inspectionResult", {}).get("indexStatusResult", {})
                verdict    = res.get("verdict", "")
                coverage   = res.get("coverageState", "")
                return verdict == "PASS" or "indexed" in coverage.lower()
            if r.status_code == 429:
                wait = int(r.headers.get("Retry-After", 60))
                print(f"  ⏳ Rate-limited — waiting {wait}s …")
                time.sleep(wait)
            else:
                return None          # API error, leave in queue
        except Exception as e:
            if attempt == retries:
                return None
            time.sleep(2)
    return None


# ─────────────────────────────────────────────────────────────────
# 7.  Build the unified drip feeder
# ─────────────────────────────────────────────────────────────────
print("\n🔍 Checking indexing status …")
print("   (This may take a while for large URL sets — Ctrl-C is safe; progress is saved)\n")

drip_feeder = []          # final list: unindexed URLs only
confirmed_indexed = []    # URLs confirmed indexed by API
skipped_done = []         # URLs skipped because state file said already done

checked = 0
DELAY = 0.4               # seconds between API calls (stay well under quota)

for site_key, site_info in ALL_SITES.items():
    print(f"\n── {site_key} ({len(site_info['urls']):,} URLs) ──")
    site_unindexed = []
    for url in site_info["urls"]:
        url = url.strip()
        if not url:
            continue

        # Skip if state file says already done
        if url in already_done:
            skipped_done.append(url)
            continue

        result = is_indexed(url)
        checked += 1

        if result is True:
            confirmed_indexed.append(url)
            print(f"  ✓ indexed   : {url}")
        elif result is False:
            drip_feeder.append(url)
            site_unindexed.append(url)
            print(f"  📋 queued   : {url}")
        else:
            # API error — keep in feeder to be safe
            drip_feeder.append(url)
            site_unindexed.append(url)
            print(f"  ⚠ api-error : {url} (kept in feeder)")

        time.sleep(DELAY)

        # Save checkpoint every 100 URLs
        if checked % 100 == 0:
            _save_checkpoint(drip_feeder, confirmed_indexed, skipped_done,
                             state_path, state, WORKSPACE)
            print(f"\n  💾 Checkpoint saved ({checked} checked so far)\n")

# ─────────────────────────────────────────────────────────────────
# 8.  Save final outputs
# ─────────────────────────────────────────────────────────────────
def _save_checkpoint(feeder, indexed, skipped, spath, st, ws):
    out = {
        "generated_at": datetime.datetime.utcnow().isoformat() + "Z",
        "total_unindexed": len(feeder),
        "total_confirmed_indexed": len(indexed),
        "total_skipped_already_done": len(skipped),
        "urls": feeder
    }
    feeder_path = os.path.join(ws, "gsc-unified-drip-feeder.json")
    with open(feeder_path, "w") as f:
        json.dump(out, f, indent=2)

    # Merge into state file
    if "confirmed_indexed_this_scan" not in st:
        st["confirmed_indexed_this_scan"] = []
    st["confirmed_indexed_this_scan"] = list(set(
        st.get("confirmed_indexed_this_scan", []) + indexed
    ))
    st["last_scan"] = datetime.datetime.utcnow().isoformat() + "Z"
    with open(spath, "w") as f:
        json.dump(st, f, indent=2)


_save_checkpoint(drip_feeder, confirmed_indexed, skipped_done,
                 state_path, state, WORKSPACE)

feeder_path = os.path.join(WORKSPACE, "gsc-unified-drip-feeder.json")
print(f"""
════════════════════════════════════════════════════════════
  DRIP FEEDER BUILD COMPLETE
════════════════════════════════════════════════════════════
  Total URLs checked via API    : {checked:,}
  Skipped (already in state)    : {len(skipped_done):,}
  Confirmed indexed (excluded)  : {len(confirmed_indexed):,}
  ─────────────────────────────────────────────────────────
  ✅ Unindexed URLs in feeder   : {len(drip_feeder):,}
  ─────────────────────────────────────────────────────────
  Saved to : {feeder_path}
════════════════════════════════════════════════════════════
""")
