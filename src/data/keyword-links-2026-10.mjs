/**
 * Keyword-anchored related links across product and service pages — 2026-10-10 (CLAUDE.md §50).
 * ─────────────────────────────────────────────────────────────────────────────
 * Why: the 2026-10-10 competitor research (§49) gave each segment a keyword set, and
 * §49 put those keywords on ONE owning page per segment. Spreading the same keywords
 * as body copy over thousands of pages would make those pages compete with the owner
 * (the §40.3 cannibalisation shape) and read as boilerplate. The strategic way to use
 * them site-wide is as internal-link anchor text: every topically related page points
 * at the owner with a competitor keyword as the anchor.
 *
 * Measured before (dist, 8,239 pages): the API 510/570/653 service pages had ~70
 * inbound links each, the new tools ~20, the software buyer checklist 23; and the hubs
 * that do have thousands of links use one or two anchors ("digital twin platform"
 * 5,754×, "atlantis ndt erp" 6,447×).
 *
 * Rules: path-only classification (works identically in React and the crawler), one
 * compact block per page, at most three links, never to itself, anchors rotated per page
 * by a stable hash so no single anchor dominates. No prices, no claims, no numerals in
 * ERP/software copy outside standards names.
 *
 * Shared by src/components/KeywordLinksBlock.tsx (React) and scripts/prerender.mjs via
 * scripts/competitive-coverage-2026-10.mjs (crawler HTML).
 */

const T = {
  tank: { href: '/consulting/api-653-tank-inspector-services', anchors: ['API 653 tank inspection services', 'storage tank inspection services', 'aboveground storage tank inspection', 'tank floor MFL scanning with UT prove-up'] },
  vessel: { href: '/consulting/api-510-pressure-vessel-inspector-services', anchors: ['API 510 inspection services', 'API 510 pressure vessel inspection support'] },
  piping: { href: '/consulting/api-570-piping-inspector-services', anchors: ['API 570 piping inspection services', 'piping thickness surveys at every CML', 'process piping inspection to API 570'] },
  interval: { href: '/tools/api-inspection-interval-calculator', anchors: ['API 510, API 570 and API 653 interval calculator', 'free inspection interval and remaining life calculator', 'corrosion rate and next inspection calculator'] },
  technique: { href: '/inspection-services', anchors: ['TOFD inspection services', 'NDT inspection services', 'third party inspection services'] },
  // 2026-10-18 (p18 inspection): method anchors go to the method owners (CLAUDE.md §58 owner map), not the hub.
  paut: { href: '/inspection/phased-array-inspection-services', anchors: ['phased array ultrasonic testing services', 'PAUT inspection services'] },
  ut: { href: '/ultrasonic-testing', anchors: ['ultrasonic thickness measurement services', 'ultrasonic inspection services'] },
  cmap: { href: '/corrosion-mapping', anchors: ['corrosion mapping services'] },
  pv: { href: '/inspection/pressure-vessel-inspection-services', anchors: ['pressure vessel inspection services'] },
  training: { href: '/training', anchors: ['NDT training courses', 'NDT certification courses', 'NDT training and certification', 'PAUT and TOFD training'] },
  online: { href: '/ndt-training-online', anchors: ['online NDT courses', 'self-paced online NDT training', 'blended NDT training'] }, // 2026-10-18 owner: no live online classes
  hours: { href: '/tools/snt-tc-1a-hours-planner', anchors: ['SNT-TC-1A hours planner', 'training and experience hours planner'] },
  sim: { href: '/practical-ndt', anchors: ['NDT simulator', 'NDT training simulator', 'browser-based NDT practice', 'NDT simulation software'] },
  // 2026-10-12: the UT-specific simulator anchors moved to the A-scan tool page, which owns them.
  ascan: { href: '/tools/ultrasonic-a-scan-simulator', anchors: ['ultrasonic testing simulator', 'A-scan simulator', 'flaw detector simulator', 'free UT A-scan practice tool'] },
  level3: { href: '/consulting/ndt-consulting-level-iii', anchors: ['outsourced NDT Level III', 'contract and on-call Level III services', 'NDT Level 3 consultant', 'written practice and procedure development', 'SNT-TC-1A consulting', 'NAS 410 Level 3 services'] },
  erp: { href: '/erp', anchors: ['NDT ERP software', 'NDT business management software', 'ERP for inspection companies', 'NDT company management software'] },
  software: { href: '/ndt-inspection-software', anchors: ['NDT inspection software', 'NDT management software', 'NDT software for inspection companies'] }, // 2026-10-18: exact anchors only (the other two belong to /inspection-management-software and the cert/calibration owners)
  checklist: { href: '/resources/ndt-software-buyer-checklist', anchors: ['NDT software buyer checklist', 'questions to ask NDT software vendors'] },
  twin: { href: '/digital-twins', anchors: ['asset integrity digital twin', 'inspection data management on a 3D model', 'CML management on a 3D model', 'CML management software'] },
  report3d: { href: '/digital-twin-reporting', anchors: ['3D inspection reporting', 'digital twin reporting software', 'NDT reporting software with 3D output', 'digital twin inspection reporting'] },
  scan: { href: '/3d-scanning-services', anchors: ['industrial 3D laser scanning', 'plant and refinery laser scanning', 'scan-to-CAD for process plants', 'tank laser scanning'] },
};

