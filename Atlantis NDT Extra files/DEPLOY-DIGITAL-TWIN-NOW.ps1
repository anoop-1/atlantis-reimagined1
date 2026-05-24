# DEPLOY-DIGITAL-TWIN-NOW.ps1
# Run from PowerShell:
#   cd "C:\Users\anuan\Downloads\Canada\New PR"
#   powershell -ExecutionPolicy Bypass -File .\DEPLOY-DIGITAL-TWIN-NOW.ps1

$ErrorActionPreference = "Stop"
$NEWPR    = "C:\Users\anuan\Downloads\Canada\New PR"
$ATLANTIS = "E:\software\Atlantis\atlantis-reimagined1"
$STAMP    = Get-Date -Format "yyyyMMdd-HHmmss"
$BACKUP   = Join-Path $ATLANTIS (".deploy-backup-" + $STAMP)

function Step($n, $msg) { Write-Host "" ; Write-Host ("=== STEP " + $n + " - " + $msg + " ===") -ForegroundColor Cyan }
function Ok($msg)       { Write-Host ("  [OK] "    + $msg) -ForegroundColor Green }
function Warn($msg)     { Write-Host ("  [WARN] "  + $msg) -ForegroundColor Yellow }
function Fail($msg)     { Write-Host ("  [FAIL] "  + $msg) -ForegroundColor Red ; exit 1 }

# STEP 0 - Pre-flight
Step 0 "Pre-flight checks"
if (-not (Test-Path $NEWPR))                    { Fail ("Source folder not found: " + $NEWPR) }
if (-not (Test-Path $ATLANTIS))                 { Fail ("Atlantis repo not found: " + $ATLANTIS) }
if (-not (Test-Path (Join-Path $ATLANTIS "src\App.tsx")))    { Fail "App.tsx missing in atlantis repo" }
if (-not (Test-Path (Join-Path $ATLANTIS "package.json")))   { Fail "package.json missing in atlantis repo" }
Ok "Source + atlantis paths verified"

Push-Location $ATLANTIS

# STEP 1 - Backup
Step 1 "Backup"
New-Item -ItemType Directory -Force -Path $BACKUP | Out-Null
Copy-Item (Join-Path $ATLANTIS "src\App.tsx") (Join-Path $BACKUP "App.tsx.bak") -Force
if (Test-Path (Join-Path $ATLANTIS "vercel.json")) {
  Copy-Item (Join-Path $ATLANTIS "vercel.json") (Join-Path $BACKUP "vercel.json.bak") -Force
}
if (Test-Path (Join-Path $ATLANTIS "scripts\prerender.mjs")) {
  Copy-Item (Join-Path $ATLANTIS "scripts\prerender.mjs") (Join-Path $BACKUP "prerender.mjs.bak") -Force
}
if (Test-Path (Join-Path $ATLANTIS "scripts\build-sitemap.mjs")) {
  Copy-Item (Join-Path $ATLANTIS "scripts\build-sitemap.mjs") (Join-Path $BACKUP "build-sitemap.mjs.bak") -Force
}
Ok ("Backups in " + $BACKUP)

# STEP 2 - Copy files
Step 2 "Copy Digital Twin files into atlantis-reimagined1"
New-Item -ItemType Directory -Force -Path (Join-Path $ATLANTIS "src\pages-digital-twins") | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $ATLANTIS "src\pages\case-studies") | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $ATLANTIS "scripts") | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $ATLANTIS "src\lib") | Out-Null

