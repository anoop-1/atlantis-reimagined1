import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NDT Careers Portal - Career Paths, Salary Data & Job Markets',
  description: 'Comprehensive NDT careers resource. Explore salary data, job markets, certification paths, and consulting opportunities in non-destructive testing.',
  keywords: 'NDT careers, NDT salary, ASNT certification, NDT consulting, job markets, Level I, Level II, Level III',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'NDT Careers Portal',
    description: 'Your guide to NDT career paths, salary data, and job opportunities worldwide',
    url: 'https://ndtcareersportal.com',
    siteName: 'NDT Careers Portal',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE" />
        <link rel="canonical" href="https://ndtcareersportal.com" />
      </head>
      <body>
        <header className="bg-gradient-to-r from-sky-600 to-cyan-600 text-white">
          <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">NDT Careers Portal</h1>
              <p className="text-sky-100 text-sm">Career Paths, Salary Data & Job Markets</p>
            </div>
            <ul className="flex gap-6 text-sm font-medium">
              <li><a href="/" className="text-white hover:text-sky-100">Home</a></li>
              <li><a href="/careers" className="text-white hover:text-sky-100">Career Paths</a></li>
              <li><a href="/salary" className="text-white hover:text-sky-100">Salary Data</a></li>
              <li><a href="/job-markets" className="text-white hover:text-sky-100">Job Markets</a></li>
              <li><a href="/consulting-guide" className="text-white hover:text-sky-100">Consulting</a></li>
              <li><a href="/resources" className="text-white hover:text-sky-100">Resources</a></li>
            </ul>
          </nav>
        </header>

        <main>
          {children}
        </main>

        <footer className="bg-sky-900 text-white mt-12">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4 text-sky-100">Career Paths</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/careers" className="text-sky-200 hover:text-white">Overview</a></li>
                  <li><a href="/careers/ndt-inspector" className="text-sky-200 hover:text-white">NDT Inspector</a></li>
                  <li><a href="/careers/level-iii-consultant" className="text-sky-200 hover:text-white">Level III Consultant</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-sky-100">Salary & Markets</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/salary" className="text-sky-200 hover:text-white">Salary Overview</a></li>
                  <li><a href="/salary/by-location" className="text-sky-200 hover:text-white">By Location</a></li>
                  <li><a href="/salary/by-method" className="text-sky-200 hover:text-white">By Method</a></li>
                  <li><a href="/job-markets" className="text-sky-200 hover:text-white">Job Markets</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-sky-100">Consulting</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/consulting-guide" className="text-sky-200 hover:text-white">Consulting Guide</a></li>
                  <li><a href="https://atlantisndt.com/consulting" className="text-sky-200 hover:text-white">Career Partners</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-sky-100">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/resources" className="text-sky-200 hover:text-white">Career Resources</a></li>
                  <li><a href="https://atlantisndt.com/training" className="text-sky-200 hover:text-white">Training Programs</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-sky-800 pt-8">
              <p className="text-center text-sky-200 text-sm">
                Part of the Atlantis NDT ecosystem. <a href="https://atlantisndt.com" className="text-white hover:text-sky-100">Career Partners</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
