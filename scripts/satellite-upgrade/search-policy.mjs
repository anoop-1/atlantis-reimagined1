// Reserve commercial landing-page intent for the primary domain. These URLs
// remain available to readers, but are intentionally excluded from Search.
export const sharedUtilityRoutes = ['/atlantis-products-services','/regions-and-project-planning','/industries-and-applications'];
export const commercialOverlapRoutes = {
  'ndt-software-solutions': ['/comparisons/reporting-software'],
  'ndt-knowledge-hub': ['/software-reviews','/blog/ndt-inspection-software-buyers-guide-2026'],
  'advanced-ndt-techniques': ['/blog/automating-ndt-reporting-with-inspection-erp'],
};
export const shouldIndex = (site,route) => !sharedUtilityRoutes.includes(route) && !(commercialOverlapRoutes[site]||[]).includes(route);
export const primaryIntentOwners = {
  erp:'/erp', reporting:'/erp/apps/ndt-reports', twin:'/digital-twin-reporting',
  simulation:'/practical-ndt', training:'/training', inspection:'/inspection-services', consulting:'/consulting',
};
export const editorialRelease = 'editorial-v1';
