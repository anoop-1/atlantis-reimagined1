#!/bin/bash

##############################################################################
# Satellite Backlink Sites Deployment Script
# Deploys 20 new satellite sites to Vercel
# Usage: VERCEL_TOKEN=<your-token> ./deploy-satellites.sh
##############################################################################

set -e

BASEDIR="/sessions/admiring-relaxed-turing/mnt/atlantis-reimagined1/backlink-sites"
VERCEL_CLI="/sessions/admiring-relaxed-turing/node_modules/.bin/vercel"

# Color codes for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Array of 20 sites to deploy
SITES=(
  "pipeline-integrity-guide"
  "petrochemical-ndt-hub"
  "nuclear-ndt-resource"
  "subsea-inspection-guide"
  "ndt-standards-library"
  "advanced-ndt-techniques"
  "tank-inspection-resource"
  "pressure-vessel-ndt"
  "lng-inspection-hub"
  "renewable-energy-ndt"
  "ndt-automation-future"
  "coating-inspection-guide"
  "rail-ndt-resource"
  "mining-ndt-hub"
  "ndt-safety-compliance"
  "weld-quality-resource"
  "composite-testing-hub"
  "heat-exchanger-ndt"
  "api-certification-guide"
  "ndt-equipment-reviews"
)

# Check if VERCEL_TOKEN is set
if [ -z "$VERCEL_TOKEN" ]; then
  echo -e "${RED}ERROR: VERCEL_TOKEN environment variable is not set${NC}"
  echo -e "${YELLOW}Usage: VERCEL_TOKEN=<your-token> $0${NC}"
  exit 1
fi

# Check if Vercel CLI exists
if [ ! -f "$VERCEL_CLI" ]; then
  echo -e "${RED}ERROR: Vercel CLI not found at $VERCEL_CLI${NC}"
  exit 1
fi

# Initialize results file
RESULTS_FILE="/tmp/deployment_results_$(date +%s).txt"
SUMMARY_FILE="$BASEDIR/DEPLOYMENT_SUMMARY.txt"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Satellite Sites Deployment Script${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""
echo "Deploying ${#SITES[@]} sites to Vercel..."
echo "Token: ${VERCEL_TOKEN:0:10}..."
echo "Timestamp: $(date)"
echo ""

DEPLOYED_COUNT=0
FAILED_COUNT=0
FAILED_SITES=()
DEPLOYED_URLS=()

for SITE in "${SITES[@]}"; do
  SITE_PATH="$BASEDIR/$SITE"

  if [ ! -d "$SITE_PATH" ]; then
    echo -e "${RED}✗ SKIP${NC} - $SITE (directory not found)"
    FAILED_COUNT=$((FAILED_COUNT + 1))
    FAILED_SITES+=("$SITE")
    continue
  fi

  echo -e "${YELLOW}→ Deploying${NC} $SITE..."

  cd "$SITE_PATH"

  # Create vercel.json if it doesn't exist
  if [ ! -f "vercel.json" ]; then
    cat > vercel.json <<EOF
{
  "framework": "nextjs",
  "buildCommand": "next build"
}
EOF
  fi

  # Attempt deployment
  DEPLOYMENT_OUTPUT=$(mktemp)
  if $VERCEL_CLI deploy --prod --yes --token="$VERCEL_TOKEN" > "$DEPLOYMENT_OUTPUT" 2>&1; then
    # Extract the deployment URL from output
    DEPLOY_URL=$(grep -oP 'https://[^\s]+\.vercel\.app' "$DEPLOYMENT_OUTPUT" | head -1 || echo "URL_NOT_FOUND")

    echo -e "${GREEN}✓ SUCCESS${NC} - $SITE"
    echo "  URL: $DEPLOY_URL"

    DEPLOYED_URLS+=("$SITE|$DEPLOY_URL")
    DEPLOYED_COUNT=$((DEPLOYED_COUNT + 1))

    # Store result
    echo "$SITE|$DEPLOY_URL|SUCCESS" >> "$RESULTS_FILE"
  else
    echo -e "${RED}✗ FAILED${NC} - $SITE"

    # Print error details
    if grep -q "not authenticated" "$DEPLOYMENT_OUTPUT"; then
      echo "  Error: Authentication failed. Check your VERCEL_TOKEN."
    elif grep -q "401" "$DEPLOYMENT_OUTPUT"; then
      echo "  Error: Unauthorized (401). Invalid token."
    else
      head -5 "$DEPLOYMENT_OUTPUT" | sed 's/^/  /'
    fi

    FAILED_COUNT=$((FAILED_COUNT + 1))
    FAILED_SITES+=("$SITE")

    # Store result
    echo "$SITE|FAILED|ERROR" >> "$RESULTS_FILE"
  fi

  rm -f "$DEPLOYMENT_OUTPUT"
  echo ""
done

# Generate summary report
echo ""
echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Deployment Summary${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""
echo "Total Sites: ${#SITES[@]}"
echo -e "Successful: ${GREEN}$DEPLOYED_COUNT${NC}"
echo -e "Failed: ${RED}$FAILED_COUNT${NC}"
echo ""

if [ $DEPLOYED_COUNT -gt 0 ]; then
  echo -e "${GREEN}Deployed Sites and URLs:${NC}"
  for RESULT in "${DEPLOYED_URLS[@]}"; do
    SITE_NAME=$(echo "$RESULT" | cut -d'|' -f1)
    SITE_URL=$(echo "$RESULT" | cut -d'|' -f2)
    echo "  • $SITE_NAME: $SITE_URL"
  done
  echo ""
fi

if [ $FAILED_COUNT -gt 0 ]; then
  echo -e "${RED}Failed Sites:${NC}"
  for SITE in "${FAILED_SITES[@]}"; do
    echo "  • $SITE"
  done
  echo ""
fi

# Write summary to file
{
  echo "================================"
  echo "Satellite Sites Deployment Report"
  echo "================================"
  echo "Date: $(date)"
  echo "Total Sites: ${#SITES[@]}"
  echo "Successful: $DEPLOYED_COUNT"
  echo "Failed: $FAILED_COUNT"
  echo ""
  echo "DEPLOYED SITES:"
  for RESULT in "${DEPLOYED_URLS[@]}"; do
    echo "$RESULT"
  done
  if [ $FAILED_COUNT -gt 0 ]; then
    echo ""
    echo "FAILED SITES:"
    for SITE in "${FAILED_SITES[@]}"; do
      echo "$SITE"
    done
  fi
} > "$SUMMARY_FILE"

echo -e "${BLUE}Summary saved to: $SUMMARY_FILE${NC}"

if [ $FAILED_COUNT -eq 0 ]; then
  echo -e "${GREEN}✓ All deployments completed successfully!${NC}"
  exit 0
else
  echo -e "${YELLOW}⚠ Some deployments failed. Check details above.${NC}"
  exit 1
fi
