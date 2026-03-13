import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Weld Quality Testing | NDT Methods & Standards',
  description: 'Comprehensive guide to weld inspection, defect detection, and quality assurance in welding.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="bg-orange-600 text-white">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Weld Quality Resource</h1>
            <div className="space-x-6">
              <a href="/" className="hover:text-orange-200">Home</a>
              <a href="/methods" className="hover:text-orange-200">Methods</a>
              <a href="/defects" className="hover:text-orange-200">Defects</a>
              <a href="/standards" className="hover:text-orange-200">Standards</a>
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
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-orange-600 hover:underline">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com/consulting" rel="noopener" className="text-orange-600 hover:underline">Weld Consulting</a></li>
                  <li><a href="https://atlantisndt.com/training" rel="noopener" className="text-orange-600 hover:underline">Weld Training</a></li>
                  <li><a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-orange-600 hover:underline">Asset Monitoring</a></li>
                  <li><a href="https://ndt-connect.com" rel="noopener" className="text-orange-600 hover:underline">Data Management</a></li>
                  <li><a href="https://atlantisndt.com/erp" rel="noopener" className="text-orange-600 hover:underline">Integration Systems</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://ndt-equipment-reviews.local" rel="noopener" className="text-orange-600 hover:underline">Equipment Reviews</a></li>
                  <li><a href="https://api-certification-guide.local" rel="noopener" className="text-orange-600 hover:underline">Certifications</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">About</h3>
                <p className="text-sm text-gray-600">Professional weld quality and NDT inspection resources.</p>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-sm text-gray-600">
              <p>&copy; 2026 Weld Quality Resource. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}