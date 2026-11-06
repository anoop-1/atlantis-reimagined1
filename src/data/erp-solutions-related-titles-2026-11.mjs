// Link text for the ERP owner pages the /erp/solutions guides point to (2026-11-06).
// Both layers read this, so the visible label and the crawler label match.
export const RELATED_TITLES = {
  '/erp': 'Atlantis NDT platform overview',
  '/erp/apps': 'All platform modules',
  '/erp/ndt-personnel-certification-tracking': 'NDT personnel certification tracking',
  '/erp/ndt-certificates-management-software': 'NDT certificates management',
  '/erp/ndt-equipment-calibration-tracking-software': 'NDT equipment calibration tracking',
  '/erp/inspection-scheduling-crew-dispatch-software': 'Inspection scheduling and crew dispatch',
  '/erp/inspection-job-costing-profitability': 'Inspection job costing and profitability',
  '/erp/inspection-procedures-management-software': 'Inspection procedures management',
  '/erp/audit-preparation-software-inspection-firms': 'Audit preparation for inspection firms',
  '/erp/client-portal-inspection-reports': 'Client portal for inspection reports',
  '/erp/inspection-reporting-software-code-templates': 'Code-referenced inspection report templates',
  '/best-ndt-reporting-software-2026': 'Choosing NDT reporting software',
  '/ndt-inspection-software': 'NDT inspection software',
};
export const relatedTitle = (href) => RELATED_TITLES[href] || null;
