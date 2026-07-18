import{j as r,L as k,A,a8 as C,aP as L,r as p,ay as B,aQ as S,aR as D,N as y,S as M,m as g,an as v,aS as T,e as q,f as P,aB as R,aF as $}from"./blog-pages-DdTodome.js";import{b as E}from"./BlogService-DsWCgvnA.js";import{b as w}from"./blogs-EIrd-IV9.js";import{a as z}from"./RelatedProducts-B2NNq4Yo.js";import"./erp-pages-BbmZvkM-.js";function j(n,t="",i=""){const e=(n+" "+t+" "+i).toLowerCase();return/asnt|snt-tc-1a|cp-189|level\s*(i|ii|iii|3)/.test(e)?"asnt-cert":/api[- ]?(510|570|580|581|579|653|571|936|1169|icp)/.test(e)?"api-code":/cswip|cwi|scwi|aws[- ]?d/.test(e)?"cswip-aws":/nace|ampp|cip|sp02|sour|mr0175|mr0103|coating|bgas/.test(e)?"nace-coating":/paut|tofd|ultrasonic|\but\b|lrut|immersion|guided[- ]wave|eca/.test(e)?"method-ut":/radiograph|\brt\b|gamma|x-?ray|iqi/.test(e)?"method-rt":/magnetic[- ]particle|\bmt\b|penetrant|\bpt\b|visual\s+(test|inspec)|\bvt\b|eddy[- ]current|\bet\b|acoustic[- ]emission|\bae\b|leak[- ]test|irt|thermograph|holiday/.test(e)?"method-mt-pt-vt-et":/consulting|level\s*iii\s*consult|outsourced[- ]?level/.test(e)?"consulting":/\brbi\b|api\s*581|fitness[- ]for[- ]service|\bffs\b|api\s*579|damage[- ]mechanism|api\s*571/.test(e)?"rbi-ffs":/digital[- ]twin|3d[- ]model|3d[- ]scan|lidar|photogrammet/.test(e)?"digital-twin":/\berp\b|inspection[- ]software|reporting[- ]software|cmms|eam|atlantis[- ]ndt/.test(e)?"erp-reporting":/marine|offshore|fpso|drydock|jackup|subsea|iacs|class[- ]society/.test(e)?"marine-offshore":/aerospace|aviation|aircraft|airbus|boeing|nas[- ]?410|en[- ]?4179/.test(e)?"aerospace":/refining|refinery|petrochem|fcc|cracker|reformer|amine/.test(e)?"refining-petrochem":/\blng\b|hydrogen|electrolys|\bccs\b|carbon[- ]capture|co2/.test(e)?"lng-hydrogen-ccs":/power[- ]gen|boiler|hrsg|condens|turbine|nuclear/.test(e)?"power-gen":/mining|haul[- ]?truck|drag[- ]?line|tailings/.test(e)?"mining":/training|cohort|exam|course|career|salary/.test(e)?"training-career":/case[- ]?study|roi|outcomes|customer/.test(e)?"roi-case-study":/\bvs\b|compare|comparison|versus|compared/.test(e)?"compare":"general"}const H=w.filter(n=>n&&n.slug&&n.title),c={};for(const n of H){const t=j(n.slug,n.title||"",n.category||"");c[t]||(c[t]=[]),c[t].push({title:n.title.replace(/\s*\|\s*Atlantis.*$/i,"").trim(),href:`/blog/${n.slug}`,description:(n.metaDescription||n.snippet||"").slice(0,140)})}const O=(()=>{const n=Object.keys(c).filter(i=>i!=="general").sort((i,e)=>(c[e]?.length||0)-(c[i]?.length||0)).slice(0,5),t=[];for(const i of n){const e=c[i]||[];e.length>0&&t.push(e[0])}return t})(),I=({currentSlug:n="",category:t,maxArticles:i=3,className:e=""})=>{const h=t||j(n),d=(c[h]||[]).filter(s=>!s.href.endsWith("/"+n)).slice(0,i),m=d.length>=i?d:[...d,...O.filter(s=>!s.href.endsWith("/"+n))].slice(0,i);return m.length===0?null:r.jsxs("section",{className:`bg-slate-100 rounded-xl p-6 ${e}`,children:[r.jsx("h3",{className:"text-xl font-bold mb-4 text-slate-900",children:"Related Articles"}),r.jsx("ul",{className:"space-y-4",children:m.map((s,f)=>r.jsx("li",{children:r.jsxs(k,{to:s.href,className:"group block hover:bg-white p-3 rounded-lg transition -m-3",children:[r.jsxs("h4",{className:"font-medium text-[#004aad] group-hover:underline flex items-center gap-1",children:[s.title,r.jsx(A,{className:"w-4 h-4 opacity-0 group-hover:opacity-100 transition"})]}),s.description&&r.jsx("p",{className:"text-sm text-slate-600 mt-1",children:s.description})]})},f))})]})};function _(n){const t=(n||"").toLowerCase();return t.includes("salary")||t.includes("career")||t.includes("hr ")||t.includes("payroll")?{app:"HR & Payroll",href:"/erp/hr-payroll-for-ndt-companies"}:t.includes("training")||t.includes("course")||t.includes("timesheet")?{app:"Timesheet Software",href:"/erp/timesheet-software-for-ndt-companies"}:t.includes("quality")||t.includes("iso-9001")||t.includes("audit")||t.includes("rt-vs-ut")||t.includes("comparison")?{app:"Quality Management",href:"/erp/quality-management-for-ndt-companies"}:t.includes("consulting")||t.includes("project")||t.includes("turnaround")?{app:"Project Management",href:"/erp/project-management-for-ndt-companies"}:t.includes("document")||t.includes("procedure")||t.includes("record")?{app:"Document Control",href:"/erp/document-control-for-ndt-companies"}:t.includes("crm")||t.includes("sales")||t.includes("market")?{app:"CRM",href:"/erp/crm-for-ndt-companies"}:{app:"CMMS",href:"/erp/cmms-for-inspection-companies"}}function F(n){let t=n;return t=t.replace(/<!DOCTYPE[^>]*>/gi,""),t=t.replace(/<\/?html[^>]*>/gi,""),t=t.replace(/<head[^>]*>[\s\S]*?<\/head>/gi,""),t=t.replace(/<\/?body[^>]*>/gi,""),t=t.replace(/<\/?article[^>]*>/gi,""),t=t.trim(),t}function V(){const{slug:n}=C(),t=L(),i=p.useMemo(()=>n&&w.find(o=>o.slug===n)||null,[n]),[e,h]=p.useState(i);p.useEffect(()=>{if(i)return;(async()=>{if(n){const a=await E.getBlogBySlug(n);h(a),a||t("/blog")}})()},[n,t,i]);const b=p.useMemo(()=>e?.content?F(e.content):"",[e?.content]),d=o=>{try{const a=new Date(o);return isNaN(a.getTime())?o:a.toISOString().split("T")[0]}catch{return o}},m=p.useMemo(()=>{if(!e)return!1;const o=(e.title||"").toLowerCase();return o.includes("guide")||o.includes("how to")||o.includes("implementation")||o.includes("step")||o.includes("requirements")},[e]),s=p.useMemo(()=>{if(!e?.content||!m)return[];const o=/<h2[^>]*>(.*?)<\/h2>/gi,a=[];let u;for(;(u=o.exec(e.content))!==null;){const l=u[1].replace(/<[^>]+>/g,"").trim();l&&!l.toLowerCase().includes("conclusion")&&!l.toLowerCase().includes("contact")&&!l.toLowerCase().includes("request")&&!l.toLowerCase().includes("atlantis")&&a.push({name:l,text:`Learn about ${l} in this comprehensive guide.`})}return a},[e?.content,m]),f=p.useMemo(()=>{if(!e)return null;const o=e.createdAt||d(e.date),a=e.updatedAt||o,u=[B({url:`https://atlantisndt.com/blog/${e.slug}`,headline:e.title,description:e.metaDescription||e.snippet,image:e.image||"https://atlantisndt.com/og-image.jpg",datePublished:o,dateModified:a,section:e.category||"NDT Technical",keywords:`NDT, ${e.title}, non-destructive testing`})];m&&s.length>=3&&u.push({"@type":"HowTo",name:e.title,description:e.metaDescription||e.snippet,step:s.map((x,N)=>({"@type":"HowToStep",position:N+1,name:x.name,text:x.text})),totalTime:`PT${Math.max(10,s.length*3)}M`});const l=S({url:`https://atlantisndt.com/blog/${e.slug}`,content:e.content||""});return l&&u.push(l),u.push(D({url:`https://atlantisndt.com/blog/${e.slug}`,title:e.title,category:e.category})),{"@context":"https://schema.org","@graph":u}},[e,m,s]);return e?r.jsxs("div",{className:"min-h-screen pt-20",children:[r.jsx(y,{}),r.jsx(M,{title:e.title,description:e.metaDescription||e.snippet,keywords:`${e.title}, NDT, non-destructive testing, blog, ${e.slug}`,canonical:`https://atlantisndt.com/blog/${e.slug}`,structuredData:f,article:{headline:e.title,datePublished:e.createdAt||d(e.date),dateModified:e.updatedAt||e.createdAt||d(e.date),author:e.author||"Anoop Rayavarapu",image:e.image,section:e.category}}),r.jsxs(g.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[r.jsx("section",{className:"py-12 bg-gradient-to-r from-primary/10 to-accent/10",children:r.jsxs("div",{className:"container mx-auto px-6",children:[r.jsxs(v,{variant:"ghost",onClick:()=>t("/blog"),className:"mb-6 gap-2",children:[r.jsx(T,{size:20}),"Back to Blog"]}),r.jsx(g.h1,{className:"text-4xl md:text-5xl font-bold mb-4",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1},children:e.title}),r.jsxs(g.div,{className:"flex items-center gap-4 text-muted-foreground",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:[r.jsx("span",{children:e.date}),e.author&&r.jsxs(r.Fragment,{children:[r.jsx("span",{children:"•"}),r.jsxs("span",{children:["By ",e.author]})]})]})]})}),r.jsx("section",{className:"py-12 md:py-20",children:r.jsxs("div",{className:"container mx-auto px-6 max-w-4xl",children:[r.jsx(q,{className:"border-0 shadow-lg",children:r.jsxs(P,{className:"p-8 md:p-12",children:[e.quickAnswer&&r.jsx(R,{question:e.quickAnswer.question,answer:e.quickAnswer.answer,bullets:e.quickAnswer.bullets}),r.jsx(g.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},dangerouslySetInnerHTML:{__html:b},className:"blog-content"})]})}),r.jsx("p",{className:"mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500","data-atlantis-pricing-disclaimer":"1",children:"Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing."}),r.jsxs(g.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},className:"mt-16",children:[r.jsx(z,{tags:[e?.title,e?.category,...e?.tags||[]].filter(Boolean),count:3}),(()=>{const o=_(n);return r.jsx($,{relevantApp:o.app,relevantAppHref:o.href})})(),r.jsx(I,{currentSlug:n||"",maxArticles:3}),r.jsxs("div",{className:"mt-8 pt-8 border-t text-center",children:[r.jsx("h3",{className:"text-xl font-bold mb-4",children:"Explore More Insights"}),r.jsx(v,{onClick:()=>t("/blog"),className:"btn-primary",children:"View All Articles"})]})]})]})})]}),r.jsx("style",{children:`
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
      `})]}):r.jsxs("div",{className:"min-h-screen pt-20",children:[r.jsx(y,{}),r.jsx("div",{className:"container mx-auto px-6 py-20 text-center",children:r.jsx("p",{className:"text-muted-foreground",children:"Loading..."})})]})}export{V as default};
