import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NDT Careers Portal — In-Depth Articles',
  description: 'Long-form practical articles on NDT careers and hiring for NDT job seekers, career changers, hiring managers.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">NDT Careers Portal — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on NDT careers and hiring, written for NDT job seekers, career changers, hiring managers.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/paths/ndt-salary-by-method-and-region-2026" className="text-xl font-semibold text-gray-900 hover:text-rose-600">NDT Salary by Method and Region: A 2026 Snapshot</a>
          <p className="text-sm text-gray-500 mt-2">By Diana Marsh, NDT Recruiter &middot; 2024-08-09</p>
          <p className="text-gray-700 mt-3">NDT Salary by Method and Region (2026 Snapshot)</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/paths/transitioning-from-welder-to-ndt-inspector" className="text-xl font-semibold text-gray-900 hover:text-rose-600">Transitioning From Welder to NDT Inspector: A Practical Roadmap</a>
          <p className="text-sm text-gray-500 mt-2">By Diana Marsh, NDT Recruiter &middot; 2025-01-08</p>
          <p className="text-gray-700 mt-3">Transitioning From Welder to NDT Inspector: A Practical Roadmap</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/paths/remote-ndt-jobs-are-they-real" className="text-xl font-semibold text-gray-900 hover:text-rose-600">Remote NDT Jobs: Are They Real?</a>
          <p className="text-sm text-gray-500 mt-2">By Sebastián Núñez, NDT Career Coach &middot; 2025-05-29</p>
          <p className="text-gray-700 mt-3">Remote NDT Jobs: Are They Real?</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/paths/offshore-vs-onshore-ndt-careers-financial-and-lifestyle" className="text-xl font-semibold text-gray-900 hover:text-rose-600">Offshore vs Onshore NDT Careers: Financial and Lifestyle Trade-Offs</a>
          <p className="text-sm text-gray-500 mt-2">By Diana Marsh, NDT Recruiter &middot; 2025-10-15</p>
          <p className="text-gray-700 mt-3">Offshore vs Onshore NDT Careers: Financial and Lifestyle Trade-Offs</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/paths/building-a-level-iii-consulting-practice" className="text-xl font-semibold text-gray-900 hover:text-rose-600">Building a Level III Consulting Practice: From Salaried to Self-Employed</a>
          <p className="text-sm text-gray-500 mt-2">By Sebastián Núñez, NDT Career Coach &middot; 2026-03-30</p>
          <p className="text-gray-700 mt-3">Building a Level III Consulting Practice: From Salaried to Self-Employed</p>
        </li>
      </ul>
    </div>
  );
}
