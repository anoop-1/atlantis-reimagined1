/**
 * Course / CourseInstance JSON-LD for training pages — 2026-10-12 release (SEO audit actions 6 and 10).
 * ─────────────────────────────────────────────────────────────────────────────────────────
 * One builder for both layers: React (CourseFactsBlock, TrainingLocationPage, Training,
 * HyderabadTraining, na-training) and the crawler (scripts/training-release-2026-10.mjs,
 * scripts/training-na.mjs). Pure functions: callers pass the JSON data in, so Vite and
 * Node read the same files without import attributes.
 *
 * Google "Course info" fields emitted on every node:
 *   Course: name, description, provider (Organization @id), offers[{category}],
 *           hasCourseInstance[]
 *   CourseInstance: courseMode (Online | Onsite | Blended, one per instance),
 *           courseWorkload (ISO 8601 duration) and/or courseSchedule, instructor.
 * Hours come from src/data/snt-tc-1a-hours.json (SNT-TC-1A recommended classroom hours;
 * the five-method package sums match the US flyer: Level I 104 h, Level II 112 h), or
 * from an owner-confirmed `courseHours` in src/data/course-facts.json.
 *
 * Never emitted: price / priceCurrency (CLAUDE.md §18 gate rule 1), dates or venues that
 * are not in src/data/course-sessions.json. Dated sessions in that file (empty today) add
 * CourseInstances with courseSchedule (startDate / endDate / repeatFrequency / repeatCount
 * / duration) and a Place location, and render as a visible table on the same paths.
 */

export const SITE = 'https://atlantisndt.com';
export const ORG = { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'Atlantis NDT', url: SITE };
export const INSTRUCTOR = {
  '@type': 'Person',
  '@id': `${SITE}/#anoop-rayavarapu`,
  name: 'Anoop Rayavarapu',
  jobTitle: 'ASNT NDT Level III',
};
/** Google's allowed courseMode values, one per CourseInstance. */
export const COURSE_MODES = ['Online', 'Onsite', 'Blended'];
/** The five methods of the published Level I / Level II packages (US flyer). */
export const FIVE_METHODS = ['VT', 'PT', 'MT', 'UT', 'RT'];
export const OFFER_CATEGORIES = ['Free', 'Partially Free', 'Subscription', 'Paid'];
const LEVEL_NAMES = ['Level I', 'Level II', 'Level III'];
const EDU_LEVEL = ['Beginner', 'Intermediate', 'Advanced'];

const num = (s) => {
  const n = Number(String(s).replace(/,/g, ''));
  return Number.isFinite(n) ? n : null;
};

export const isoHours = (h) => `PT${h}H`;
const ISO_DURATION = /^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** SNT-TC-1A classroom hours summed over methods (keys) and levels; null when any cell is missing. */
export function classroomHours(hours, keys, levels) {
  let total = 0;
  for (const k of keys) {
    for (const l of levels) {
      const v = hours.classroom && hours.classroom[k] ? num(hours.classroom[k][l]) : null;
      if (v == null) return null;
      total += v;
    }
  }
  return total;
}

/** Workload for a course-facts entry: owner-confirmed courseHours, else SNT-TC-1A sums. */
export function workloadFor(entry, hours) {
  if (!entry) return null;
  if (Number.isFinite(entry.courseHours) && entry.courseHours > 0) return entry.courseHours;
  const keys = entry.hoursKeys || (entry.hoursKey ? [entry.hoursKey] : null);
  if (!keys) return null;
  const levels = entry.workloadLevels || [entry.levelIdx];
  return classroomHours(hours, keys, levels);
}

/** Five-method package hours by level index (0 = Level I, 1 = Level II). */
export function packageHours(hours, levelIdx) {
  return classroomHours(hours, FIVE_METHODS, [levelIdx]);
}

/**
 * Text of the "Training hours" row of the course fact block, split around the link to
 * the training requirements matrix: { pre, post } or null (no hours known: the caller
 * shows "Set by your employer's written practice"). Same words in both layers.
 */
