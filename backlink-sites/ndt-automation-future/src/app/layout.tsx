import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  verification: { google: 'dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE' },
  title: 'NDT Automation Future | Advanced Inspection Technology',
  description: 'Explore the future of NDT automation, robotics integration, and AI-powered inspection systems in non-destructive testing.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="bg-indigo-600 text-white">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">NDT Automation Future</h1>
            <div className="space-x-6">
              <a href="/" className="hover:text-indigo-200">Home</a>
              <a href="/technologies" className="hover:text-indigo-200">Technologies</a>
              <a href="/implementation" className="hover:text-indigo-200">Implementation</a>
              <a href="/trends" className="hover:text-indigo-200">Trends</a>
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
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-indigo-600 hover:underline">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com/consulting" rel="noopener" className="text-indigo-600 hover:underline">NDT Consulting Services</a></li>
                  <li><a href="https://atlantisndt.com/training" rel="noopener" className="text-indigo-600 hover:underline">NDT Training Programs</a></li>
                  <li><a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-indigo-600 hover:underline">Digital Twin Solutions</a></li>
                  <li><a href="https://ndt-connect.com" rel="noopener" className="text-indigo-600 hover:underline">NDTConnect Platform</a></li>
                  <li><a href="https://atlantisndt.com/erp" rel="noopener" className="text-indigo-600 hover:underline">NDT ERP Software</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://weld-quality-resource.local" rel="noopener" className="text-indigo-600 hover:underline">Weld Quality Standards</a></li>
                  <li><a href="https://ndt-equipment-reviews.local" rel="noopener" className="text-indigo-600 hover:underline">Equipment Reviews</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">About</h3>
                <p className="text-sm text-gray-600">Dedicated to advancing NDT automation and industry 4.0 technologies.</p>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-sm text-gray-600">
              <p>&copy; 2026 NDT Automation Future. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}