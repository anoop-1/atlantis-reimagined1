import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import erpCatalog from "@/data/erp-apps-catalog.json";

import { PRODUCTS, SERVICES, type SubMenuItem } from "@/data/site-menu";

// Products menu: the products, plus only the core NDT apps of the ERP
// (Digital Twin Reporting and Practical NDT sit under NDT Reports / eLearning).
// Everything else is one click away on /erp/apps, keeping the panel uncluttered.
const CORE_APPS = ["ndt-reports", "certificates", "procedures", "team-assignments", "asset-management", "elearning"];
const coreApps = CORE_APPS.map((slug) => erpCatalog.apps.find((a) => a.slug === slug)!).filter(Boolean);

// 2026-10-11 (owner): two menus, Products and Services, each with its own hover
// dropdown listing everything in that line (as before 2026-10-07). 3D Scanning,
// NDT Report Validation and Business Consulting are services, not resources.
// Resources moved out of the header into the footer (ContactDetails.tsx).
// Contact stays a plain link (2026-10-10).
type NavSub = { name: string; path: string; blurb?: string; erpMenu?: boolean; children?: SubMenuItem[] };
type NavItem = { name: string; path?: string; dropdown?: NavSub[] };
const navItems: NavItem[] = [
   { name: "Products", dropdown: PRODUCTS.map((p, i) => (i === 0 ? { ...p, erpMenu: true } : p)) },
   { name: "Services", dropdown: SERVICES },
   { name: "About", path: "/about" },
   { name: "Contact", path: "/contact" },
];