export function hoursCell(entry, hours) {
  if (!entry) return null;
  const i = entry.levelIdx;
  const post = '; your written practice sets the binding figures';
  if (Number.isFinite(entry.courseHours) && entry.courseHours > 0) {
    return { pre: `${entry.courseHours} h classroom (Atlantis course hours) — SNT-TC-1A recommended hours by method and level are in our `, post };
  }
  const C = hours.classroom || {}, O = hours.ojt || {};
  if (Array.isArray(entry.hoursKeys) && entry.hoursKeys.every((k) => C[k])) {
    const total = classroomHours(hours, entry.hoursKeys, [i]);
    const list = entry.hoursKeys.map((k) => `${k} ${C[k][i]} h`).join(', ');
    const addl = i > 0 ? ', in addition to Level I' : '';
    return { pre: `${total} h classroom for the five-method package (${list})${addl}, plus on-the-job experience per method — SNT-TC-1A recommended minimums from our `, post };
  }
  const k = entry.hoursKey;
  if (k && C[k]) {
    if (Array.isArray(entry.workloadLevels) && entry.workloadLevels.length > 1) {
      const parts = entry.workloadLevels.map((l) => `${LEVEL_NAMES[l]}: ${C[k][l]} h classroom + ${O[k][l]} h on-the-job experience`).join('; ');
      return { pre: `${parts} — SNT-TC-1A recommended minimums from our `, post };
    }
    const addl = i > 0 ? ` (in addition to Level I: ${C[k][0]} h classroom, ${O[k][0]} h OJT)` : '';
    return { pre: `${C[k][i]} h classroom + ${O[k][i]} h on-the-job experience${addl} — SNT-TC-1A recommended minimums from our `, post };
  }
  return null;
}

/** Rows of the city/Hyderabad hours table: hours from snt-tc-1a-hours.json, course links from course-facts.json. */
export function methodRows(facts, hours) {
  const order = ['UT', 'RT', 'MT', 'PT', 'VT', 'ET'];
  return order.filter((k) => hours.classroom[k]).map((k) => {
    const pages = [0, 1].map((l) => Object.entries(facts.pages)
      .filter(([p, f]) => f.hoursKey === k && f.levelIdx === l && !f.workloadLevels && /-level-[12]-training$/.test(p))
      .map(([p]) => p)[0] || null);
    return {
      key: k,
      method: (hours.methodNames || {})[k] || k,
      l1: `${hours.classroom[k][0]} h classroom + ${hours.ojt[k][0]} h OJT`,
      l2: `${hours.classroom[k][1]} h classroom + ${hours.ojt[k][1]} h OJT`,
      pages: pages.map((p, l) => (p ? [p, `${k} Level ${l ? 'II' : 'I'}`] : null)).filter(Boolean),
    };
  });
}

// ── dated sessions (owner input: src/data/course-sessions.json) ─────────────
const dayCount = (a, b) => Math.round((Date.parse(b + 'T00:00:00Z') - Date.parse(a + 'T00:00:00Z')) / 86400000) + 1;
const todayIso = (now) => (now instanceof Date ? now : new Date(now || Date.now())).toISOString().slice(0, 10);

/** Upcoming sessions listed for a path (ended sessions drop out on the next build). */
export function sessionsFor(path, sessionsData, now) {
  const list = (sessionsData && Array.isArray(sessionsData.sessions)) ? sessionsData.sessions : [];
  const today = todayIso(now);
  return list
    .filter((s) => s && Array.isArray(s.paths) && s.paths.includes(path) && ISO_DATE.test(s.endDate || '') && s.endDate >= today)
    .sort((a, b) => String(a.startDate).localeCompare(String(b.startDate)));
}

function placeFor(venueKey, sessionsData) {
  const v = venueKey && sessionsData && sessionsData.venues ? sessionsData.venues[venueKey] : null;
  if (!v) return null;
  return {
    '@type': 'Place',
    name: v.name,
    address: {
      '@type': 'PostalAddress',
      ...(v.streetAddress ? { streetAddress: v.streetAddress } : {}),
      ...(v.addressLocality ? { addressLocality: v.addressLocality } : {}),
      ...(v.addressRegion ? { addressRegion: v.addressRegion } : {}),
      ...(v.postalCode ? { postalCode: v.postalCode } : {}),
      ...(v.addressCountry ? { addressCountry: v.addressCountry } : {}),
    },
  };
}

export function sessionInstance(s, sessionsData) {
  const days = Number.isFinite(s.days) && s.days > 0 ? s.days : dayCount(s.startDate, s.endDate);
  const perDay = Number.isFinite(s.hoursPerDay) && s.hoursPerDay > 0 ? s.hoursPerDay : null;
  const place = placeFor(s.venue, sessionsData);
  return {
    '@type': 'CourseInstance',
    name: s.course,
    courseMode: s.mode,
    courseSchedule: {
      '@type': 'Schedule',
      startDate: s.startDate,
      endDate: s.endDate,
      repeatFrequency: 'Daily',
      repeatCount: days,
      ...(perDay ? { duration: isoHours(perDay) } : {}),
    },
    ...(perDay ? { courseWorkload: isoHours(perDay * days) } : {}),
    ...(place ? { location: place } : {}),
    instructor: INSTRUCTOR,
    inLanguage: 'en',
  };
}

