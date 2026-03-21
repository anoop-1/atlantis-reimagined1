import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NDT Methods Guide | Non-Destructive Testing Techniques Explained',
  description: 'Comprehensive guide to the six major NDT methods: ultrasonic, radiographic, eddy current, magnetic particle, penetrant, and visual testing. Learn principles, applications, standards, and when to use each method.',
  keywords: [
    'NDT methods',
    'non-destructive testing',
    'ultrasonic testing',
    'radiographic testing',
    'eddy current testing',
    'magnetic particle testing',
    'liquid penetrant testing',
    'visual testing',
    'ASME standards',
    'ASTM standards',
    'NDT comparison',
    'method selection'
  ],
  openGraph: {
    title: 'NDT Methods Guide | Non-Destructive Testing Techniques',
    description: 'Comprehensive guide to the six major NDT methods including ultrasonic, radiographic, and more.',
    type: 'article',
    url: 'https://www.example.com/methods',
  },
};

const methods = [
  {
    id: 'ultrasonic-testing',
    title: 'Ultrasonic Testing (UT)',
    shortDescription: 'Uses high-frequency sound waves to detect internal and surface defects in materials.',
    applications: ['Thickness measurement', 'Flaw detection', 'Bond line inspection', 'Corrosion assessment'],
    icon: '🔊',
  },
  {
    id: 'radiographic-testing',
    title: 'Radiographic Testing (RT)',
    shortDescription: 'Employs X-rays or gamma rays to visualize internal structure and defects.',
    applications: ['Weld inspection', 'Casting evaluation', 'Fatigue crack detection', 'Wall thickness'],
    icon: '📡',
  },
  {
    id: 'eddy-current-testing',
    title: 'Eddy Current Testing (ET)',
    shortDescription: 'Detects surface and near-surface defects using electromagnetic induction.',
    applications: ['Surface cracks', 'Material conductivity', 'Hardness verification', 'Coating thickness'],
    icon: '⚡',
  },
  {
    id: 'magnetic-particle-testing',
    title: 'Magnetic Particle Testing (MT)',
    shortDescription: 'Identifies surface and subsurface defects in ferromagnetic materials using magnetic fields.',
    applications: ['Weld cracks', 'Fatigue cracks', 'Heat treatment defects', 'Rolling defects'],
    icon: '🧲',
  },
  {
    id: 'liquid-penetrant-testing',
    title: 'Liquid Penetrant Testing (PT)',
    shortDescription: 'Reveals surface defects through capillary action of colored or fluorescent penetrant liquids.',
    applications: ['Surface crack detection', 'Porosity inspection', 'Composite inspection', 'Manufacturing defects'],
    icon: '💧',
  },
  {
    id: 'visual-testing',
    title: 'Visual Testing (VT)',
    shortDescription: 'Direct or aided visual examination to identify surface anomalies and defects.',
    applications: ['Weld inspection', 'Surface condition', 'Component geometry', 'Assembly verification'],
    icon: '👁️',
  },
];

