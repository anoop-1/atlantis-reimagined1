@echo off
REM Daily SEO Orchestrator wrapper
REM Invoked by Windows Scheduled Task `Daily-SEO-Orchestrator` at 7:00 AM daily.
REM Runs scripts/daily-seo-orchestrator.mjs and appends output to the log.

cd /d e:\software\Atlantis\atlantis-reimagined1

echo. >> scripts\daily-orchestrator.log
echo [%date% %time%] === Daily SEO Orchestrator START === >> scripts\daily-orchestrator.log

REM Prefer system node if available, otherwise just call `node` from PATH.
if exist "C:\Program Files\nodejs\node.exe" (
    "C:\Program Files\nodejs\node.exe" scripts\daily-seo-orchestrator.mjs >> scripts\daily-orchestrator.log 2>&1
) else (
    node scripts\daily-seo-orchestrator.mjs >> scripts\daily-orchestrator.log 2>&1
)

echo [%date% %time%] === Daily SEO Orchestrator END === >> scripts\daily-orchestrator.log
