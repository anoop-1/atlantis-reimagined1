// Which NDT module pages (/erp/apps/{app}) carry the dashboard preview, and on which panel
// (2026-11-06). Read by ErpAppPage (interactive widget) and scripts/erp-solutions-pages.mjs
// (described figure). These are also the module pages kept self-canonical
// (prerender.mjs consolidation protect set), so every page that shows a dashboard is one
// Google can index.
export const MODULE_DASHBOARD_TAB = {
  'ndt-reports': 'reports',
  procedures: 'reports',
  certificates: 'certifications',
  employees: 'certifications',
  elearning: 'certifications',
  'asset-management': 'calibration',
  maintenance: 'calibration',
  'team-assignments': 'jobs',
  project: 'jobs',
  timesheets: 'jobs',
  quotations: 'sales',
  invoicing: 'sales',
  crm: 'sales',
  dashboards: 'sales',
};
export const MODULE_PAGES_PROTECTED = Object.keys(MODULE_DASHBOARD_TAB).map((a) => `/erp/apps/${a}`);
