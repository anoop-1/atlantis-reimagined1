var f=(r,i,e)=>new Promise((m,n)=>{var s=g=>{try{c(e.next(g))}catch(o){n(o)}},a=g=>{try{c(e.throw(g))}catch(o){n(o)}},c=g=>g.done?m(g.value):Promise.resolve(g.value).then(s,a);c((e=e.apply(r,i)).next())});import{c as N,j as t,L as y,u as w,b as j,r as p}from"./index-DV-nybpu.js";import{N as b}from"./Navigation-wiOvz75Y.js";import{S as I}from"./SEOHead-5Z7yDIMt.js";import{C as D,c as C}from"./card-B84bFy34.js";import{B as x}from"./button-ZGo_z7Eb.js";import{b as S}from"./BlogService-DkX3r8Lw.js";import{A}from"./arrow-right-DBnkRAQ8.js";import{F as L}from"./file-text-D5ncqPsD.js";import{D as k}from"./database-XPd08Wb0.js";import{C as P}from"./cog-CBghIgtw.js";import{S as R}from"./shield-mBvlNLUV.js";import{G as M}from"./graduation-cap-DoGFNE5b.js";import{d as h}from"./proxy-Bg8Y_Eqx.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=N("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),v={"ndt-methods":[{title:"Ultrasonic Testing (UT) Guide",href:"/blog/ultrasonic-testing",description:"High-frequency sound wave inspection for welds and thickness measurement."},{title:"Radiographic Testing (RT) Guide",href:"/blog/radiographic-testing",description:"X-ray and gamma ray imaging for internal defect detection."},{title:"Magnetic Particle Testing (MT) Guide",href:"/blog/magnetic-particle-testing",description:"Surface and near-surface defect detection in ferromagnetic materials."},{title:"Penetrant Testing (PT) Guide",href:"/blog/penetrant-testing",description:"Liquid dye inspection for surface-breaking defects."},{title:"Eddy Current Testing (ET) Guide",href:"/blog/eddy-current-testing",description:"Electromagnetic inspection for tubing and conductivity testing."},{title:"Visual Testing (VT) Guide",href:"/blog/visual-testing",description:"Direct visual and remote inspection methods."}],training:[{title:"NDT Training Complete Guide",href:"/blog/ndt-training-complete-guide-courses-certification-global",description:"Comprehensive guide to NDT training and certification."},{title:"NDT Career Guide 2025",href:"/blog/ndt-career-top-choice-2025-global-market-trends",description:"Career opportunities in non-destructive testing."},{title:"NDT Training vs Certification",href:"/blog/ndt-training-vs-certification-2025-oil-gas-expectations",description:"Understanding the difference between training and certification."},{title:"NDT Salary Guide",href:"/blog/ndt-salary-guide-2025-global-level-1-2-3",description:"Salary expectations for NDT professionals worldwide."}],consulting:[{title:"ASNT Level III Consulting Guide",href:"/blog/asnt-level-iii-ndt-consulting-guide",description:"Expert guide to Level III consulting services."},{title:"NDT Level III Services Guide",href:"/blog/ndt-level-iii-consulting-services-guide",description:"Comprehensive Level III consulting overview."},{title:"NDT Consulting Q&A",href:"/blog/ndt-consulting-questions-answered-by-level-iii-expert",description:"Common questions answered by Level III experts."}],"digital-twins":[{title:"Digital Twins for NDT Reporting",href:"/blog/digital-twins-ndt-reporting-oil-gas-asset-integrity",description:"How digital twins transform NDT reporting."},{title:"Digital Twins Reduce Turnaround Time",href:"/blog/digital-twins-reduce-refinery-turnaround-time",description:"Using digital twins for faster refinery turnarounds."},{title:"Ultimate Guide to NDT Digital Twins",href:"/blog/ultimate-guide-ndt-digital-twins-asset-integrity-2025",description:"Complete guide to implementing digital twins for NDT."},{title:"Digital Twin Roadmap",href:"/blog/digital-twin-roadmap-oil-gas-companies-asset-integrity",description:"Implementation roadmap for oil and gas companies."}]},E=r=>["ultrasonic","radiographic","magnetic","penetrant","eddy","visual"].some(e=>r.includes(e))?"ndt-methods":r.includes("training")||r.includes("career")||r.includes("salary")?"training":r.includes("consulting")||r.includes("level-iii")?"consulting":r.includes("digital-twin")?"digital-twins":"ndt-methods",G=({currentSlug:r="",category:i,maxArticles:e=3,className:m=""})=>{const n=i||E(r),s=(v[n]||v["ndt-methods"]).filter(a=>!a.href.includes(r)).slice(0,e);return s.length===0?null:t.jsxs("section",{className:`bg-slate-100 rounded-xl p-6 ${m}`,children:[t.jsx("h3",{className:"text-xl font-bold mb-4 text-slate-900",children:"Related Articles"}),t.jsx("ul",{className:"space-y-4",children:s.map((a,c)=>t.jsx("li",{children:t.jsxs(y,{to:a.href,className:"group block hover:bg-white p-3 rounded-lg transition -m-3",children:[t.jsxs("h4",{className:"font-medium text-[#004aad] group-hover:underline flex items-center gap-1",children:[a.title,t.jsx(A,{className:"w-4 h-4 opacity-0 group-hover:opacity-100 transition"})]}),a.description&&t.jsx("p",{className:"text-sm text-slate-600 mt-1",children:a.description})]})},c))})]})},O=[{href:"/best-ndt-reporting-software-2026",title:"NDT Reporting Software",description:"API 510/570/653 + ASME V templates, mobile offline capture, eIDAS signing, AI-drafted findings with Level III approval gate.",icon:L},{href:"/ndt-erp-solution",title:"NDT ERP Software",description:"ASNT SNT-TC-1A certification matrix, ASTM E797 calibration tracking, project P&L, native QuickBooks/SAP/Maximo integrations.",icon:k},{href:"/digital-twins",title:"NDT Digital Twins",description:"3D asset visualization with live UT thickness heat-maps, RT defect overlay, API 579-1 FFS, API 581 RBI, predictive maintenance.",icon:P},{href:"/consulting",title:"ASNT Level III Consulting",description:"Independent Level III procedure approval, written-practice authoring, audit support for ADNOC/Aramco/QatarEnergy/NRC.",icon:R},{href:"/training",title:"NDT Training Programs",description:"Level I/II/III courses across UT, RT, MT, PT, ET, VT. ASNT SNT-TC-1A + ISO 9712 + NAS 410 aligned. Online + onsite.",icon:M}];function z(r=[],i=3){const e=r.map(n=>n.toLowerCase()).join(" ");return O.map(n=>{let s=1;return/(report|inspection.report|api.510|api.570|api.653|asme.*v)/i.test(e)&&n.href.includes("reporting")&&(s+=5),/(erp|business|invoice|certification|calibration|project.management)/i.test(e)&&n.href.includes("erp")&&(s+=5),/(digital.twin|3d|visuali|rbi|ffs|api.579|api.581|asset.integrity)/i.test(e)&&n.href.includes("digital-twins")&&(s+=5),/(level.iii|consulting|written.practice|audit|procedure|asnt)/i.test(e)&&n.href.includes("consulting")&&(s+=4),/(training|course|level.i|level.ii|exam|certification|asnt|iso.9712|cwi)/i.test(e)&&n.href.includes("training")&&(s+=4),{p:n,score:s}}).sort((n,s)=>s.score-n.score).slice(0,i).map(n=>n.p)}function U({tags:r=[],count:i=3,heading:e="Atlantis NDT Platforms"}){const m=z(r,i);return t.jsxs("aside",{"aria-label":"Related Atlantis NDT platforms",className:"mt-12 mb-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200",children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsx("h3",{className:"text-2xl font-bold text-slate-900 mb-2",children:e}),t.jsx("p",{className:"text-sm text-slate-600",children:"Software and services from the Atlantis NDT team — built by ASNT Level III practitioners."})]}),t.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:m.map(n=>{const s=n.icon;return t.jsxs(y,{to:n.href,className:"block bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md hover:border-primary/40 transition group",children:[t.jsx(s,{className:"w-7 h-7 text-primary mb-3"}),t.jsx("h4",{className:"font-bold text-slate-900 mb-2 group-hover:text-primary transition",children:n.title}),t.jsx("p",{className:"text-xs text-slate-600 leading-relaxed",children:n.description})]},n.href)})})]})}function F(r){let i=r;return i=i.replace(/<!DOCTYPE[^>]*>/gi,""),i=i.replace(/<\/?html[^>]*>/gi,""),i=i.replace(/<head[^>]*>[\s\S]*?<\/head>/gi,""),i=i.replace(/<\/?body[^>]*>/gi,""),i=i.replace(/<\/?article[^>]*>/gi,""),i=i.trim(),i}function ie(){const{slug:r}=w(),i=j(),[e,m]=p.useState(null);p.useEffect(()=>{f(this,null,function*(){if(r){const l=yield S.getBlogBySlug(r);m(l),l||i("/blog")}})},[r,i]);const n=p.useMemo(()=>e!=null&&e.content?F(e.content):"",[e==null?void 0:e.content]),s=o=>{try{const l=new Date(o);return isNaN(l.getTime())?o:l.toISOString().split("T")[0]}catch(l){return o}},a=p.useMemo(()=>{if(!e)return!1;const o=(e.title||"").toLowerCase();return o.includes("guide")||o.includes("how to")||o.includes("implementation")||o.includes("step")||o.includes("requirements")},[e]),c=p.useMemo(()=>{if(!(e!=null&&e.content)||!a)return[];const o=/<h2[^>]*>(.*?)<\/h2>/gi,l=[];let u;for(;(u=o.exec(e.content))!==null;){const d=u[1].replace(/<[^>]+>/g,"").trim();d&&!d.toLowerCase().includes("conclusion")&&!d.toLowerCase().includes("contact")&&!d.toLowerCase().includes("request")&&!d.toLowerCase().includes("atlantis")&&l.push({name:d,text:`Learn about ${d} in this comprehensive guide.`})}return l},[e==null?void 0:e.content,a]),g=p.useMemo(()=>{if(!e)return null;const o=e.createdAt||s(e.date),l=e.updatedAt||o,u=[{"@type":"TechArticle",headline:e.title,description:e.metaDescription||e.snippet,datePublished:o,dateModified:l,author:{"@type":"Organization",name:"Atlantis NDT",url:"https://atlantisndt.com"},publisher:{"@type":"Organization",name:"Atlantis NDT",logo:{"@type":"ImageObject",url:"https://atlantisndt.com/favicon-96x96.jpg",width:96,height:96}},mainEntityOfPage:{"@type":"WebPage","@id":`https://atlantisndt.com/blog/${e.slug}`},image:e.image||"https://atlantisndt.com/og-image.jpg",keywords:`NDT, ${e.title}, non-destructive testing`,about:{"@type":"Thing",name:"Non-Destructive Testing"},inLanguage:"en-US",isAccessibleForFree:!0}];return a&&c.length>=3&&u.push({"@type":"HowTo",name:e.title,description:e.metaDescription||e.snippet,step:c.map((d,T)=>({"@type":"HowToStep",position:T+1,name:d.name,text:d.text})),totalTime:`PT${Math.max(10,c.length*3)}M`}),{"@context":"https://schema.org","@graph":u}},[e,a,c]);return e?t.jsxs("div",{className:"min-h-screen pt-20",children:[t.jsx(b,{}),t.jsx(I,{title:e.title,description:e.metaDescription||e.snippet,keywords:`${e.title}, NDT, non-destructive testing, blog, ${e.slug}`,canonical:`https://atlantisndt.com/blog/${e.slug}`,structuredData:g}),t.jsxs(h.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[t.jsx("section",{className:"py-12 bg-gradient-to-r from-primary/10 to-accent/10",children:t.jsxs("div",{className:"container mx-auto px-6",children:[t.jsxs(x,{variant:"ghost",onClick:()=>i("/blog"),className:"mb-6 gap-2",children:[t.jsx(B,{size:20}),"Back to Blog"]}),t.jsx(h.h1,{className:"text-4xl md:text-5xl font-bold mb-4",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1},children:e.title}),t.jsxs(h.div,{className:"flex items-center gap-4 text-muted-foreground",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:[t.jsx("span",{children:e.date}),e.author&&t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"•"}),t.jsxs("span",{children:["By ",e.author]})]})]})]})}),t.jsx("section",{className:"py-12 md:py-20",children:t.jsxs("div",{className:"container mx-auto px-6 max-w-4xl",children:[t.jsx(D,{className:"border-0 shadow-lg",children:t.jsx(C,{className:"p-8 md:p-12",children:t.jsx(h.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},dangerouslySetInnerHTML:{__html:n},className:"blog-content"})})}),t.jsxs(h.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},className:"mt-16",children:[t.jsx(U,{tags:[e==null?void 0:e.title,e==null?void 0:e.category,...(e==null?void 0:e.tags)||[]].filter(Boolean),count:3}),t.jsx(G,{currentSlug:r||"",maxArticles:3}),t.jsxs("div",{className:"mt-8 pt-8 border-t text-center",children:[t.jsx("h3",{className:"text-xl font-bold mb-4",children:"Explore More Insights"}),t.jsx(x,{onClick:()=>i("/blog"),className:"btn-primary",children:"View All Articles"})]})]})]})})]}),t.jsx("style",{children:`
        .blog-content {
          color: hsl(var(--foreground));
          line-height: 1.8;
          font-size: 1.05rem;
        }
        
        .blog-content header,
        .blog-content footer,
        .blog-content section {
          margin-bottom: 2.5rem;
        }
        
        .blog-content header p {
          font-size: 1.1rem;
          color: hsl(var(--muted-foreground));
          background: hsl(var(--primary) / 0.05);
          padding: 1rem 1.25rem;
          border-radius: 0.5rem;
          border-left: 4px solid hsl(var(--primary));
          margin-top: 1rem;
        }
        
        .blog-content h1 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: hsl(var(--foreground));
          line-height: 1.3;
        }
        
        .blog-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
          padding-bottom: 0.5rem;
          border-bottom: 2px solid hsl(var(--primary) / 0.2);
        }
        
        .blog-content h3 {
          font-size: 1.35rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: hsl(var(--foreground));
        }
        
        .blog-content p {
          margin-bottom: 1.25rem;
          color: hsl(var(--muted-foreground));
          line-height: 1.8;
        }
        
        .blog-content ul,
        .blog-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .blog-content ul {
          list-style-type: disc;
        }
        
        .blog-content ol {
          list-style-type: decimal;
        }
        
        .blog-content li {
          margin-bottom: 0.5rem;
          color: hsl(var(--muted-foreground));
          line-height: 1.7;
        }
        
        .blog-content li::marker {
          color: hsl(var(--primary));
        }
        
        .blog-content a {
          color: hsl(var(--primary));
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: opacity 0.2s;
        }
        
        .blog-content a:hover {
          opacity: 0.8;
        }
        
        .blog-content strong {
          font-weight: 600;
          color: hsl(var(--foreground));
        }
        
        .blog-content blockquote {
          border-left: 4px solid hsl(var(--primary));
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: hsl(var(--muted-foreground));
        }
        
        .blog-content code {
          background: hsl(var(--muted));
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.9em;
        }
        
        .blog-content pre {
          background: hsl(var(--muted));
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin-bottom: 1.5rem;
        }
        
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.5rem;
        }
        
        .blog-content th,
        .blog-content td {
          border: 1px solid hsl(var(--border));
          padding: 0.75rem;
          text-align: left;
        }
        
        .blog-content th {
          background: hsl(var(--muted));
          font-weight: 600;
        }
        
        .blog-content footer {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid hsl(var(--border));
        }
        
        .blog-content footer h2 {
          color: hsl(var(--primary));
        }
        
        .blog-content section:first-of-type {
          margin-top: 0;
        }
        
        .blog-content section h2:first-child {
          margin-top: 0;
        }
      `})]}):t.jsxs("div",{className:"min-h-screen pt-20",children:[t.jsx(b,{}),t.jsx("div",{className:"container mx-auto px-6 py-20 text-center",children:t.jsx("p",{className:"text-muted-foreground",children:"Loading..."})})]})}export{ie as default};
