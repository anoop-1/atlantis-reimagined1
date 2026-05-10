import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pipeline Integrity Guide — In-Depth Articles',
  description: 'Long-form practical articles on pipeline integrity & inspection for pipeline integrity engineers, midstream operators, regulators.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Pipeline Integrity Guide — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on pipeline integrity & inspection, written for pipeline integrity engineers, midstream operators, regulators.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/case-studies/in-line-inspection-tool-selection-mfl-vs-ut-vs-emat" className="text-xl font-semibold text-gray-900 hover:text-orange-600">In-Line Inspection Tool Selection: MFL vs UT vs EMAT</a>
          <p className="text-sm text-gray-500 mt-2">By Hector Alvarez, NACE-certified Pipeline Inspector &middot; 2024-08-19</p>
          <p className="text-gray-700 mt-3">In-Line Inspection Tool Selection: MFL vs UT vs EMAT</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/case-studies/direct-assessment-eca-dca-ica-which-when" className="text-xl font-semibold text-gray-900 hover:text-orange-600">Direct Assessment for Buried Pipelines: ECA, DCA, and ICA Compared</a>
          <p className="text-sm text-gray-500 mt-2">By Hector Alvarez, NACE-certified Pipeline Inspector &middot; 2024-12-03</p>
          <p className="text-gray-700 mt-3">Direct Assessment for Buried Pipelines: ECA, DCA, and ICA Compared</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/case-studies/crack-management-program-pipeline-asme-b31-8s" className="text-xl font-semibold text-gray-900 hover:text-orange-600">Pipeline Crack Management Program: Aligning with ASME B31.8S</a>
          <p className="text-sm text-gray-500 mt-2">By Linnea Söderberg, MSc, IWE &middot; 2025-04-08</p>
          <p className="text-gray-700 mt-3">Pipeline Crack Management Program: Aligning with ASME B31.8S</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/case-studies/pipeline-coating-disbondment-detection-tools" className="text-xl font-semibold text-gray-900 hover:text-orange-600">Pipeline Coating Disbondment: Detection Tools and Field Workflow</a>
          <p className="text-sm text-gray-500 mt-2">By Hector Alvarez, NACE-certified Pipeline Inspector &middot; 2025-09-02</p>
          <p className="text-gray-700 mt-3">Pipeline Coating Disbondment: Detection Tools and Field Workflow</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/case-studies/pipeline-rehabilitation-options-composite-vs-steel-sleeve" className="text-xl font-semibold text-gray-900 hover:text-orange-600">Pipeline Rehabilitation Options: Composite Sleeves vs Steel Sleeves</a>
          <p className="text-sm text-gray-500 mt-2">By Linnea Söderberg, MSc, IWE &middot; 2026-04-04</p>
          <p className="text-gray-700 mt-3">Pipeline Rehabilitation Options: Composite Sleeves vs Steel Sleeves</p>
        </li>
      </ul>
    </div>
  );
}
