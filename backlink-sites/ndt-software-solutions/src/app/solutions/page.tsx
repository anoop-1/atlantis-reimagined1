import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NDT Software Solutions — In-Depth Articles',
  description: 'Long-form practical articles on NDT software and digital inspection platforms for NDT software buyers, integrity IT leads, digital QA managers.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">NDT Software Solutions — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on NDT software and digital inspection platforms, written for NDT software buyers, integrity IT leads, digital QA managers.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/solutions/ndt-reporting-software-buyer-checklist-2026" className="text-xl font-semibold text-gray-900 hover:text-blue-600">NDT Reporting Software Buyer Checklist (2026)</a>
          <p className="text-sm text-gray-500 mt-2">By Carlos Rabago, Solution Architect &middot; 2024-10-31</p>
          <p className="text-gray-700 mt-3">NDT Reporting Software Buyer Checklist (2026)</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/solutions/on-prem-vs-saas-ndt-platforms-trade-offs" className="text-xl font-semibold text-gray-900 hover:text-blue-600">On-Prem vs SaaS NDT Platforms: Real Trade-Offs</a>
          <p className="text-sm text-gray-500 mt-2">By Carlos Rabago, Solution Architect &middot; 2025-03-22</p>
          <p className="text-gray-700 mt-3">On-Prem vs SaaS NDT Platforms: Real Trade-Offs</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/solutions/integrating-ndt-data-with-cmms-sap-pm-maximo" className="text-xl font-semibold text-gray-900 hover:text-blue-600">Integrating NDT Data With CMMS: SAP PM and Maximo Side-by-Side</a>
          <p className="text-sm text-gray-500 mt-2">By Mireille Dubois, IT Architect &middot; 2025-08-29</p>
          <p className="text-gray-700 mt-3">Integrating NDT Data With CMMS: SAP PM and Maximo Side-by-Side</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/solutions/mobile-data-capture-offline-inspection-apps" className="text-xl font-semibold text-gray-900 hover:text-blue-600">Mobile Data Capture: Offline-Capable Inspection Apps in 2026</a>
          <p className="text-sm text-gray-500 mt-2">By Carlos Rabago, Solution Architect &middot; 2025-12-30</p>
          <p className="text-gray-700 mt-3">Mobile Data Capture: Offline-Capable Inspection Apps in 2026</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/solutions/data-retention-policy-for-ndt-files-7-years-or-life-of-asset" className="text-xl font-semibold text-gray-900 hover:text-blue-600">Data Retention Policy for NDT Files: 7 Years or Life of Asset?</a>
          <p className="text-sm text-gray-500 mt-2">By Mireille Dubois, IT Architect &middot; 2026-04-27</p>
          <p className="text-gray-700 mt-3">Data Retention Policy for NDT Files: 7 Years or Life of Asset?</p>
        </li>
      </ul>
    </div>
  );
}
