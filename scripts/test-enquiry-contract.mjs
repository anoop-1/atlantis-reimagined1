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
const browser={window:{location:{pathname:'/contact',origin:'https://atlantisndt.com',search:'?region=US&email=secret@example.invalid'},gtag:(...args)=>events.push(args)},sessionStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)},crypto:{randomUUID:()=>id},URLSearchParams,JSON};
// enquiry-analytics imports ./satellite-referral (2026-10); compile the real module with the same globals.
const analytics=compile('src/lib/enquiry-analytics.ts',browser,{'./satellite-referral':compile('src/lib/satellite-referral.ts',browser)});
analytics.trackAcceptedEnquiry(id,'contact','training','smtp'); analytics.trackAcceptedEnquiry(id,'contact','training','smtp');
// One accepted submission = one generate_lead + one business key event, never repeated for the same id.
assert.deepEqual(events.map(e=>e[1]),['generate_lead','training_enquiry']);assert.equal(events[0][2].enquiry_id,id);
for (const e of events) { assert.equal(e[2].page_path,'/contact'); assert.equal(e[2].service,'training'); assert.equal(e[2].form_id,'contact'); }
assert.equal(events[1][2].pipeline,'TRAINING');
assert.ok(!JSON.stringify(events).includes('secret@example.invalid'));
analytics.trackEngagement('email_contact_click');assert.equal(events.filter(e=>e[1]==='generate_lead').length,1);

// Business key events per form (2026-10-11): each accepted submission fires exactly the
// expected event, once; download-only forms fire generate_lead only.
let n=0;
const fire=(formId,service,extra={})=>{events=[];analytics.trackAcceptedEnquiry(`id-${++n}`,formId,service,'emailjs',extra);return events.map(e=>e[1]);};
const cases=[
 ['erp-configurator','erp',{lead_type:'erp_demo_request'},'erp_demo_request'],
 ['erp-short','erp',{lead_type:'erp_walkthrough_request'},'erp_demo_request'],
 ['dt-preview','digital-twins',{lead_type:'digital_twin_demo'},'digital_twin_demo_request'],
 ['enquiry-reporting','reporting',{lead_type:'digital_twin_demo'},'digital_twin_demo_request'],
 ['ut-demo','practical-ndt',{lead_type:'ndt_simulation_demo'},'ndt_simulation_demo_request'],
 ['training-pathway','training',{lead_type:'training_enquiry'},'training_enquiry'],
 ['training-pathway','training',{lead_type:'training_enrolment'},'training_enrolment'],
 ['contact','training',{lead_type:'training_enrolment'},'training_enrolment'],
 ['level3-paths','consulting',{lead_type:'level3_consultation'},'level3_consulting_enquiry'],
 ['lead-magnet-gap_check','consulting',{lead_magnet:'gap_check'},'level3_consulting_enquiry'],
 ['inspection-rfq','inspection',{lead_type:'rfq'},'inspection_rfq_submit'],
 ['home_enquiry','level_iii',{lead_type:'homepage_enquiry'},'level3_consulting_enquiry'],
 ['home_enquiry','practical_ndt',{lead_type:'homepage_enquiry'},'ndt_simulation_demo_request'],
 ['home_enquiry','erp',{lead_type:'homepage_enquiry'},'erp_demo_request'],
 ['enquiry-3d-scanning','3d-scanning',{lead_type:'consultation'},null],
 ['template-request','reporting',{},null],
 ['lead-magnet-mock_exam','training',{lead_magnet:'mock_exam'},null],
];
for (const [formId,service,extra,expected] of cases) {
 assert.deepEqual(fire(formId,service,extra),expected?['generate_lead',expected]:['generate_lead'],`${formId}/${service}`);
}
assert.deepEqual(fire('inspection-rfq','inspection',{lead_type:'rfq',qualified:true}),['generate_lead','inspection_rfq_submit','qualified_lead']);
assert.ok(!('qualified' in events[0][2]));
assert.equal(analytics.pipelineFor('level_iii','homepage_enquiry'),'LEVEL-III');
assert.equal(analytics.pipelineFor('practical_ndt','homepage_enquiry'),'SIMULATION');
console.log(`Enquiry contract passed: rejection, accepted delivery context, opaque ID, event deduplication, no query PII, click semantics, ${cases.length + 1} business key-event cases. All delivery mocked.`);
