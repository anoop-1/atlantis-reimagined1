/**
 * CTR wave 4 — 2026-08-04.
 * ─────────────────────────────────────────────────────────────────────────────
 * THE FINDING
 * 66 page+query pairs rank at position <=15 with >=80 impressions and <=2
 * clicks: **9,627 impressions producing 30 clicks over 90 days.** At a CTR
 * normal for those positions that is roughly 700-800 clicks per quarter, on a
 * site currently earning about 4,200. This is the largest single lever
 * available, and it is a snippet problem rather than a ranking problem — the
 * positions are already there.
 *
 * WHY THE EXISTING TITLES LOSE
 * They lead with the entity and the code, not with what the searcher wants.
 * "ASNT Certification 2026 — SNT-TC-1A + CP-189 Pathway" is accurate and reads
 * like a standards document; at position seven, beneath asnt.org, accuracy is
 * not the differentiator. Someone typing "asnt certification" wants to know how
 * they personally get certified, in what order, and what it will take. The
 * rewrite has to promise that specifically enough to be worth a click away from
 * the official body.
 *
 * Each entry records the query, its impressions, position and click count so the
 * next cycle can judge whether the rewrite worked.
 *
 * Salary figures are permitted (industry pay data, not Atlantis pricing).
 * No Atlantis price appears anywhere — CLAUDE.md 18.
 */

export const CTR_WAVE4_OVERRIDES = {
  // 776i @ p7.4, 0 clicks — "asnt certification"; also "asnt level 3" 114i p5.3
  '/asnt-certification': {
    title: 'How to Get ASNT Certified — Levels, Hours, Exams and the Order to Do Them',
    description:
      'The practical route to ASNT Level I, II and III: what your employer must have in place first, the training hours and experience each level needs, what the exams actually test, how vision requirements work, and where SNT-TC-1A and CP-189 lead to different answers.',
  },

  // 322i @ p10.9, 0 clicks — "api 653 certification"; "api 653 exam fees" 90i p7.2
  '/api-653-certification': {
    title: 'API 653 Certification — Do You Qualify, and What the Exam Really Asks',
    description:
      'Whether your education and experience meet API 653 eligibility, the reference publications you are examined on, how the open and closed book halves differ, what the tank-specific calculations demand, and how candidates schedule preparation around full-time work.',
  },

  // 182i @ p6.0, 0 clicks — "api 570 certification"
  '/api-570-certification': {
    title: 'API 570 Certification — Eligibility, Exam Structure and How to Prepare',
    description:
      'What API 570 requires before you can sit it, the code set you are examined against, how the closed and open book sections are weighted, the calculations that catch people out, and a preparation sequence that fits around piping inspection work.',
  },

  // 130i @ p7.8 "api 510 certification cost"; 110i p12.7 "api 510 certification";
  // 89i p4.1 "api 510 exam pass rate" — cost intent answered with value, per 18.
  '/api-510-certification': {
    title: 'API 510 Certification — Eligibility, Exam Content, Pass Rates and What It Costs You',
    description:
      'Pressure vessel inspector certification without the guesswork: who is eligible, the publications examined, how the two exam halves differ, what candidates most often fail on, and an honest account of the total cost in time as well as fees.',
  },

  // 2,427i across 15 queries, ~0 clicks. "ndt technician salary" 303i p5.2,
  // "ndt inspector salary" 243i p7.8. Searchers want figures; the old title
  // promised a "guide", which reads like homework.
  '/blog/ndt-salary-guide-2026-global': {
    title: 'NDT Technician and Inspector Salary — What Each Level Actually Pays, by Region',
    description:
      'Real pay ranges for NDT Level I, II and III and for API inspectors across the Gulf, India, the US, Europe and Australia — plus which methods and certifications move a band the most, and why the same level pays very differently offshore than in a shop.',
  },

  // 897i across 6 queries at p3.8–7.9, ~6 clicks. Date-sensitive intent.
  '/blog/api-510-570-653-exam-schedule-2026': {
    title: 'API 510, 570 and 653 Exam Dates 2026 — Windows, Deadlines and How to Book',
    description:
      'Every 2026 examination window for API 510, 570 and 653 with its application deadline, how the Prometric booking process works, when to apply if you need a visa or travel, and what happens if you miss a window or need to reschedule.',
  },

  // 314i p12.4 "653 tank inspection"; 153i p14.9 "api 653 tank inspection company"
  // — the second is a buying query, so the description addresses hiring.
  '/blog/api-653-tank-inspection-guide': {
    title: 'API 653 Tank Inspection — Intervals, What Gets Examined, and Who Can Sign It Off',
    description:
      'What an API 653 inspection actually covers on the floor, shell and roof, how internal and external intervals are set and when they can be extended on evidence, the settlement and shell calculations involved, and what to look for when appointing an inspection contractor.',
  },

  // 309i across "snt tc 1a" variants at p11–15, 0 clicks.
  '/blog/asnt-snt-tc-1a-certification-requirements': {
    title: 'SNT-TC-1A Explained — What It Requires, and Why It Is Not a Standard',
    description:
      'SNT-TC-1A is a recommended practice, not a specification, and the difference decides audits. What your Written Practice must contain, the training hours and experience by level and method, vision testing, and how it differs from CP-189 and ISO 9712.',
  },

  // 284i p11.7 "paut" — a bare acronym query; the glossary page is the right
  // answer but the title has to signal a fast one.
  '/glossary/phased-array-ultrasonic-testing-paut': {
    title: 'PAUT — What Phased Array Ultrasonic Testing Is, and What It Cannot Find',
    description:
      'Phased array ultrasonics in plain terms: how electronic beam steering works, what the sectorial scan is really showing you, which flaws it finds that conventional UT misses, where it still fails, and the codes that govern it.',
  },

  // 119i p13.4 "paut equipment"
  '/blog/phased-array-ultrasonic-testing-paut-guide': {
    title: 'PAUT Equipment and Setup — Choosing Probes, Wedges and Focal Laws',
    description:
      'A practical guide to phased array hardware and configuration: element count and aperture, wedge selection, focal law design, calibration on representative blocks, encoded scanning, and the setup errors that produce confidently wrong images.',
  },

  // 118i p6.2 "fbh meaning" — definitional intent, answer it in the title.
  '/glossary/flat-bottom-hole-fbh': {
    title: 'FBH Meaning — Flat-Bottom Hole Reference Reflectors in Ultrasonic Testing',
    description:
      'What a flat-bottom hole is, why it is drilled to a known depth and diameter, how it underpins DAC and DGS sensitivity setting, and why an equivalent flat-bottom-hole size is not the same thing as the size of a real flaw.',
  },
};

/**
 * Wave 4 sits above waves 1–3 in the precedence chain, matching how each earlier
 * wave superseded the last (CLAUDE.md 21.7). Apply directly in the render loop —
 * merging into another layer's branch is what silently dropped 32 of 36 wave-1
 * overrides (21.1). Verify the built HTML, never the applied counter.
 */
export function applyCtrWave4(routes) {
  let applied = 0;
  const missing = [];
  const byPath = new Map(routes.map((r) => [r.path, r]));
  for (const [path, o] of Object.entries(CTR_WAVE4_OVERRIDES)) {
    const r = byPath.get(path);
    if (!r) { missing.push(path); continue; }
    r.title = o.title;
    r.description = o.description;
    applied++;
  }
  return { applied, total: Object.keys(CTR_WAVE4_OVERRIDES).length, missing };
}
