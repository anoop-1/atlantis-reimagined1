import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactDetails() {

   const serviceLinks = [
      { name: "NDT Consulting", href: "/consulting" },
      { name: "NDT Training", href: "/training" },
      { name: "Digital Twins", href: "/digital-twins" },
      { name: "NDT Connect", href: "/ndt-connect" },
      { name: "ERP Solutions", href: "/erp" },
   ];

   const resourceLinks = [
      { name: "Resources & Downloads", href: "/resources" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "FAQ", href: "/faq" },
      { name: "Press & Media", href: "/press" },
   ];

   // Link to training page - methods are covered in training
   const methodLinks = [
      { name: "Ultrasonic Testing (UT)", href: "/training" },
      { name: "Radiographic Testing (RT)", href: "/training" },
      { name: "Magnetic Particle (MT)", href: "/training" },
      { name: "Penetrant Testing (PT)", href: "/training" },
      { name: "Eddy Current (ET)", href: "/training" },
      { name: "Visual Testing (VT)", href: "/training" },
   ];

   const certificationLinks = [
      { name: "API 510 Certification", href: "/api-510-certification" },
      { name: "API 570 Certification", href: "/api-570-certification" },
      { name: "API 653 Certification", href: "/api-653-certification" },
      { name: "ASNT Certification", href: "/asnt-certification" },
   ];

   const socialLinks = [
      { name: "LinkedIn", href: "https://linkedin.com/company/atlantis-ndt" },
      { name: "Google Maps", href: "https://maps.app.goo.gl/Lalha-Residence-Houston" },
      { name: "WhatsApp", href: "https://wa.me/+12818408969" },
   ];

   const offices = [
      {
         name: "Houston, USA",
         address: "700 Smith St #61070, SMB#52788",
         mapUrl: "https://maps.app.goo.gl/Lalha-Residence-Houston"
      },
      {
         name: "Hyderabad, India",
         address: "5-68/48-132, Hyderabad-500078",
         mapUrl: "https://maps.google.com/?q=Atlantis+NDT+Hyderabad+India"
      },
   ];

   return (
      <footer className="bg-gray-900 text-white py-12 px-6">
         <div className="max-w-7xl mx-auto">
            {/* Main Footer Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
               {/* Services */}
               <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Services</h3>
                  <ul className="space-y-2">
                     {serviceLinks.map((link) => (
                        <li key={link.name}>
                           <Link to={link.href} className="text-gray-300 hover:text-accent hover:underline transition text-sm">
                              {link.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* NDT Methods - Link to training page */}
               <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">NDT Methods</h3>
                  <ul className="space-y-2">
                     {methodLinks.map((link) => (
                        <li key={link.name}>
                           <Link to={link.href} className="text-gray-300 hover:text-accent hover:underline transition text-sm">
                              {link.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Certifications */}
               <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Certifications</h3>
                  <ul className="space-y-2">
                     {certificationLinks.map((link) => (
                        <li key={link.name}>
                           <Link to={link.href} className="text-gray-300 hover:text-accent hover:underline transition text-sm">
                              {link.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Resources */}
               <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Resources</h3>
                  <ul className="space-y-2">
                     {resourceLinks.map((link) => (
                        <li key={link.name}>
                           <Link to={link.href} className="text-gray-300 hover:text-accent hover:underline transition text-sm">
                              {link.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Contact */}
               <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Contact</h3>
                  <ul className="space-y-3 text-sm">
                     <li className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <a href="mailto:info@atlantisndt.com" className="text-gray-300 hover:text-accent transition">
                           info@atlantisndt.com
                        </a>
                     </li>
                     <li className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <a href="tel:+12818408969" className="text-gray-300 hover:text-accent transition">
                           +1 (281) 840-8969
                        </a>
                     </li>
                     <li className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <a href="tel:+918688325653" className="text-gray-300 hover:text-accent transition">
                           +91 8688325653
                        </a>
                     </li>
                  </ul>
               </div>

               {/* Connect */}
               <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Connect</h3>
                  <ul className="space-y-2">
                     {socialLinks.map((link) => (
                        <li key={link.name}>
                           <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent hover:underline transition text-sm">
                              {link.name}
                           </a>
                        </li>
                     ))}
                  </ul>
                  {/* Offices with Google Maps links */}
                  <div className="mt-6">
                     <h4 className="text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Offices</h4>
                     {offices.map((office) => (
                        <a
                           key={office.name}
                           href={office.mapUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-start gap-2 mb-2 group"
                        >
                           <MapPin className="w-3 h-3 text-accent flex-shrink-0 mt-1" />
                           <span className="text-xs text-gray-400 group-hover:text-accent transition">
                              <strong className="text-gray-300 group-hover:text-accent">{office.name}</strong>
                           </span>
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
               <div className="text-gray-500 text-sm">
                  &copy; {new Date().getFullYear()} Atlantis NDT. All rights reserved.
               </div>
               <div className="flex gap-6 text-sm">
                  <Link to="/about" className="text-gray-400 hover:text-accent transition">About</Link>
                  <Link to="/contact" className="text-gray-400 hover:text-accent transition">Contact</Link>
                  <Link to="/faq" className="text-gray-400 hover:text-accent transition">FAQ</Link>
               </div>
            </div>
         </div>
      </footer>
   );
}
