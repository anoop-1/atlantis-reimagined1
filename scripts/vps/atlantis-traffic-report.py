#!/usr/bin/env python3
"""Daily real-vs-bot traffic report for atlantisndt.com, by country.

Owner direction (2026-10-02): don't block Singapore/China - segregate and assess.
Reads the nginx access log (format atl_traffic: combined + cc=<ISO> dc=<0|1>)
and classifies each client IP for one day:

  crawler      declared search/AI/SEO crawler (by user agent)
  blocked      got 403 (scraper UA map) - fake/abusive clients only
  datacenter   from a flagged cloud range (served, rate-limited, logged apart)
  human        browser UA that also fetched JS from /assets/ (JS-executing visit)
  browser_nojs browser UA, HTML only, never fetched JS (usually a scraper)
  other        anything else

Counts unique IPs, HTML page views and enquiry submissions (POST /api/contact)
per class per country. Writes /var/log/atlantis-traffic/<date>.json + .txt.
Usage: atlantis-traffic-report [YYYY-MM-DD|today]   (default: yesterday)
"""
import gzip, json, os, re, sys
from collections import defaultdict
from datetime import date, datetime, timedelta

LOG_DIR = "/var/log/nginx"
OUT_DIR = "/var/log/atlantis-traffic"
LINE = re.compile(r'^(\S+) - \S+ \[([^\]]+)\] "(\S+) (\S+)[^"]*" (\d{3}) \S+ "[^"]*" "([^"]*)"(?: cc=(\S*) dc=(\d))?')
CRAWLER = re.compile(r"googlebot|bingbot|applebot|duckduckbot|yandex|baiduspider|sogou|petalbot|gptbot|oai-searchbot|chatgpt-user|claudebot|claude-user|perplexity|meta-externalagent|facebookexternalhit|amazonbot|ccbot|ahrefs|semrush|mj12|dotbot|bot\b|crawler|spider|slurp", re.I)
BROWSER = re.compile(r"^Mozilla/5\.0 \(", re.I)

def day_arg():
    a = sys.argv[1] if len(sys.argv) > 1 else ""
    if a == "today":
        return date.today()
    if a:
        return datetime.strptime(a, "%Y-%m-%d").date()
    return date.today() - timedelta(days=1)

def log_files():
    names = sorted(f for f in os.listdir(LOG_DIR) if f.startswith("atlantisndt.access.log"))
    return [os.path.join(LOG_DIR, n) for n in names]

def lines(path):
    op = gzip.open if path.endswith(".gz") else open
    with op(path, "rt", errors="replace") as fh:
        yield from fh

def is_html(path):
    p = path.split("?", 1)[0]
    if p.startswith(("/assets/", "/data/", "/api/")):
        return False
    last = p.rsplit("/", 1)[-1]
    return "." not in last or last.endswith(".html")

def main():
    d = day_arg()
    tag = d.strftime("%d/%b/%Y")
    ips = {}  # ip -> info
    for f in log_files():
        for ln in lines(f):
            if tag not in ln:
                continue
            m = LINE.match(ln)
            if not m:
                continue
            ip, ts, method, path, status, ua, cc, dc = m.groups()
            i = ips.setdefault(ip, {"cc": cc or "??", "dc": dc == "1", "ua": ua, "html": 0, "js": False, "s403": 0, "enq": 0})
            if cc:
                i["cc"] = cc
            if status == "403":
                i["s403"] += 1
            if path.startswith("/assets/") and ".js" in path:
                i["js"] = True
            if method == "POST" and path.startswith("/api/contact") and status.startswith("2"):
                i["enq"] += 1
            if method == "GET" and is_html(path) and status in ("200", "304"):
                i["html"] += 1

    def klass(i):
        if CRAWLER.search(i["ua"]):
            return "crawler"
        if i["s403"] and not i["html"]:
            return "blocked"
        if i["dc"]:
            return "datacenter"
        if BROWSER.search(i["ua"]):
            return "human" if i["js"] else "browser_nojs"
        return "other"

    by = defaultdict(lambda: defaultdict(lambda: {"ips": 0, "pageviews": 0, "enquiries": 0}))
    for ip, i in ips.items():
        k = klass(i)
        c = by[i["cc"]][k]
        c["ips"] += 1
        c["pageviews"] += i["html"]
        c["enquiries"] += i["enq"]

    os.makedirs(OUT_DIR, exist_ok=True)
    out = {"date": d.isoformat(), "countries": {cc: dict(v) for cc, v in by.items()}}
    with open(os.path.join(OUT_DIR, f"{d.isoformat()}.json"), "w") as fh:
        json.dump(out, fh, indent=1)

    focus = ["US", "CA", "SG", "CN", "IN", "SA", "AE", "MY", "GB", "AU"]
    classes = ["human", "browser_nojs", "datacenter", "crawler", "blocked", "other"]
    rows = [f"atlantisndt.com traffic by class, {d.isoformat()} (unique IPs / HTML pageviews / enquiries)"]
    rows.append(f"{'cc':4} " + " ".join(f"{c:>18}" for c in classes))
    order = focus + sorted(cc for cc in by if cc not in focus)
    for cc in order:
        if cc not in by:
            continue
        cells = []
        for c in classes:
            v = by[cc].get(c)
            cell = "%d/%d/%d" % (v["ips"], v["pageviews"], v["enquiries"]) if v else "-"
            cells.append(cell.rjust(18))
        rows.append(f"{cc:4} " + " ".join(cells))
    with open(os.path.join(OUT_DIR, f"{d.isoformat()}.txt"), "w") as fh:
        fh.write("\n".join(rows) + "\n")
    print("\n".join(rows[:16]))
    # keep 120 days
    for f in os.listdir(OUT_DIR):
        try:
            if (d - datetime.strptime(f[:10], "%Y-%m-%d").date()).days > 120:
                os.remove(os.path.join(OUT_DIR, f))
        except ValueError:
            pass

if __name__ == "__main__":
    main()
