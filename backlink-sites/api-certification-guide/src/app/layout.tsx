import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  verification: { google: 'pending-reverification' },
  title: 'API Certification Guide | NDT Inspector Training',
  description: 'Complete guide to API 510, 570, 653 certifications for pressure equipment inspectors.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EF92RXSVR" />
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1EF92RXSVR');
      `}} />
          <header className="bg-blue-600 text-white">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">API Certification Guide</h1>
            <div className="space-x-6">
              <a href="/" className="hover:text-blue-200">Home</a>
              <a href="/api-510" className="hover:text-blue-200">API 510</a>
              <a href="/api-570" className="hover:text-blue-200">API 570</a>
              <a href="/api-653" className="hover:text-blue-200">API 653</a>
            </div>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-12">
          {children}
        </main>

        <footer className="bg-gray-100 text-gray-800 mt-16 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Industry Partners</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-blue-600 hover:underline">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-blue-600 hover:underline">API 510 Training</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-blue-600 hover:underline">API 570 Training</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-blue-600 hover:underline">API 653 Training</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-blue-600 hover:underline">Exam Prep</a></li>
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-blue-600 hover:underline">Expert Consulting</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://ndt-safety-compliance.local" rel="noopener" className="text-blue-600 hover:underline">Safety Standards</a></li>
                  <li><a href="https://weld-quality-resource.local" rel="noopener" className="text-blue-600 hover:underline">Weld Standards</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">About</h3>
                <p className="text-sm text-gray-600">Comprehensive preparation for API inspector certifications.</p>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-sm text-gray-600">
              <p>&copy; 2026 API Certification Guide. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}