// Live generated city pages are sticky against the similarity gates (owner correction 2026-10-29, CLAUDE.md §66).
// The gates in erp-family-layers, consulting-city-layers, consulting-industry-city and training-industry-city are
// greedy and order-dependent: a copy edit in one city's profile can flip which sibling passes, and a page that has
// been live (and indexed) silently disappears from the build. The 2026-10-28 NAS 410 pass did exactly that to
// Savannah aerospace consulting, Buffalo consulting, Baltimore power consulting and two ERP city pages. A path in this
// list is accepted even when it sits over the gate; new paths still have to pass it.
import { readFileSync } from 'fs';
let paths = [];
try { paths = JSON.parse(readFileSync(new URL('./published-city-pages-2026-10.json', import.meta.url), 'utf-8')).paths || []; } catch {}
export const PUBLISHED_CITY_PAGES = new Set(paths);
