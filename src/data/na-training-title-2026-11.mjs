/**
 * US/Canada training city and state titles — 2026-11-17 (CLAUDE.md §78).
 *
 * WHY. GSC (USA, 28 days to 2026-11-14): "ndt training near me", "ndt courses near me", "ndt certification
 * near me" and "non destructive testing training near me" put 5,297 impressions on the city pages at an
 * average position of 54, and the wider US training query set 17,084 impressions at position 50. About a
 * quarter of the near-me searches say "certification", a word the city title did not carry
 * ("NDT Training in Atlanta, GA — Online & Onsite ASNT Courses"). The Houston page, titled
 * "NDT Training and Certification in Houston, TX", ranks best of the large metros (p38.7 for the near-me head).
 * One formula, read by scripts/training-na.mjs (crawler) and src/lib/na-training.ts (React), so both
 * layers carry the same title and H1. Titles stay within 60 characters; long place names drop the suffix.
 * Under SNT-TC-1A the employer certifies: the pages say so; the title names the search, not a claim.
 */
export function naCityTitle(label) {
  const a = `NDT Training & Certification in ${label} | ASNT Courses`;
  if (a.length <= 60) return a;
  const b = `NDT Training & Certification in ${label} (ASNT)`;
  if (b.length <= 60) return b;
  return `NDT Training & Certification in ${label}`;
}

export function naCityH1(label) {
  return `NDT Training and Certification in ${label}: Online and Onsite ASNT Courses`;
}

export function naCityDescription(label) {
  return `ASNT SNT-TC-1A Level I, II & III NDT training courses for ${label} employers and technicians — online or onsite at your facility. We reply within one business day.`;
}
