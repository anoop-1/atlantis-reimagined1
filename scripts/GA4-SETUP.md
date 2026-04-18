# GA4 API Setup — Multi-Account & Multi-Property

Atlantis wants GA4 data for BOTH `atlantisndt.com` AND `ndt-connect.com` via the
same 10 service accounts already used for GSC indexing.

GA4 data API is a **read-only reporting API** — enabling it on 10 projects is
cheap (no quota concerns at this scale) but still must be done **per GCP
project**. This document lists exactly what you need to click and why.

---

## Why CLI cannot fully automate this

GA4 setup has two moving parts, both of which require browser action at least
once per account:

1. **Enable APIs per GCP project** — Google Cloud requires the human-readable
   "I agree to Terms of Service" screen on first API activation per project.
   A service account key cannot consent on its behalf.

2. **Grant property access in GA4 admin** — adding a service account as a
   Viewer of a GA4 property is done through the web admin UI. The GA4 Admin
   API can do this *programmatically* — but only after the Admin API itself
   is enabled (chicken-and-egg).

After one-time browser setup, every subsequent API call from any service
account works headlessly.

---

## Accounts to wire up

From the GSC configuration, 10 service accounts are already loaded. Each
needs GA4 access for both properties:

| # | Service account email                                   | GCP project             |
|---|---------------------------------------------------------|-------------------------|
| 0 | atlantismarketing@x-jigsaw-293515.iam.gserviceaccount.com | x-jigsaw-293515         |
| 1 | gsc-indexer@atlantis-gsc-2.iam.gserviceaccount.com     | atlantis-gsc-2          |
| 2 | gsc-indexer@atlantis-gsc-3.iam.gserviceaccount.com     | atlantis-gsc-3          |
| 3 | gsc-indexer@bustling-joy-492106-s3.iam.gserviceaccount.com | bustling-joy-492106-s3 |
| 4 | gsc-indexer@atlantis-gsc-5.iam.gserviceaccount.com     | atlantis-gsc-5          |
| 5 | gsc-indexer@atlantis-gsc-6.iam.gserviceaccount.com     | atlantis-gsc-6          |
| 6 | gsc-indexer@atlantis-gsc-7.iam.gserviceaccount.com     | atlantis-gsc-7          |
| 7 | gsc-indexer@atlantis-gsc-8.iam.gserviceaccount.com     | atlantis-gsc-8          |
| 8 | gsc-indexer@atlantis-gsc-9.iam.gserviceaccount.com     | atlantis-gsc-9          |
| 9 | gsc-indexer@atlantis-gsc-10.iam.gserviceaccount.com    | atlantis-gsc-10         |

GA4 properties:
- **atlantisndt.com** — Measurement ID `G-1EF92RXSVR`
- **ndt-connect.com** — (already deployed; GA4 property ID pending confirmation — find in GA4 Admin → Property Settings)

---

## Step 1 — Enable GA4 APIs per project (one click per API × 10 projects)

For each of the 10 projects, open both links, click Enable, wait ~30s:

**x-jigsaw-293515**
- https://console.developers.google.com/apis/api/analyticsdata.googleapis.com/overview?project=139446864572
- https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com/overview?project=139446864572

**atlantis-gsc-2** through **atlantis-gsc-10** and **bustling-joy-492106-s3**:
open Google Cloud Console, select the project, navigate to
`APIs & Services → Library`, search and Enable:
- `Google Analytics Data API`
- `Google Analytics Admin API`

Shortcut URL pattern (replace `PROJECT-ID`):
- `https://console.cloud.google.com/apis/library/analyticsdata.googleapis.com?project=PROJECT-ID`
- `https://console.cloud.google.com/apis/library/analyticsadmin.googleapis.com?project=PROJECT-ID`

Total time: ~10 minutes for all 10 projects × 2 APIs.

## Step 2 — Grant service accounts Viewer on BOTH GA4 properties

For each of the 10 service account emails above, add to each GA4 property:

1. Open https://analytics.google.com
2. Select the property (atlantisndt.com G-1EF92RXSVR)
3. Admin gear icon (bottom-left)
4. Property column → **Property Access Management**
5. Click `+` top-right → **Add users**
6. Paste service account email
7. Role: **Viewer** (sufficient for Data API reads)
8. Uncheck "Notify new users by email" (service accounts don't read email)
9. Save
10. Repeat for all 10 service accounts
11. Switch to ndt-connect.com property (top-left property selector)
12. Repeat steps 3-10 for ndt-connect.com

Total time: ~15 minutes (20 assignments).

## Step 3 — Verify with CLI

```bash
cd E:/software/Atlantis/atlantis-reimagined1
node scripts/ga4-analytics.mjs --list
```

Expected output: list of both properties accessible to
`atlantismarketing@x-jigsaw-293515.iam.gserviceaccount.com`.

Then run 28-day report:

```bash
node scripts/ga4-analytics.mjs --days 28
```

## Step 4 — Scaling beyond one account (optional)

GA4 Data API quotas are generous (500,000 tokens/day per property, per
service account) — far beyond what analytics dashboards consume. Using a
single service account is typically sufficient. Multi-account is only needed
if you hit token limits during bulk data export.

If multi-account parallelism is still desired, mirror the GSC multi-account
pattern: create `scripts/ga4-multi-account.mjs` that round-robins through
`scripts/gsc-accounts/account-N.json` for reads.

---

## What I can automate once APIs enabled

Once you complete Step 1 + Step 2, ping me. I will:

- Verify all 10 service accounts see both GA4 properties
- Pull 90-day engagement data (sessions, dwell time, bounce rate, conversions)
  per URL
- Correlate with GSC impressions/clicks/position data
- Identify which duplicate blog posts to consolidate (winner based on
  dwell time, not just clicks)
- Identify which DT/ERP/Reporting city pages are getting ANY traffic so we
  can prioritise further content investment
- Build automated weekly report combining GSC + GA4 for both domains