/** Rows for the visible "Scheduled sessions" table (same filter as the markup). */
export function sessionRows(path, sessionsData, now) {
  return sessionsFor(path, sessionsData, now).map((s) => {
    const v = s.venue && sessionsData.venues ? sessionsData.venues[s.venue] : null;
    return {
      course: s.course,
      dates: s.startDate === s.endDate ? s.startDate : `${s.startDate} to ${s.endDate}`,
      format: s.mode === 'Onsite' ? 'On-site' : s.mode,
      venue: v ? [v.name, v.streetAddress, v.addressLocality, v.addressRegion, v.postalCode].filter(Boolean).join(', ') : (s.mode === 'Online' ? 'Live online' : 'At your facility'),
    };
  });
}

// ── nodes ───────────────────────────────────────────────────────────────────
function modeInstances(name, hoursValue, modes = COURSE_MODES) {
  return modes.map((m) => ({
    '@type': 'CourseInstance',
    ...(name ? { name } : {}),
    courseMode: m,
    ...(hoursValue ? { courseWorkload: isoHours(hoursValue) } : {}),
    instructor: INSTRUCTOR,
    inLanguage: 'en',
  }));
}

function baseCourse(path, { name, description, educationalLevel, coursePrerequisites, educationalCredentialAwarded, teaches }) {
  return {
    '@type': 'Course',
    '@id': `${SITE}${path}#course`,
    name,
    description,
    url: `${SITE}${path}`,
    provider: ORG,
    offers: [{ '@type': 'Offer', category: 'Paid' }],
    inLanguage: 'en',
    ...(educationalLevel ? { educationalLevel } : {}),
    ...(coursePrerequisites ? { coursePrerequisites } : {}),
    ...(educationalCredentialAwarded ? { educationalCredentialAwarded } : {}),
    ...(teaches ? { teaches } : {}),
  };
}

/** Course node for a per-method / per-level course page listed in course-facts.json. */
export function methodCourseNode(path, { facts, hours, sessions, now }) {
  const f = facts && facts.pages ? facts.pages[path] : null;
  if (!f) return null;
  const h = workloadFor(f, hours);
  const course = baseCourse(path, {
    name: `${f.short} ${f.level} Training — ASNT SNT-TC-1A`,
    description: `${f.method} ${f.level} training to ASNT SNT-TC-1A (employer-based certification), delivered live online or onsite at your facility, with practical examinations administered by an ASNT Level III under the employer's written practice.`,
    educationalLevel: EDU_LEVEL[f.levelIdx] || undefined,
    coursePrerequisites: f.prereq || (facts.prereqByLevel || [])[f.levelIdx],
    educationalCredentialAwarded: `${f.level} certification issued by the employer under its SNT-TC-1A written practice`,
    teaches: f.method,
  });
  course.hasCourseInstance = [
    ...modeInstances(null, h),
    ...sessionsFor(path, sessions, now).map((s) => sessionInstance(s, sessions)),
  ];
  return course;
}

/**
 * Course node for a programme page (/training, city pages, Hyderabad): ASNT SNT-TC-1A
 * Level I and Level II, one instance per level package (five methods) and delivery mode.
 */
export function programmeCourseNode(path, { name, description, hours, sessions, now, modes }) {
  const course = baseCourse(path, {
    name,
    description,
    educationalLevel: 'Beginner to Intermediate',
    coursePrerequisites: 'Level I: high-school education or equivalent and an annual near-vision check. Level II: Level I in the method (or the combined hours) and documented on-the-job experience.',
    educationalCredentialAwarded: 'Level I or Level II certification issued by the employer under its SNT-TC-1A written practice',
    teaches: 'Visual (VT), penetrant (PT), magnetic particle (MT), ultrasonic (UT) and radiographic (RT) testing',
  });
  const l1 = packageHours(hours, 0);
  const l2 = packageHours(hours, 1);
  course.hasCourseInstance = [
    ...modeInstances(`${LEVEL_NAMES[0]} — five methods (VT, PT, MT, UT, RT)`, l1, modes),
    ...modeInstances(`${LEVEL_NAMES[1]} — five methods (VT, PT, MT, UT, RT)`, l2, modes),
    ...sessionsFor(path, sessions, now).map((s) => sessionInstance(s, sessions)),
  ];
  return course;
}

const fillLabel = (s, vars) => String(s).replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));

/** Programme (name, description, modes) for /training, /ndt-training-online and the city pages in the release copy. */
export function programmeFor(path, copy) {
  if (!copy) return null;
  if (copy.programmes && copy.programmes[path]) return copy.programmes[path];
  const c = copy.cityCourses && copy.cityCourses.pages ? copy.cityCourses.pages[path] : null;
  if (c && copy.cityProgramme) return { name: fillLabel(copy.cityProgramme.name, c), description: fillLabel(copy.cityProgramme.description, c) };
  return null;
}

