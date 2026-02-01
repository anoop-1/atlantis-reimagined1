var k=(u,m,o)=>new Promise((l,s)=>{var h=t=>{try{i(o.next(t))}catch(r){s(r)}},n=t=>{try{i(o.throw(t))}catch(r){s(r)}},i=t=>t.done?l(t.value):Promise.resolve(t.value).then(h,n);i((o=o.apply(u,m)).next())});import{i as c,s as v,j as e,t as a,M as w,u as p}from"./index-9ofavgkJ.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=c("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=c("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=c("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=c("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=c("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);function z({url:u,title:m,description:o}){const[l,s]=v.useState(!1),h=u||(typeof window!="undefined"?window.location.href:""),n=encodeURIComponent(h),i=encodeURIComponent(m),t=encodeURIComponent(o||""),r={twitter:`https://twitter.com/intent/tweet?url=${n}&text=${i}`,facebook:`https://www.facebook.com/sharer/sharer.php?u=${n}`,linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${n}`,email:`mailto:?subject=${i}&body=${t}%0A%0A${n}`},b=()=>k(this,null,function*(){try{yield navigator.clipboard.writeText(h),s(!0),p.success("Link copied to clipboard!"),setTimeout(()=>s(!1),2e3)}catch(x){p.error("Failed to copy link")}}),d=x=>{window.open(r[x],"_blank","noopener,noreferrer,width=600,height=400")};return e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("span",{className:"text-sm font-medium text-slate-500",children:"Share this article"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{variant:"outline",size:"icon",className:"rounded-full hover:bg-blue-50 hover:text-blue-500 hover:border-blue-200 transition-colors",onClick:()=>d("twitter"),title:"Share on Twitter",children:e.jsx(N,{className:"w-4 h-4"})}),e.jsx(a,{variant:"outline",size:"icon",className:"rounded-full hover:bg-blue-100 hover:text-blue-600 hover:border-blue-300 transition-colors",onClick:()=>d("facebook"),title:"Share on Facebook",children:e.jsx(j,{className:"w-4 h-4"})}),e.jsx(a,{variant:"outline",size:"icon",className:"rounded-full hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors",onClick:()=>d("linkedin"),title:"Share on LinkedIn",children:e.jsx(g,{className:"w-4 h-4"})}),e.jsx(a,{variant:"outline",size:"icon",className:"rounded-full hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors",onClick:()=>d("email"),title:"Share via Email",children:e.jsx(w,{className:"w-4 h-4"})}),e.jsx("div",{className:"w-px h-6 bg-slate-200 mx-1"}),e.jsx(a,{variant:"outline",size:"icon",className:`rounded-full transition-colors ${l?"bg-green-50 text-green-500 border-green-200":"hover:bg-slate-100"}`,onClick:b,title:"Copy link",children:l?e.jsx(f,{className:"w-4 h-4"}):e.jsx(y,{className:"w-4 h-4"})})]})]})}export{z as S};
