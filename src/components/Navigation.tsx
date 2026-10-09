import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import erpCatalog from "@/data/erp-apps-catalog.json";

// Software menu: the products, plus only the core NDT apps of the ERP
// (Digital Twin Reporting and Practical NDT sit under NDT Reports / eLearning).
// Everything else is one click away on /erp/apps, keeping the panel uncluttered.
const CORE_APPS = ["ndt-reports", "certificates", "procedures", "team-assignments", "asset-management", "elearning"];
const coreApps = CORE_APPS.map((slug) => erpCatalog.apps.find((a) => a.slug === slug)!).filter(Boolean);
// 2026-10-07 owner strategy: navigation follows the commercial lines —
// Software · Training · Inspection Services · Level III Consulting · Resources ·
// About · Contact Us. ERP, Digital Twin Reporting and Practical NDT Simulation get
// equal weight in the Software menu. Nothing was removed: Business Consulting,
// Report Validation, 3D Scanning and NDT Connect moved under Software/Resources.
const PRODUCTS = [
   { name: "Atlantis ERP", path: "/erp", blurb: "Run your whole NDT business" },
   { name: "Digital Twin Reporting", path: "/digital-twin-reporting", blurb: "Inspection reports on 3D assets" },
   { name: "Practical NDT Simulation", path: "/practical-ndt", blurb: "3D hands-on skills simulator" },
   { name: "NDT Reporting Software", path: "/intelligent-reporting-software", blurb: "Field data to signed reports" },
   { name: "Digital Twins Platform", path: "/digital-twins", blurb: "Asset integrity in 3D" },
   { name: "NDT Connect", path: "/ndt-connect", blurb: "Find NDT service providers" },
];

const navItems = [
   {
      name: "Software",
      dropdown: [
         { name: "Atlantis ERP", path: "/erp", erpMenu: true },
         { name: "Digital Twin Reporting", path: "/digital-twin-reporting" },
         { name: "Practical NDT Simulation", path: "/practical-ndt" },
         { name: "NDT Reporting Software", path: "/intelligent-reporting-software" },
         { name: "Digital Twins Platform", path: "/digital-twins" },
         { name: "NDT Connect", path: "/ndt-connect" },
      ],
   },
   { name: "Training", path: "/training" },
   { name: "Inspection Services", path: "/inspection-services" },
   { name: "Level III Consulting", path: "/consulting" },
   {
      name: "Resources",
      dropdown: [
         { name: "Blog", path: "/blog" },
         { name: "Case Studies", path: "/case-studies" },
         { name: "Free Tools", path: "/tools" },
         { name: "Downloads", path: "/resources" },
         { name: "Industry Statistics", path: "/ndt-industry-statistics" },
         { name: "NDT Report Validation", path: "/report-validation" },
         { name: "3D Scanning Services", path: "/3d-scanning-services" },
         { name: "Business Consulting", path: "/business-consulting" },
      ],
   },
   { name: "About", path: "/about" },
];

