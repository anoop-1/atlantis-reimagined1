var f=Object.defineProperty;var d=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(r,t,e)=>t in r?f(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,g=(r,t)=>{for(var e in t||(t={}))m.call(t,e)&&p(r,e,t[e]);if(d)for(var e of d(t))y.call(t,e)&&p(r,e,t[e]);return r};var n=(r,t,e)=>new Promise((i,s)=>{var u=a=>{try{l(e.next(a))}catch(c){s(c)}},h=a=>{try{l(e.throw(a))}catch(c){s(c)}},l=a=>a.done?i(a.value):Promise.resolve(a.value).then(u,h);l((e=e.apply(r,t)).next())});import{b}from"./blogs-B6r4MN5C.js";const o="/api/blogs";class w{getBlogs(){return n(this,null,function*(){try{const t=yield fetch(o);if(!t.ok)throw new Error("Failed to fetch blogs");return(yield t.json()).sort((i,s)=>i.order-s.order)}catch(t){return console.error("Error fetching blogs from API, using local data:",t),b.sort((e,i)=>e.order-i.order)}})}getBlogBySlug(t){return n(this,null,function*(){try{return(yield this.getBlogs()).find(i=>i.slug===t)}catch(e){console.error("Error fetching blog by slug:",e);return}})}getBlogById(t){return n(this,null,function*(){try{return(yield this.getBlogs()).find(i=>i.id===t)}catch(e){console.error("Error fetching blog by ID:",e);return}})}addBlog(t){return n(this,null,function*(){try{const e=yield fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok){const i=yield e.json();throw new Error(i.error||"Failed to create blog")}return yield e.json()}catch(e){throw console.error("Error adding blog:",e),e}})}updateBlog(t,e){return n(this,null,function*(){try{const i=yield fetch(o,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(g({id:t},e))});if(!i.ok){const s=yield i.json();throw new Error(s.error||"Failed to update blog")}return yield i.json()}catch(i){throw console.error("Error updating blog:",i),i}})}deleteBlog(t){return n(this,null,function*(){try{const e=yield fetch(`${o}?id=${t}`,{method:"DELETE"});if(!e.ok){const i=yield e.json();throw new Error(i.error||"Failed to delete blog")}return!0}catch(e){throw console.error("Error deleting blog:",e),e}})}reorderBlogs(t){return n(this,null,function*(){try{const e=t.map(i=>this.updateBlog(i.id,{order:i.order}));yield Promise.all(e)}catch(e){throw console.error("Error reordering blogs:",e),e}})}getDefaultBlogs(){return[{id:"1",title:"Understanding Ultrasonic Testing in NDT",slug:"ultrasonic-testing",date:"October 1, 2025",snippet:"Explore how ultrasonic testing helps detect internal flaws in materials without causing damage.",content:`<h2>Understanding Ultrasonic Testing in NDT</h2>
<p>Ultrasonic testing is a non-destructive testing method that uses high-frequency sound waves to detect internal defects in materials.</p>
<h3>How It Works</h3>
<p>Ultrasonic waves are transmitted through the material being tested. When these waves encounter a defect or boundary, they are reflected back to the receiver. By analyzing the reflected signals, inspectors can determine the size, location, and nature of defects.</p>
<h3>Applications</h3>
<ul>
<li>Detecting cracks in metals</li>
<li>Measuring material thickness</li>
<li>Inspecting welds</li>
<li>Finding voids and inclusions</li>
</ul>
<h3>Advantages</h3>
<p>Ultrasonic testing offers excellent penetration, quick results, and can be applied to thick materials. It's also safe and doesn't require radiation.</p>`,author:"Atlantis NDT",order:1,createdAt:"2025-10-01",updatedAt:"2025-10-01"},{id:"2",title:"Magnetic Particle Testing: Best Practices",slug:"magnetic-particle-testing",date:"October 3, 2025",snippet:"Learn how magnetic particle testing detects surface and near-surface defects efficiently.",content:`<h2>Magnetic Particle Testing: Best Practices</h2>
<p>Magnetic particle testing (MPT) is a non-destructive method used to detect surface and near-surface defects in ferromagnetic materials.</p>
<h3>Principle</h3>
<p>When a ferromagnetic material is magnetized, surface and near-surface defects create disturbances in the magnetic field. Iron particles, when applied to the magnetized surface, accumulate at these defect areas, making them visible.</p>
<h3>Best Practices</h3>
<ul>
<li>Ensure proper surface preparation</li>
<li>Use appropriate magnetic field strength</li>
<li>Apply particles correctly</li>
<li>Maintain proper lighting for inspection</li>
<li>Document all findings</li>
</ul>
<h3>Limitations</h3>
<p>MPT only works on ferromagnetic materials and has limited penetration for subsurface defects. However, it's excellent for detecting surface discontinuities.</p>`,author:"Atlantis NDT",order:2,createdAt:"2025-10-03",updatedAt:"2025-10-03"},{id:"3",title:"Visual Testing Techniques for Modern NDT",slug:"visual-testing",date:"October 5, 2025",snippet:"A guide to direct and remote visual inspection methods for industrial assets.",content:`<h2>Visual Testing Techniques for Modern NDT</h2>
<p>Visual testing is the most widely used non-destructive testing method. It includes both direct visual inspection and remote visual inspection.</p>
<h3>Direct Visual Inspection</h3>
<p>The inspector directly observes the component using natural or artificial lighting. This method is simple and requires minimal equipment.</p>
<h3>Remote Visual Inspection (RVI)</h3>
<p>RVI employs cameras, endoscopes, and borescopes to inspect areas that are not directly accessible. This is useful in confined spaces and hazardous environments.</p>
<h3>Modern Tools</h3>
<ul>
<li>High-resolution cameras</li>
<li>Thermal imaging</li>
<li>Fiber optics</li>
<li>Digital documentation</li>
</ul>`,author:"Atlantis NDT",order:3,createdAt:"2025-10-05",updatedAt:"2025-10-05"},{id:"4",title:"Radiographic Testing in Industrial Applications",slug:"radiographic-testing",date:"October 7, 2025",snippet:"Understand X-ray and gamma ray techniques for internal flaw detection and weld inspections.",content:`<h2>Radiographic Testing in Industrial Applications</h2>
<p>Radiographic testing uses X-rays or gamma rays to create images of components, revealing internal defects and material variations.</p>
<h3>X-Ray Radiography</h3>
<p>X-rays are generated by equipment and provide good control over parameters. They're ideal for portable applications.</p>
<h3>Gamma Ray Radiography</h3>
<p>Gamma rays are emitted by radioactive sources like Iridium-192. They're excellent for field work but require strict safety protocols.</p>
<h3>Applications</h3>
<ul>
<li>Weld inspections</li>
<li>Casting quality control</li>
<li>Foreign object detection</li>
<li>Corrosion assessment</li>
</ul>`,author:"Atlantis NDT",order:4,createdAt:"2025-10-07",updatedAt:"2025-10-07"},{id:"5",title:"Eddy Current Testing Explained",slug:"eddy-current-testing",date:"October 10, 2025",snippet:"An introduction to eddy current testing and its applications in quality control.",content:`<h2>Eddy Current Testing Explained</h2>
<p>Eddy current testing is an electromagnetic method for detecting surface and near-surface defects in conductive materials.</p>
<h3>How It Works</h3>
<p>An alternating current through a coil creates an alternating magnetic field. When placed near a conductive material, this induces eddy currents in the material. Defects disrupt these currents, and the changes are detected by the probe.</p>
<h3>Advantages</h3>
<ul>
<li>Rapid inspection speed</li>
<li>Excellent for thin materials</li>
<li>Can detect very small defects</li>
<li>Non-contact method</li>
</ul>
<h3>Applications</h3>
<ul>
<li>Detecting cracks in aircraft components</li>
<li>Heat exchanger tube inspection</li>
<li>Quality control in manufacturing</li>
</ul>`,author:"Atlantis NDT",order:5,createdAt:"2025-10-10",updatedAt:"2025-10-10"},{id:"6",title:"Penetrant Testing: Detecting Surface Defects",slug:"penetrant-testing",date:"October 12, 2025",snippet:"A deep dive into liquid penetrant testing and its role in non-destructive inspections.",content:`<h2>Penetrant Testing: Detecting Surface Defects</h2>
<p>Penetrant testing, also known as liquid penetrant testing (LPT), is a non-destructive method for detecting surface-breaking defects in non-porous materials.</p>
<h3>Process</h3>
<p>A low-viscosity liquid penetrant is applied to the clean surface of the component. The penetrant enters surface-breaking discontinuities through capillary action. After removal of excess penetrant, a developer is applied to draw the penetrant out of defects, making them visible.</p>
<h3>Types of Penetrants</h3>
<ul>
<li>Fluorescent penetrants</li>
<li>Red dye penetrants</li>
<li>Visible dye penetrants</li>
</ul>
<h3>Best For</h3>
<ul>
<li>Detecting cracks</li>
<li>Finding porosity</li>
<li>Identifying sealing surface defects</li>
<li>Quality assurance</li>
</ul>`,author:"Atlantis NDT",order:6,createdAt:"2025-10-12",updatedAt:"2025-10-12"}]}}const A=new w;export{A as b};
