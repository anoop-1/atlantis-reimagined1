import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Asset Integrity Digital Hub - NDT & Digital Transformation',
  description: 'Latest articles on digital transformation, ERP implementation, NDT software, digital twins, and asset integrity management for inspection companies.',
  keywords: 'blog, digital transformation, ERP, NDT software, digital twins, asset integrity, inspection technology',
}

export default function BlogPage() {
  const articles = [
    {
      title: "What Asset Owners Should Demand From Their Inspection Contractor’s Data",
      excerpt: "A PDF report is a photograph of data that lives somewhere else. What owners should require of contractor examination records — structure, attribution, exportability — and why the contractor’s own systems determine whether you can have it.",
      date: "August 2026",
      readTime: "10 min read",
      href: "/blog/what-owners-should-demand-from-inspection-contractor-data",
      category: "Data & Integrity",
    },
    {
      title: "Why RBI Programmes Drift, and How to Tell Early",
      excerpt: "Risk-based inspection programmes rarely fail loudly. They drift — default corrosion rates replace measured ones, CML identity blurs, and the ranking stops reflecting condition. Six early indicators, and what each one costs.",
      date: "July 2026",
      readTime: "11 min read",
      href: "/blog/why-rbi-programmes-drift-and-how-to-tell-early",
      category: "Risk-Based Inspection",
    },
    {
      title: 'Digital Twin ROI Calculator: How to Calculate Return on Investment',
      excerpt: 'Learn how to calculate the actual financial return from digital twin implementations. Real examples and calculation methodologies for asset-intensive industries. Discover typical ROI timelines and identify key cost-benefit drivers.',
      date: 'March 2026',
      readTime: '12 min read',
      href: '/blog/digital-twin-roi-calculator',
      category: 'Digital Twins',
    },
    {
      title: 'ERP vs Spreadsheets for NDT Companies: The Real Cost of Manual Processes',
      excerpt: 'Why NDT companies relying on spreadsheets are losing money. Analysis of hidden costs and real ROI from moving to specialized ERP systems. Quantify the impact of manual data management on your bottom line.',
      date: 'February 2026',
      readTime: '10 min read',
      href: '/blog/erp-vs-spreadsheets-ndt',
      category: 'ERP Systems',
    },
    {
      title: 'Digital Twins Reduce Refinery Turnaround Time by 20-30%',
      excerpt: 'Case study: How refineries use digital twins to plan turnarounds more efficiently, reduce costs, and improve safety. Real examples of asset-intensive operations improving operations through digital tools.',
      date: 'January 2026',
      readTime: '8 min read',
      href: 'https://atlantisndt.com/blog/digital-twins-reduce-refinery-turnaround-time',
      category: 'Case Studies',
    },
    {
      title: 'Best NDT Reporting Software for Oil & Gas: Digital Twin Integration',
      excerpt: 'Comprehensive comparison of NDT reporting solutions and how they integrate with digital twin platforms for complete asset intelligence. Feature comparison and selection criteria for inspection companies.',
      date: 'December 2025',
      readTime: '11 min read',
      href: 'https://atlantisndt.com/blog/best-ndt-reporting-software-oil-gas-digital-twin',
      category: 'Software Reviews',
    },
    {
      title: '5 Critical Mistakes When Implementing NDT Software Systems',
      excerpt: 'Common pitfalls organizations face when selecting and implementing NDT software. Learn how to avoid costly mistakes that delay ROI and reduce adoption. Includes implementation best practices from successful projects.',
      date: 'November 2025',
      readTime: '9 min read',
      href: '/blog/ndt-software-implementation-mistakes',
      category: 'Implementation',
    },
    {
      title: 'Predictive Maintenance with AI: From Concept to Real-World Implementation',
      excerpt: 'How artificial intelligence and machine learning enable predictive maintenance in inspection programs. Real examples of cost reduction and safety improvement through intelligent analysis of inspection data.',
      date: 'October 2025',
      readTime: '14 min read',
      href: 'https://atlantisndt.com/blog/predictive-maintenance-ai-implementation',
      category: 'AI & Analytics',
    },
  ]

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="breadcrumb mb-8">
          <a href="/">Home</a>
          <span>/</span>
          <span>Blog</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">Asset Integrity Digital Hub Blog</h1>
        <p className="text-lg text-gray-600 mb-12">
          Insights and best practices for digital transformation in asset integrity management. Explore guides on digital twins, ERP implementation, NDT software, and emerging technologies for inspection companies. Learn from real case studies and implementation experiences from leading organizations.
        </p>

        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.title} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-2xl font-bold">
                  <a href={article.href} className="no-underline hover:text-primary-700">
                    {article.title}
                  </a>
                </h2>
                <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">
                  {article.category}
                </span>
              </div>
              <div className="flex gap-4 text-sm text-gray-600 mb-4">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <p className="text-gray-700 mb-4">{article.excerpt}</p>
              <a href={article.href} className="text-primary-600 hover:text-primary-700 font-semibold inline-block">
                Read more →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated on Digital Transformation</h3>
          <p className="text-gray-700 mb-6">
            Subscribe to our newsletter for the latest articles on digital transformation, ERP implementation, NDT software, and asset integrity management. Get insights directly from industry experts and learn best practices from successful implementations.
          </p>
          <form className="flex gap-2 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
              required
            />
            <button
              type="submit"
              className="btn no-underline whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-12 bg-white rounded-lg border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Featured Resource</h3>
          <p className="text-gray-700 mb-6">
            For comprehensive consulting on digital transformation strategies, <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-primary-600 hover:text-primary-700 font-semibold">Atlantis NDT provides expert guidance</a> on ERP implementation, digital twin development, and technology strategy for inspection companies. Our consultants have experience implementing solutions across multiple industries and can help your organization navigate digital transformation successfully.
          </p>
          <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-primary-600 hover:text-primary-700 font-semibold">
            Schedule a Digital Transformation Consultation →
          </a>
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            'name': 'Asset Integrity Digital Hub Blog',
            'description': 'Articles on digital transformation, ERP, NDT software, digital twins, and asset integrity',
            'url': 'https://asset-integrity-hub.com/blog',
            'author': {
              '@type': 'Organization',
              'name': 'Asset Integrity Digital Hub',
            },
          }),
        }}
      />
    </>
  )
}
