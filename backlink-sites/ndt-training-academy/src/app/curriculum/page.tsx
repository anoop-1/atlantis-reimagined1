import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NDT Training Academy — In-Depth Articles',
  description: 'Long-form practical articles on NDT training and curriculum design for NDT students, trainees, training providers.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">NDT Training Academy — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on NDT training and curriculum design, written for NDT students, trainees, training providers.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/curriculum/designing-a-level-ii-ut-course-syllabus" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">Designing a Level II UT Course Syllabus That Actually Prepares Students</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Helena Vretska, NDT Instructor &middot; 2024-09-09</p>
          <p className="text-gray-700 mt-3">Designing a Level II UT Course Syllabus That Actually Prepares Students</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/curriculum/practical-vs-theory-hours-snt-tc-1a-vs-cp-189" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">Practical vs Theory Hours: SNT-TC-1A vs CP-189</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Helena Vretska, NDT Instructor &middot; 2025-02-18</p>
          <p className="text-gray-700 mt-3">Practical vs Theory Hours: SNT-TC-1A vs CP-189</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/curriculum/building-an-ndt-school-business-model" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">Building an NDT School: Business Model and Curriculum Choices</a>
          <p className="text-sm text-gray-500 mt-2">By Theo Bergman, ASNT Level III &middot; 2025-07-12</p>
          <p className="text-gray-700 mt-3">Building an NDT School: Business Model and Curriculum Choices</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/curriculum/online-vs-in-person-ndt-courses-where-each-wins" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">Online vs In-Person NDT Courses: Where Each Format Wins</a>
          <p className="text-sm text-gray-500 mt-2">By Dr. Helena Vretska, NDT Instructor &middot; 2025-11-25</p>
          <p className="text-gray-700 mt-3">Online vs In-Person NDT Courses: Where Each Format Wins</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/curriculum/eye-exam-jaeger-near-vision-ndt-acceptance" className="text-xl font-semibold text-gray-900 hover:text-indigo-600">Eye Exam and Jaeger Near Vision: What the NDT Standards Require</a>
          <p className="text-sm text-gray-500 mt-2">By Theo Bergman, ASNT Level III &middot; 2026-04-06</p>
          <p className="text-gray-700 mt-3">Eye Exam and Jaeger Near Vision: What the NDT Standards Require</p>
        </li>
      </ul>
    </div>
  );
}
