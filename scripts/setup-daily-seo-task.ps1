# ─────────────────────────────────────────────────────────────────────────────
# setup-daily-seo-task.ps1 — Register Windows Scheduled Task for daily SEO
# ─────────────────────────────────────────────────────────────────────────────
#
# WHAT IT DOES
#   Registers a Windows Scheduled Task named `Daily-SEO-Orchestrator` that runs
#   `scripts\daily-seo.bat` every day at 07:00 local time.
#   The orchestrator pulls fresh GSC/GA4 data, runs CTR-bleeders + joined
#   attribution, submits up to 2,000 URLs across 10 GSC service accounts,
#   computes daily deltas, and sends a Telegram summary.
#
#   Runs AFTER the existing `GSC-Priority-Indexing` task (06:00) so the
#   orchestrator sees the freshest indexing-progress data.
#
# HOW TO RUN (Administrator PowerShell required)
#   1. Open PowerShell as Administrator
#      (Win+X → "Windows PowerShell (Admin)" or "Terminal (Admin)")
#   2. cd e:\software\Atlantis\atlantis-reimagined1
#   3. powershell -ExecutionPolicy Bypass -File scripts\setup-daily-seo-task.ps1
#
# MANUAL FALLBACK (if you prefer the Task Scheduler GUI)
#   1. Win+R → taskschd.msc
#   2. Action → Create Basic Task…
#        Name:        Daily-SEO-Orchestrator
#        Description: Runs daily SEO maintenance (GSC/GA4 pull, indexing,
#                     bleeders detection, Telegram alert)
#        Trigger:     Daily, Start at 07:00
#        Action:      Start a program
#        Program:     e:\software\Atlantis\atlantis-reimagined1\scripts\daily-seo.bat
#        Start in:    e:\software\Atlantis\atlantis-reimagined1
#   3. After creation, edit the task → Settings tab:
#        - Allow task to run on demand
#        - Run task as soon as possible after a scheduled start is missed
#        - If task fails, restart every 30 minutes (max 3 attempts)
#
# UNINSTALL
#   Unregister-ScheduledTask -TaskName 'Daily-SEO-Orchestrator' -Confirm:$false
#
# DRY RUN (don't actually create the task — just validate paths)
#   .\scripts\setup-daily-seo-task.ps1 -DryRun
# ─────────────────────────────────────────────────────────────────────────────

[CmdletBinding()]
param(
    [switch]$DryRun,
    [string]$ProjectRoot = 'e:\software\Atlantis\atlantis-reimagined1',
    [string]$TaskName    = 'Daily-SEO-Orchestrator',
    [string]$TimeOfDay   = '07:00'
)

$ErrorActionPreference = 'Stop'

function Write-Section($msg) {
    Write-Host ''
    Write-Host '──────────────────────────────────────────────────────────' -ForegroundColor Cyan
    Write-Host $msg -ForegroundColor Cyan
    Write-Host '──────────────────────────────────────────────────────────' -ForegroundColor Cyan
}

Write-Section 'Daily SEO Orchestrator — Scheduled Task setup'

# ── Validate project root ───────────────────────────────────────────────────
if (-not (Test-Path $ProjectRoot)) {
    Write-Host "ERROR: ProjectRoot not found: $ProjectRoot" -ForegroundColor Red
    exit 1
}

$BatPath = Join-Path $ProjectRoot 'scripts\daily-seo.bat'
$OrchScript = Join-Path $ProjectRoot 'scripts\daily-seo-orchestrator.mjs'

if (-not (Test-Path $BatPath)) {
    Write-Host "ERROR: BAT wrapper not found: $BatPath" -ForegroundColor Red
    exit 1
}
if (-not (Test-Path $OrchScript)) {
    Write-Host "ERROR: Orchestrator script not found: $OrchScript" -ForegroundColor Red
    exit 1
}

Write-Host "ProjectRoot:  $ProjectRoot"
Write-Host "BAT wrapper:  $BatPath"
Write-Host "Orchestrator: $OrchScript"
Write-Host "Task name:    $TaskName"
Write-Host "Run time:     $TimeOfDay daily"

