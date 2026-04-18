# Satellite Backlink Sites Deployment Instructions

## Overview
This document provides instructions for deploying 20 new satellite backlink sites to Vercel.

## Sites to Deploy (20 Total)

1. pipeline-integrity-guide
2. petrochemical-ndt-hub
3. nuclear-ndt-resource
4. subsea-inspection-guide
5. ndt-standards-library
6. advanced-ndt-techniques
7. tank-inspection-resource
8. pressure-vessel-ndt
9. lng-inspection-hub
10. renewable-energy-ndt
11. ndt-automation-future
12. coating-inspection-guide
13. rail-ndt-resource
14. mining-ndt-hub
15. ndt-safety-compliance
16. weld-quality-resource
17. composite-testing-hub
18. heat-exchanger-ndt
19. api-certification-guide
20. ndt-equipment-reviews

## Deployment Status

All 20 sites are located at:
```
/sessions/admiring-relaxed-turing/mnt/atlantis-reimagined1/backlink-sites/
```

Each site has the following structure:
- `next.config.js` - Next.js configuration
- `package.json` - Node dependencies
- `tsconfig.json` - TypeScript configuration
- `src/` - Source code directory
- `public/` - Static assets
- `.vercel/` - Vercel configuration directory (auto-created for new deployments)

## Prerequisites

1. **Vercel CLI**: Already installed at `/sessions/admiring-relaxed-turing/node_modules/.bin/vercel`
2. **Vercel Token**: Required for authentication (see options below)
3. **Node.js**: Required for building the sites

## Deployment Options

### Option 1: Automated Deployment Script (Recommended)

Use the provided deployment script with your Vercel token:

```bash
cd /sessions/admiring-relaxed-turing/mnt/atlantis-reimagined1/scripts
VERCEL_TOKEN=<your-vercel-token> ./deploy-satellites.sh
```

**What this script does:**
- Deploys all 20 sites to Vercel in production
- Creates `.vercel/` and `vercel.json` configuration for each site
- Captures deployment URLs
- Generates a deployment summary report
- Color-coded output for success/failure status

### Option 2: Manual Individual Deployment

Deploy each site individually:

```bash
cd /sessions/admiring-relaxed-turing/mnt/atlantis-reimagined1/backlink-sites/{site-name}
/sessions/admiring-relaxed-turing/node_modules/.bin/vercel deploy --prod --yes --token=<your-token>
```

### Option 3: Interactive Deployment (No Token Required)

Deploy interactively with Vercel CLI authentication:

```bash
cd /sessions/admiring-relaxed-turing/mnt/atlantis-reimagined1/backlink-sites/{site-name}
/sessions/admiring-relaxed-turing/node_modules/.bin/vercel --prod
```

This will prompt you to authenticate with Vercel through a browser.

## Obtaining a Vercel Token

1. Visit: https://vercel.com/account/tokens
2. Click "Create Token"
3. Give it a name (e.g., "Satellite Sites Deployment")
4. Select appropriate scopes (all recommended for this task)
5. Copy the generated token
6. Use it in the deployment commands above

## Expected Outcomes

### Successful Deployment
- Each site gets a unique Vercel deployment URL
- Sites are accessible immediately after deployment
- `.vercel/project.json` file created with project metadata
- Summary report saved to `DEPLOYMENT_SUMMARY.txt`

### Typical Deployment URL Format
```
https://{site-name}.vercel.app
```

### Example Deployed URLs
```
https://pipeline-integrity-guide.vercel.app
https://petrochemical-ndt-hub.vercel.app
https://nuclear-ndt-resource.vercel.app
... (20 total)
```

## Verification

After deployment, verify sites are live:

```bash
# Test one site
curl -I https://{site-name}.vercel.app

# Or check all sites
for site in pipeline-integrity-guide petrochemical-ndt-hub nuclear-ndt-resource ...; do
  echo "Testing $site..."
  curl -s -o /dev/null -w "%{http_code}" https://$site.vercel.app
  echo ""
done
```

## Troubleshooting

### Authentication Error
**Error**: "not authenticated" or "401 Unauthorized"
**Solution**: Verify your VERCEL_TOKEN is valid and not expired

### Token Invalid
**Error**: "Invalid token"
**Solution**:
1. Generate a new token from https://vercel.com/account/tokens
2. Ensure you have the correct permissions scoped

### Build Failure
**Error**: "Build failed"
**Solution**:
1. Check site's `package.json` for dependencies
2. Verify `next.config.js` is properly configured
3. Run `npm install && npm run build` locally first

### Network Issues
**Error**: Connection timeout
**Solution**:
1. Check internet connection
2. Vercel service status: https://www.vercel-status.com/
3. Retry deployment

## Results

After running the script, check:

1. **Deployment Summary**: `/sessions/admiring-relaxed-turing/mnt/atlantis-reimagined1/backlink-sites/DEPLOYMENT_SUMMARY.txt`
2. **Site Verification**: Visit deployed URLs in browser
3. **Vercel Dashboard**: https://vercel.com/dashboard to view projects

## Previous Deployments

**Note**: The following 10 sites were previously deployed and are already live:
- aerospace-ndt-standards
- construction-ndt-guide
- corrosion-management-ndt
- manufacturing-ndt-quality
- marine-offshore-ndt
- middle-east-ndt-resource
- ndt-software-solutions
- oil-gas-inspection-guide
- power-generation-ndt
- welding-inspection-hub

## Support

For Vercel deployment issues, consult:
- Vercel Documentation: https://vercel.com/docs
- Vercel CLI Documentation: https://vercel.com/cli
- Vercel Status Page: https://www.vercel-status.com/
