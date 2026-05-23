# Register daily GSC tracker cron — manual step

The 30-day tracker runs daily to measure progress vs the 4,000-clicks goal. The auto-registration was blocked (Claude can't create persistent Windows Scheduled Tasks). Run the PowerShell snippet below once, as Anoop, in an elevated PowerShell window.

```powershell
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -ExecutionPolicy Bypass -Command `"cd 'E:\software\Atlantis\atlantis-reimagined1'; node scripts/gsc-30day-tracker.mjs >> scripts/30day-tracker-snapshots/daily.log 2>&1`""
$trigger = New-ScheduledTaskTrigger -Daily -At 9:00AM
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -DontStopOnIdleEnd -ExecutionTimeLimit (New-TimeSpan -Minutes 15)
$principal = New-ScheduledTaskPrincipal -UserId "$env:USERDOMAIN\$env:USERNAME" -LogonType Interactive -RunLevel Limited
Register-ScheduledTask -TaskName "Atlantis-GSC-30day-Tracker" -Action $action -Trigger $trigger -Settings $settings -Principal $principal -Description "Daily 30-day ERP+DT click tracker vs 4000-clicks goal" -Force
Get-ScheduledTask -TaskName "Atlantis-GSC-30day-Tracker"
```

After running once: confirms registration. Daily snapshots saved to `scripts/30day-tracker-snapshots/{date}.json`. Log to `daily.log`.

Verify next run:
```powershell
Get-ScheduledTask -TaskName "Atlantis-GSC-30day-Tracker" | Get-ScheduledTaskInfo | Select-Object NextRunTime, LastRunTime, LastTaskResult
```

To remove later:
```powershell
Unregister-ScheduledTask -TaskName "Atlantis-GSC-30day-Tracker" -Confirm:$false
```

Alternate — if you prefer a manual run pattern, just `cd e:\software\Atlantis\atlantis-reimagined1 && node scripts/gsc-30day-tracker.mjs` every morning.
