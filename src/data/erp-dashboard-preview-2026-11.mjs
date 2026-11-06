// ERP dashboard preview — 2026-11-06 (owner): "include dashboard models that we have or similar
// to make it look more professional, and build the pages very interactive and extremely modern
// design while maintaining brand theme".
//
// Modelled on the real portal (portal.atlantisndt.com, read-only review 2026-11-06, structure
// only, no client data): navy top bar, KPI cards with a coloured left edge, tabbed panels
// (Sales & quotations / Invoices & cash / Training / Enquiries / Operations / Needs attention),
// quotation ageing and service-line charts. Every name and status below is SAMPLE DATA and is
// labelled as such on the page.
//
// One source for both layers: the interactive React widget (src/components/erp/
// ErpDashboardPreview.tsx) renders these records; the crawler gets dashboardStaticHtml(),
// a described figure built from the same records.
//
// ERP copy rule (CLAUDE.md §20.10): NO DIGITS. Statuses are words, quantities are bar lengths.
// assertDashboardPreviewClean() fails the build if a digit appears outside a standards
// designation.

export const DASH_TABS = [
  { id: 'certifications', label: 'Certifications', title: 'Certification matrix', caption: 'Every technician, every method and the vision record on one grid, coloured by expiry. Select a cell to see what happens next.' },
  { id: 'calibration', label: 'Calibration', title: 'Equipment and calibration', caption: 'Instruments and reference blocks with their calibration window. Overdue items raise a warning when someone assigns them to a job.' },
  { id: 'reports', label: 'Reports', title: 'Report pipeline', caption: 'Each report moves from field data to Level II draft, Level III review and issue. Select a report and advance it.' },
  { id: 'jobs', label: 'Jobs', title: 'Crew board', caption: 'This week by crew. Double bookings are flagged, and certification checks can be set up at assignment to suit your written practice.' },
  { id: 'sales', label: 'Sales & cash', title: 'Business overview', caption: 'Quotations, work won but not yet invoiced, and overdue cash, the way the owner sees the business.' },
];

export const CERT_METHODS = ['UT', 'PAUT', 'RT', 'MT', 'PT', 'VT', 'Vision'];
// v = valid, s = expiring soon, x = expired, n = not held
export const CERT_ROWS = [
  { name: 'A. Moreno', level: 'Level II', cells: ['v', 'v', 'n', 'v', 'v', 'v', 'v'] },
  { name: 'J. Patel', level: 'Level II', cells: ['v', 'n', 's', 'v', 'v', 'v', 'v'] },
  { name: 'K. Osei', level: 'Level I', cells: ['v', 'n', 'n', 'v', 'v', 'v', 's'] },
  { name: 'S. Larsen', level: 'Level III', cells: ['v', 'v', 'v', 'v', 'v', 'v', 'v'] },
  { name: 'D. Chen', level: 'Level II', cells: ['x', 'v', 'n', 'v', 'v', 'v', 'v'] },
  { name: 'M. Rossi', level: 'Trainee', cells: ['n', 'n', 'n', 'v', 'v', 'n', 'x'] },
];
export const CERT_STATUS = {
  v: { label: 'Valid', note: 'Current. Available for assignment.' },
  s: { label: 'Expiring soon', note: 'Expires this month. A renewal reminder has gone to the technician and the Level III.' },
  x: { label: 'Expired', note: 'Expired. Flagged on any new booking or timesheet in this method until the record is renewed.' },
  n: { label: 'Not held', note: 'Not certified in this method. Not offered for these jobs.' },
};

export const CAL_ITEMS = [
  { name: 'UT flaw detector', where: 'Truck North', status: 'ok', pos: 0.35 },
  { name: 'Phased array unit', where: 'Shop', status: 'due', pos: 0.88 },
  { name: 'UT thickness gauge', where: 'Site, crude unit', status: 'over', pos: 1.12 },
  { name: 'IIW type calibration block', where: 'Shop', status: 'ok', pos: 0.2 },
  { name: 'Step wedge', where: 'Truck South', status: 'ok', pos: 0.55 },
  { name: 'Electromagnetic yoke', where: 'Truck North', status: 'due', pos: 0.92 },
  { name: 'UV-A lamp', where: 'Truck South', status: 'over', pos: 1.06 },
  { name: 'Radiation survey meter', where: 'RT bunker', status: 'ok', pos: 0.48 },
];
export const CAL_STATUS = {
  ok: { label: 'In calibration' },
  due: { label: 'Due soon' },
  over: { label: 'Overdue' },
};