export const Navigation = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
   const location = useLocation();

   // A real page (not the Suspense spinner) has mounted: lift the splash that
   // hides the prerendered crawler copy (see index.html).
   useEffect(() => {
      document.getElementById("root")?.setAttribute("data-ready", "");
   }, []);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const navVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.6,
            staggerChildren: 0.1,
         },
      },
   };

   const itemVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
   };

   return (
      <motion.nav
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-md py-2" : "bg-transparent py-4"
            }`}
         initial="hidden"
         animate="visible"
         variants={navVariants}
      >
         <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
               {/* Logo */}
               <motion.div variants={itemVariants}>
                  <Link to="/" className="flex items-center space-x-2 ">
                     <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        <img src="/atlantis.png" alt="Atlantis NDT Logo - Global NDT Consulting and Training" width="40" height="40" />
                     </div>
                     <span className="font-bold text-xl text-primary">
                        Atlantis NDT
                     </span>
                  </Link>
               </motion.div>

               {/* Desktop Navigation */}
               <motion.div
                  className="hidden lg:flex items-center space-x-6"
                  variants={itemVariants}
               >
                  {navItems.map((item) =>
                     item.dropdown ? (
                        <div
                           key={item.name}
                           className="relative group"
                           onMouseEnter={() => setActiveDropdown(item.name)}
                           onMouseLeave={() => setActiveDropdown(null)}
                        >
                           <button
                              className={`flex items-center space-x-1 font-medium transition-colors duration-300 hover:text-primary ${activeDropdown === item.name
                                 ? "text-primary"
                                 : "text-foreground"
                                 }`}
                           >
                              <span>{item.name}</span>
                              <ChevronDown size={16} />
                           </button>

                           {/* Dropdown menu. Software (the one with the ERP entry) opens as a
                               mega menu listing every ERP app; the others stay a simple list. */}
                           {item.dropdown.some((sub) => "erpMenu" in sub) ? (
                              <div
                                 className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[min(44rem,calc(100vw-2rem))] transition-all duration-200 ${activeDropdown === item.name ? "opacity-100 visible" : "opacity-0 invisible"}`}
                              >
                                 <div className="bg-white shadow-xl rounded-xl border grid grid-cols-[14rem_1fr] overflow-hidden">
                                    <div className="bg-slate-50 p-3 space-y-1 border-r">
                                       {PRODUCTS.map((p) => (
                                          <Link key={p.name} to={p.path} className="block rounded-lg px-3 py-2 hover:bg-white hover:shadow-sm">
                                             <span className="block text-sm font-semibold text-gray-900">{p.name}</span>
                                             <span className="block text-xs text-gray-500">{p.blurb}</span>
                                          </Link>
                                       ))}
                                    </div>
                                    <div className="p-5">
                                       <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">Core NDT apps in Atlantis ERP</p>
                                       <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-left">
                                          {coreApps.map((a) => (
                                             <div key={a.slug}>
                                                <Link to={`/erp/apps/${a.slug}`} className="block text-sm font-medium text-gray-800 hover:text-primary">
                                                   {a.name}
                                                </Link>
                                                {a.featured && (
                                                   <Link to={a.featured.path} className="block pl-3 text-sm font-semibold text-primary hover:underline">
                                                      ↳ {a.featured.name}
                                                   </Link>
                                                )}
                                             </div>
                                          ))}
                                       </div>
                                       <div className="mt-4 pt-3 border-t flex flex-wrap gap-x-6 gap-y-1 text-sm">
                                          <Link to="/erp/apps" className="font-semibold text-primary hover:underline">See all {erpCatalog.apps.length} ERP apps →</Link>
                                          <Link to="/erp/apps#custom" className="text-gray-600 hover:text-primary">Custom apps on request →</Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ) : (
                              <div
                                 className={`absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                              >
                                 {item.dropdown.map((sub) => (
                                    <Link key={sub.name} to={sub.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white">
                                       {sub.name}
                                    </Link>
                                 ))}
                              </div>
                           )}
                        </div>
                     ) : (
                        <Link
                           key={item.name}
                           to={item.path}
                           className={`relative font-medium transition-colors duration-300 hover:text-primary ${location.pathname === item.path
                              ? "text-primary"
                              : "text-foreground"
                              }`}
                        >
                           {item.name}
                        </Link>
                     )
                  )}
               </motion.div>

               {/* CTA Button */}
               <motion.div className="hidden lg:block" variants={itemVariants}>
                  <Button className="btn-primary">
                     <Link to="/contact">Contact Us</Link>
                  </Button>
               </motion.div>

               {/* Mobile Menu Toggle */}
               <motion.button
                  className="lg:hidden"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                  variants={itemVariants}
               >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
               </motion.button>
            </div>

            {/* Mobile Navigation */}
            <motion.div
               className={`lg:hidden overflow-hidden ${isOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
                  }`}
               initial={false}
               animate={{ height: isOpen ? "auto" : 0 }}
               transition={{ duration: 0.3 }}
            >
               <div className="py-4 px-2 space-y-2 bg-white/95 backdrop-blur-md rounded-b-lg">
                  {navItems.map((item, index) =>
                     item.dropdown ? (
                        <div key={item.name}>
                           <button
                              className="flex justify-between w-full py-2 font-medium text-left"
                              onClick={() =>
                                 setActiveDropdown(
                                    activeDropdown === item.name
                                       ? null
                                       : item.name
                                 )
                              }
                           >
                              {item.name}
                              <ChevronDown
                                 size={16}
                                 className={`transform transition-transform ${activeDropdown === item.name
                                    ? "rotate-180"
                                    : ""
                                    }`}
                              />
                           </button>
                           {activeDropdown === item.name && (
                              <div className="pl-4 space-y-1">
                                 {item.dropdown.map((sub) => (
                                    <div key={sub.name}>
                                       <Link
                                          to={sub.path}
                                          className="block py-1 text-gray-600 hover:text-primary"
                                          onClick={() => setIsOpen(false)}
                                       >
                                          {sub.name}
                                       </Link>
                                       {"erpMenu" in sub && (
                                          <div className="pl-4 pb-1 grid grid-cols-2 gap-x-3">
                                             {coreApps.map((a) => (
                                                <div key={a.slug}>
                                                   <Link to={`/erp/apps/${a.slug}`} className="block py-0.5 text-sm text-gray-500 hover:text-primary" onClick={() => setIsOpen(false)}>
                                                      {a.name}
                                                   </Link>
                                                   {a.featured && (
                                                      <Link to={a.featured.path} className="block pl-2 py-0.5 text-sm font-medium text-primary" onClick={() => setIsOpen(false)}>
                                                         ↳ {a.featured.name}
                                                      </Link>
                                                   )}
                                                </div>
                                             ))}
                                             <Link to="/erp/apps" className="col-span-2 py-1 text-sm font-semibold text-primary" onClick={() => setIsOpen(false)}>
                                                All {erpCatalog.apps.length} ERP apps →
                                             </Link>
                                             <Link to="/erp/apps#custom" className="col-span-2 py-1 text-sm text-gray-600" onClick={() => setIsOpen(false)}>
                                                Custom apps on request →
                                             </Link>
                                          </div>
                                       )}
                                    </div>
                                 ))}
                              </div>
                           )}
                        </div>
                     ) : (
                        <Link
                           key={item.name}
                           to={item.path}
                           className="block py-2 font-medium transition-colors duration-300"
                           onClick={() => setIsOpen(false)}
                        >
                           {item.name}
                        </Link>
                     )
                  )}

                  <Button className="btn-primary w-full mt-4">
                     <Link to="/contact">Contact Us</Link>
                  </Button>
               </div>
            </motion.div>
         </div>
      </motion.nav>
   );
};
