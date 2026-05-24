var f=(n,i,e)=>new Promise((p,d)=>{var g=c=>{try{a(e.next(c))}catch(o){d(o)}},r=c=>{try{a(e.throw(c))}catch(o){d(o)}},a=c=>c.done?p(c.value):Promise.resolve(c.value).then(g,r);a((e=e.apply(n,i)).next())});import{j as t,e as w,A as T,V as N,aD as j,a as m,N as b,S as D,m as h,B as x,aE as C,f as I,k as S}from"./compare-pages-C1d7etmC.js";import{b as k}from"./BlogService-BhUhf_fz.js";import{R as L}from"./RelatedProducts-BB-PbHxv.js";import"./blogs-B6r4MN5C.js";import"./erp-pages-C6o15K_z.js";const y={"ndt-methods":[{title:"Ultrasonic Testing (UT) Guide",href:"/blog/ultrasonic-testing",description:"High-frequency sound wave inspection for welds and thickness measurement."},{title:"Radiographic Testing (RT) Guide",href:"/blog/radiographic-testing",description:"X-ray and gamma ray imaging for internal defect detection."},{title:"Magnetic Particle Testing (MT) Guide",href:"/blog/magnetic-particle-testing",description:"Surface and near-surface defect detection in ferromagnetic materials."},{title:"Penetrant Testing (PT) Guide",href:"/blog/penetrant-testing",description:"Liquid dye inspection for surface-breaking defects."},{title:"Eddy Current Testing (ET) Guide",href:"/blog/eddy-current-testing",description:"Electromagnetic inspection for tubing and conductivity testing."},{title:"Visual Testing (VT) Guide",href:"/blog/visual-testing",description:"Direct visual and remote inspection methods."}],training:[{title:"NDT Training Complete Guide",href:"/blog/ndt-training-complete-guide-courses-certification-global",description:"Comprehensive guide to NDT training and certification."},{title:"NDT Career Guide 2025",href:"/blog/ndt-career-top-choice-2025-global-market-trends",description:"Career opportunities in non-destructive testing."},{title:"NDT Training vs Certification",href:"/blog/ndt-training-vs-certification-2025-oil-gas-expectations",description:"Understanding the difference between training and certification."},{title:"NDT Salary Guide",href:"/blog/ndt-salary-guide-2025-global-level-1-2-3",description:"Salary expectations for NDT professionals worldwide."}],consulting:[{title:"ASNT Level III Consulting Guide",href:"/blog/asnt-level-iii-ndt-consulting-guide",description:"Expert guide to Level III consulting services."},{title:"NDT Level III Services Guide",href:"/blog/ndt-level-iii-consulting-services-guide",description:"Comprehensive Level III consulting overview."},{title:"NDT Consulting Q&A",href:"/blog/ndt-consulting-questions-answered-by-level-iii-expert",description:"Common questions answered by Level III experts."}],"digital-twins":[{title:"Digital Twins for NDT Reporting",href:"/blog/digital-twins-ndt-reporting-oil-gas-asset-integrity",description:"How digital twins transform NDT reporting."},{title:"Digital Twins Reduce Turnaround Time",href:"/blog/digital-twins-reduce-refinery-turnaround-time",description:"Using digital twins for faster refinery turnarounds."},{title:"Ultimate Guide to NDT Digital Twins",href:"/blog/ultimate-guide-ndt-digital-twins-asset-integrity-2025",description:"Complete guide to implementing digital twins for NDT."},{title:"Digital Twin Roadmap",href:"/blog/digital-twin-roadmap-oil-gas-companies-asset-integrity",description:"Implementation roadmap for oil and gas companies."}]},A=n=>["ultrasonic","radiographic","magnetic","penetrant","eddy","visual"].some(e=>n.includes(e))?"ndt-methods":n.includes("training")||n.includes("career")||n.includes("salary")?"training":n.includes("consulting")||n.includes("level-iii")?"consulting":n.includes("digital-twin")?"digital-twins":"ndt-methods",B=({currentSlug:n="",category:i,maxArticles:e=3,className:p=""})=>{const d=i||A(n),g=(y[d]||y["ndt-methods"]).filter(r=>!r.href.includes(n)).slice(0,e);return g.length===0?null:t.jsxs("section",{className:`bg-slate-100 rounded-xl p-6 ${p}`,children:[t.jsx("h3",{className:"text-xl font-bold mb-4 text-slate-900",children:"Related Articles"}),t.jsx("ul",{className:"space-y-4",children:g.map((r,a)=>t.jsx("li",{children:t.jsxs(w,{to:r.href,className:"group block hover:bg-white p-3 rounded-lg transition -m-3",children:[t.jsxs("h4",{className:"font-medium text-[#004aad] group-hover:underline flex items-center gap-1",children:[r.title,t.jsx(T,{className:"w-4 h-4 opacity-0 group-hover:opacity-100 transition"})]}),r.description&&t.jsx("p",{className:"text-sm text-slate-600 mt-1",children:r.description})]})},a))})]})};function M(n){let i=n;return i=i.replace(/<!DOCTYPE[^>]*>/gi,""),i=i.replace(/<\/?html[^>]*>/gi,""),i=i.replace(/<head[^>]*>[\s\S]*?<\/head>/gi,""),i=i.replace(/<\/?body[^>]*>/gi,""),i=i.replace(/<\/?article[^>]*>/gi,""),i=i.trim(),i}function $(){const{slug:n}=N(),i=j(),[e,p]=m.useState(null);m.useEffect(()=>{f(this,null,function*(){if(n){const s=yield k.getBlogBySlug(n);p(s),s||i("/blog")}})},[n,i]);const d=m.useMemo(()=>e!=null&&e.content?M(e.content):"",[e==null?void 0:e.content]),g=o=>{try{const s=new Date(o);return isNaN(s.getTime())?o:s.toISOString().split("T")[0]}catch(s){return o}},r=m.useMemo(()=>{if(!e)return!1;const o=(e.title||"").toLowerCase();return o.includes("guide")||o.includes("how to")||o.includes("implementation")||o.includes("step")||o.includes("requirements")},[e]),a=m.useMemo(()=>{if(!(e!=null&&e.content)||!r)return[];const o=/<h2[^>]*>(.*?)<\/h2>/gi,s=[];let u;for(;(u=o.exec(e.content))!==null;){const l=u[1].replace(/<[^>]+>/g,"").trim();l&&!l.toLowerCase().includes("conclusion")&&!l.toLowerCase().includes("contact")&&!l.toLowerCase().includes("request")&&!l.toLowerCase().includes("atlantis")&&s.push({name:l,text:`Learn about ${l} in this comprehensive guide.`})}return s},[e==null?void 0:e.content,r]),c=m.useMemo(()=>{if(!e)return null;const o=e.createdAt||g(e.date),s=e.updatedAt||o,u=[{"@type":"TechArticle",headline:e.title,description:e.metaDescription||e.snippet,datePublished:o,dateModified:s,author:{"@type":"Organization",name:"Atlantis NDT",url:"https://atlantisndt.com"},publisher:{"@type":"Organization",name:"Atlantis NDT",logo:{"@type":"ImageObject",url:"https://atlantisndt.com/favicon-96x96.jpg",width:96,height:96}},mainEntityOfPage:{"@type":"WebPage","@id":`https://atlantisndt.com/blog/${e.slug}`},image:e.image||"https://atlantisndt.com/og-image.jpg",keywords:`NDT, ${e.title}, non-destructive testing`,about:{"@type":"Thing",name:"Non-Destructive Testing"},inLanguage:"en-US",isAccessibleForFree:!0}];return r&&a.length>=3&&u.push({"@type":"HowTo",name:e.title,description:e.metaDescription||e.snippet,step:a.map((l,v)=>({"@type":"HowToStep",position:v+1,name:l.name,text:l.text})),totalTime:`PT${Math.max(10,a.length*3)}M`}),{"@context":"https://schema.org","@graph":u}},[e,r,a]);return e?t.jsxs("div",{className:"min-h-screen pt-20",children:[t.jsx(b,{}),t.jsx(D,{title:e.title,description:e.metaDescription||e.snippet,keywords:`${e.title}, NDT, non-destructive testing, blog, ${e.slug}`,canonical:`https://atlantisndt.com/blog/${e.slug}`,structuredData:c}),t.jsxs(h.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[t.jsx("section",{className:"py-12 bg-gradient-to-r from-primary/10 to-accent/10",children:t.jsxs("div",{className:"container mx-auto px-6",children:[t.jsxs(x,{variant:"ghost",onClick:()=>i("/blog"),className:"mb-6 gap-2",children:[t.jsx(C,{size:20}),"Back to Blog"]}),t.jsx(h.h1,{className:"text-4xl md:text-5xl font-bold mb-4",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1},children:e.title}),t.jsxs(h.div,{className:"flex items-center gap-4 text-muted-foreground",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:[t.jsx("span",{children:e.date}),e.author&&t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"•"}),t.jsxs("span",{children:["By ",e.author]})]})]})]})}),t.jsx("section",{className:"py-12 md:py-20",children:t.jsxs("div",{className:"container mx-auto px-6 max-w-4xl",children:[t.jsx(I,{className:"border-0 shadow-lg",children:t.jsx(S,{className:"p-8 md:p-12",children:t.jsx(h.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},dangerouslySetInnerHTML:{__html:d},className:"blog-content"})})}),t.jsxs(h.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},className:"mt-16",children:[t.jsx(L,{tags:[e==null?void 0:e.title,e==null?void 0:e.category,...(e==null?void 0:e.tags)||[]].filter(Boolean),count:3}),t.jsx(B,{currentSlug:n||"",maxArticles:3}),t.jsxs("div",{className:"mt-8 pt-8 border-t text-center",children:[t.jsx("h3",{className:"text-xl font-bold mb-4",children:"Explore More Insights"}),t.jsx(x,{onClick:()=>i("/blog"),className:"btn-primary",children:"View All Articles"})]})]})]})})]}),t.jsx("style",{children:`
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
      `})]}):t.jsxs("div",{className:"min-h-screen pt-20",children:[t.jsx(b,{}),t.jsx("div",{className:"container mx-auto px-6 py-20 text-center",children:t.jsx("p",{className:"text-muted-foreground",children:"Loading..."})})]})}export{$ as default};