/** Every path that carries a Course node in this release (course-facts pages + programme pages). */
export function coursePathsFor(facts, copy) {
  return [...Object.keys(facts.pages), ...Object.keys((copy && copy.programmes) || {}), ...Object.keys((copy && copy.cityCourses && copy.cityCourses.pages) || {})];
}

/** The one Course node for a path, or null. Same call in React and the crawler. */
export function courseNodeForPath(path, { facts, hours, sessions, copy, now }) {
  if (facts.pages[path]) return methodCourseNode(path, { facts, hours, sessions, now });
  const p = programmeFor(path, copy);
  return p ? programmeCourseNode(path, { ...p, hours, sessions, now }) : null;
}

// ── validation (used by the crawler assert and the release smoke test) ──────
/** Returns a list of problems; [] means the node carries every Google "Course info" required field. */
export function validateCourseNode(c) {
  const p = [];
  if (!c || c['@type'] !== 'Course') return ['not a Course node'];
  if (!c.name) p.push('name');
  if (!c.description) p.push('description');
  if (!c.provider || !(c.provider['@id'] || c.provider.name)) p.push('provider');
  const offers = [].concat(c.offers || []);
  if (!offers.length || !offers.every((o) => OFFER_CATEGORIES.includes(o.category))) p.push('offers.category');
  if (offers.some((o) => Object.keys(o).some((k) => /price/i.test(k)))) p.push('offers must not carry a price field (CLAUDE.md §18)');
  const inst = [].concat(c.hasCourseInstance || []);
  if (!inst.length) p.push('hasCourseInstance');
  inst.forEach((i, n) => {
    const modes = [].concat(i.courseMode || []);
    if (modes.length !== 1 || !COURSE_MODES.includes(modes[0])) p.push(`instance ${n}: courseMode`);
    const wl = typeof i.courseWorkload === 'string' && ISO_DURATION.test(i.courseWorkload);
    const sc = i.courseSchedule;
    const scOk = sc && ISO_DATE.test(sc.startDate || '') && ISO_DATE.test(sc.endDate || '') && sc.repeatFrequency && Number.isFinite(sc.repeatCount) && (!sc.duration || ISO_DURATION.test(sc.duration));
    if (!wl && !scOk) p.push(`instance ${n}: courseWorkload or courseSchedule`);
    if (sc && !scOk) p.push(`instance ${n}: courseSchedule fields`);
  });
  return p;
}

/** Problems in the owner-input sessions file (shape only; dates may be empty). */
export function validateSessionsData(data, builtPaths) {
  const p = [];
  if (!data || !Array.isArray(data.sessions) || typeof data.venues !== 'object') return ['course-sessions.json must have { venues: {}, sessions: [] }'];
  const forbidden = /price|fee|cost|amount|usd|aed|inr|currency/i;
  for (const [k, v] of Object.entries(data.venues)) {
    if (k.startsWith('_')) continue;
    if (!v || !v.name || !v.addressLocality || !v.addressCountry) p.push(`venue ${k}: name, addressLocality and addressCountry are required`);
    for (const key of Object.keys(v || {})) if (forbidden.test(key)) p.push(`venue ${k}: field "${key}" is not allowed`);
  }
  data.sessions.forEach((s, n) => {
    const id = s && s.id ? s.id : `#${n}`;
    if (!s || !s.course) p.push(`session ${id}: course`);
    if (!ISO_DATE.test((s && s.startDate) || '') || !ISO_DATE.test((s && s.endDate) || '') || s.endDate < s.startDate) p.push(`session ${id}: startDate/endDate (YYYY-MM-DD, end >= start)`);
    if (!COURSE_MODES.includes(s && s.mode)) p.push(`session ${id}: mode must be one of ${COURSE_MODES.join(', ')}`);
    if (s && s.venue && !(data.venues || {})[s.venue]) p.push(`session ${id}: unknown venue "${s.venue}"`);
    if (s && s.mode !== 'Online' && !s.venue) p.push(`session ${id}: an Onsite/Blended public session needs a venue`);
    if (!s || !Array.isArray(s.paths) || !s.paths.length) p.push(`session ${id}: paths`);
    else if (builtPaths) for (const path of s.paths) if (!builtPaths.has(path)) p.push(`session ${id}: path ${path} is not a built page`);
    for (const key of Object.keys(s || {})) if (forbidden.test(key)) p.push(`session ${id}: field "${key}" is not allowed (fees live only in approved-training-fees.json)`);
  });
  return p;
}
