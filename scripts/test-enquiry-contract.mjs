import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
const require = createRequire(import.meta.url), ts=require('typescript');
function compile(file, globals, dependencies={}) {
 const code=ts.transpileModule(readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;
 const context={exports:{},require:n=>dependencies[n] || require(n),console:{error(){},info(){}},...globals};
 vm.runInNewContext(code,context,{filename:file}); return context.exports;
}
let notifications=[];
const mail={createTransport:()=>({sendMail:async msg=>notifications.push(msg)})};
const endpoint=compile('api/contact.ts',{process:{env:{SMTP_HOST:'mock.invalid'}},fetch:()=>{throw Error('Network forbidden in test');}},{nodemailer:mail}).default;
const request=async body=>{let result={};const res={setHeader(){},status(code){result.code=code;return this;},json(body){result.body=body;return this;}};await endpoint({method:'POST',body},res);return result;};
assert.equal((await request({firstName:3})).code,400);
assert.equal((await request({website:'spam'})).code,400);
assert.equal(notifications.length,0);
const id='12345678-1234-1234-1234-123456789abc';
const result=await request({firstName:'Test',lastName:'Only',email:'test@example.invalid',message:'Mocked delivery only',service:'training',enquiryId:id,target_region:'US',landing_path:'/training-usa',form_id:'contact'});
assert.equal(result.code,200); assert.equal(result.body.enquiryId,id); assert.equal(notifications.length,1);
assert.match(notifications[0].text,/Landing: \/training-usa/); assert.match(notifications[0].text,/Enquiry ID:/);
let events=[];const storage=new Map();
const analytics=compile('src/lib/enquiry-analytics.ts',{window:{location:{pathname:'/contact',origin:'https://atlantisndt.com',search:'?region=US&email=secret@example.invalid'},gtag:(...args)=>events.push(args)},sessionStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},crypto:{randomUUID:()=>id},URLSearchParams});
analytics.trackAcceptedEnquiry(id,'contact','training','smtp'); analytics.trackAcceptedEnquiry(id,'contact','training','smtp');
assert.equal(events.length,1);assert.equal(events[0][1],'generate_lead');assert.equal(events[0][2].enquiry_id,id);
assert.ok(!JSON.stringify(events).includes('secret@example.invalid'));
analytics.trackEngagement('email_contact_click');assert.equal(events.filter(e=>e[1]==='generate_lead').length,1);
console.log('Enquiry contract passed: rejection, accepted delivery context, opaque ID, event deduplication, no query PII, click semantics. All delivery mocked.');
