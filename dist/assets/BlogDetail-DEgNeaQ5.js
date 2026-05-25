import{j as i,L as v,A as w,V as T,aI as N,o as c,N as h,S as j,m as g,af as f,aJ as C,e as D,f as I,ax as S}from"./blog-pages-Dg2DQ--s.js";import{b as k}from"./BlogService-BtCVHpre.js";import{a as L}from"./RelatedProducts-A6WMnPre.js";import"./blogs-CsTfkjGT.js";import"./erp-pages-4sre8qMy.js";const b={"ndt-methods":[{title:"Ultrasonic Testing (UT) Guide",href:"/blog/ultrasonic-testing",description:"High-frequency sound wave inspection for welds and thickness measurement."},{title:"Radiographic Testing (RT) Guide",href:"/blog/radiographic-testing",description:"X-ray and gamma ray imaging for internal defect detection."},{title:"Magnetic Particle Testing (MT) Guide",href:"/blog/magnetic-particle-testing",description:"Surface and near-surface defect detection in ferromagnetic materials."},{title:"Penetrant Testing (PT) Guide",href:"/blog/penetrant-testing",description:"Liquid dye inspection for surface-breaking defects."},{title:"Eddy Current Testing (ET) Guide",href:"/blog/eddy-current-testing",description:"Electromagnetic inspection for tubing and conductivity testing."},{title:"Visual Testing (VT) Guide",href:"/blog/visual-testing",description:"Direct visual and remote inspection methods."}],training:[{title:"NDT Training Complete Guide",href:"/blog/ndt-training-complete-guide-courses-certification-global",description:"Comprehensive guide to NDT training and certification."},{title:"NDT Career Guide 2025",href:"/blog/ndt-career-top-choice-2025-global-market-trends",description:"Career opportunities in non-destructive testing."},{title:"NDT Training vs Certification",href:"/blog/ndt-training-vs-certification-2025-oil-gas-expectations",description:"Understanding the difference between training and certification."},{title:"NDT Salary Guide",href:"/blog/ndt-salary-guide-2025-global-level-1-2-3",description:"Salary expectations for NDT professionals worldwide."}],consulting:[{title:"ASNT Level III Consulting Guide",href:"/blog/asnt-level-iii-ndt-consulting-guide",description:"Expert guide to Level III consulting services."},{title:"NDT Level III Services Guide",href:"/blog/ndt-level-iii-consulting-services-guide",description:"Comprehensive Level III consulting overview."},{title:"NDT Consulting Q&A",href:"/blog/ndt-consulting-questions-answered-by-level-iii-expert",description:"Common questions answered by Level III experts."}],"digital-twins":[{title:"Digital Twins for NDT Reporting",href:"/blog/digital-twins-ndt-reporting-oil-gas-asset-integrity",description:"How digital twins transform NDT reporting."},{title:"Digital Twins Reduce Turnaround Time",href:"/blog/digital-twins-reduce-refinery-turnaround-time",description:"Using digital twins for faster refinery turnarounds."},{title:"Ultimate Guide to NDT Digital Twins",href:"/blog/ultimate-guide-ndt-digital-twins-asset-integrity-2025",description:"Complete guide to implementing digital twins for NDT."},{title:"Digital Twin Roadmap",href:"/blog/digital-twin-roadmap-oil-gas-companies-asset-integrity",description:"Implementation roadmap for oil and gas companies."}]},M=n=>["ultrasonic","radiographic","magnetic","penetrant","eddy","visual"].some(t=>n.includes(t))?"ndt-methods":n.includes("training")||n.includes("career")||n.includes("salary")?"training":n.includes("consulting")||n.includes("level-iii")?"consulting":n.includes("digital-twin")?"digital-twins":"ndt-methods",A=({currentSlug:n="",category:e,maxArticles:t=3,className:p=""})=>{const u=e||M(n),m=(b[u]||b["ndt-methods"]).filter(r=>!r.href.includes(n)).slice(0,t);return m.length===0?null:i.jsxs("section",{className:`bg-slate-100 rounded-xl p-6 ${p}`,children:[i.jsx("h3",{className:"text-xl font-bold mb-4 text-slate-900",children:"Related Articles"}),i.jsx("ul",{className:"space-y-4",children:m.map((r,l)=>i.jsx("li",{children:i.jsxs(v,{to:r.href,className:"group block hover:bg-white p-3 rounded-lg transition -m-3",children:[i.jsxs("h4",{className:"font-medium text-[#004aad] group-hover:underline flex items-center gap-1",children:[r.title,i.jsx(w,{className:"w-4 h-4 opacity-0 group-hover:opacity-100 transition"})]}),r.description&&i.jsx("p",{className:"text-sm text-slate-600 mt-1",children:r.description})]})},l))})]})};function B(n){const e=(n||"").toLowerCase();return e.includes("salary")||e.includes("career")||e.includes("hr ")||e.includes("payroll")?{app:"HR & Payroll",href:"/erp/hr-payroll-for-ndt-companies"}:e.includes("training")||e.includes("course")||e.includes("timesheet")?{app:"Timesheet Software",href:"/erp/timesheet-software-for-ndt-companies"}:e.includes("quality")||e.includes("iso-9001")||e.includes("audit")||e.includes("rt-vs-ut")||e.includes("comparison")?{app:"Quality Management",href:"/erp/quality-management-for-ndt-companies"}:e.includes("consulting")||e.includes("project")||e.includes("turnaround")?{app:"Project Management",href:"/erp/project-management-for-ndt-companies"}:e.includes("document")||e.includes("procedure")||e.includes("record")?{app:"Document Control",href:"/erp/document-control-for-ndt-companies"}:e.includes("crm")||e.includes("sales")||e.includes("market")?{app:"CRM",href:"/erp/crm-for-ndt-companies"}:{app:"CMMS",href:"/erp/cmms-for-inspection-companies"}}function P(n){let e=n;return e=e.replace(/<!DOCTYPE[^>]*>/gi,""),e=e.replace(/<\/?html[^>]*>/gi,""),e=e.replace(/<head[^>]*>[\s\S]*?<\/head>/gi,""),e=e.replace(/<\/?body[^>]*>/gi,""),e=e.replace(/<\/?article[^>]*>/gi,""),e=e.trim(),e}function H(){const{slug:n}=T(),e=N(),[t,p]=c.useState(null);c.useEffect(()=>{(async()=>{if(n){const s=await k.getBlogBySlug(n);p(s),s||e("/blog")}})()},[n,e]);const u=c.useMemo(()=>t?.content?P(t.content):"",[t?.content]),m=o=>{try{const s=new Date(o);return isNaN(s.getTime())?o:s.toISOString().split("T")[0]}catch{return o}},r=c.useMemo(()=>{if(!t)return!1;const o=(t.title||"").toLowerCase();return o.includes("guide")||o.includes("how to")||o.includes("implementation")||o.includes("step")||o.includes("requirements")},[t]),l=c.useMemo(()=>{if(!t?.content||!r)return[];const o=/<h2[^>]*>(.*?)<\/h2>/gi,s=[];let d;for(;(d=o.exec(t.content))!==null;){const a=d[1].replace(/<[^>]+>/g,"").trim();a&&!a.toLowerCase().includes("conclusion")&&!a.toLowerCase().includes("contact")&&!a.toLowerCase().includes("request")&&!a.toLowerCase().includes("atlantis")&&s.push({name:a,text:`Learn about ${a} in this comprehensive guide.`})}return s},[t?.content,r]),x=c.useMemo(()=>{if(!t)return null;const o=t.createdAt||m(t.date),s=t.updatedAt||o,d=[{"@type":"TechArticle",headline:t.title,description:t.metaDescription||t.snippet,datePublished:o,dateModified:s,author:{"@type":"Organization",name:"Atlantis NDT",url:"https://atlantisndt.com"},publisher:{"@type":"Organization",name:"Atlantis NDT",logo:{"@type":"ImageObject",url:"https://atlantisndt.com/favicon-96x96.jpg",width:96,height:96}},mainEntityOfPage:{"@type":"WebPage","@id":`https://atlantisndt.com/blog/${t.slug}`},image:t.image||"https://atlantisndt.com/og-image.jpg",keywords:`NDT, ${t.title}, non-destructive testing`,about:{"@type":"Thing",name:"Non-Destructive Testing"},inLanguage:"en-US",isAccessibleForFree:!0}];return r&&l.length>=3&&d.push({"@type":"HowTo",name:t.title,description:t.metaDescription||t.snippet,step:l.map((a,y)=>({"@type":"HowToStep",position:y+1,name:a.name,text:a.text})),totalTime:`PT${Math.max(10,l.length*3)}M`}),{"@context":"https://schema.org","@graph":d}},[t,r,l]);return t?i.jsxs("div",{className:"min-h-screen pt-20",children:[i.jsx(h,{}),i.jsx(j,{title:t.title,description:t.metaDescription||t.snippet,keywords:`${t.title}, NDT, non-destructive testing, blog, ${t.slug}`,canonical:`https://atlantisndt.com/blog/${t.slug}`,structuredData:x}),i.jsxs(g.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[i.jsx("section",{className:"py-12 bg-gradient-to-r from-primary/10 to-accent/10",children:i.jsxs("div",{className:"container mx-auto px-6",children:[i.jsxs(f,{variant:"ghost",onClick:()=>e("/blog"),className:"mb-6 gap-2",children:[i.jsx(C,{size:20}),"Back to Blog"]}),i.jsx(g.h1,{className:"text-4xl md:text-5xl font-bold mb-4",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1},children:t.title}),i.jsxs(g.div,{className:"flex items-center gap-4 text-muted-foreground",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:[i.jsx("span",{children:t.date}),t.author&&i.jsxs(i.Fragment,{children:[i.jsx("span",{children:"•"}),i.jsxs("span",{children:["By ",t.author]})]})]})]})}),i.jsx("section",{className:"py-12 md:py-20",children:i.jsxs("div",{className:"container mx-auto px-6 max-w-4xl",children:[i.jsx(D,{className:"border-0 shadow-lg",children:i.jsx(I,{className:"p-8 md:p-12",children:i.jsx(g.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},dangerouslySetInnerHTML:{__html:u},className:"blog-content"})})}),i.jsxs(g.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},className:"mt-16",children:[i.jsx(L,{tags:[t?.title,t?.category,...t?.tags||[]].filter(Boolean),count:3}),(()=>{const o=B(n);return i.jsx(S,{relevantApp:o.app,relevantAppHref:o.href})})(),i.jsx(A,{currentSlug:n||"",maxArticles:3}),i.jsxs("div",{className:"mt-8 pt-8 border-t text-center",children:[i.jsx("h3",{className:"text-xl font-bold mb-4",children:"Explore More Insights"}),i.jsx(f,{onClick:()=>e("/blog"),className:"btn-primary",children:"View All Articles"})]})]})]})})]}),i.jsx("style",{children:`
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
      `})]}):i.jsxs("div",{className:"min-h-screen pt-20",children:[i.jsx(h,{}),i.jsx("div",{className:"container mx-auto px-6 py-20 text-center",children:i.jsx("p",{className:"text-muted-foreground",children:"Loading..."})})]})}export{H as default};
