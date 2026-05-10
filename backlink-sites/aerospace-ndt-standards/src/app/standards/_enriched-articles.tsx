import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aerospace NDT Standards — In-Depth Articles',
  description: 'Long-form practical articles on aerospace NDT and certification for aerospace NDT inspectors, NAS 410 candidates, NADCAP auditors.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Aerospace NDT Standards — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on aerospace NDT and certification, written for aerospace NDT inspectors, NAS 410 candidates, NADCAP auditors.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/standards/nas-410-vs-en-4179-aerospace-certification-paths" className="text-xl font-semibold text-gray-900 hover:text-sky-600">NAS 410 vs EN 4179: Two Aerospace NDT Certification Paths Compared</a>
          <p className="text-sm text-gray-500 mt-2">By Capt. Russell Fairchild, NANDTB Level III &middot; 2024-08-05</p>
          <p className="text-gray-700 mt-3">NAS 410 vs EN 4179: Two Aerospace NDT Certification Paths Compared</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/standards/composite-aircraft-structure-ndt-cfrp-inspection" className="text-xl font-semibold text-gray-900 hover:text-sky-600">Composite Aircraft Structure NDT: CFRP Inspection Methods</a>
          <p className="text-sm text-gray-500 mt-2">By Aiyana Roy, NDT Engineer &middot; 2024-12-15</p>
          <p className="text-gray-700 mt-3">Composite Aircraft Structure NDT: CFRP Inspection Methods</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/standards/engine-disk-bore-inspection-eddy-current-array" className="text-xl font-semibold text-gray-900 hover:text-sky-600">Engine Disk Bore Inspection: Eddy Current Array in Aero Engines</a>
          <p className="text-sm text-gray-500 mt-2">By Capt. Russell Fairchild, NANDTB Level III &middot; 2025-05-06</p>
          <p className="text-gray-700 mt-3">Engine Disk Bore Inspection: Eddy Current Array in Aero Engines</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/standards/nadcap-audit-readiness-aerospace-ndt-shop" className="text-xl font-semibold text-gray-900 hover:text-sky-600">NADCAP Audit Readiness: A Checklist for the Aerospace NDT Shop</a>
          <p className="text-sm text-gray-500 mt-2">By Aiyana Roy, NDT Engineer &middot; 2025-10-21</p>
          <p className="text-gray-700 mt-3">NADCAP Audit Readiness: A Checklist for the Aerospace NDT Shop</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/standards/fluorescent-penetrant-inspection-fpi-aerospace-process-control" className="text-xl font-semibold text-gray-900 hover:text-sky-600">Fluorescent Penetrant Inspection (FPI) in Aerospace: Process Control That Works</a>
          <p className="text-sm text-gray-500 mt-2">By Capt. Russell Fairchild, NANDTB Level III &middot; 2026-03-30</p>
          <p className="text-gray-700 mt-3">Fluorescent Penetrant Inspection (FPI) in Aerospace: Process Control That Works</p>
        </li>
      </ul>
    </div>
  );
}