export const REPORT_STAGES = ['Field data', 'Level II draft', 'Level III review', 'Issued'];
export const REPORT_CARDS = [
  { id: 'r-a', title: 'Crude unit piping', method: 'UT thickness', code: 'API 570', stage: 2 },
  { id: 'r-b', title: 'Tank floor screening', method: 'MFL', code: 'API 653', stage: 1 },
  { id: 'r-c', title: 'Module B butt welds', method: 'RT', code: 'ASME Section V', stage: 0 },
  { id: 'r-d', title: 'Exchanger bundle', method: 'ECT', code: 'ASME Section V', stage: 1 },
  { id: 'r-e', title: 'Pipe rack welds', method: 'VT', code: 'AWS D1.1', stage: 3 },
  { id: 'r-f', title: 'Sphere shell nozzles', method: 'MT', code: 'ASME Section V', stage: 2 },
];

export const JOB_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
export const JOB_CREWS = ['Crew North', 'Crew South', 'Shop'];
// flag: 'cert' = technician not current for the method, 'double' = technician already booked
export const JOB_CHIPS = [
  { crew: 0, day: 0, span: 2, title: 'Refinery piping UT', who: 'A. Moreno, K. Osei' },
  { crew: 0, day: 2, span: 1, title: 'Weld RT, night shift', who: 'J. Patel', flag: 'cert', flagText: 'RT for J. Patel expires before this job' },
  { crew: 0, day: 3, span: 2, title: 'Tank floor MFL', who: 'D. Chen, M. Rossi' },
  { crew: 1, day: 0, span: 1, title: 'Fab shop VT', who: 'S. Larsen' },
  { crew: 1, day: 1, span: 3, title: 'Pipeline girth welds', who: 'D. Chen', flag: 'double', flagText: 'D. Chen is already booked on Tank floor MFL' },
  { crew: 2, day: 0, span: 5, title: 'Level III report review', who: 'S. Larsen' },
];

export const SALES_KPIS = [
  { label: 'Confirmed quotations', tone: 'green', trend: 'Up on last quarter', spark: [0.3, 0.35, 0.32, 0.5, 0.46, 0.62, 0.7] },
  { label: 'Open quotations', tone: 'blue', trend: 'Several past validity', spark: [0.6, 0.55, 0.7, 0.66, 0.8, 0.74, 0.78] },
  { label: 'Work won, not invoiced', tone: 'amber', trend: 'Needs billing', spark: [0.2, 0.3, 0.28, 0.45, 0.4, 0.52, 0.48] },
  { label: 'Overdue invoices', tone: 'red', trend: 'Chase this week', spark: [0.5, 0.42, 0.46, 0.38, 0.44, 0.36, 0.4] },
];
export const SALES_MONTHS = [
  { m: 'Jun', issued: 0.28, confirmed: 0.12 },
  { m: 'Jul', issued: 0.42, confirmed: 0.18 },
  { m: 'Aug', issued: 0.9, confirmed: 0.22 },
  { m: 'Sep', issued: 0.5, confirmed: 0.26 },
  { m: 'Oct', issued: 0.72, confirmed: 0.34 },
  { m: 'Nov', issued: 0.46, confirmed: 0.3 },
];
export const SALES_AGEING = [
  { label: 'This fortnight', v: 0.42 },
  { label: 'Within the month', v: 0.12 },
  { label: 'One to two months', v: 0.24 },
  { label: 'Older', v: 0.86 },
];
export const SALES_LINES = [
  { label: 'Training and certification', v: 0.95 },
  { label: 'Inspection services', v: 0.6 },
  { label: 'Level III consulting', v: 0.18 },
];

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const tabById = (id) => DASH_TABS.find((t) => t.id === id) || DASH_TABS[0];

