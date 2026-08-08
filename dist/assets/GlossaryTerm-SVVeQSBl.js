import{a9 as u,q as n,j as e,aX as y,N as g,L as r,ap as l,S as f,aW as j,g as i,h as m}from"./blog-pages-Cba4hDr6.js";import{g as N}from"./glossary-ClwM1mEg.js";import{b}from"./blogs-BoL-_YoX.js";const v={method:"NDT Method",equipment:"Equipment",procedure:"Procedure",physics:"Physics & Theory",defect:"Defect / Damage Mechanism",standard:"Code / Standard",certification:"Certification",data:"Inspection Data",safety:"Safety","asset-type":"Asset Type"};function L(){const{slug:a}=u(),o=N,d=b,s=n.useMemo(()=>o.find(t=>t.slug===a),[o,a]),h=n.useMemo(()=>s?s.relatedTerms.map(t=>o.find(c=>c.slug===t)).filter(t=>!!t):[],[s,o]),x=n.useMemo(()=>s?s.relatedBlogs.map(t=>d.find(c=>c.slug===t)).filter(t=>!!t):[],[s,d]),p=n.useMemo(()=>s?{"@context":"https://schema.org","@graph":[{"@type":"DefinedTerm","@id":`https://atlantisndt.com/glossary/${s.slug}`,name:s.term,url:`https://atlantisndt.com/glossary/${s.slug}`,description:s.shortDefinition,termCode:s.slug,inDefinedTermSet:"https://atlantisndt.com/glossary"},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://atlantisndt.com"},{"@type":"ListItem",position:2,name:"Glossary",item:"https://atlantisndt.com/glossary"},{"@type":"ListItem",position:3,name:s.term,item:`https://atlantisndt.com/glossary/${s.slug}`}]}]}:null,[s]);return a?s?e.jsxs("div",{className:"min-h-screen pt-20",children:[e.jsx(g,{}),e.jsx(f,{title:`${s.term} - Definition & Meaning | Atlantis NDT Glossary`,description:`${s.shortDefinition} | Atlantis NDT Glossary`,keywords:`${s.term}, ${s.term} definition, what is ${s.term}, NDT, non-destructive testing, ${s.category}`,canonical:`https://atlantisndt.com/glossary/${s.slug}`,structuredData:p||void 0}),e.jsx("section",{className:"py-10 bg-gradient-to-r from-primary/10 to-accent/10",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsxs("nav",{"aria-label":"Breadcrumb",className:"mb-4 text-sm text-muted-foreground",children:[e.jsx(r,{to:"/",className:"hover:text-primary",children:"Home"}),e.jsx("span",{className:"mx-2",children:"/"}),e.jsx(r,{to:"/glossary",className:"hover:text-primary",children:"Glossary"}),e.jsx("span",{className:"mx-2",children:"/"}),e.jsx("span",{children:s.term})]}),e.jsx(r,{to:"/glossary",children:e.jsxs(l,{variant:"ghost",className:"mb-4 gap-2",children:[e.jsx(j,{size:20}),"All Glossary Terms"]})}),e.jsx("span",{className:"inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary mb-3",children:v[s.category]||s.category}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:s.term}),e.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl",children:s.shortDefinition})]})}),e.jsx("section",{className:"py-12",children:e.jsx("div",{className:"container mx-auto px-6 max-w-6xl",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[e.jsxs("article",{className:"lg:col-span-2",children:[e.jsx(i,{className:"border-0 shadow-lg",children:e.jsx(m,{className:"p-6 md:p-10",children:e.jsx("div",{className:"glossary-content",dangerouslySetInnerHTML:{__html:s.definition}})})}),e.jsxs("div",{className:"mt-10 p-6 rounded-lg bg-primary/5 border border-primary/20",children:[e.jsxs("h3",{className:"text-xl font-bold mb-2",children:["Need expert help with ",s.term,"?"]}),e.jsxs("p",{className:"text-muted-foreground mb-4",children:["Our ASNT Level III certified team provides inspection services, procedure development, and training in ",s.term," and related NDT topics."]}),e.jsx(r,{to:"/contact",children:e.jsx(l,{className:"btn-primary",children:"Talk to a Level III Expert"})})]})]}),e.jsxs("aside",{className:"lg:col-span-1 space-y-6",children:[h.length>0&&e.jsx(i,{className:"border-0 shadow-sm",children:e.jsxs(m,{className:"p-6",children:[e.jsx("h2",{className:"text-lg font-bold mb-4",children:"Related Terms"}),e.jsx("ul",{className:"space-y-2",children:h.map(t=>e.jsx("li",{children:e.jsx(r,{to:`/glossary/${t.slug}`,className:"text-primary hover:underline text-sm",children:t.term})},t.slug))})]})}),x.length>0&&e.jsx(i,{className:"border-0 shadow-sm",children:e.jsxs(m,{className:"p-6",children:[e.jsx("h2",{className:"text-lg font-bold mb-4",children:"Related Articles"}),e.jsx("ul",{className:"space-y-3",children:x.map(t=>e.jsx("li",{children:e.jsx(r,{to:`/blog/${t.slug}`,className:"text-primary hover:underline text-sm",children:t.title})},t.slug))})]})}),e.jsx(i,{className:"border-0 shadow-sm bg-muted/40",children:e.jsxs(m,{className:"p-6",children:[e.jsx("h2",{className:"text-lg font-bold mb-2",children:"Explore the Glossary"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"200+ NDT terms across 10 categories."}),e.jsx(r,{to:"/glossary",children:e.jsx(l,{variant:"outline",size:"sm",children:"Browse All Terms"})})]})})]})]})})}),e.jsx("style",{children:`
        .glossary-content {
          color: hsl(var(--foreground));
          line-height: 1.8;
          font-size: 1.05rem;
        }
        .glossary-content h2 {
          font-size: 1.6rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 0.85rem;
          padding-bottom: 0.4rem;
          border-bottom: 2px solid hsl(var(--primary) / 0.2);
          color: hsl(var(--foreground));
        }
        .glossary-content h2:first-child {
          margin-top: 0;
        }
        .glossary-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: hsl(var(--foreground));
        }
        .glossary-content p {
          margin-bottom: 1rem;
          color: hsl(var(--muted-foreground));
        }
        .glossary-content ul,
        .glossary-content ol {
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .glossary-content ul {
          list-style-type: disc;
        }
        .glossary-content li {
          margin-bottom: 0.4rem;
          color: hsl(var(--muted-foreground));
        }
        .glossary-content a {
          color: hsl(var(--primary));
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .glossary-content a:hover {
          opacity: 0.8;
        }
        .glossary-content strong {
          color: hsl(var(--foreground));
        }
      `})]}):e.jsxs("div",{className:"min-h-screen pt-20",children:[e.jsx(g,{}),e.jsxs("div",{className:"container mx-auto px-6 py-20 text-center",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Term not found"}),e.jsxs("p",{className:"text-muted-foreground mb-6",children:['The glossary term "',a,'" does not exist.']}),e.jsx(r,{to:"/glossary",children:e.jsx(l,{children:"Back to Glossary"})})]})]}):e.jsx(y,{to:"/glossary",replace:!0})}export{L as default};
