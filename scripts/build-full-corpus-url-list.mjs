#!/usr/bin/env node
/**
 * Build full URL list from prerendered dist/ directory.
 * Outputs scripts/indexing-url-list-full-corpus.json bucketed by priority.
 */
import { readdirSync, statSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SITE = 'https://atlantisndt.com';

function walk(dir, prefix = '') {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const sub = join(dir, e.name);
    if (existsSync(join(sub, 'index.html'))) {
      out.push(prefix + '/' + e.name + '/');
    }
    out.push(...walk(sub, prefix + '/' + e.name));
  }
  return out;
}

const paths = walk(DIST).sort();
// Bucket by priority: hubs first → blogs → verticals → cities → utility
function tier(p) {
  if (p === '/' || ['/about/', '/contact/', '/blog/', '/training/', '/consulting/', '/erp/', '/digital-twins/', '/3d-scanning-services/', '/atlantis-academy/', '/atlantis-partner-program/', '/atlantis-iso-17024/', '/atlantis-iso-9001/', '/lms/', '/ai-ndt-defect-detection/', '/ccs-inspection/', '/verticals/'].includes(p)) return 'A-hubs';
  if (p.startsWith('/verticals/')) return 'A-verticals';
  if (p.startsWith('/blog/')) return 'B-blogs';
  if (/^\/(ultrasonic|radiographic|magnetic-particle|penetrant|visual|eddy-current)-testing\b/.test(p)) return 'B-methods';
  if (p.startsWith('/ndt-erp-') || p.startsWith('/erp/')) return 'C-erp';
  if (p.startsWith('/ndt-training-') || p.startsWith('/training/')) return 'C-training';
  if (p.startsWith('/consulting/')) return 'C-consulting';
  if (p.startsWith('/digital-twin-') || p.startsWith('/digital-twins/')) return 'C-digital-twin';
  if (p.startsWith('/3d-scanning-')) return 'C-3d-scanning';
  if (p.startsWith('/services/')) return 'D-services';
  if (p.startsWith('/industry/')) return 'D-industry';
  if (p.startsWith('/inspection/')) return 'D-inspection';
  if (p.startsWith('/compare/')) return 'D-compare';
  if (p.startsWith('/corporate-training/') || p.startsWith('/corporate-ndt-training/')) return 'D-corporate-training';
  return 'E-utility';
}

const urls = paths.map(p => ({ url: SITE + p, tier: tier(p) }));
const tierCount = {};
for (const u of urls) tierCount[u.tier] = (tierCount[u.tier] || 0) + 1;

const out = {
  generated: '2026-06-25',
  source: 'Round-4 full corpus from dist/',
  count: urls.length,
  tierCounts: tierCount,
  urls,
};

writeFileSync(join(ROOT, 'scripts', 'indexing-url-list-full-corpus.json'), JSON.stringify(out, null, 2), 'utf-8');
console.log('Wrote ' + urls.length + ' URLs to scripts/indexing-url-list-full-corpus.json');
console.log('Tier counts:', tierCount);
