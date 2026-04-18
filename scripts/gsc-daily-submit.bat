@echo off
REM GSC Multi-Account Daily Submission
REM Runs all service accounts in parallel (200 URLs each)
REM Add to Windows Task Scheduler for daily automated runs

cd /d "C:\Users\anuan\Documents\software\Atlantis\atlantis-reimagined1"

echo [%date% %time%] Starting multi-account GSC submission >> "scripts\gsc-multi-submit.log"

REM Use multi-account script (falls back to single account if no extras configured)
"C:\Program Files\nodejs\node.exe" "scripts\gsc-multi-account-submit.mjs" >> "scripts\gsc-multi-submit.log" 2>&1

echo [%date% %time%] Submission complete >> "scripts\gsc-multi-submit.log"
