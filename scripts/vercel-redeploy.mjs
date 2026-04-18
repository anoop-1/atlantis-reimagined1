#!/usr/bin/env node
/**
 * Redeploy sites via Vercel API to pick up meta tag changes
 */
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
if (!VERCEL_TOKEN) {
  console.error('Missing VERCEL_TOKEN env var. Set it in scripts/.env.gsc or your shell.');
  process.exit(1);
}
const TEAM_ID = 'team_RvIKW6PFuuliC77dktstAJmQ';

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function vercelApi(path, method = 'GET', body) {
  const url = `https://api.vercel.com${path}${path.includes('?') ? '&' : '?'}teamId=${TEAM_ID}`;
  const opts = {
    method,
    headers: { Authorization: `Bearer ${VERCEL_TOKEN}`, 'Content-Type': 'application/json' },
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  return { status: res.status, data: await res.json() };
}

// Sites that need redeployment
const sites = [
  'ut-testing-academy',
  'weld-inspection-pro',
];

console.log('Redeploying sites via Vercel API...\n');

for (const name of sites) {
  console.log(`  ${name}:`);

  // Get latest deployment
  const { data: listData } = await vercelApi(`/v6/deployments?projectId=${name}&limit=1&target=production`);
  const latest = (listData.deployments || [])[0];

  if (!latest) {
    console.log('    No existing deployment found\n');
    continue;
  }

  console.log(`    Latest: ${latest.uid} (${latest.state})`);

  // Trigger redeploy
  const { status, data } = await vercelApi('/v13/deployments', 'POST', {
    deploymentId: latest.uid,
    name,
    target: 'production',
  });

  if (data.id) {
    console.log(`    Redeployed: ${data.id}`);
    console.log(`    URL: https://${data.url || name + '.vercel.app'}`);
  } else {
    console.log(`    Failed (${status}): ${JSON.stringify(data.error || data).substring(0, 150)}`);
  }

  await sleep(2000);
  console.log('');
}

console.log('Done! Sites should be live within 1-2 minutes.');
