# GSC Multi-Account Indexing Setup

## Why Multiple Accounts?

Google's Indexing API has a 200 URL/day limit **per GCP project**. By creating multiple projects, each with its own service account, you multiply your daily capacity:

| Accounts | Daily Rate | Days to Index 16,082 URLs |
|----------|-----------|--------------------------|
| 1        | 200/day   | 81 days                  |
| 3        | 600/day   | 27 days                  |
| 5        | 1,000/day | 17 days                  |
| 8        | 1,600/day | 11 days                  |
| 10       | 2,000/day | 9 days                   |

## Quick Setup (2 min per account)

### Step 1: Create a New GCP Project
1. Go to https://console.cloud.google.com/projectcreate
2. Name it: `atlantis-gsc-2` (then `atlantis-gsc-3`, etc.)
3. Organization: same as your existing project (x-jigsaw-293515)
4. Click **Create**

### Step 2: Enable the Indexing API
1. In the new project, go to: https://console.cloud.google.com/apis/library/indexing.googleapis.com
2. Click **Enable**
3. Also enable Web Search Indexing API if prompted

### Step 3: Create a Service Account
1. Go to: https://console.cloud.google.com/iam-admin/serviceaccounts/create
2. Name: `gsc-indexer` (or any name)
3. Click **Create and Continue**
4. Skip the optional steps, click **Done**
5. Click the new service account → **Keys** tab → **Add Key** → **Create new key** → **JSON**
6. Save the downloaded JSON file

### Step 4: Add as GSC Owner
1. Go to https://search.google.com/search-console
2. Click the **Settings** gear → **Users and permissions**
3. Click **Add user**
4. Email: paste the service account email from the JSON file (e.g. `gsc-indexer@atlantis-gsc-2.iam.gserviceaccount.com`)
5. Permission: **Owner**
6. Repeat for ALL your GSC properties (atlantisndt.com + all satellites)

### Step 5: Deploy the Key
1. Copy the downloaded JSON file to:
   `scripts/gsc-accounts/account-2.json`
   (name them account-2.json, account-3.json, etc.)

### Step 6: Test
```bash
node scripts/gsc-multi-account-submit.mjs --status
```

## Running Daily

```bash
# Manual run:
node scripts/gsc-multi-account-submit.mjs

# Dry run (preview without submitting):
node scripts/gsc-multi-account-submit.mjs --dry-run

# Check status:
node scripts/gsc-multi-account-submit.mjs --status

# Custom batch size per account:
node scripts/gsc-multi-account-submit.mjs 150
```

## File Structure

```
scripts/
├── gsc-service-account.json          ← Account #0 (existing)
├── gsc-accounts/
│   ├── account-2.json                ← Account #2
│   ├── account-3.json                ← Account #3
│   ├── account-4.json                ← Account #4
│   └── ...
├── gsc-multi-account-submit.mjs      ← New parallel submission script
├── gsc-multi-progress.json           ← Progress tracking (auto-created)
├── gsc-multi-submit.log              ← Run log (auto-created)
├── indexing-queue-smart.txt           ← URL queue (16,082 URLs)
└── gsc-daily-submit.bat              ← Windows scheduled task
```

## Recommended: 5 Accounts

We recommend 5 total accounts for optimal throughput:
- **1,000 URLs/day** → complete in ~17 days
- Fast enough to get indexed before competition
- Not so aggressive that Google flags unusual activity
