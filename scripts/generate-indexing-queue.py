#!/usr/bin/env python3
"""Generate indexing queue from sitemap, excluding already-indexed pages."""
import json, re
from datetime import datetime, timedelta

with open("public/sitemap.xml") as f:
    urls = re.findall(r"<loc>(.*?)</loc>", f.read())

# Pages already showing in GSC (from Jan 21 2026 export)
already_indexed = {
    "/", "/about", "/consulting", "/consulting-india", "/consulting-me", "/consulting-usa",
    "/contact", "/digital-twins", "/erp", "/training", "/training-india", "/training-me",
    "/training-usa", "/ndt-connect", "/ndt-connect-platform", "/ndt-consulting-level-iii",
    "/ndt-erp-solution", "/ndt-for-aerospace", "/ndt-for-oil-gas", "/ndt-for-power-generation",
    "/ndt-training-dubai", "/ndt-training-hyderabad", "/ndt-training-usa",
    "/blog", "/case-studies", "/faq", "/ndt-methods",
    "/api-510-certification", "/api-570-certification", "/api-653-certification", "/asnt-certification",
    "/eddy-current-testing-chennai", "/eddy-current-testing-houston", "/eddy-current-testing-singapore",
    "/magnetic-particle-testing-saudi-arabia", "/radiographic-testing-dubai",
    "/ultrasonic-testing-abu-dhabi", "/ultrasonic-testing-chicago",
    "/ultrasonic-testing-denver", "/ultrasonic-testing-kuwait", "/visual-testing-uk",
    "/ndt-training-online", "/ndt-training-india", "/ndt-training-saudi-arabia",
    "/aerospace-ndt-training", "/oil-gas-ndt-training", "/power-generation-ndt-training",
    "/ndt-career-guide", "/resources-downloads", "/press-media",
    "/digital-twins-oil-gas-assets", "/digital-twins-ndt-guide", "/digital-twins-oil-gas",
    "/ut-vs-rt-comparison", "/intelligent-reporting-software",
    "/blog/100-questions-answers-ndt-atlantis-global-guide", "/blog/api-653-tank-inspection-guide",
    "/blog/asset-integrity-management-guide-2025-rbi-digital-twins",
    "/blog/best-ndt-reporting-software-oil-gas-digital-twin",
    "/blog/digital-twin-roadmap-oil-gas-companies-asset-integrity",
    "/blog/digital-twins-ndt-guide", "/blog/digital-twins-ndt-reporting-oil-gas-asset-integrity",
    "/blog/digital-twins-oil-gas", "/blog/digital-twins-reduce-refinery-turnaround-time",
    "/blog/eddy-current-testing", "/blog/future-of-ndt-oil-gas-digital-twins-ai",
    "/blog/magnetic-particle-testing", "/blog/ndt-career-guide",
    "/blog/ndt-career-top-choice-2025-global-market-trends",
    "/blog/ndt-consulting-questions-answered-by-level-iii-expert",
    "/blog/ndt-level-iii-consulting-global-oil-gas-aerospace-nuclear-maritime",
    "/blog/ndt-salary-guide-2025-global-level-1-2-3",
    "/blog/ndt-training-complete-guide-courses-certification-global",
    "/blog/ndt-training-vs-certification-2025-oil-gas-expectations",
    "/blog/penetrant-testing", "/blog/radiographic-testing",
    "/blog/ultimate-guide-ndt-digital-twins-asset-integrity-2025",
    "/blog/ultrasonic-testing", "/blog/visual-testing",
    "/blog/ndt-consulting-costs-pricing-guide-2025", "/blog/asnt-level-iii-ndt-consulting-guide",
    "/blog/ndt-level-iii-consulting-services-guide",
    "/blog/asme-section-v-ndt-procedure-rejection-causes",
    "/blog/pdf-ndt-reports-vs-digital-twin-asset-integrity",
    "/blog/ut-vs-rt-comparison", "/blog/digital-twins-ndt-guide", "/blog/digital-twins-oil-gas",
    "/consulting/ndt-consulting-level-iii",
}

new_urls = []
for u in urls:
    path = u.replace("https://atlantisndt.com", "")
    if not path:
        path = "/"
    if path not in already_indexed:
        new_urls.append(u)

KEY_CITIES = {"houston","dubai","saudi-arabia","mumbai","singapore","london",
              "abu-dhabi","calgary","los-angeles","new-orleans","denver","hyderabad"}

def priority(url):
    p = url.replace("https://atlantisndt.com", "")
    # P1: Key consulting hubs
    if p.startswith("/consulting/"):
        slug = p.split("ndt-consulting-")[-1] if "ndt-consulting-" in p else ""
        if slug in KEY_CITIES:
            return (1, p)
    # P2: Digital Twin city pages
    if p.startswith("/digital-twin-") and "reporting" not in p:
        return (2, p)
    # P3: Advanced NDT + pillar method pages
    advanced = ["phased-array","tofd","guided-wave","corrosion-mapping","corrosion-under",
                "weld-inspection","acoustic-emission","magnetic-flux","ndt-technician",
                "digital-twin-reporting","api-570-training","eddy-current-tube"]
    if any(a in p for a in advanced):
        return (3, p)
    methods = ["/ultrasonic-testing","/radiographic-testing","/magnetic-particle-testing",
               "/penetrant-testing","/eddy-current-testing","/visual-testing"]
    if p in methods:
        return (3, p)
    # P4: ERP city pages
    if p.startswith("/ndt-erp-"):
        return (4, p)
    # P5: Remaining consulting
    if p.startswith("/consulting/"):
        return (5, p)
    # P6: Method+location combos
    return (6, p)

new_urls.sort(key=priority)

batches = []
start = datetime(2026, 2, 26)
for i in range(0, len(new_urls), 12):
    batch = new_urls[i:i+12]
    day = (i // 12) + 1
    d = start + timedelta(days=day - 1)
    paths = [u.replace("https://atlantisndt.com","") for u in batch]
    if any(p.startswith("/consulting/") and any(c in p for c in KEY_CITIES) for p in paths):
        label = "P1-KeyConsultingHubs"
    elif any(p.startswith("/digital-twin-") for p in paths):
        label = "P2-DigitalTwinCities"
    elif any(a in str(paths) for a in ["phased","tofd","guided","corrosion","weld","acoustic","flux"]):
        label = "P3-AdvancedNDT+Pillars"
    elif any(p.startswith("/ndt-erp-") for p in paths):
        label = "P4-ERPCityPages"
    elif any(p.startswith("/consulting/") for p in paths):
        label = "P5-ConsultingCities"
    else:
        label = "P6-MethodLocationPages"
    batches.append({"day":day,"date":d.strftime("%Y-%m-%d"),"priority":label,"urls":batch})

result = {
    "generated": "2026-02-26",
    "note": "12 URLs per day max. Only NEW pages not yet indexed in GSC.",
    "already_indexed_count": len(already_indexed),
    "new_pages_count": len(new_urls),
    "total_days_needed": len(batches),
    "batches": batches
}

with open("scripts/indexing-queue.json", "w") as f:
    json.dump(result, f, indent=2)

print(f"New pages to index: {len(new_urls)}")
print(f"Daily batches: {len(batches)}")
for b in batches:
    print(f"  Day {b['day']} ({b['date']}): {len(b['urls'])} URLs - {b['priority']}")