// The technique slot rotates over the hub and the method owners in the shares the old six-anchor
// hub entry had: half hub anchors, one sixth each for PAUT, UT thickness and corrosion mapping.
const TECHNIQUE = ['technique', 'paut', 'technique', 'ut', 'technique', 'cmap'];
const FAMILIES = {
  tank: { intro: ['Planning tank work?', 'For storage tanks:'], targets: ['tank', 'interval', TECHNIQUE] },
  vessel: { intro: ['Planning vessel work?', 'For pressure vessels:'], targets: ['vessel', 'interval', 'pv'] },
  piping: { intro: ['Planning piping work?', 'For piping circuits:'], targets: ['piping', 'interval', TECHNIQUE] },
  technique: { intro: ['Need this examination done?', 'From technique to field service:'], targets: [TECHNIQUE, ['tank', 'vessel', 'piping', 'interval'], 'level3'] },
  training: { intro: ['Planning your training?', 'Training routes:'], targets: ['training', 'online', 'hours'] },
  trainingSim: { intro: ['Practise between courses:', 'Training routes:'], targets: ['sim', 'ascan', 'training'] },
  level3: { intro: ['Need Level III cover?', 'Level III and programme support:'], targets: ['level3', 'hours', 'training'] },
  software: { intro: ['Comparing NDT software?', 'Software for inspection companies:'], targets: ['erp', ['software', 'checklist'], 'report3d'] },
  twin: { intro: ['Inspection data on the asset:', 'From readings to the 3D model:'], targets: ['report3d', 'twin', 'interval'] },
  scan: { intro: ['Industrial reality capture:', 'From scan to inspection data:'], targets: ['scan', 'twin', 'tank'] },
};

/** Owner and utility pages that never carry the block. */
const EXCLUDE = new Set(['/', '/contact', '/about', '/privacy', '/privacy-policy', '/terms', '/terms-of-service', '/404', '/sitemap', '/erp/pricing',
  ...Object.values(T).map((t) => t.href)]);

/** Path-only classification; first match wins. Returns a family key or null. */
export function familyFor(path) {
  const p = String(path || '').toLowerCase().replace(/\/$/, '') || '/';
  if (EXCLUDE.has(p)) return null;
  if (/^\/(ar|es)\//.test(p) || /^\/(tools|resources|embed|admin|legal)(\/|$)/.test(p)) return null;
  if (/3d-scanning|laser-scanning|reality-capture/.test(p)) return 'scan';
  if (/^\/practical-ndt|simulator|virtual-ndt|vr-ndt/.test(p)) return 'trainingSim';
  if (/digital-twin|^\/compare\/atlantis-dt|asset-integrity|idms|inspection-data-management/.test(p)) return 'twin';
  if (/^\/(erp|ndt-erp|erp-)|erp|reporting-software|inspection-software|ndt-software|ndt-reporting|ndt-data-management|netsuite|odoo|quickbooks|acumatica|vs-sap|sap-alternative|inspection-management-software|ndt-connect/.test(p)) return 'software';
  if (/api-653|storage-tank|tank-(inspection|floor|bottom|shell)|aboveground/.test(p)) return /certification|training|exam|course/.test(p) ? 'training' : 'tank';
  if (/api-510|pressure-vessel/.test(p)) return /certification|training|exam|course/.test(p) ? 'training' : 'vessel';
  if (/api-570|piping/.test(p)) return /certification|training|exam|course/.test(p) ? 'training' : 'piping';
  if (/level-iii|level-3|written-practice|procedure-development|ndt-consulting|^\/consulting/.test(p)) return /training|exam|study|course|salary/.test(p) ? 'training' : 'level3';
  // UT/PAUT/TOFD training pages hand readers to the A-scan simulator (owner plan 2026-10-10: UT training -> Practical NDT -> enquiry).
  if (/training|certification|course|school|salary|exam|asnt|snt-tc|cp-189|iso-9712|level-1|level-2|career|technician|apprentice/.test(p)) return /ultrasonic|(^|\/|-)ut-|paut|phased-array|tofd/.test(p) ? 'trainingSim' : 'training';
  if (/ultrasonic|phased-array|paut|tofd|radiograph|magnetic|penetrant|eddy|visual-testing|visual-inspection|mfl|corrosion|thickness|weld|inspection|ndt-services|^\/services\//.test(p)) return 'technique';
  if (/^\/(compliance|standards)\//.test(p)) return 'level3';
  if (/^\/(industry|verticals)(\/|$)/.test(p)) return 'technique';
  if (/^\/compare\//.test(p)) return 'twin';
  return null;
}

function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

/** The block for a path, or null. Same output in React and the crawler. */
export function keywordLinksFor(path) {
  const p = String(path || '').replace(/\/$/, '') || '/';
  const fam = familyFor(p);
  if (!fam) return null;
  const f = FAMILIES[fam];
  const h = hash(p);
  // A target given as a list rotates by page hash (spreads links over the API service pages).
  const links = f.targets
    .map((k) => T[Array.isArray(k) ? k[(h >>> 3) % k.length] : k])
    .filter((t) => t.href !== p)
    .map((t, i) => [t.href, t.anchors[(h + i * 7) % t.anchors.length]]);
  if (!links.length) return null;
  return { family: fam, intro: f.intro[h % f.intro.length], links };
}

export const KEYWORD_LINK_TARGETS = T;
