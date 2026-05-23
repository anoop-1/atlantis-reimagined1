import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NDT Automation Future — In-Depth Articles',
  description: 'Long-form practical articles on NDT automation and AI-assisted inspection for NDT software architects, automation engineers, integrity digital leads.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">NDT Automation Future — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on NDT automation and AI-assisted inspection, written for NDT software architects, automation engineers, integrity digital leads.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/future/ai-defect-detection-on-rt-films-state-of-art" className="text-xl font-semibold text-gray-900 hover:text-purple-600">AI Defect Detection on RT Films: State of the Art in 2026</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Aaron Pak, AI Engineer &middot; 2024-10-18</p>
          <p className="text-gray-700 mt-3">AI Defect Detection on RT Films: State of the Art in 2026</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/future/robotic-crawler-pipeline-inspection-trends" className="text-xl font-semibold text-gray-900 hover:text-purple-600">Robotic Crawler Pipeline Inspection: Where the Industry Is Trending</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Aaron Pak, AI Engineer &middot; 2025-03-19</p>
          <p className="text-gray-700 mt-3">Robotic Crawler Pipeline Inspection: Where the Industry Is Trending</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/future/digital-twin-for-ndt-data-architecture-2026" className="text-xl font-semibold text-gray-900 hover:text-purple-600">Digital Twin for NDT Data: Architecture Choices for 2026</a>
          <p className="text-sm text-gray-500 mt-2">By Tessa Bjorklund, Software Architect &middot; 2025-08-26</p>
          <p className="text-gray-700 mt-3">Digital Twin for NDT Data: Architecture Choices for 2026</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/future/auto-paut-data-interpretation-where-its-reliable" className="text-xl font-semibold text-gray-900 hover:text-purple-600">Auto-PAUT Data Interpretation: Where It Is Already Reliable</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Aaron Pak, AI Engineer &middot; 2025-12-26</p>
          <p className="text-gray-700 mt-3">Auto-PAUT Data Interpretation: Where It Is Already Reliable</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/future/cloud-vs-on-prem-ndt-data-the-2026-decision" className="text-xl font-semibold text-gray-900 hover:text-purple-600">Cloud vs On-Prem NDT Data: The 2026 Decision Most Operators Are Making</a>
          <p className="text-sm text-gray-500 mt-2">By Tessa Bjorklund, Software Architect &middot; 2026-04-28</p>
          <p className="text-gray-700 mt-3">Cloud vs On-Prem NDT Data: The 2026 Decision Most Operators Are Making</p>
        </li>
      </ul>
    </div>
  );
}
