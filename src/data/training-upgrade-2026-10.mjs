/**
 * Training upgrade block, 2026-10-16 — the one resolver both layers call.
 * ─────────────────────────────────────────────────────────────────────────────
 * React: src/components/TrainingUpgradeBlock.tsx. Crawler: scripts/training-upgrade-2026-10.mjs.
 * Pure function: callers pass in src/data/training-upgrade-2026-10.json and
 * src/data/snt-tc-1a-hours.json, so Vite and Node read the same files without import
 * attributes (same convention as src/data/course-markup-2026-10.mjs).
 *
 * The hours table is built from snt-tc-1a-hours.json only (Level I and Level II; the
 * unverified Level III column is never shown). No other numbers are produced here.
 */

const LEVELS = [0, 1];

/** Resolved block content for a path, or null when the path carries no block. */
export function trainingUpgradeFor(path, data, hours) {
  const page = data && data.pages ? data.pages[path] : null;
  if (!page) return null;
  const key = page.method || null;
  const m = key ? data.methods[key] : null;
  if (key && !m) throw new Error(`training-upgrade: method ${key} for ${path} has no entry`);
  let method = null;
  if (m) {
    const c = data.methodCommon;
    const sub = (s) => String(s).split('{short}').join(m.short);
    const classroom = hours.classroom && hours.classroom[key];
    const ojt = hours.ojt && hours.ojt[key];
    if (!classroom || !ojt) throw new Error(`training-upgrade: snt-tc-1a-hours.json has no ${key} row`);
    method = {
      key,
      short: m.short,
      name: m.name,
      topicsH2: sub(c.topicsH2),
      topics: m.topics,
      hoursH2: sub(c.hoursH2),
      hoursCaption: c.hoursCaption,
      hoursHead: c.hoursHead,
      hoursRows: LEVELS.map((l) => [c.hoursRows[l], classroom[l], ojt[l]]),
      checksH2: sub(c.checksH2),
      checksIntro: c.checksIntro,
      checks: m.checks,
      linksH2: sub(c.linksH2),
      links: [
        m.practiceTest,
        c.hub,
        m.l3Prep,
        c.planner,
        [`/contact?service=training&subject=${m.subject}`, sub(c.enquiryLabel)],
      ],
    };
  }
  const notes = (data.instructor && data.instructor.methodNotes) || {};
  return {
    path,
    react: page.react !== false,
    method,
    who: data.who,
    practical: data.practical,
    instructor: { ...data.instructor, note: key && notes[key] ? notes[key] : null },
  };
}

/** Every path that carries the block. */
export function trainingUpgradePaths(data) {
  return Object.keys((data && data.pages) || {});
}