export default function MethodsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Methods</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            NDT Methods: A Comprehensive Guide
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            Non-destructive testing encompasses six primary methods, each with unique capabilities for detecting and evaluating defects without damaging components. This guide explores the principles, applications, standards, and selection criteria for each technique. Understanding the strengths and limitations of each method enables selection of the most appropriate technique for specific applications.
          </p>
        </div>

        {/* Method Selection Guide */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">How to Select the Right NDT Method</h2>
          <p className="text-slate-700 mb-4">
            Method selection depends on several factors: material type (ferrous/non-ferrous), defect type (surface/internal), part geometry (flat/complex), accessibility (easy/difficult access), and detection depth (shallow/deep). No single method is best for all applications. Professional NDT programs often combine multiple methods for comprehensive assessment.
          </p>
          <p className="text-slate-700">
            Consider material conductivity for eddy current testing, ferromagnetic properties for magnetic particle testing, and coupling requirements for ultrasonic testing. Cost, speed, and regulatory requirements also influence method selection.
          </p>
        </div>

        {/* Quick Navigation */}
        <nav className="mb-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Navigation</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {methods.map((method) => (
              <li key={method.id}>
                <Link
                  href={`/methods/${method.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {method.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Methods Grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {methods.map((method) => (
            <Link
              key={method.id}
              href={`/methods/${method.id}`}
              className="group p-6 bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{method.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {method.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {method.applications.slice(0, 2).map((app, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Comparison Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Method Comparison Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Method</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Detection Depth</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Material Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Defect Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-900">Ultrasonic</td>
                  <td className="py-3 px-4 text-slate-600">Deep</td>
                  <td className="py-3 px-4 text-slate-600">All</td>
                  <td className="py-3 px-4 text-slate-600">Internal & Surface</td>
                  <td className="py-3 px-4 text-slate-600">Moderate</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-900">Radiographic</td>
                  <td className="py-3 px-4 text-slate-600">Deep</td>
                  <td className="py-3 px-4 text-slate-600">All</td>
                  <td className="py-3 px-4 text-slate-600">Density variations</td>
                  <td className="py-3 px-4 text-slate-600">High</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-900">Eddy Current</td>
                  <td className="py-3 px-4 text-slate-600">Shallow</td>
                  <td className="py-3 px-4 text-slate-600">Conductive</td>
                  <td className="py-3 px-4 text-slate-600">Surface & near-surface</td>
                  <td className="py-3 px-4 text-slate-600">Moderate</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-900">Magnetic Particle</td>
                  <td className="py-3 px-4 text-slate-600">Moderate</td>
                  <td className="py-3 px-4 text-slate-600">Ferromagnetic</td>
                  <td className="py-3 px-4 text-slate-600">Surface & subsurface</td>
                  <td className="py-3 px-4 text-slate-600">Low</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-900">Liquid Penetrant</td>
                  <td className="py-3 px-4 text-slate-600">Surface only</td>
                  <td className="py-3 px-4 text-slate-600">Most materials</td>
                  <td className="py-3 px-4 text-slate-600">Surface defects</td>
                  <td className="py-3 px-4 text-slate-600">Low</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-900">Visual</td>
                  <td className="py-3 px-4 text-slate-600">Surface only</td>
                  <td className="py-3 px-4 text-slate-600">All</td>
                  <td className="py-3 px-4 text-slate-600">Visible anomalies</td>
                  <td className="py-3 px-4 text-slate-600">Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Industry Standards */}
        <section className="mb-12 p-6 bg-slate-50 rounded-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Standards</h2>
          <p className="text-slate-600 mb-4">
            NDT methods are governed by comprehensive standards organizations that establish procedures, acceptance criteria, and qualification requirements:
          </p>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>ASME Standards:</strong> American Society of Mechanical Engineers provides the definitive standards for pressure equipment and boiler inspection.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>ASTM Standards:</strong> American Society for Testing and Materials offers comprehensive testing methods and standards applicable across industries.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>ISO Standards:</strong> International Organization for Standardization ensures global consistency and acceptance of NDT practices.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>SNT-TC-1A:</strong> Personnel qualification and certification standard for non-destructive testing by ASNT.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>API Standards:</strong> American Petroleum Institute codes (API 510, 570, 653, 580) for oil & gas inspection.</span>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Need Professional NDT Services or Training?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Whether you're selecting the right NDT method for your application, need certified inspection services, or want to become certified in NDT techniques, <a href="https://atlantisndt.com" rel="noopener" className="text-white font-semibold hover:text-blue-100">Atlantis NDT</a> provides expert guidance and professional services.
          </p>
          <a href="https://atlantisndt.com/training" rel="noopener" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Explore NDT Training Programs
          </a>
        </section>
      </main>
    </div>
  );
}
