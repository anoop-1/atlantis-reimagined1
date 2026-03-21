import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  verification: { google: 'pending-reverification' },
  title: 'Pipeline Integrity Guide | NDT Solutions',
  description: 'Comprehensive guide to pipeline NDT inspection methods, standards, and best practices for maintaining pipeline integrity.',
  keywords: 'pipeline inspection, pipeline NDT, integrity monitoring, pigging, ultrasonic testing',
  openGraph: {
    title: 'Pipeline Integrity Guide',
    description: 'Expert pipeline NDT inspection resources and techniques',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-teal-50 to-white">
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EF92RXSVR" />
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1EF92RXSVR');
      `}} />
          <header className="border-b border-teal-200 bg-white shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-teal-700">Pipeline Integrity Guide</h1>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-teal-600 hover:text-teal-800">Home</a>
              <a href="/methods" className="text-teal-600 hover:text-teal-800">Methods</a>
              <a href="/standards" className="text-teal-600 hover:text-teal-800">Standards</a>
              <a href="/case-studies" className="text-teal-600 hover:text-teal-800">Case Studies</a>
            </div>
          </nav>
        </header>

        <main className="min-h-screen max-w-6xl mx-auto px-4 py-12">
          {children}
        </main>

        <footer className="bg-teal-900 text-white mt-20 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-teal-200">Industry Partners</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-teal-200">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-teal-200">NDT Consulting Services</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-teal-200">NDT Training Programs</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-teal-200">Digital Twin Solutions</a></li>
                  <li><a href="https://ndt-connect.com" rel="noopener" className="hover:text-teal-200">NDTConnect Platform</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-teal-200">Houston NDT Consulting</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-teal-200">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://petrochemical-ndt-hub.com" rel="noopener" className="hover:text-teal-200">Petrochemical NDT Hub</a></li>
                  <li><a href="https://subsea-inspection-guide.com" rel="noopener" className="hover:text-teal-200">Subsea Inspection Guide</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-teal-200">About</h3>
                <p className="text-sm text-teal-100">Dedicated to advancing pipeline integrity through modern NDT techniques and best practices.</p>
              </div>
            </div>
            <div className="border-t border-teal-700 pt-8 text-center text-sm text-teal-200">
              <p>&copy; 2026 Pipeline Integrity Guide. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
