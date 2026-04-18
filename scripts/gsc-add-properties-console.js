// ============================================================
// GSC Property Adder - Browser Console Script
// ============================================================
// INSTRUCTIONS:
// 1. Go to https://search.google.com/search-console/welcome
// 2. Open browser Developer Tools (F12 or Ctrl+Shift+I)
// 3. Go to the Console tab
// 4. Paste this entire script and press Enter
// 5. It will automatically add each property one at a time
// ============================================================

(async function addGSCProperties() {
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  // All remaining satellite sites to add
  const sites = [
    'https://middle-east-ndt-resource.vercel.app',
    'https://construction-ndt-guide.vercel.app',
    'https://corrosion-management-ndt.vercel.app',
    'https://manufacturing-ndt-quality.vercel.app',
    'https://ndt-automation-future.vercel.app',
    'https://tank-inspection-resource.vercel.app',
    'https://petrochemical-ndt-hub.vercel.app',
    'https://nuclear-ndt-resource.vercel.app',
    'https://subsea-inspection-guide.vercel.app',
    'https://ndt-standards-library.vercel.app',
    'https://pressure-vessel-ndt.vercel.app',
    'https://rail-ndt-resource.vercel.app',
    'https://coating-inspection-guide.vercel.app',
    'https://composite-testing-hub.vercel.app',
    'https://ndt-equipment-reviews.vercel.app',
    'https://api-certification-guide.vercel.app',
    'https://mining-ndt-hub.vercel.app',
    'https://heat-exchanger-ndt.vercel.app',
    'https://renewable-energy-ndt.vercel.app',
    'https://lng-inspection-hub.vercel.app',
    'https://aerospace-ndt-standards.vercel.app',
    'https://pipeline-integrity-guide.vercel.app',
    'https://ndt-safety-compliance.vercel.app',
    'https://advanced-ndt-techniques.vercel.app',
    'https://corrosion-engineering-guide.vercel.app',
    'https://ndt-standards-reference.vercel.app',
    'https://ndt-digital-technology.vercel.app',
    'https://ndt-career-portal.vercel.app',
    'https://industrial-coating-inspection.vercel.app',
    'https://aerospace-ndt-center.vercel.app',
    'https://tank-inspection-guide.vercel.app',
    'https://pipeline-integrity-hub.vercel.app',
    'https://offshore-ndt-guide.vercel.app',
    'https://pressure-vessel-inspection.vercel.app',
    'https://rt-testing-hub.vercel.app',
    'https://weld-quality-resource.vercel.app',
    'https://go-visa.vercel.app',
    'https://evisa-guide.vercel.app',
    'https://visa-free-destinations.vercel.app',
    'https://digital-nomad-visas.vercel.app',
    'https://passport-power-index.vercel.app',
    'https://travel-docs-checklist.vercel.app',
    'https://weld-inspection-pro.vercel.app',
    'https://ut-testing-academy.vercel.app'
  ];

  const results = [];

  for (let i = 0; i < sites.length; i++) {
    const site = sites[i];
    console.log(`[${i+1}/${sites.length}] Adding: ${site}`);

    try {
      // Make sure we're on the welcome page
      if (!window.location.href.includes('welcome')) {
        window.location.href = 'https://search.google.com/search-console/welcome';
        await sleep(3000);
      }

      // Find the URL prefix input (second text input on the page)
      const inputs = document.querySelectorAll('input[type="text"]');
      let urlInput = null;
      for (const inp of inputs) {
        if (inp.placeholder && inp.placeholder.includes('example.com') && inp.placeholder.includes('http')) {
          urlInput = inp;
          break;
        }
      }
      if (!urlInput && inputs.length >= 2) {
        urlInput = inputs[1]; // Second input is URL prefix
      }

      if (!urlInput) {
        results.push(`${site}: ❌ NO INPUT FOUND`);
        continue;
      }

      // Set the value using native setter to trigger React/Angular change detection
      const nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype, 'value'
      ).set;
      nativeSetter.call(urlInput, site);
      urlInput.dispatchEvent(new Event('input', { bubbles: true }));
      urlInput.dispatchEvent(new Event('change', { bubbles: true }));
      urlInput.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
      urlInput.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));

      await sleep(500);

      // Find and click the CONTINUE button on the URL prefix side
      // It's typically the second button with CONTINUE text, or the button near the URL input
      const allButtons = Array.from(document.querySelectorAll('button, [role="button"]'));
      let continueBtn = null;

      // Method 1: Find by text
      for (const btn of allButtons) {
        const text = btn.textContent.trim().toUpperCase();
        if (text === 'CONTINUE') {
          const rect = btn.getBoundingClientRect();
          // Pick the one on the right side (URL prefix section)
          if (rect.left > 700) {
            continueBtn = btn;
            break;
          }
          continueBtn = btn; // fallback to last CONTINUE found
        }
      }

      // Method 2: Find button closest to the URL input
      if (!continueBtn) {
        const inputRect = urlInput.getBoundingClientRect();
        let minDist = Infinity;
        for (const btn of allButtons) {
          const btnRect = btn.getBoundingClientRect();
          if (btnRect.top > inputRect.bottom) {
            const dist = btnRect.top - inputRect.bottom;
            if (dist < minDist) {
              minDist = dist;
              continueBtn = btn;
            }
          }
        }
      }

      if (!continueBtn) {
        results.push(`${site}: ❌ NO CONTINUE BTN`);
        continue;
      }

      continueBtn.click();
      console.log(`  Clicked CONTINUE, waiting for verification...`);

      // Wait for verification (up to 15 seconds)
      let verified = false;
      for (let j = 0; j < 30; j++) {
        await sleep(500);
        const pageText = document.body.innerText;
        if (pageText.includes('Ownership auto verified') || pageText.includes('auto verified')) {
          verified = true;
          break;
        }
        if (pageText.includes('Could not verify') || pageText.includes('Verification failed')) {
          break;
        }
      }

      if (verified) {
        console.log(`  ✅ Verified!`);
        results.push(`${site}: ✅ VERIFIED`);
      } else {
        console.log(`  ⚠️ Status unknown`);
        results.push(`${site}: ⚠️ UNKNOWN`);
      }

      // Click DONE button
      await sleep(500);
      const doneButtons = Array.from(document.querySelectorAll('button, [role="button"]'));
      for (const btn of doneButtons) {
        if (btn.textContent.trim().toUpperCase() === 'DONE') {
          btn.click();
          break;
        }
      }

      await sleep(1000);

      // Navigate back to welcome for next site
      window.location.href = 'https://search.google.com/search-console/welcome';
      await sleep(3000);

    } catch (e) {
      console.error(`  Error: ${e.message}`);
      results.push(`${site}: ❌ ERROR - ${e.message}`);
      // Try to recover
      window.location.href = 'https://search.google.com/search-console/welcome';
      await sleep(3000);
    }
  }

  console.log('\n========== RESULTS ==========');
  results.forEach(r => console.log(r));
  console.log(`\nTotal: ${results.length}`);
  console.log(`Verified: ${results.filter(r => r.includes('✅')).length}`);
  console.log(`Failed: ${results.filter(r => r.includes('❌')).length}`);
  console.log(`Unknown: ${results.filter(r => r.includes('⚠️')).length}`);

  return results;
})();
