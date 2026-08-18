/**
 * useVisitorCity — resolves the visitor's city for on-page personalisation.
 *
 * WHAT THIS IS FOR, AND WHAT IT IS NOT
 * ─────────────────────────────────────────────────────────────────────────────
 * This is a CONVERSION device, not a ranking device. Atlantis cannot enter the
 * US local pack for "ndt training near me" — that requires a verifiable US
 * physical address and a Google Business Profile, neither of which exists. No
 * amount of personalisation changes that.
 *
 * What it DOES change is what happens after the click. A visitor who searched
 * "ndt training near me" and lands on a page headed "…in Your State" has to do
 * the work of finding themselves in a list. A visitor who lands on "…near
 * Houston" has been answered. That difference shows up in engagement and
 * enquiry rate, which is where this page's value actually is.
 *
 * NOT CLOAKING. Every visitor and every crawler is served byte-identical HTML.
 * The personalised string is swapped in on the client AFTER hydration, and only
 * when a city actually resolves. Googlebot indexes the national default, which
 * is the honest description of the page. The default text is deliberately
 * identical to the prerendered H1 (scripts/prerender.mjs) so the two layers
 * never disagree — a known hazard in this codebase.
 *
 * RESOLUTION ORDER
 *   1. sessionStorage cache — one lookup per session, no repeat network calls.
 *   2. IANA timezone → US metro. Zero network, instant, no third-party, no
 *      rate limit, no personal data leaves the browser. Correct often enough
 *      to be worth trying first.
 *   3. IP geolocation, keyless, for a precise city. Non-blocking; a failure
 *      leaves the national default in place.
 *
 * Every stage degrades silently. If nothing resolves, the page reads exactly as
 * it does today.
 */
import { useEffect, useState } from "react";

export interface VisitorCity {
  /** Display name, e.g. "Houston" */
  city: string;
  /** Region/state when known, e.g. "Texas" */
  region?: string;
  /** How it was resolved — useful for measuring which stage carries the load. */
  source: "timezone" | "ip";
}

const CACHE_KEY = "atlantis:visitor-city:v1";

/**
 * IANA timezone → the metro most of that zone's US industrial population sits
 * in. Deliberately conservative: only zones with an unambiguous NDT-relevant
 * metro are mapped. America/Chicago is NOT mapped to a city — it spans from
 * North Dakota to the Gulf, and guessing "Houston" for a visitor in Minneapolis
 * reads worse than saying nothing.
 */
const TZ_METRO: Record<string, { city: string; region: string }> = {
  "America/New_York": { city: "New York", region: "New York" },
  "America/Detroit": { city: "Detroit", region: "Michigan" },
  "America/Indiana/Indianapolis": { city: "Indianapolis", region: "Indiana" },
  "America/Kentucky/Louisville": { city: "Louisville", region: "Kentucky" },
  "America/Denver": { city: "Denver", region: "Colorado" },
  "America/Phoenix": { city: "Phoenix", region: "Arizona" },
  "America/Los_Angeles": { city: "Los Angeles", region: "California" },
  "America/Anchorage": { city: "Anchorage", region: "Alaska" },
  "America/Juneau": { city: "Juneau", region: "Alaska" },
  "America/Boise": { city: "Boise", region: "Idaho" },
  "America/Toronto": { city: "Toronto", region: "Ontario" },
  "America/Edmonton": { city: "Edmonton", region: "Alberta" },
  "America/Vancouver": { city: "Vancouver", region: "British Columbia" },
  "America/Winnipeg": { city: "Winnipeg", region: "Manitoba" },
  "America/Halifax": { city: "Halifax", region: "Nova Scotia" },
  "America/St_Johns": { city: "St. John's", region: "Newfoundland" },
};

function readCache(): VisitorCity | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as VisitorCity;
    return parsed?.city ? parsed : null;
  } catch {
    return null;
  }
}

function writeCache(v: VisitorCity) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(v));
  } catch {
    // storage disabled or full — personalisation still works, just re-resolves
  }
}

function fromTimezone(): VisitorCity | null {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const hit = TZ_METRO[tz];
    return hit ? { ...hit, source: "timezone" } : null;
  } catch {
    return null;
  }
}

export function useVisitorCity(): VisitorCity | null {
  const [city, setCity] = useState<VisitorCity | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;

    const cached = readCache();
    if (cached) {
      setCity(cached);
      return;
    }

    // Stage 2 — instant, offline, no third party. Shown immediately so the
    // visitor is not waiting on a network round trip to be addressed.
    const tzGuess = fromTimezone();
    if (tzGuess) setCity(tzGuess);

    // Stage 3 — a precise city, if the lookup succeeds within a short budget.
    // Aborted at 2.5s: a personalised heading that arrives after the visitor has
    // started reading is worse than one that never arrives, because the text
    // moves under them.
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 2500);

    fetch("https://ipwho.is/?fields=success,city,region,country_code", {
      signal: controller.signal,
      referrerPolicy: "no-referrer",
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (cancelled || !d?.success || !d.city) return;
        const resolved: VisitorCity = {
          city: String(d.city),
          region: d.region ? String(d.region) : undefined,
          source: "ip",
        };
        writeCache(resolved);
        setCity(resolved);
      })
      .catch(() => {
        // Offline, blocked by an extension, rate-limited, or timed out. The
        // timezone guess (or the national default) stands.
        if (tzGuess) writeCache(tzGuess);
      })
      .finally(() => window.clearTimeout(timeout));

    return () => {
      cancelled = true;
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);

  return city;
}
