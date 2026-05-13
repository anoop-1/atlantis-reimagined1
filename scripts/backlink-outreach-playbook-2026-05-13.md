# Atlantis NDT — Backlink Outreach Playbook
Date: 2026-05-13
Owner: Anoop Rayavarapu

## Purpose
Manual, sustainable backlink outreach for atlantisndt.com and (where appropriate) ndtconnect.com. Goal is durable referral traffic and topical authority in NDT-specific channels — not generic SEO link volume.

## Cadence

- 5 outreach emails per business day, maximum.
- 25 outreach emails per week, maximum.
- Never exceed these numbers, even on a productive day. This is a discipline rule.
- One LinkedIn group post per week per group, maximum.
- Forum participation is daily, but only when there is a genuine question to answer.
- One trade publication pitch per editor per quarter, maximum. Do not re-pitch the same editor on a different angle until 90 days pass with no response.

## Daily Routine (about 30 to 45 minutes)

1. Open `backlink-targets-2026-05-13.csv`. Pick five P1 targets first, then drop to P2 once P1 is exhausted.
2. For each target, do a 2 to 5 minute fresh check on their site: latest article, recent member announcement, upcoming event. Use this to personalize the opening line.
3. Draft from the matching template in `backlink-outreach-templates-2026-05-13.md`. Replace every bracketed placeholder. Verify the contact email if it is marked "(verify before sending)".
4. Send. BCC anoop@atlantisinspection.com.
5. Log the row in `backlink-tracking-2026-05-13.csv` immediately, with follow_up_date set to send-date + 10 business days.

## Anti-Spam Rules (hard)

- No mass automation. No mail-merge tools that send to 50 addresses in one go.
- No purchased contact lists.
- No scraping LinkedIn member lists for cold email.
- No "drip sequences" that fire automatically without manual review.
- Every email is personalized in at least one specific way (recent article, recent announcement, named program). If you cannot personalize, do not send.
- No identical body sent to more than 5 targets in a week. Vary opening and angle.
- If a recipient asks to be removed, remove immediately and log it. Do not re-contact for 12 months.

## Response Handling

- "Yes, send more info" — reply within 24 business hours with the specific asset they asked for and a single follow-up CTA (call, demo, or content delivery). Do not over-send.
- "Maybe later" or "circle back in Q4" — log the requested date in `follow_up_date` and stop until then. Honor the date.
- "No, not interested" — thank them, mark response = N, do not push. One-line thank-you reply is enough.
- No response after 10 business days — one follow-up email, shorter, referencing the original. Maximum one follow-up. Then stop and mark response = N.
- Auto-replies or bounces — verify the email, update the targets CSV with the correct address, do not retry the same bounced address.

## What to Do When You Get a "No"

- Mark response = N, link_acquired = N, in the tracker.
- Do not argue. Do not pitch a different angle in the same thread.
- If they cite a specific reason ("we do not link to commercial products"), respect it. Move that target to a P3 review queue and revisit only if Atlantis content changes substantially (e.g., a published industry whitepaper that qualifies as editorial content).
- Avoid burning the relationship — these communities are small and reputational.

## Risks to Avoid

- Private blog networks (PBNs). Do not buy or trade links with networks of low-quality sites. Google detects these and devalues the entire domain.
- Reciprocal link rings. A small number of natural reciprocal links is fine. Coordinated reciprocal exchanges with 10-plus partners is not.
- Paid links without `rel="sponsored"`. If money changes hands, the link must be tagged sponsored or nofollow, per Google guidelines.
- Comment spam. Do not drop links in unrelated blog comments or forum threads.
- Identical anchor text across many sources. Vary anchor text naturally. Brand mentions ("Atlantis NDT") are fine; over-optimized commercial anchors ("best NDT ERP software") are a flag.
- Forum self-promotion without disclosure. Always use the disclosure line from Template 4.

## Sample Timeline

3-month goals (by 2026-08-13):
- 60 outreach emails sent (5/day x 12 weeks = 300 capacity, target conservative 60-120 actual).
- 8 to 15 confirmed backlinks acquired.
- 3 to 5 industry body directory listings live.
- 1 to 2 guest article placements accepted.
- 3 to 5 free template downloads featured in LinkedIn group posts.

6-month goals (by 2026-11-13):
- 25 to 40 confirmed editorial or directory backlinks across DA 40-plus domains.
- 1 to 2 published guest articles in Materials Evaluation, Inspectioneering, or NDT.net.
- Training partner cross-link agreements with 3 to 5 mid-tier training providers.
- Recurring forum presence on NDT.net forum, Inspectioneering, and one Reddit community.
- Measurable referral traffic from at least 5 of these sources (track in GA4).

## KPI Tracking

Track weekly in the tracker CSV:
- Emails sent (target 25/week, ceiling 25/week).
- Response rate = responses / emails sent.
- Positive response rate = "yes" or "send more" / emails sent.
- Link acquisition rate = links acquired / emails sent.
- Healthy benchmarks for cold outreach in B2B niche industries: 8 to 15 percent response, 1 to 4 percent link acquisition. If you fall below these for two consecutive weeks, the issue is almost always targeting or personalization quality, not volume — do not increase volume to compensate.

Track monthly in GA4 or equivalent:
- Referral sessions from each linking domain.
- Time on site and pages per session from referrals.
- Demo requests or template downloads attributable to referral traffic.

## When to Pause

Pause all outreach if any of these are true:
- A response trend goes negative (multiple "remove me" requests in one week).
- An industry body publicly comments that outreach felt spammy. Investigate and fix before resuming.
- The Atlantis product page or templates page is broken. Fix the destination before sending more referrers there.

## Owner Notes

This kit is for manual execution by Anoop. Do not delegate to a virtual assistant without first walking them through the anti-spam rules in person and giving them limited send authority (5/day cap enforced by review).