/** Plain-language summary of one panel, from the same records the widget draws. */
export function dashboardSummary(tabId) {
  switch (tabId) {
    case 'calibration': {
      const over = CAL_ITEMS.filter((i) => i.status === 'over').map((i) => i.name);
      const due = CAL_ITEMS.filter((i) => i.status === 'due').map((i) => i.name);
      return [`Overdue: ${over.join(', ')}.`, `Due soon: ${due.join(', ')}.`, 'Assigning an overdue instrument to a job raises a warning until the new calibration certificate is attached.'];
    }
    case 'reports':
      return REPORT_STAGES.map((st, i) => `${st}: ${REPORT_CARDS.filter((c) => c.stage === i).map((c) => `${c.title} (${c.method}, ${c.code})`).join('; ') || 'nothing waiting'}.`);
    case 'jobs':
      return JOB_CHIPS.filter((c) => c.flag).map((c) => `${c.title}: ${c.flagText}.`).concat(['Double bookings are flagged on the board; certification checks at assignment are configured to the written practice.']);
    case 'sales':
      return [`Cards: ${SALES_KPIS.map((k) => `${k.label.toLowerCase()} (${k.trend.toLowerCase()})`).join(', ')}.`, `Charts: quotations issued against confirmed by month, quotation ageing (${SALES_AGEING.map((a) => a.label.toLowerCase()).join(', ')}) and confirmed work by service line.`];
    default: {
      const out = [];
      for (const r of CERT_ROWS) {
        r.cells.forEach((c, i) => {
          if (c === 's' || c === 'x') out.push(`${r.name} (${r.level}), ${CERT_METHODS[i]}: ${CERT_STATUS[c].label.toLowerCase()}`);
        });
      }
      return [`Needs action: ${out.join('; ')}.`, 'Expired methods are flagged wherever that technician is booked; expiring ones send a reminder to the technician and the Level III.'];
    }
  }
}

/** Crawler figure (and no-JS fallback): a described dashboard, never a picture of numbers. */
export function dashboardStaticHtml(tabId = 'certifications') {
  const t = tabById(tabId);
  const items = dashboardSummary(t.id).map((x) => `<li>${esc(x)}</li>`).join('');
  const tabs = DASH_TABS.map((x) => esc(x.label)).join(', ');
  return `<figure class="erp-dash-static rounded-2xl border border-border bg-white p-5 shadow-sm" data-erp-dashboard="${esc(t.id)}"><figcaption class="text-sm font-semibold text-foreground mb-2">${esc(t.title)}: sample dashboard from the Atlantis NDT platform</figcaption><p class="text-sm text-muted-foreground mb-2">${esc(t.caption)}</p><ul class="list-disc pl-5 text-sm text-muted-foreground space-y-1">${items}</ul><p class="text-xs text-muted-foreground mt-3">Panels in the preview: ${tabs}. Names and statuses are sample data.</p></figure>`;
}

const ALLOWED = /SNT-TC-1A|CP-189|ASME Section V|AWS D1\.1|API (510|570|653|1104)|ISO 9001|UV-A/g;
export function assertDashboardPreviewClean() {
  const all = JSON.stringify([DASH_TABS, CERT_ROWS, CERT_STATUS, CAL_ITEMS.map(({ pos, ...r }) => r), CAL_STATUS, REPORT_STAGES, REPORT_CARDS.map(({ stage, ...r }) => r), JOB_DAYS, JOB_CREWS, JOB_CHIPS.map(({ crew, day, span, ...r }) => r), SALES_KPIS.map(({ spark, ...r }) => r), SALES_MONTHS.map((x) => x.m), SALES_AGEING.map((x) => x.label), SALES_LINES.map((x) => x.label)]);
  const hits = all.replace(ALLOWED, '').match(/[^"]{0,20}\d[^"]{0,20}/g);
  if (hits) throw new Error(`erp-dashboard-preview: digits in copy: ${hits.slice(0, 5).join(' | ')}`);
  for (const t of DASH_TABS) if (/\d/.test(dashboardStaticHtml(t.id).replace(/<[^>]+>/g, '').replace(ALLOWED, ''))) throw new Error(`erp-dashboard-preview: digit in static ${t.id}`);
}