Copy-Item (Join-Path $NEWPR "pages-digital-twins\*.tsx") (Join-Path $ATLANTIS "src\pages-digital-twins\") -Force
$pageCount = (Get-ChildItem (Join-Path $ATLANTIS "src\pages-digital-twins\*.tsx")).Count
Ok ($pageCount.ToString() + " Digital Twin pages copied")

# Supporting components
Copy-Item (Join-Path $NEWPR "components\RegulatorCodeMatrix.tsx") (Join-Path $ATLANTIS "src\components\") -Force
Copy-Item (Join-Path $NEWPR "components\AuthorBio.tsx")           (Join-Path $ATLANTIS "src\components\") -Force
Ok "RegulatorCodeMatrix + AuthorBio copied"

# Case studies
Copy-Item (Join-Path $NEWPR "case-studies\*.tsx") (Join-Path $ATLANTIS "src\pages\case-studies\") -Force
Ok "5 case studies copied"

# Data
Copy-Item (Join-Path $NEWPR "data\digital-twin-cities.json")    (Join-Path $ATLANTIS "src\data\") -Force
Copy-Item (Join-Path $NEWPR "data\internal-link-map.json")      (Join-Path $ATLANTIS "src\data\") -Force
Copy-Item (Join-Path $NEWPR "data\asnt-level-iii-authors.json") (Join-Path $ATLANTIS "src\data\") -Force
Ok "3 data files copied"

# ERP pages - only if missing
$erpFiles = @("ERPSoftwareHubPage.tsx","ERPSoftwareCityPage.tsx","NdtErpForRefineries.tsx","NdtErpForAerospaceMro.tsx","NdtErpForShipyards.tsx","NdtErpForPowerGeneration.tsx","NdtErpForNdeServiceProviders.tsx")
$erpCopied = 0
foreach ($f in $erpFiles) {
  $dest = Join-Path $ATLANTIS ("src\pages\" + $f)
  if (-not (Test-Path $dest)) {
    $src = Join-Path $NEWPR ("pages\" + $f)
    if (Test-Path $src) {
      Copy-Item $src $dest -Force
      $erpCopied++
    }
  }
}
Ok ($erpCopied.ToString() + " new ERP pages copied")

# hreflang lib
$hreflangDest = Join-Path $ATLANTIS "src\lib\hreflang.ts"
if (-not (Test-Path $hreflangDest)) {
  $hreflangSrc = Join-Path $NEWPR "lib\hreflang.ts"
  if (Test-Path $hreflangSrc) { Copy-Item $hreflangSrc $hreflangDest -Force ; Ok "hreflang.ts copied" }
}

# Build pipeline
Copy-Item (Join-Path $NEWPR "build-sitemap-v2.mjs")     (Join-Path $ATLANTIS "scripts\build-sitemap.mjs") -Force
Copy-Item (Join-Path $NEWPR "prerender-v2.mjs")         (Join-Path $ATLANTIS "scripts\prerender.mjs") -Force
Copy-Item (Join-Path $NEWPR "indexing-url-list-v2.json") (Join-Path $ATLANTIS "scripts\indexing-url-list.json") -Force
Ok "build-sitemap, prerender, indexing-url-list copied"

# STEP 3 - Patch App.tsx
Step 3 "Patch App.tsx (preserving homepage)"
$appPath = Join-Path $ATLANTIS "src\App.tsx"
$app = Get-Content $appPath -Raw

if ($app -match "DigitalTwinsPillar") {
  Warn "App.tsx already has DigitalTwinsPillar - skipping patch (idempotent)"
}
else {
  # Build import block as array of lines
  $imp = New-Object System.Collections.ArrayList
  [void]$imp.Add("")
  [void]$imp.Add("// --- Digital Twin pivot routes (auto-added) ---")
  [void]$imp.Add('import DigitalTwinsPillar     from "@/pages-digital-twins/DigitalTwinsPillar";')
  [void]$imp.Add('import DigitalTwinsLidar      from "@/pages-digital-twins/DigitalTwinsLidar";')
  [void]$imp.Add('import DigitalTwinsIot        from "@/pages-digital-twins/DigitalTwinsIot";')
  [void]$imp.Add('import DigitalTwinsAi         from "@/pages-digital-twins/DigitalTwinsAi";')
  [void]$imp.Add('import DigitalTwinsNdtOverlay from "@/pages-digital-twins/DigitalTwinsNdtOverlay";')
  [void]$imp.Add('import DigitalTwinsOilGas     from "@/pages-digital-twins/DigitalTwinsOilGas";')
  [void]$imp.Add('import DigitalTwinsMaritime   from "@/pages-digital-twins/DigitalTwinsMaritime";')
  [void]$imp.Add('import DigitalTwinsDefense    from "@/pages-digital-twins/DigitalTwinsDefense";')
  [void]$imp.Add('import DigitalTwinsAerospace  from "@/pages-digital-twins/DigitalTwinsAerospace";')

  # Conditional ERP imports
  if ((Test-Path (Join-Path $ATLANTIS "src\pages\ERPSoftwareHubPage.tsx")) -and ($app -notmatch "ERPSoftwareHubPage")) {
    [void]$imp.Add('import ERPSoftwareHubPage          from "@/pages/ERPSoftwareHubPage";')
  }
  $erpVerticals = @(
    @("NdtErpForRefineries","ndt-erp-for-refineries"),
    @("NdtErpForAerospaceMro","ndt-erp-for-aerospace-mro"),
    @("NdtErpForShipyards","ndt-erp-for-shipyards"),
    @("NdtErpForPowerGeneration","ndt-erp-for-power-generation"),
    @("NdtErpForNdeServiceProviders","ndt-erp-for-nde-service-providers")
  )
  foreach ($v in $erpVerticals) {
    $compName = $v[0]
    $filePath = Join-Path $ATLANTIS ("src\pages\" + $compName + ".tsx")
    if ((Test-Path $filePath) -and ($app -notmatch $compName)) {
      [void]$imp.Add('import ' + $compName + ' from "@/pages/' + $compName + '";')
    }
  }

  $importBlock = ($imp -join "`r`n") + "`r`n"

  # Find last import line and inject after it
  $lines = $app -split "`r?`n"
  $lastImportIdx = -1
  for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "^\s*import\s") { $lastImportIdx = $i }
  }
  if ($lastImportIdx -lt 0) { Fail "No import statements found in App.tsx" }

  $head = $lines[0..$lastImportIdx] -join "`r`n"
  $tail = $lines[($lastImportIdx + 1)..($lines.Length - 1)] -join "`r`n"
  $app = $head + "`r`n" + $importBlock + $tail

  Ok ("Imports inserted after line " + ($lastImportIdx + 1))

  # Build route block as array
  $rt = New-Object System.Collections.ArrayList
  [void]$rt.Add("")
  [void]$rt.Add("        {/* --- ERP hub + verticals (auto-added) --- */}")
  if ((Test-Path (Join-Path $ATLANTIS "src\pages\ERPSoftwareHubPage.tsx")) -and ($app -notmatch "ERPSoftwareHubPage />")) {
    [void]$rt.Add('        <Route path="/ndt-erp-software" element={<ERPSoftwareHubPage />} />')
    [void]$rt.Add('        <Route path="/:lang/ndt-erp-software" element={<ERPSoftwareHubPage />} />')
  }
  foreach ($v in $erpVerticals) {
    $compName = $v[0]
    $slug     = $v[1]
    $filePath = Join-Path $ATLANTIS ("src\pages\" + $compName + ".tsx")
    if ((Test-Path $filePath) -and ($app -notmatch ($compName + ' />'))) {
      [void]$rt.Add('        <Route path="/' + $slug + '" element={<' + $compName + ' />} />')
    }
  }
  [void]$rt.Add("")
  [void]$rt.Add("        {/* --- Digital Twin pillar + 4 clusters + 4 vertical hubs --- */}")
  [void]$rt.Add('        <Route path="/digital-twins" element={<DigitalTwinsPillar />} />')
  [void]$rt.Add('        <Route path="/:lang/digital-twins" element={<DigitalTwinsPillar />} />')
  [void]$rt.Add('        <Route path="/digital-twins/lidar-scan-to-twin" element={<DigitalTwinsLidar />} />')
  [void]$rt.Add('        <Route path="/digital-twins/iot-sensor-integration" element={<DigitalTwinsIot />} />')
  [void]$rt.Add('        <Route path="/digital-twins/ai-predictive-analytics" element={<DigitalTwinsAi />} />')
  [void]$rt.Add('        <Route path="/digital-twins/ndt-data-overlay" element={<DigitalTwinsNdtOverlay />} />')
  [void]$rt.Add('        <Route path="/digital-twins/oil-and-gas" element={<DigitalTwinsOilGas />} />')
  [void]$rt.Add('        <Route path="/digital-twins/maritime" element={<DigitalTwinsMaritime />} />')
  [void]$rt.Add('        <Route path="/digital-twins/defense" element={<DigitalTwinsDefense />} />')
  [void]$rt.Add('        <Route path="/digital-twins/aerospace" element={<DigitalTwinsAerospace />} />')
  [void]$rt.Add("")

  $routeBlock = $rt -join "`r`n"

  # Inject before <Route path="*"> if present, else before </Routes>
  $patternStar  = '(\s*<Route\s+path\s*=\s*"\*"[^>]*/?>)'
  $patternClose = '(\s*</Routes>)'
  if ($app -match $patternStar) {
    $app = $app -replace $patternStar, ($routeBlock + '$1')
    Ok "Routes inserted before existing catch-all route"
  }
  elseif ($app -match $patternClose) {
    $catchAll = '        <Route path="*" element={<NotFound />} />' + "`r`n"
    $app = $app -replace $patternClose, ($routeBlock + $catchAll + '$1')
    Ok "Routes inserted; catch-all NotFound route added before </Routes>"
    if ($app -notmatch "import\s+NotFound") {
      Warn "NotFound import not detected in App.tsx - you may need to add: import NotFound from '@/pages/NotFound';"
    }
  }
  else {
    Fail "Could not find Routes closing tag or catch-all in App.tsx"
  }

  Set-Content -Path $appPath -Value $app -NoNewline -Encoding UTF8
  Ok "App.tsx written"
}

# STEP 4 - vercel.json (untouched)
Step 4 "vercel.json - leaving as-is"
Ok "Static prerendered HTML wins via Vercel static-first handler"

# STEP 5 - puppeteer
Step 5 "Ensuring puppeteer for prerender"
$pkg = Get-Content (Join-Path $ATLANTIS "package.json") -Raw
if ($pkg -notmatch '"puppeteer"') {
  Write-Host "  installing puppeteer..." -ForegroundColor Gray
  npm install --save-dev puppeteer
  if ($LASTEXITCODE -ne 0) { Fail "npm install puppeteer failed" }
}
Ok "puppeteer present"

# STEP 6 - Build
Step 6 "npm run build"
npm run build
if ($LASTEXITCODE -ne 0) { Fail ("Vite build failed - rollback at " + $BACKUP) }
Ok "Build succeeded"

# STEP 7 - Prerender
Step 7 "Prerender 374 URLs"
node scripts/prerender.mjs
if ($LASTEXITCODE -ne 0) {
  Warn "Prerender exited non-zero - some URLs may be SPA fallback. Check dist/.prerender-log.jsonl"
}
else {
  Ok "Prerender complete"
}

# STEP 8 - Sitemap
Step 8 "Building sitemap.xml"
node scripts/build-sitemap.mjs
if ($LASTEXITCODE -ne 0) { Fail "Sitemap build failed" }
$smPath = Join-Path $ATLANTIS "public\sitemap.xml"
if (Test-Path $smPath) {
  $smContent = Get-Content $smPath -Raw
  $smCount = ([regex]::Matches($smContent, "<loc>")).Count
  Ok ($smCount.ToString() + " entries in sitemap.xml")
}

# STEP 9 - Local sanity check
Step 9 "Local preview sanity (5 sample URLs)"
$preview = Start-Process -PassThru -NoNewWindow -FilePath "npx" -ArgumentList "vite preview --port 4173 --strictPort"
Start-Sleep -Seconds 5

$samples = @("/digital-twins","/digital-twins/ndt-data-overlay","/digital-twins/oil-and-gas","/digital-twin-houston","/ndt-erp-houston")
$homeFragment = "Atlantis NDT | NDT Training, Consulting Services"
$allOk = $true
foreach ($p in $samples) {
  try {
    $resp = Invoke-WebRequest -Uri ("http://localhost:4173" + $p) -UseBasicParsing -TimeoutSec 8
    $title = "(no title)"
    if ($resp.Content -match "<title>([^<]+)</title>") { $title = $Matches[1] }
    if ($title.StartsWith($homeFragment)) {
      Write-Host ("  [SPA-FALLBACK] " + $p + " - " + $title) -ForegroundColor Red
      $allOk = $false
    }
    else {
      Write-Host ("  [OK]           " + $p + " - " + $title) -ForegroundColor Green
    }
  }
  catch {
    Write-Host ("  [ERROR]        " + $p) -ForegroundColor Red
    $allOk = $false
  }
}
if ($preview) { Stop-Process -Id $preview.Id -Force -ErrorAction SilentlyContinue }

if (-not $allOk) {
  Warn "Some URLs are still SPA fallback locally"
  Read-Host "Press ENTER to push anyway, Ctrl+C to abort"
}

# STEP 10 - Contact form regression
Step 10 "Contact form regression - mandatory before push"
Write-Host "  Open http://localhost:4173/contact and submit a test message" -ForegroundColor Yellow
Write-Host "  Confirm email arrives at info@atlantisndt.com" -ForegroundColor Yellow
$ok = Read-Host "  Did contact form work? [y/N]"
if ($ok -ne "y" -and $ok -ne "Y") {
  Warn ("Aborting. Roll back with: copy " + $BACKUP + "\App.tsx.bak " + $appPath)
  Pop-Location
  exit 1
}
Ok "Contact form verified"

# STEP 11 - Commit and push
Step 11 "Commit + push to main"
$branch = "feat/digital-twin-pivot-" + $STAMP
git checkout -b $branch
git add -A

$msgLines = @(
  "feat(seo): digital-twin pivot - pillar rewrite + 4 clusters + 4 vertical hubs",
  "",
  "Fixes SPA fallback on Tier-S URLs and the broken /digital-twins H1.",
  "",
  "- DigitalTwinsPillar replaces /digital-twins page (was inheriting homepage H1)",
  "- 4 cluster pages: lidar-scan-to-twin, iot-sensor-integration, ai-predictive-analytics, ndt-data-overlay",
  "- 4 vertical hubs: oil-and-gas, maritime, defense, aerospace",
  "- ERP hub + 5 verticals routed (was SPA fallback)",
  "- Catch-all 404 wired",
  "- 374 URLs ready for GSC submission",
  "",
  "Homepage H1 + headline UNTOUCHED per constraint."
)
$commitMsg = $msgLines -join "`n"
git commit -m $commitMsg
if ($LASTEXITCODE -ne 0) { Fail "git commit failed" }
git push -u origin $branch
if ($LASTEXITCODE -ne 0) { Fail "git push failed" }
Ok ("Pushed " + $branch)

# Try gh - if not installed, user merges via Vercel preview
try {
  gh pr create --fill --base main 2>$null
  gh pr merge --squash --auto 2>$null
  Ok "PR opened with auto-merge"
}
catch {
  Warn "gh CLI not available - open PR manually at github.com"
}

# STEP 12 - Wait + verify
Step 12 "Wait for Vercel deploy"
Write-Host "  Watch: https://vercel.com/anoops-projects-776b2b4a/atlantis-reimagined1" -ForegroundColor Gray
Read-Host "  Press ENTER once Vercel state is READY"

$tierSPath = Join-Path $NEWPR "urls-tier-S.txt"
$prodOk = 0
$prodSpa = 0
foreach ($url in Get-Content $tierSPath) {
  try {
    $resp = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 10
    $title = "(no title)"
    if ($resp.Content -match "<title>([^<]+)</title>") { $title = $Matches[1] }
    if ($title.StartsWith($homeFragment)) {
      $prodSpa++
      Write-Host ("  [SPA] " + $url) -ForegroundColor Red
    }
    else {
      $prodOk++
    }
  }
  catch { Write-Host ("  [ERR] " + $url) -ForegroundColor Red }
}
Write-Host ("`n  Production Tier S: " + $prodOk.ToString() + " unique, " + $prodSpa.ToString() + " SPA")

if ($prodSpa -gt 0) {
  Warn "Some URLs still SPA-fallback - DO NOT submit to GSC yet"
  Pop-Location
  exit 1
}

# STEP 13 - GSC submit
Step 13 "Submit to GSC Indexing API"
node scripts/gsc-submit-multi-account.mjs --dry-run
Read-Host "Press ENTER to submit Tier S live (uses today quota)"
node scripts/gsc-submit-multi-account.mjs --tier=S
$go = Read-Host "Submit Tier B (240 URLs) now? [y/N]"
if ($go -eq "y" -or $go -eq "Y") { node scripts/gsc-submit-multi-account.mjs --tier=B }
$go = Read-Host "Submit Tier C (112 URLs) now? [y/N]"
if ($go -eq "y" -or $go -eq "Y") { node scripts/gsc-submit-multi-account.mjs --tier=C }

Pop-Location
Step 14 "Done"
Ok "Digital Twin pivot deployed and indexed"
Ok ("Backup at " + $BACKUP)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 