# ── Check admin ─────────────────────────────────────────────────────────────
$IsAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $IsAdmin -and -not $DryRun) {
    Write-Host ''
    Write-Host 'ERROR: This script must run elevated (as Administrator).' -ForegroundColor Red
    Write-Host '       Right-click PowerShell, choose "Run as Administrator", then re-run:' -ForegroundColor Red
    Write-Host "       powershell -ExecutionPolicy Bypass -File $($MyInvocation.MyCommand.Path)" -ForegroundColor Yellow
    exit 1
}

# ── Build task definition ───────────────────────────────────────────────────
Write-Section 'Building task definition'

$Action = New-ScheduledTaskAction `
    -Execute  $BatPath `
    -WorkingDirectory $ProjectRoot

$Trigger = New-ScheduledTaskTrigger `
    -Daily `
    -At $TimeOfDay

$Settings = New-ScheduledTaskSettingsSet `
    -AllowStartIfOnBatteries `
    -DontStopIfGoingOnBatteries `
    -StartWhenAvailable `
    -RunOnlyIfNetworkAvailable `
    -ExecutionTimeLimit (New-TimeSpan -Hours 2) `
    -RestartCount 3 `
    -RestartInterval (New-TimeSpan -Minutes 30)

$Principal = New-ScheduledTaskPrincipal `
    -UserId (whoami) `
    -LogonType Interactive `
    -RunLevel Limited

$Task = New-ScheduledTask `
    -Action $Action `
    -Trigger $Trigger `
    -Settings $Settings `
    -Principal $Principal `
    -Description 'Runs daily SEO maintenance (GSC/GA4 pull, indexing across 10 service accounts, bleeders detection, Telegram alert). Wraps scripts/daily-seo-orchestrator.mjs.'

if ($DryRun) {
    Write-Section 'DRY RUN — task definition only'
    Write-Host 'Task object built successfully. Re-run without -DryRun to register.'
    Write-Host ''
    Write-Host '(no changes made to the system)'
    exit 0
}

# ── Register / replace existing task ────────────────────────────────────────
$Existing = Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
if ($Existing) {
    Write-Host "Task `"$TaskName`" already exists — unregistering first…" -ForegroundColor Yellow
    Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
}

Write-Section 'Registering task'

try {
    Register-ScheduledTask `
        -TaskName $TaskName `
        -InputObject $Task | Out-Null
    Write-Host "Task `"$TaskName`" registered successfully." -ForegroundColor Green
}
catch {
    Write-Host "ERROR registering task: $_" -ForegroundColor Red
    Write-Host ''
    Write-Host 'Fallback: use the Task Scheduler GUI (taskschd.msc) — see header of this script.' -ForegroundColor Yellow
    exit 1
}

# ── Verify & display ────────────────────────────────────────────────────────
Write-Section 'Verification'

$Verify = Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
if ($Verify) {
    Write-Host ''
    Write-Host "Name:         $($Verify.TaskName)" -ForegroundColor Green
    Write-Host "State:        $($Verify.State)" -ForegroundColor Green
    Write-Host "Description:  $($Verify.Description)" -ForegroundColor Green
    Write-Host "Action:       $($Verify.Actions[0].Execute)" -ForegroundColor Green
    Write-Host "Trigger:      $($Verify.Triggers[0].StartBoundary) (Daily)" -ForegroundColor Green
    Write-Host ''
    Write-Host 'Next run:' -ForegroundColor Cyan
    (Get-ScheduledTaskInfo -TaskName $TaskName) | Format-List NextRunTime, LastRunTime, LastTaskResult, NumberOfMissedRuns
    Write-Host ''
    Write-Host 'TIP: Run it now to verify it works:' -ForegroundColor Cyan
    Write-Host "     Start-ScheduledTask -TaskName $TaskName" -ForegroundColor Cyan
    Write-Host '     Get-Content e:\software\Atlantis\atlantis-reimagined1\scripts\daily-orchestrator.log -Tail 20' -ForegroundColor Cyan
}
else {
    Write-Host 'WARN: task was not visible after registration. Check manually with:' -ForegroundColor Yellow
    Write-Host '      Get-ScheduledTask -TaskName Daily-SEO-Orchestrator' -ForegroundColor Yellow
}

Write-Host ''
Write-Host 'Done.' -ForegroundColor Green
