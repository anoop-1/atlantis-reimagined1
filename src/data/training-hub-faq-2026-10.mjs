// /training visible FAQ (2026-10-18, training.md §5.4) — one list for both layers.
// Copy: src/data/training-hub-faq-2026-10.json. Hours: the caller passes snt-tc-1a-hours.json
// (React imports it, the crawler reads it), so this module stays free of I/O.
import { packageHours } from './course-markup-2026-10.mjs';

const METHOD_ORDER = ['UT', 'RT', 'MT', 'PT', 'VT', 'ET'];
const stripTags = (s) => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();

/** Fills {hoursList}, {pkg.N}, {c.M.N} and {o.M.N} from snt-tc-1a-hours.json; throws on anything else. */
export function fillTrainingHours(s, HOURS) {
  return String(s).replace(/\{([a-zA-Z.0-9]+)\}/g, (all, key) => {
    if (key === 'hoursList') {
      return METHOD_ORDER.filter((k) => HOURS.classroom[k]).map((k) => `${k} ${HOURS.classroom[k][0]} and ${HOURS.classroom[k][1]}`).join(', ');
    }
    const [kind, a, b] = key.split('.');
    if (kind === 'pkg') {
      const v = packageHours(HOURS, Number(a));
      if (v == null) throw new Error(`training-hub-faq: no package hours for level ${a}`);
      return String(v);
    }
    const table = kind === 'c' ? HOURS.classroom : kind === 'o' ? HOURS.ojt : null;
    if (table && table[a] && /^\d+$/.test(String(table[a][Number(b)]))) return String(table[a][Number(b)]);
    throw new Error(`training-hub-faq: unknown or non-numeric placeholder ${all}`);
  });
}

/** [{ q, html, text }] in page order. */
export function trainingHubFaq(FAQ, HOURS) {
  return FAQ.items.map(([q, a]) => {
    const html = fillTrainingHours(a, HOURS);
    return { q, html, text: stripTags(html) };
  });
}

/** Crawler markup: the H2 and one <h3>/<p> pair per question (the h3+p convention the FAQ extractors read). */
export function trainingHubFaqHtml(FAQ, HOURS) {
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<h2>${esc(FAQ.h2)}</h2>` + trainingHubFaq(FAQ, HOURS).map((f) => `<h3>${esc(f.q)}</h3><p>${f.html}</p>`).join('');
}
