import crypto from 'crypto';
import fs from 'fs';

// All service account emails
const SERVICE_ACCOUNTS = [
  'gsc-indexer@atlantis-gsc-2.iam.gserviceaccount.com',
  'gsc-indexer@atlantis-gsc-3.iam.gserviceaccount.com',
  'gsc-indexer@bustling-joy-492106-s3.iam.gserviceaccount.com',
  'gsc-indexer@atlantis-gsc-5.iam.gserviceaccount.com',
];

const PERSONAL_EMAIL = 'anu.anoop485@gmail.com';

// Load legacy key
const legacyKey = JSON.parse(fs.readFileSync('scripts/gsc-service-account.json', 'utf8'));

function createJWT(key, scope) {
  const header = Buffer.from(JSON.stringify({alg:'RS256',typ:'JWT'})).toString('base64url');
  const now = Math.floor(Date.now()/1000);
  const claim = Buffer.from(JSON.stringify({
    iss: key.client_email,
    scope: scope,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now, exp: now+3600
  })).toString('base64url');
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(header+'.'+claim);
  const sig = sign.sign(key.private_key,'base64url');
  return header+'.'+claim+'.'+sig;
}

async function getToken(key, scope) {
  const jwt = createJWT(key, scope);
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method:'POST', 
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    body: 'grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion='+jwt
  });
  const data = await res.json();
  if (!data.access_token) {
    console.error('Token error:', data);
    return null;
  }
  return data.access_token;
}

async function main() {
  console.log('🔑 Getting Site Verification API token for legacy account...');
  const token = await getToken(legacyKey, 'https://www.googleapis.com/auth/siteverification');
  
  if (!token) {
    console.log('\n❌ Could not get siteverification token. Trying with full scope...');
    const token2 = await getToken(legacyKey, 'https://www.googleapis.com/auth/siteverification.verify_only https://www.googleapis.com/auth/siteverification');
    if (!token2) {
      console.log('❌ Failed to get token. Exiting.');
      return;
    }
  }
  
  console.log('✓ Token obtained');
  
  // List all verified web resources
  console.log('\n📋 Listing verified web resources...');
  const listRes = await fetch('https://www.googleapis.com/siteVerification/v1/webResource', {
    headers: { Authorization: `Bearer ${token}` }
  });
  const listData = await listRes.json();
  
  if (listData.error) {
    console.log('Error listing resources:', JSON.stringify(listData.error, null, 2));
    return;
  }
  
  const items = listData.items || [];
  console.log(`Found ${items.length} verified resources\n`);
  
  let updated = 0, errors = 0, skipped = 0;
  
  for (const item of items) {
    const siteUrl = item.site?.identifier || 'unknown';
    const currentOwners = item.owners || [];
    
    // Check which accounts need to be added
    const allNeeded = [...SERVICE_ACCOUNTS, PERSONAL_EMAIL];
    const missing = allNeeded.filter(email => !currentOwners.includes(email));
    
    if (missing.length === 0) {
      console.log(`  ✓ ${siteUrl} - all accounts already owners`);
      skipped++;
      continue;
    }
    
    // Add missing accounts
    const newOwners = [...currentOwners, ...missing];
    
    console.log(`  → ${siteUrl} - adding ${missing.length} owners...`);
    
    const updateRes = await fetch(`https://www.googleapis.com/siteVerification/v1/webResource/${item.id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        site: item.site,
        owners: newOwners
      })
    });
    
    const updateData = await updateRes.json();
    
    if (updateData.error) {
      console.log(`    ❌ Error: ${updateData.error.message}`);
      errors++;
    } else {
      console.log(`    ✓ Updated (${updateData.owners?.length} owners now)`);
      updated++;
    }
    
    await new Promise(r => setTimeout(r, 500));
  }
  
  console.log(`\n═══ SUMMARY ═══`);
  console.log(`  Updated: ${updated}`);
  console.log(`  Skipped (already complete): ${skipped}`);
  console.log(`  Errors: ${errors}`);
}

main().catch(console.error);
