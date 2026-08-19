/**
 * Training CTA audit — corrected 2026-08-19.
 *
 * First version under-reported badly: it searched for the literal Forms URL,
 * but pages that import MS_FORM_URL from src/lib/enquiry-endpoint.ts, or render
 * <EnquiryCaptureForm>, carry the CTA without containing that string. Training.tsx
 * was reported as missing a CTA it actually has — which is why all six
 * ms_form_click events came from /training.
 *
 * This version detects any of the three, and separates React-backed routes from
 * prerender-only ones, because the fix differs: a React page needs the component,
 * a prerender-only route needs the CTA emitted into bodyContent.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');

const HAS_CTA = /forms\.(cloud\.microsoft|office\.com)|MS_FORM_URL|EnquiryCaptureForm|TrainingEnquiryCTA/;

function walk(d, o = []) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) walk(p, o);
    else if (n === 'index.html') o.push(p);
  }
  return o;
}
const routeOf = (f) => {
  const r = '/' + relative(DIST, dirname(f)).replace(/\\/g, '/');
  return r === '/.' ? '/' : r;
};

// Map App.tsx routes to their source files so we can tell React-backed from
// prerender-only.
const app = readFileSync(join(ROOT, 'src', 'App.tsx'), 'utf-8');
const lazyMap = new Map();
for (const m of app.matchAll(/const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\("\.\/(.+?)"\)\)/g)) lazyMap.set(m[1], m[2]);
const routeToFile = new Map();
for (const m of app.matchAll(/<Route\s+path="([^"]+)"[^>]*Component=\{(\w+)\}/g)) {
  const f = lazyMap.get(m[2]);
  if (f) routeToFile.set(m[1], f);
}

const training = walk(DIST).filter((f) => /training/.test(routeOf(f)));

const reactWith = [], reactWithout = [], prerenderOnly = [];
for (const f of training) {
  const route = routeOf(f);
  const srcRel = routeToFile.get(route);
  if (!srcRel) { prerenderOnly.push(route); continue; }
  for (const ext of ['.tsx', '.ts', '/index.tsx']) {
    const p = join(ROOT, 'src', srcRel + ext);
    if (existsSync(p)) {
      (HAS_CTA.test(readFileSync(p, 'utf-8')) ? reactWith : reactWithout).push(`${route}  <- src/${srcRel}${ext}`);
      break;
    }
  }
}

console.log(`training routes built: ${training.length}\n`);
console.log(`  React-backed WITH a Forms CTA    : ${reactWith.length}`);
console.log(`  React-backed WITHOUT a CTA       : ${reactWithout.length}`);
console.log(`  prerender-only (no React page)   : ${prerenderOnly.length}`);

if (reactWithout.length) {
  console.log('\nReact pages missing the CTA — these need the component:');
  for (const r of reactWithout) console.log('   ' + r);
}

const KEY = [
  '/training', '/training-usa', '/ndt-training-online', '/resources/training-requirements-matrix',
  '/ndt-level-1-training', '/ndt-level-2-training', '/asnt-level-iii-training',
  '/ultrasonic-testing-training', '/radiographic-testing-training', '/eddy-current-testing-training',
  '/corporate-ndt-training', '/oil-gas-ndt-training', '/aerospace-ndt-training',
];
console.log('\nKey US-landing routes:');
for (const r of KEY) {
  const inReactWith = reactWith.some((x) => x.startsWith(r + ' '));
  const inReactWithout = reactWithout.some((x) => x.startsWith(r + ' '));
  const inPre = prerenderOnly.includes(r);
  console.log(`   ${inReactWith ? 'HAS CTA        ' : inReactWithout ? 'react, NO CTA  ' : inPre ? 'prerender-only ' : 'not built      '}  ${r}`);
}