// 2026-10-18: a Services entry with children (Inspection) opens a nested flyout on hover or
// keyboard focus. It flips to the left when there is no room on the right, closes on Escape,
// and lists grandchildren (Advanced / Conventional NDT) indented under their parent.
const FlyoutItem = ({ sub }: { sub: NavSub }) => {
   const [open, setOpen] = useState(false);
   const [flip, setFlip] = useState(false);
   const ref = useRef<HTMLDivElement>(null);
   const btnRef = useRef<HTMLButtonElement>(null);
   const id = `flyout-${sub.path.replace(/[^a-z0-9]+/gi, "-")}`;
   // Escape closes the flyout even when it was opened by hover (focus may be elsewhere).
   useEffect(() => {
      if (!open) return;
      const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
   }, [open]);
   const show = () => {
      const r = ref.current?.getBoundingClientRect();
      if (r) setFlip(r.right + 300 > window.innerWidth);
      setOpen(true);
   };
   return (
      <div
         ref={ref}
         className="relative"
         onMouseEnter={show}
         onMouseLeave={() => setOpen(false)}
         onFocus={show}
         onBlur={(e) => { if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false); }}
         onKeyDown={(e) => {
            if (e.key === "Escape" && open) { e.stopPropagation(); setOpen(false); btnRef.current?.focus(); }
         }}
      >
         <div className={`flex items-stretch rounded-lg ${open ? "bg-slate-50 shadow-sm" : "hover:bg-slate-50 hover:shadow-sm"}`}>
            <Link to={sub.path} className="flex-1 block px-3 py-2">
               <span className="block text-sm font-semibold text-gray-900">{sub.name}</span>
               {sub.blurb && <span className="block text-xs text-gray-500">{sub.blurb}</span>}
            </Link>
            <button
               ref={btnRef}
               type="button"
               className="px-2 text-gray-500 hover:text-primary"
               aria-label={`${sub.name} submenu`}
               aria-haspopup="true"
               aria-expanded={open}
               aria-controls={id}
               onClick={show}
               onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                     e.preventDefault(); show();
                     requestAnimationFrame(() => (document.querySelector(`#${id} a`) as HTMLElement | null)?.focus());
                  }
               }}
            >
               <ChevronRight size={16} className={flip ? "rotate-180" : ""} />
            </button>
         </div>
         <div
            id={id}
            className={`absolute top-0 z-10 w-72 ${flip ? "right-full pr-1" : "left-full pl-1"} transition-all duration-150 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
         >
            <ul className="bg-white shadow-xl rounded-xl border p-2 text-left" aria-label={sub.name}>
               {(sub.children || []).map((c) => (
                  <li key={c.path}>
                     <Link to={c.path} className="block rounded-md px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-slate-50 hover:text-primary">
                        {c.name}
                     </Link>
                     {c.children?.length ? (
                        <ul className="pl-3 mb-1">
                           {c.children.map((g) => (
                              <li key={g.path}>
                                 <Link to={g.path} className="block rounded-md px-3 py-1 text-sm text-gray-600 hover:bg-slate-50 hover:text-primary">
                                    ↳ {g.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     ) : null}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

// Mobile: a child list that expands under its parent.
const MobileNested = ({ sub, close }: { sub: NavSub; close: () => void }) => {
   const [open, setOpen] = useState(false);
   const id = `m-${sub.path.replace(/[^a-z0-9]+/gi, "-")}`;
   return (
      <div>
         <div className="flex items-center justify-between">
            <Link to={sub.path} className="block py-1 text-gray-600 hover:text-primary" onClick={close}>{sub.name}</Link>
            <button
               type="button"
               className="p-2 text-gray-500"
               aria-label={`${open ? "Collapse" : "Expand"} ${sub.name}`}
               aria-expanded={open}
               aria-controls={id}
               onClick={() => setOpen(!open)}
            >
               <ChevronDown size={16} className={`transform transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
         </div>
         {open && (
            <ul id={id} className="pl-4 pb-1 space-y-0.5 border-l ml-1">
               {(sub.children || []).map((c) => (
                  <li key={c.path}>
                     <Link to={c.path} className="block py-0.5 text-sm text-gray-600 hover:text-primary" onClick={close}>{c.name}</Link>
                     {c.children?.length ? (
                        <ul className="pl-3">
                           {c.children.map((g) => (
                              <li key={g.path}>
                                 <Link to={g.path} className="block py-0.5 text-sm text-gray-500 hover:text-primary" onClick={close}>↳ {g.name}</Link>
                              </li>
                           ))}
                        </ul>
                     ) : null}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export const Navigation = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
   const location = useLocation();

   // Escape closes an open desktop dropdown, including one opened by hover.
   useEffect(() => {
      if (!activeDropdown || isOpen) return;
      const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveDropdown(null); };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
   }, [activeDropdown, isOpen]);

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
                           onFocus={() => setActiveDropdown(item.name)}
                           onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setActiveDropdown(null); }}
                           onKeyDown={(e) => {
                              if (e.key === "Escape") {
                                 setActiveDropdown(null);
                                 (e.currentTarget.querySelector("button") as HTMLButtonElement | null)?.focus();
                              }
                           }}
                        >
                           <button
                              type="button"
                              aria-haspopup="true"
                              aria-expanded={activeDropdown === item.name}
                              onClick={() => setActiveDropdown(item.name)}
                              className={`flex items-center space-x-1 font-medium transition-colors duration-300 hover:text-primary ${activeDropdown === item.name
                                 ? "text-primary"
                                 : "text-foreground"
                                 }`}
                           >
                              <span>{item.name}</span>
                              <ChevronDown size={16} />
                           </button>

                           {/* Dropdown menu. Products (the one with the ERP entry) opens as a mega menu
                               with the core ERP apps; Services opens as a two-column panel. */}
                           {item.dropdown.some((sub) => sub.erpMenu) ? (
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
                                 className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[min(34rem,calc(100vw-2rem))] transition-all duration-200 ${activeDropdown === item.name ? "opacity-100 visible" : "opacity-0 invisible"}`}
                              >
                                 <div className="bg-white shadow-xl rounded-xl border p-3 grid grid-cols-2 gap-1">
                                    {item.dropdown.map((sub) =>
                                       sub.children?.length ? (
                                          <FlyoutItem key={sub.name} sub={sub} />
                                       ) : (
                                          <Link key={sub.name} to={sub.path} className="block rounded-lg px-3 py-2 hover:bg-slate-50 hover:shadow-sm">
                                             <span className="block text-sm font-semibold text-gray-900">{sub.name}</span>
                                             {sub.blurb && <span className="block text-xs text-gray-500">{sub.blurb}</span>}
                                          </Link>
                                       )
                                    )}
                                 </div>
                              </div>
                           )}
                        </div>
                     ) : (
                        <Link
                           key={item.name}
                           to={item.path!}
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
                  <Button asChild className="btn-primary">
                     <Link to="/contact">Contact Us</Link>
                  </Button>
               </motion.div>

               {/* Mobile: Contact is one tap away without opening the menu (owner, 2026-10-10). */}
               <Link to="/contact" className="lg:hidden ml-auto mr-3 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">
                  Contact
               </Link>

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
                              type="button"
                              aria-expanded={activeDropdown === item.name}
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
                                       {sub.children?.length ? (
                                          <MobileNested sub={sub} close={() => setIsOpen(false)} />
                                       ) : (
                                       <Link
                                          to={sub.path}
                                          className="block py-1 text-gray-600 hover:text-primary"
                                          onClick={() => setIsOpen(false)}
                                       >
                                          {sub.name}
                                       </Link>
                                       )}
                                       {sub.erpMenu && (
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
                           to={item.path!}
                           className="block py-2 font-medium transition-colors duration-300"
                           onClick={() => setIsOpen(false)}
                        >
                           {item.name}
                        </Link>
                     )
                  )}

                  <Button asChild className="btn-primary w-full mt-4">
                     <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                  </Button>
               </div>
            </motion.div>
         </div>
      </motion.nav>
   );
};
