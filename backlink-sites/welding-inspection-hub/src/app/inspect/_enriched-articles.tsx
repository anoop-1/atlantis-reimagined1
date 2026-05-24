import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welding Inspection Hub — In-Depth Articles',
  description: 'Long-form practical articles on welding inspection and QA/QC for CWIs, CSWIPs, IWIs, welding QA managers.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Welding Inspection Hub — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on welding inspection and QA/QC, written for CWIs, CSWIPs, IWIs, welding QA managers.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/inspect/cwi-vs-cswip-vs-iwi-which-cert-for-which-market" className="text-xl font-semibold text-gray-900 hover:text-amber-600">CWI vs CSWIP vs IWI: Which Cert Fits Which Market?</a>
          <p className="text-sm text-gray-500 mt-2">By Magda Krasinski, AWS CWI &middot; 2024-08-18</p>
          <p className="text-gray-700 mt-3">CWI vs CSWIP vs IWI: Which Cert Fits Which Market?</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/inspect/visual-weld-acceptance-by-code-asme-vs-aws" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Visual Weld Acceptance by Code: ASME Section IX vs AWS D1.1</a>
          <p className="text-sm text-gray-500 mt-2">By Magda Krasinski, AWS CWI &middot; 2025-02-01</p>
          <p className="text-gray-700 mt-3">Visual Weld Acceptance by Code: ASME Section IX vs AWS D1.1</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/inspect/weld-procedure-qualification-record-pqr-from-zero" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Weld Procedure Qualification Record (PQR) From Zero</a>
          <p className="text-sm text-gray-500 mt-2">By Carlos Andrade, IWE &middot; 2025-06-08</p>
          <p className="text-gray-700 mt-3">Weld Procedure Qualification Record (PQR) From Zero</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/inspect/welding-distortion-control-on-thin-plate-fabrication" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Welding Distortion Control on Thin-Plate Fabrication</a>
          <p className="text-sm text-gray-500 mt-2">By Magda Krasinski, AWS CWI &middot; 2025-10-26</p>
          <p className="text-gray-700 mt-3">Welding Distortion Control on Thin-Plate Fabrication</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/inspect/macro-etch-test-on-welds-what-it-actually-shows" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Macro-Etch Test on Welds: What It Actually Shows You</a>
          <p className="text-sm text-gray-500 mt-2">By Carlos Andrade, IWE &middot; 2026-03-28</p>
          <p className="text-gray-700 mt-3">Macro-Etch Test on Welds: What It Actually Shows You</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/inspect/aws-d17-1-aerospace-fusion-welding-walkthrough" className="text-xl font-semibold text-gray-900 hover:text-amber-600">AWS D17.1 Aerospace Fusion Welding: A Walkthrough</a>
          <p className="text-sm text-gray-500 mt-2">By Magda Krasinski, AWS CWI &middot; 2025-05-19</p>
          <p className="text-gray-700 mt-3">AWS D17.1 Aerospace Fusion Welding: A Walkthrough</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/inspect/iwip-and-iwip-c-paths-vs-cwi-comparison" className="text-xl font-semibold text-gray-900 hover:text-amber-600">IWIP and IWIP-C Paths vs CWI: Comparison for Inspector Choice</a>
          <p className="text-sm text-gray-500 mt-2">By Magda Krasinski, AWS CWI &middot; 2025-09-11</p>
          <p className="text-gray-700 mt-3">IWIP and IWIP-C Paths vs CWI: Comparison for Inspector Choice</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/inspect/gtaw-vs-gmaw-process-influence-on-weld-quality" className="text-xl font-semibold text-gray-900 hover:text-amber-600">GTAW vs GMAW Process Influence on Weld Quality and Inspection Findings</a>
          <p className="text-sm text-gray-500 mt-2">By Carlos Andrade, IWE &middot; 2025-12-20</p>
          <p className="text-gray-700 mt-3">GTAW vs GMAW Process Influence on Weld Quality and Inspection Findings</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/inspect/underwater-welding-inspection-class-and-standard" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Underwater Welding Inspection: Class and Standard Considerations</a>
          <p className="text-sm text-gray-500 mt-2">By Magda Krasinski, AWS CWI &middot; 2026-03-22</p>
          <p className="text-gray-700 mt-3">Underwater Welding Inspection: Class and Standard Considerations</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/inspect/weld-acceptance-on-coated-and-cladded-components" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Weld Acceptance on Coated and Cladded Components</a>
          <p className="text-sm text-gray-500 mt-2">By Carlos Andrade, IWE &middot; 2026-05-13</p>
          <p className="text-gray-700 mt-3">Weld Acceptance on Coated and Cladded Components</p>
        </li>
      </ul>
    </div>
  );
}
