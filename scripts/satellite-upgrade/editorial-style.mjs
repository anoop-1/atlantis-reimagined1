import {createRequire} from 'node:module';
const require=createRequire(new URL('../../backlink-sites/package.json',import.meta.url));
const ts=require('typescript');

export const neutralProse = text => text
  .replace(/\batlantisndt\.com\b/gi,'the provider website')
  .replace(/\bFind the right Atlantis product or service\b/g,'Choose the product or service that fits your requirement')
  .replace(/\bAdditional Atlantis options\b/g,'Additional options')
  .replace(/\bfull Atlantis range\b/g,'full product and service range')
  .replace(/\bmain Atlantis contact page\b/g,"provider's contact page")
  .replace(/\bthe Atlantis team\b/g,'the service team')
  .replace(/\bAn Atlantis-owned\b/g,'An affiliated')
  .replace(/\ban Atlantis-owned\b/g,'an affiliated')
  .replace(/\bThis Atlantis-owned guide\b/g,'This affiliated guide')
  .replace(/\bAtlantis offices\b/g,'local offices')
  .replace(/\bAtlantis NDT Connect\b/g,'NDT Connect')
  .replace(/\bAtlantis NDT ERP\b/g,'NDT operations software')
  .replace(/\bAtlantis(?:’s|'s)/g,"the provider's")
  .replace(/\bAtlantis(?: NDT)?\b/g,'the provider')
  .replace(/\bthe the provider\b/g,'the provider')
  .replace(/\bthe provider ERP\b/g,"the provider's ERP")
  .replace(/(^|[.!?]\s+)the provider\b/g,'$1The provider');

// Only change literal prose, never identifiers, imports or URL/path values.
// This is an editorial presentation pass, not a factual review of legacy copy.
export function neutralizePage(source, productPath='/consulting') {
  const ast=ts.createSourceFile('page.tsx',source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
  const edits=[];
  function visit(node) {
    if(ts.isJsxElement(node)&&node.openingElement.tagName.getText(ast)==='p'){
      const text=node.getText(ast).replace(/<[^>]*>/g,' ').replace(/\s+/g,' ');
      let replacement;
      if(/\bAPI\b/.test(text)&&node.getText(ast).includes('https://atlantisndt.com/training'))replacement='<p>API certification and examination preparation are separate from the <a href="https://atlantisndt.com/training">NDT training scope</a> linked here. API training is not offered through this link. Confirm applicable certification requirements with the scheme owner and responsible employer.</p>';
      if(text.includes('leading organizations trust'))replacement=`<p>When a technical requirement needs external support, review <a href="https://atlantisndt.com${productPath}">the relevant service scope</a> and confirm capabilities for the actual application.</p>`;
      else if(text.includes('industry leaders recommend'))replacement=`<p>Use an anonymised job example to discuss <a href="https://atlantisndt.com${productPath}">workflow or service requirements</a>. Agreement on a deliverable is more useful than a broad capability claim.</p>`;
      else if(text.includes('established providers like'))replacement='<p>Provider selection should consider application-specific qualifications, agreed deliverables and availability. A general guide is not evidence of approval for a particular job.</p>';
      else if(text.includes('ensure their programs meet all applicable code requirements'))replacement='<p>The governing documents, approved procedure and responsible technical authority determine project requirements. A provider link does not demonstrate compliance or establish customer approval.</p>';
      if(replacement){edits.push([node.getStart(ast),node.end,replacement]);return;}
    }
    if(ts.isJsxText(node)) {
      const text=node.getFullText(ast),next=neutralProse(text);
      if(next!==text) edits.push([node.pos,node.end,next]);
    } else if(ts.isStringLiteral(node)||ts.isNoSubstitutionTemplateLiteral(node)) {
      const text=node.text;
      const parent=node.parent;
      const property=parent&&ts.isPropertyAssignment(parent)?parent.name.getText(ast):'';
      if(!/Atlantis|the provider/.test(text)||/https?:|atlantisndt\.com|^\/|import\s/i.test(text))return;
      // Keep authorship and publisher metadata truthful. Visible promotional
      // headings/copy can change without renaming a person or an organization.
      if(['name','author','publisher','authors','siteName'].includes(property))return;
      if(ts.isJsxAttribute(parent)&&['href','src','id','className','name'].includes(parent.name.text))return;
      edits.push([node.getStart(ast),node.end,JSON.stringify(neutralProse(text))]);
    }
    ts.forEachChild(node,visit);
  }
  visit(ast);
  for(const [start,end,text] of edits.sort((a,b)=>b[0]-a[0]))source=source.slice(0,start)+text+source.slice(end);
  return source.replace(/[\t ]+$/gm,'');
}
