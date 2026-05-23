import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LNG Inspection Hub — In-Depth Articles',
  description: 'Long-form practical articles on LNG inspection and cryogenic NDT for LNG terminal engineers, cryogenic tank inspectors, midstream LNG QA.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">LNG Inspection Hub — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on LNG inspection and cryogenic NDT, written for LNG terminal engineers, cryogenic tank inspectors, midstream LNG QA.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/guides/cryogenic-tank-inspection-9-percent-nickel-steel" className="text-xl font-semibold text-gray-900 hover:text-sky-600">Cryogenic Tank Inspection: 9% Nickel Steel and Its Inspection Quirks</a>
          <p className="text-sm text-gray-500 mt-2">By Magnus Tørrissen, IWE &middot; 2024-08-16</p>
          <p className="text-gray-700 mt-3">Cryogenic Tank Inspection: 9% Nickel Steel and Its Inspection Quirks</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/guides/lng-loading-arm-inspection-program" className="text-xl font-semibold text-gray-900 hover:text-sky-600">LNG Loading Arm Inspection Program: From Pin to Swivel</a>
          <p className="text-sm text-gray-500 mt-2">By Magnus Tørrissen, IWE &middot; 2025-01-14</p>
          <p className="text-gray-700 mt-3">LNG Loading Arm Inspection Program: From Pin to Swivel</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/guides/lng-piping-weld-acceptance-criteria" className="text-xl font-semibold text-gray-900 hover:text-sky-600">LNG Piping Weld Acceptance Criteria: ASME B31.3 in Cold Service</a>
          <p className="text-sm text-gray-500 mt-2">By Marisol Toro, PE &middot; 2025-06-30</p>
          <p className="text-gray-700 mt-3">LNG Piping Weld Acceptance Criteria: ASME B31.3 in Cold Service</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/guides/small-scale-lng-asset-integrity-program" className="text-xl font-semibold text-gray-900 hover:text-sky-600">Small-Scale LNG Asset Integrity: Building a Program Without Refinery Resources</a>
          <p className="text-sm text-gray-500 mt-2">By Magnus Tørrissen, IWE &middot; 2025-11-21</p>
          <p className="text-gray-700 mt-3">Small-Scale LNG Asset Integrity: Building a Program Without Refinery Resources</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/guides/bog-compressor-inspection-and-monitoring" className="text-xl font-semibold text-gray-900 hover:text-sky-600">BOG Compressor Inspection and Vibration Monitoring on LNG Trains</a>
          <p className="text-sm text-gray-500 mt-2">By Marisol Toro, PE &middot; 2026-04-09</p>
          <p className="text-gray-700 mt-3">BOG Compressor Inspection and Vibration Monitoring on LNG Trains</p>
        </li>
      </ul>
    </div>
  );
}
