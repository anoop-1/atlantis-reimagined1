/**
 * NAS 410 clarification pages — 2026-11-17 (CLAUDE.md §79).
 *
 * WHY. On 2026-10-28 (§65/§66) the owner removed NAS 410 from the site: the offers became ASNT NDT
 * Level III consulting and SNT-TC-1A-based training, for aerospace as for every other sector. On
 * 2026-11-17 the owner asked for "authoritative content about NAS 410 clarifications, how does it work,
 * how certifications work in there". Search Console still showed the retired explainer at p7.5 for
 * "nas 410" (288 NAS 410 impressions in 28 days, all landing on 301'd URLs), so two of the old URLs
 * come back as EXPLANATION pages:
 *   /blog/nas-410-aerospace-ndt-certification-explained — what NAS 410 is, how certification works
 *   /blog/nas-410-vs-snt-tc-1a                          — the comparison and which one applies
 * They say plainly that Atlantis provides no NAS 410 training, certification, examinations or
 * Responsible Level 3 (the claims gate still fails on any such offer, §51/§65 rules), and that the
 * aerospace offer stays ASNT Level III consulting + SNT-TC-1A-based training + inspection.
 *
 * WHERE "NAS 410" MAY APPEAR (enforced by scripts/preflight.mjs, block 4b):
 *   - anywhere on NAS410_PAGES;
 *   - on NAS410_LINK_PAGES, in the short link block (src/data/next-steps-2026-10.json) that points
 *     readers to the two pages;
 *   - on any page, only as the text of a link to one of NAS410_PAGES (related-reading blocks).
 * Everywhere else the site still names no NAS 410.
 */
export const NAS410_PAGES = [
  '/blog/nas-410-aerospace-ndt-certification-explained',
  '/blog/nas-410-vs-snt-tc-1a',
];

/** Aerospace/aviation pages that carry the link block to the clarification pages. */
export const NAS410_LINK_PAGES = [
  '/aerospace-ndt-certification-requirements',
  '/blog/aerospace-ndt-certification-explained',
  '/blog/snt-tc-1a-for-aerospace-ndt',
  '/aerospace-ndt-training',
  '/aviation-ndt-training',
  '/consulting/aerospace-ndt-consulting',
  '/consulting/aviation-ndt-consulting',
  '/consulting/aerospace-responsible-level-iii',
  '/compliance/aerospace-ndt',
  '/ndt-for-aerospace',
];

const norm = (p) => String(p || '').replace(/\/+$/, '') || '/';
const ALLOWED = new Set([...NAS410_PAGES, ...NAS410_LINK_PAGES]);
export const isNas410Page = (p) => NAS410_PAGES.includes(norm(p));
export const isNas410Allowed = (p) => ALLOWED.has(norm(p));

/** Remove links to the clarification pages (their anchor text may name NAS 410 on any page). */
export function stripNas410Links(html) {
  return String(html).replace(/<a\b[^>]*href="(?:https:\/\/atlantisndt\.com)?\/blog\/nas-410-(?:aerospace-ndt-certification-explained|vs-snt-tc-1a)\/?"[^>]*>[\s\S]*?<\/a>/gi, '');
}
