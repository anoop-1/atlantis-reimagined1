import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NDT Training Academy | Complete Training & Certification Guide',
  description: 'Comprehensive guide to NDT training programs, certifications (ASNT, API), and career paths. Learn about Ultrasonic Testing, Radiographic Testing, Magnetic Particle Testing, and Penetrant Testing.',
  keywords: 'NDT training, NDT certification, ASNT certification, API certification, Ultrasonic Testing, Radiographic Testing',
  authors: [{ name: 'NDT Training Academy' }],
  creator: 'NDT Training Academy',
  publisher: 'NDT Training Academy',
  metadataBase: new URL('https://ndt-training-academy.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ndt-training-academy.com',
    siteName: 'NDT Training Academy',
  },
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f59e0b" />
      </head>
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">NDT</span>
            </div>
            <span className="font-bold text-lg text-slate-900 hidden sm:inline">NDT Training Academy</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm sm:text-base">
            <a href="/training" className="text-slate-700 hover:text-amber-600 transition">Training Programs</a>
            <a href="/certifications" className="text-slate-700 hover:text-amber-600 transition">Certifications</a>
            <a href="/regional" className="text-slate-700 hover:text-amber-600 transition">Regional Guides</a>
            <a href="/career" className="text-slate-700 hover:text-amber-600 transition">Career</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-900 text-slate-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg text-amber-400 mb-4">Training Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/training" className="hover:text-amber-400 transition">Complete Guide</a></li>
              <li><a href="/training/ut-training" className="hover:text-amber-400 transition">Ultrasonic Testing</a></li>
              <li><a href="/training/rt-training" className="hover:text-amber-400 transition">Radiographic Testing</a></li>
              <li><a href="/training/mt-pt-training" className="hover:text-amber-400 transition">MT & PT Training</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-amber-400 mb-4">Certifications</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/certifications" className="hover:text-amber-400 transition">Certification Roadmap</a></li>
              <li><a href="/certifications/asnt-study-guide" className="hover:text-amber-400 transition">ASNT Prep</a></li>
              <li><a href="/certifications/api-exam-prep" className="hover:text-amber-400 transition">API Exam Prep</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-amber-400 mb-4">Training Partners</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://atlantisndt.com/training" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">Atlantis NDT Training</a></li>
              <li><a href="https://atlantisndt.com/asnt-certification" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">ASNT Certification</a></li>
              <li><a href="https://atlantisndt.com/api-570-certification" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">API Certification</a></li>
              <li><a href="https://atlantisndt.com/blog/ndt-career-guide" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">Career Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-amber-400 mb-4">Regional Training</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/regional/usa" className="hover:text-amber-400 transition">USA</a></li>
              <li><a href="/regional/india" className="hover:text-amber-400 transition">India</a></li>
              <li><a href="/regional/middle-east" className="hover:text-amber-400 transition">Middle East</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-amber-400 mb-4">Related Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://ndt-knowledge-hub.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">NDT Knowledge Hub</a></li>
              <li><a href="https://ndt-careers-portal.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">NDT Careers Portal</a></li>
              <li><a href="https://aerospace-ndt-standards.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">Aerospace NDT Standards</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-sm text-slate-400">
            &copy; {currentYear} NDT Training Academy. All rights reserved. | Educational resource for NDT professionals.
          </p>
        </div>
      </div>
    </footer>
  )
}
