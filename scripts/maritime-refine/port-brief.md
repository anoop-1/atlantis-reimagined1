<!-- Copied into the repo 2026-11-23 for the daily maritime runs (scripts/maritime-refine/RUNBOOK.md). Run commands from the repository root. -->
# Brief: maritime port pages, batch L (Australia, New Zealand, China, Turkey, UAE) for atlantisndt.com (2026-11-23)

Repo: the repository checkout (do NOT run git, do NOT run the site build, do NOT edit any file except the port JSON files you are assigned).

## What the page is for
Atlantis NDT is an NDT inspection company. Its maritime section offers ship inspection, led by ultrasonic thickness measurement (UTM / "gauging"): hull, tanks, decks, bulkheads, piping and scrubber piping, plus crack detection (MPI, dye penetrant) and other NDT. Each port gets one page at /maritime/{slug}. This batch adds ports outside the earlier European focus; the owner wants these pages to catch the attention of ship owners and technical managers, so make the jobs, facilities and planning sections genuinely useful to them. The reader is a ship superintendent, technical manager, ship owner or yard planner who needs a ship gauged at that port (for a special/renewal survey, intermediate survey, pre-docking steel estimate, CAP, owner's condition survey, pre-purchase inspection, condition monitoring, scrubber or piping check). The page must answer: what ships call here, where on this port a ship can actually be gauged (yards, drydocks, repair quays, lay-by berths, anchorages), what the regulatory picture is, what jobs we typically see here, and how a job gets organised.

Facts about Atlantis you may use (and nothing more):
- The inspection team is mobilised from India to the vessel for each job. There is NO office, agent, partner or staff at any port. Say this in your own words once (usually in the intro) and vary the wording; never say "our local team".
- Work is planned and supervised by the founder, Responsible NDT Level III (ASNT Level III UT, RT, MT, PT, VT). The template already says this; you do not need to.
- Atlantis is NOT class-approved as a thickness measurement firm; it is in the process of obtaining UR Z17 approval from DNV, Lloyd's Register and ABS. Never claim approval or class credit. Do not write about approvals yourself; the template adds the correct class-status paragraph and FAQ to every port page.

## Files
For each assigned port write `src/data/maritime-section/cities/{slug}.json`. The slug, name, country and region must match `src/data/maritime-section/city-list.json` exactly.

Read these before you start:
- `src/data/maritime-section/cities/shanghai.json`, `cities/singapore.json` (Asia), `cities/dubai.json` (Gulf) and `cities/istanbul.json` (Turkey): the exact JSON shape and the tone. For Chinese, Turkish and UAE ports also read the existing pages for the nearest ports (e.g. qingdao, tianjin, ningbo, istanbul, izmir, mersin, fujairah, sharjah) so your page takes a different angle and repeats none of their sentences.
- `src/data/maritime-section/model.mjs`, function `cityPage()` and the constants above it (SURVEY_TABLE, CYCLE_INTRO, ECA_PARA, STEPS, TEAM_PARAS, classApprovalText). This is the template text the page adds around your copy. Do not repeat it: no survey-cycle explanation, no step-by-step job process, no team/qualification paragraph, no class-approval text, no sulphur-cap sentence (the template adds the ECA paragraph from your `eca` value).
- If an existing port page covers a neighbouring place, read it so your page takes a different angle and repeats none of its sentences. New owner-service pages exist at /maritime/pre-purchase-inspection, /maritime/vessel-condition-survey, /maritime/condition-monitoring and /maritime/comprehensive-vessel-inspection-programme (being written now); you may refer to those services in `jobs`.

## JSON fields (all required)
- `slug`, `name`, `country`, `region` exactly as in city-list.json (Australia and New Zealand ports: "oceania"; Chinese ports: "asia"; Turkish ports: "europe"; Khor Fakkan: "middle-east").
- `title`: max 65 characters, unique. Must contain the port name and "Thickness" or "UTM" or "Gauging". Vary the pattern between your ports, e.g. "Ship Thickness Measurement in Harlingen | UTM & Hull Gauging", "Den Helder Ship Gauging: UTM for Offshore and Naval Craft", "Ultrasonic Thickness Gauging Terneuzen | Tankers & Bulkers".
- `description`: 120 to 160 characters (count them), unique; port name, the ship types and what we gauge.
- `h1`: a full heading with the port name, different wording from the title.
- `intro`: 60 to 95 words. The port, the ships, why a ship is gauged here, and (in your own words) that technicians travel from India to the ship.
- `keywords`: 8 to 12 search phrases people would type (lower case).
- `highlights`: exactly 3 objects `{ "h": "<= 8 words", "p": "35-55 words" }`, specific to this port.
- `port`: `{ "h": "...", "p": [3 paragraphs, 120-170 words each] }`: geography and approach, the traffic and ship types, berths, anchorages, seasons, ice, tides or locks where relevant.
- `facilities`: `{ "h": "...", "p": [2 paragraphs], "list": [4-7 short items] }`: where gauging can physically happen: named yards, drydocks, floating docks, repair quays, lay-by berths, lay-up areas, anchorages. Name a yard or terminal only when you are sure it exists and does that work today; otherwise describe it generically ("the port's repair quay", "a floating dock used by coasters and workboats"). For a small port without a drydock, say where ships from this port go for a docking (point to a nearby port) and what gauging is realistic here (alongside, at a lay-by berth, during a cargo stop or lay-up).
- `context`: `{ "h": "...", "p": [2 paragraphs] }`: port state control (Paris MoU, and also Black Sea MoU for Black Sea ports) and the national inspectorate by its correct name if you are sure of it; EU rules that drive gauging and inspection where relevant (e.g. the EU Ship Recycling Regulation's IHM requirement for ships calling EU ports, EU ETS, FuelEU Maritime); ice class for Baltic and northern ports; anything particular to the trade here. Do not restate the sulphur limit (the template does).
- `eca`: for this batch use `"none"` for every Australian, New Zealand, Chinese and UAE port and for Tuzla (Sea of Marmara); use `"eca-med"` for Aliağa and İskenderun (Mediterranean). (Reference, full rule: `"seca-north-sea-baltic"` (all Baltic ports; North Sea coasts south of 62°N and east of 4°W incl. east Scotland, Orkney and Shetland; English Channel east of 5°W and north of 48°30'N), `"eca-med"` (all Mediterranean ports, including the Adriatic and Aegean; NOT the Sea of Marmara or the Black Sea: the Mediterranean ECA ends at the entrance to the Dardanelles), `"none"` (Atlantic and Irish Sea coasts, Norway north of 62°N, Iceland, Faroe Islands, Black Sea). Do not mention future ECAs unless you have verified the facts.) China's own domestic emission control rules may be described in general terms only if you have verified them.
- `psc`: Turkish ports "Black Sea MoU and Mediterranean MoU"; Chinese ports "Tokyo MoU"; Khor Fakkan "Riyadh MoU"; New Zealand "Tokyo MoU"; Australia: check whether Australia belongs to the Tokyo MoU and the Indian Ocean MoU and write what you verify (the national authority is AMSA; New Zealand's is Maritime New Zealand; China's is the China Maritime Safety Administration). In `context`, cover what matters there: Australia's and New Zealand's biofouling rules for arriving ships (verify names and dates or describe generally), AMSA/Maritime NZ inspection focus, Chinese port state control and repair-yard practice, Turkish shipyard and ship recycling context (Aliağa is a ship recycling centre: the EU Ship Recycling Regulation list status of Aliağa yards must be verified before stating it), Gulf and Gulf of Oman trading for Khor Fakkan.
- `jobs`: `{ "h": "...", "p": "one paragraph, 100-140 words", "list": [4-6 items] }`: the gauging jobs we typically see at this port.
- `logistics`: one paragraph, 60-100 words: nearest international airport(s) and how the team reaches the port; visa lead times in general terms (Australian, New Zealand, Chinese, UAE or Turkish visa as applicable; for China also mention that a ship's agent invitation or port access paperwork may be needed, in general terms); port access through the ship's agent. Do not claim travel times you are not sure of.
- `vessels`: 6 to 9 ship types that call here (short labels like "Coasters and short-sea general cargo ships").
- `faqs`: 4 or 5 objects `{ "q": "...", "a": "50-90 words" }`, specific to this port (e.g. can a ship be gauged at the anchorage; what about ice season; is there a drydock; can cargo holds be gauged during discharge). The template adds one more FAQ on class approval, so do not write that one.
- `nearby`: 3 to 6 slugs of the nearest ports, taken from city-list.json (other countries allowed).

**Port-specific copy must total at least 1,300 words** (intro + highlights + port + facilities + context + jobs + logistics + faqs). The validator counts it. Write real substance, not padding: if a small port has less going on, describe its actual traffic, its tidal/lock constraints, its fleet (dredgers, ferries, fishing vessels, offshore supply ships, tugs), seasonal patterns, and how gauging fits around them.

## Maritime terminology (use it correctly)
UTM / thickness measurement / gauging; TM report on the class formats; special survey (= renewal survey) at 5, 10, 15, 20, 25 years; intermediate survey; annual survey; docking survey; ESP (Enhanced Survey Programme, for oil/chemical tankers and bulk carriers); close-up survey (done by the class surveyor); CAP (Condition Assessment Programme, voluntary class rating charterers ask for); CAS (Condition Assessment Scheme, IMO, single-hull tankers; rare today); substantial corrosion, excessive corrosion, allowable diminution, pitting, grooving; steel renewal; pre-docking steel estimate; superintendent; owner's condition gauging; pre-purchase inspection; on-hire/off-hire; lay-by berth; lay-up; anchorage; STS; ballast tanks, cargo holds, double bottom, hopper tanks, topside tanks, cofferdams, void spaces; hatch covers and coamings; sea chests; scrubber (EGCS) wash-water and overboard piping; MPI (magnetic particle), DPI (dye penetrant); gas-free certificate and enclosed-space entry permit; IHM (Inventory of Hazardous Materials).

## Hard rules (the validator and the build fail on these)
- No prices or money words: never write price, prices, pricing, fee, fees, day rate, discount, cost-effective, cheap, low-cost, or a currency amount.
- No local presence: never "our local office/team/base", "office in", "our office", "our agents", "our partners", "subsidiary".
- Services we do NOT offer, do not mention at all: divers, diving, ROV, drones, rope access, NACE, AMPP, FROSIO, CSWIP, PCN, ISO 17020, ISO 17025, underwater inspection.
- No time promises: never "within 24 hours", "24-hour turnaround" or "mobilise within N hours"; mobilisation depends on visas and the vessel's schedule.
- Banned phrases: 24/7, guarantee, state-of-the-art, cutting-edge, world-class, look no further.
- No class-approval claim of any kind ("class-approved", "IACS-approved", "approved by DNV/ABS/LR...", "approved service supplier").
- No invented facts: no made-up yard names, dock dimensions, throughput figures, depths, distances, dates or statistics. If you are not sure, leave it out or describe it qualitatively.
- No sentence of 10+ words may appear in any other port or country record. Write fresh sentences; do not copy phrasing from the examples.
- British English spelling (harbour, organise, metre).
- Enquiries: the page has an enquiry form; you may tell readers to email info@atlantisndt.com (the only Atlantis email).

## Research
You may use at most 2 WebSearch calls per port (the budget is shared by other writers), and WebFetch only on URLs those searches return. Use them on the facts you are least sure of (which yard is active, what a small port actually handles). If search is unavailable, write from reliable knowledge and keep anything uncertain generic.

## Check your work
After writing each file run:
`node scripts/maritime-validate.mjs <slug> [<slug> ...]`
Fix every problem it reports and re-run until all your slugs pass (✓). The "sentence also in" check compares against every other record already on disk, including ones other writers are adding right now; if it flags a clash, reword your sentence.

## Report back (short)
The slugs written and the validator result, plus a list of any facts you included but are not fully sure of (so they can be checked).
