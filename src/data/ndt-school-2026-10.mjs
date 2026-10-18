// /ndt-school side-by-side (2026-10-18, training.md §5.6): the Houston route table minus the
// ASNT Houston column, shared by the crawler (scripts/ndt-school-page-2026-08-16.mjs) and React
// (src/pages/ndt-school.tsx). Both pass their own copy of the two JSON files.
export function schoolCompareTable(SCHOOL, HOUSTON) {
  const c = SCHOOL.compare;
  const keep = (row) => row.filter((_, i) => i !== c.dropColumn);
  const head = keep(HOUSTON.routes.head);
  const rows = HOUSTON.routes.rows.map((r) => {
    const k = keep(r);
    return k[0] === c.feesRow ? [...k.slice(0, -1), c.feesCell] : k;
  });
  if (head.length !== 3 || rows.some((r) => r.length !== 3)) throw new Error('ndt-school: the Houston route table no longer has the expected four columns');
  return { h2: c.h2, intro: c.intro, caption: c.caption, head, rows };
}
