// The RBI/FFS offering pages were retired (301) on 2026-09-27. Inline links to
// them inside educational copy are unlinked (text kept), so readers are not
// sent to /consulting under an "FFS" / "RBI programme" label.
import { readFileSync, writeFileSync } from 'fs';

const FILES = ['src/data/blogs.json', 'src/data/blogs-index.json', 'src/data/depth-pages.json', 'scripts/depth-pages-routes.mjs', 'scripts/prerender.mjs', 'src/data/consulting-industry-matrix.mjs'];
const SLUG = '\\/(?:consulting\\/(?:fitness-for-service-api-579|rbi-program-design)|digital-twins\\/rbi-visualisation-damage-mechanism-mapping|case-studies\\/pipeline-fitness-for-service)';
const Q = '\\\\?["\']';
const RULES = [
  [new RegExp(`<a\\s+href=${Q}${SLUG}${Q}[^>]*>([^<]*)<\\/a>`, 'g'), '$1'],
  [new RegExp(`\\[([^\\]]+)\\]\\(${SLUG}\\)`, 'g'), '$1'],
  [new RegExp(`\\s*(?:,|and)\\s*${SLUG}(?=[\\s,.;)])`, 'g'), ''],
];
for (const f of FILES) {
  const buf = readFileSync(f);
  const utf = buf.toString('utf8');
  const enc = Buffer.from(utf, 'utf8').equals(buf) ? 'utf8' : 'latin1';
  let s = buf.toString(enc);
  let n = 0;
  for (const [re, rep] of RULES) { n += (s.match(re) || []).length; s = s.replace(re, rep); }
  const left = (s.match(new RegExp(SLUG, 'g')) || []).length;
  writeFileSync(f, Buffer.from(s, enc));
  console.log(f, 'unlinked', n, 'remaining refs', left);
}
