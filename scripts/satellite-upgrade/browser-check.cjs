const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const root=path.resolve(__dirname,'../..');
const content=JSON.parse(fs.readFileSync(path.join(__dirname,'growth-content.json'),'utf8'));
const output=path.join(root,'backlink-sites/validation-results');
(async()=>{
  const {sites}=await import('./catalog.mjs');
  const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
  const results=[];
  try{
    for(let i=0;i<sites.length;i++){
      const site=sites[i], item=content.find(x=>x.site===site.slug), base='http://127.0.0.1:'+(43900+i);
      const context=await browser.newContext({viewport:{width:390,height:844},acceptDownloads:true});
      // Preview QA must not pollute production analytics or submit real enquiries.
      await context.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());
      const page=await context.newPage();const errors=[],events=[];
      page.on('pageerror',e=>errors.push(e.message));
      await page.goto(base+'/tools/'+item.slug,{waitUntil:'networkidle'});
      assert.equal(await page.locator('textarea').count(),5);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'mobile overflow '+site.slug);
      await page.exposeFunction('qaEvent',(...args)=>events.push(args));
      await page.evaluate(()=>{window.gtag=(...args)=>window.qaEvent(...args);});
      await page.getByRole('button',{name:'Generate my brief'}).click();
      assert.equal(await page.locator('.sat-brief-result').count(),0,'empty form accepted');
      const sentinel='PRIVATE_QA_SENTINEL_'+i;
      for(let n=0;n<5;n++)await page.locator('textarea').nth(n).fill(n===0?sentinel:'To confirm with the responsible reviewer.');
      await page.getByRole('button',{name:'Generate my brief'}).click();
      await page.locator('.sat-brief-result').waitFor();
      assert.match(await page.locator('.sat-brief-result pre').innerText(),new RegExp(sentinel));
      await page.getByRole('button',{name:'Generate my brief'}).click();
      const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Download text brief'}).click();const download=await downloadPromise;
      assert.match(fs.readFileSync(await download.path(),'utf8'),new RegExp(sentinel));
      assert.equal(events.filter(e=>e[1]==='satellite_brief_complete').length,1,'duplicate complete event');
      assert.equal(events.filter(e=>e[1]==='satellite_brief_download').length,1);
      assert.equal(JSON.stringify(events).includes(sentinel),false,'private text in analytics');
      const cta=page.locator('.sat-brief-result a');const href=await cta.getAttribute('href');
      assert.equal(new URL(href).searchParams.get('satellite'),site.slug);
      assert.equal(href.includes(sentinel),false);
      // Prevent navigation while allowing the layout's delegated referral listener.
      await cta.evaluate(link=>link.addEventListener('click',event=>event.preventDefault()));await cta.click();
      assert.equal(new URL(await cta.getAttribute('href')).searchParams.get('satellite_path'),'/tools/'+item.slug);
      assert.equal(events.filter(e=>e[1]==='satellite_contact_click').length,1);
      assert.equal(events.some(e=>/generate_lead|enquiry_submit|rfq_submit/.test(e[1])),false);
      await page.getByRole('button',{name:'Reset answers'}).click();
      assert.equal(await page.locator('textarea').first().inputValue(),'');
      assert.equal(await page.locator('.sat-brief-result').count(),0);
      await page.goto(base+'/resource-library',{waitUntil:'networkidle'});
      const count=await page.locator('.sat-library-list a').count();assert.ok(count>10);
      await page.getByRole('searchbox').fill('zz-no-result-zz');assert.equal(await page.locator('.sat-library-list a').count(),0);
      await page.getByRole('button',{name:'show every resource'}).click();assert.equal(await page.locator('.sat-library-list a').count(),count);
      await page.goto(base+'/guides/'+item.slug,{waitUntil:'networkidle'});
      assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('table tbody tr').count(),3);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'guide mobile overflow');
      if([0,4,24].includes(i)){
        await page.screenshot({path:path.join(output,site.slug+'-mobile.png'),fullPage:true});
        await page.setViewportSize({width:1440,height:1000});await page.screenshot({path:path.join(output,site.slug+'-desktop.png'),fullPage:true});
        await page.goto(base,{waitUntil:'networkidle'});await page.screenshot({path:path.join(output,site.slug+'-home.png'),fullPage:true});
      }
      assert.deepEqual(errors,[],'browser errors');
      results.push({site:site.slug,status:'PASS',worksheet:true,download:true,privacy:true,analytics:true,library:true,mobileOverflow:false});
      await context.close();console.log(site.slug+' PASS');
    }
    fs.writeFileSync(path.join(output,'growth-browser-audit.json'),JSON.stringify({status:'PASS',sites:results.length,results},null,2));
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
