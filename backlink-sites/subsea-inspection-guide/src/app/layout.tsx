import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Subsea Inspection Guide | Deepwater NDT',
  description: 'Comprehensive NDT solutions for subsea pipelines, equipment, and deepwater infrastructure.',
  keywords: 'subsea inspection, deepwater NDT, offshore pipelines, ROV inspection',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-cyan-50 to-white">
        <header className="border-b border-cyan-200 bg-white shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-cyan-700">Subsea Inspection Guide</h1>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-cyan-600 hover:text-cyan-800">Home</a>
              <a href="/deepwater" className="text-cyan-600 hover:text-cyan-800">Deepwater</a>
              <a href="/materials" className="text-cyan-600 hover:text-cyan-800">Materials</a>
              <a href="/certification" className="text-cyan-600 hover:text-cyan-800">Certification</a>
            </div>
          </nav>
        </header>
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-12">{children}</main>
        <footer className="bg-cyan-900 text-white mt-20 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-cyan-200">Industry Partners</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-cyan-200">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com/consulting" rel="noopener" className="hover:text-cyan-200">NDT Consulting</a></li>
                  <li><a href="https://atlantisndt.com/training" rel="noopener" className="hover:text-cyan-200">NDT Training</a></li>
                  <li><a href="https://ndt-connect.com" rel="noopener" className="hover:text-cyan-200">NDTConnect</a></li>
                  <li><a href="https://atlantisndt.com/blog/ultrasonic-testing-ultimate-guide" rel="noopener" className="hover:text-cyan-200">Ultrasonic Guide</a></li>
                  <li><a href="https://atlantisndt.com/ndt-consulting-dubai" rel="noopener" className="hover:text-cyan-200">Dubai Services</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-cyan-200">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://pipeline-integrity-guide.com" rel="noopener" className="hover:text-cyan-200">Pipelines</a></li>
                  <li><a href="https://lng-inspection-hub.com" rel="noopener" className="hover:text-cyan-200">LNG Hubs</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-cyan-200">About</h3>
                <p className="text-sm text-cyan-100">Deepwater NDT excellence and subsea integrity.</p>
              </div>
            </div>
            <div className="border-t border-cyan-700 pt-8 text-center text-sm text-cyan-200">
              <p>&copy; 2026 Subsea Inspection Guide. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
