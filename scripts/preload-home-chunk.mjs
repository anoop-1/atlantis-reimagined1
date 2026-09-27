// Home page first paint: the "/" route is a lazy chunk (pages/Index), so the
// browser only learns about it after the main bundle has executed — one extra
// round trip behind the splash. Preload it (and its CSS) straight from the
// prerendered dist/index.html so it downloads in parallel with the main bundle.
import { readFileSync, writeFileSync, readdirSync } from 'fs';

const assets = readdirSync('dist/assets');
const js = assets.find((f) => /^Index-[\w-]+\.js$/.test(f));
const css = assets.find((f) => /^Index-[\w-]+\.css$/.test(f));
if (!js) { console.warn('preload-home-chunk: Index chunk not found, skipped'); process.exit(0); }
const file = 'dist/index.html';
let html = readFileSync(file, 'utf8').replace(/\s*<link rel="(modulepreload|preload)" href="\/assets\/Index-[^"]+"[^>]*>/g, '');
const tags = [`<link rel="modulepreload" href="/assets/${js}" crossorigin>`];
if (css) tags.push(`<link rel="preload" href="/assets/${css}" as="style">`);
html = html.replace('</head>', `  ${tags.join('\n  ')}\n</head>`);
writeFileSync(file, html);
console.log(`preload-home-chunk: ${tags.length} preload tag(s) added to /`);
