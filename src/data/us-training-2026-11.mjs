// US training pages (owner, 2026-11-10: "more training enquiries from the USA").
// GSC, USA, 3 months to 2026-11-09: national training searches land on these city and state pages
// ("ndt training" 515 impressions spread over 73 pages at p57-87; "ndt training near me" 406 at p26;
// "ndt certification near me" 277 at p20). Every one of them now:
//   1. shows the published US fee table and Register & Buy Now (paths added to the US region of
//      src/data/approved-training-fees.json from this list; check with scripts/us-training-2026-11.mjs), and
//   2. carries an intent-route block that says how training works from that place (online theory,
//      the Practical NDT simulator, hands-on at the employer's facility) and hands national intent to
//      /ndt-training-usa with an exact anchor (src/data/intent-routes-2026-10.mjs, kind "us-training").
// The list was generated from the 2026-11-10 build: /ndt-training-{slug} pages whose title names a US
// city, state or region. /ndt-training-usa itself is the owner page, so it is not in the list.
// Display names are the place as each page's own title writes it.
export const US_TRAINING_OWNER = "/ndt-training-usa";
export const US_TRAINING_PAGES = {
  "/ndt-training-aiken": "Aiken, SC",
  "/ndt-training-alabama": "Alabama",
  "/ndt-training-alaska": "Alaska",
  "/ndt-training-albuquerque": "Albuquerque, NM",
  "/ndt-training-anchorage": "Anchorage, AK",
  "/ndt-training-appalachia": "Appalachia",
  "/ndt-training-arizona": "Arizona",
  "/ndt-training-arkansas": "Arkansas",
  "/ndt-training-atlanta": "Atlanta, GA",
  "/ndt-training-austin": "Austin, TX",
  "/ndt-training-baltimore": "Baltimore, MD",
  "/ndt-training-bath-maine": "Bath, ME",
  "/ndt-training-baton-rouge": "Baton Rouge, LA",
  "/ndt-training-baytown": "Baytown, TX",
  "/ndt-training-beaumont": "Beaumont, TX",
  "/ndt-training-billings": "Billings, MT",
  "/ndt-training-boston": "Boston, MA",
  "/ndt-training-buffalo": "Buffalo, NY",
  "/ndt-training-california": "California",
  "/ndt-training-charlotte": "Charlotte, NC",
  "/ndt-training-chicago": "Chicago, IL",
  "/ndt-training-cincinnati": "Cincinnati, OH",
  "/ndt-training-cleveland": "Cleveland, OH",
  "/ndt-training-colorado": "Colorado",
  "/ndt-training-columbus-ohio": "Columbus, OH",
  "/ndt-training-connecticut": "Connecticut",
  "/ndt-training-corpus-christi": "Corpus Christi, TX",
  "/ndt-training-dallas": "Dallas, TX",
  "/ndt-training-deer-park": "Deer Park, TX",
  "/ndt-training-delaware": "Delaware",
  "/ndt-training-denver": "Denver, CO",
  "/ndt-training-des-moines": "Des Moines, IA",
  "/ndt-training-detroit": "Detroit, MI",
  "/ndt-training-duluth": "Duluth, MN",
  "/ndt-training-east-hartford": "East Hartford, CT",
  "/ndt-training-el-paso": "El Paso, TX",
  "/ndt-training-el-segundo": "El Segundo, CA",
  "/ndt-training-fayetteville": "Fayetteville, NC",
  "/ndt-training-florida": "Florida",
  "/ndt-training-fort-worth": "Fort Worth, TX",
  "/ndt-training-galveston": "Galveston, TX",
  "/ndt-training-georgia": "Georgia",
  "/ndt-training-great-lakes": "the Great Lakes",
  "/ndt-training-groton": "Groton, CT",
  "/ndt-training-gulf-coast": "the Gulf Coast",
  "/ndt-training-hawaii": "Hawaii",
  "/ndt-training-honolulu": "Honolulu, HI",
  "/ndt-training-houston": "Houston, TX",
  "/ndt-training-huntsville": "Huntsville, AL",
  "/ndt-training-idaho": "Idaho",
  "/ndt-training-idaho-falls": "Idaho Falls, ID",
  "/ndt-training-illinois": "Illinois",
  "/ndt-training-indiana": "Indiana",
  "/ndt-training-indianapolis": "Indianapolis, IN",
  "/ndt-training-iowa": "Iowa",
  "/ndt-training-jackson": "Jackson, MS",
  "/ndt-training-jacksonville": "Jacksonville, FL",
  "/ndt-training-kansas": "Kansas",
  "/ndt-training-kansas-city": "Kansas City, MO",
  "/ndt-training-kentucky": "Kentucky",
  "/ndt-training-lake-charles": "Lake Charles, LA",
  "/ndt-training-las-vegas": "Las Vegas, NV",
  "/ndt-training-lexington": "Lexington, KY",
  "/ndt-training-little-rock": "Little Rock, AR",
  "/ndt-training-los-angeles": "Los Angeles, CA",
  "/ndt-training-louisiana": "Louisiana",
  "/ndt-training-maine": "Maine",
  "/ndt-training-martinez": "Martinez, CA",
  "/ndt-training-maryland": "Maryland",
  "/ndt-training-massachusetts": "Massachusetts",
  "/ndt-training-miami": "Miami, FL",
  "/ndt-training-michigan": "Michigan",
  "/ndt-training-mid-atlantic": "the Mid-Atlantic",
  "/ndt-training-midland": "Midland, TX",
  "/ndt-training-midwest": "the Midwest",
  "/ndt-training-milwaukee": "Milwaukee, WI",
  "/ndt-training-minneapolis": "Minneapolis, MN",
  "/ndt-training-minnesota": "Minnesota",
  "/ndt-training-mississippi": "Mississippi",
  "/ndt-training-missouri": "Missouri",
  "/ndt-training-mobile": "Mobile, AL",
  "/ndt-training-montana": "Montana",
  "/ndt-training-montgomery": "Montgomery, AL",
  "/ndt-training-nashville": "Nashville, TN",
  "/ndt-training-nebraska": "Nebraska",
  "/ndt-training-nevada": "Nevada",
  "/ndt-training-new-hampshire": "New Hampshire",
  "/ndt-training-new-jersey": "New Jersey",
  "/ndt-training-new-mexico": "New Mexico",
  "/ndt-training-new-orleans": "New Orleans, LA",
  "/ndt-training-new-york": "New York, NY",
  "/ndt-training-newark": "Newark, NJ",
  "/ndt-training-newport-news": "Newport News, VA",
  "/ndt-training-norfolk": "Norfolk, VA",
  "/ndt-training-north-carolina": "North Carolina",
  "/ndt-training-north-charleston": "North Charleston, SC",
  "/ndt-training-north-dakota": "North Dakota",
  "/ndt-training-northeast": "the Northeast",
  "/ndt-training-oak-ridge": "Oak Ridge, TN",
  "/ndt-training-odessa": "Odessa, TX",
  "/ndt-training-ohio": "Ohio",
  "/ndt-training-oklahoma": "Oklahoma",
  "/ndt-training-oklahoma-city": "Oklahoma City, OK",
  "/ndt-training-omaha": "Omaha, NE",
  "/ndt-training-oregon": "Oregon",
  "/ndt-training-orlando": "Orlando, FL",
  "/ndt-training-pacific-northwest": "the Pacific Northwest",
  "/ndt-training-pasadena-texas": "Pasadena, TX",
  "/ndt-training-pascagoula": "Pascagoula, MS",
  "/ndt-training-pennsylvania": "Pennsylvania",
  "/ndt-training-permian-basin": "the Permian Basin",
  "/ndt-training-philadelphia": "Philadelphia, PA",
  "/ndt-training-phoenix": "Phoenix, AZ",
  "/ndt-training-pittsburgh": "Pittsburgh, PA",
  "/ndt-training-port-arthur": "Port Arthur, TX",
  "/ndt-training-portland": "Portland, OR",
  "/ndt-training-providence": "Providence, RI",
  "/ndt-training-rhode-island": "Rhode Island",
  "/ndt-training-richland": "Richland, WA",
  "/ndt-training-rockies-plains": "the Rockies & Plains",
  "/ndt-training-salt-lake-city": "Salt Lake City, UT",
  "/ndt-training-san-antonio": "San Antonio, TX",
  "/ndt-training-san-diego": "San Diego, CA",
  "/ndt-training-san-francisco": "San Francisco, CA",
  "/ndt-training-san-jose": "San Jose, CA",
  "/ndt-training-savannah": "Savannah, GA",
  "/ndt-training-seattle": "Seattle, WA",
  "/ndt-training-south-carolina": "South Carolina",
  "/ndt-training-south-dakota": "South Dakota",
  "/ndt-training-southeast": "the Southeast",
  "/ndt-training-southern-california": "Southern California",
  "/ndt-training-springfield": "Springfield, IL",
  "/ndt-training-st-louis": "St. Louis, MO",
  "/ndt-training-sugar-land": "Sugar Land, TX",
  "/ndt-training-tampa": "Tampa, FL",
  "/ndt-training-tennessee": "Tennessee",
  "/ndt-training-texas": "Texas",
  "/ndt-training-texas-city": "Texas City, TX",
  "/ndt-training-texas-inland": "Inland Texas",
  "/ndt-training-tulsa": "Tulsa, OK",
  "/ndt-training-utah": "Utah",
  "/ndt-training-vermont": "Vermont",
  "/ndt-training-virginia": "Virginia",
  "/ndt-training-washington": "Washington",
  "/ndt-training-washington-dc": "Washington, DC",
  "/ndt-training-west-coast": "the West Coast",
  "/ndt-training-west-virginia": "West Virginia",
  "/ndt-training-whiting": "Whiting, IN",
  "/ndt-training-wichita": "Wichita, KS",
  "/ndt-training-williston": "Williston, ND",
  "/ndt-training-wisconsin": "Wisconsin",
  "/ndt-training-wyoming": "Wyoming",
  "/ndt-training-sacramento": "Sacramento, CA", // 2026-11-11
  "/ndt-training-long-beach": "Long Beach, CA", // 2026-11-11
  "/ndt-training-bakersfield": "Bakersfield, CA", // 2026-11-11
  "/ndt-training-tucson": "Tucson, AZ", // 2026-11-11
  "/ndt-training-reno": "Reno, NV", // 2026-11-11
  "/ndt-training-colorado-springs": "Colorado Springs, CO", // 2026-11-11
  "/ndt-training-spokane": "Spokane, WA", // 2026-11-11
  "/ndt-training-tacoma": "Tacoma, WA", // 2026-11-11
  "/ndt-training-ogden": "Ogden, UT", // 2026-11-11
  "/ndt-training-farmington": "Farmington, NM", // 2026-11-11
  "/ndt-training-hobbs": "Hobbs, NM", // 2026-11-11
  "/ndt-training-casper": "Casper, WY", // 2026-11-11
  "/ndt-training-fairbanks": "Fairbanks, AK", // 2026-11-11
  "/ndt-training-lafayette": "Lafayette, LA", // 2026-11-11
  "/ndt-training-houma": "Houma, LA", // 2026-11-11
  "/ndt-training-shreveport": "Shreveport, LA", // 2026-11-11
  "/ndt-training-freeport": "Freeport, TX", // 2026-11-11
  "/ndt-training-brownsville": "Brownsville, TX", // 2026-11-11
  "/ndt-training-birmingham": "Birmingham, AL", // 2026-11-11
  "/ndt-training-memphis": "Memphis, TN", // 2026-11-11
  "/ndt-training-louisville": "Louisville, KY", // 2026-11-11
  "/ndt-training-knoxville": "Knoxville, TN", // 2026-11-11
  "/ndt-training-chattanooga": "Chattanooga, TN", // 2026-11-11
  "/ndt-training-greenville-south-carolina": "Greenville, SC", // 2026-11-11
  "/ndt-training-raleigh": "Raleigh, NC", // 2026-11-11
  "/ndt-training-wilmington-north-carolina": "Wilmington, NC", // 2026-11-11
  "/ndt-training-richmond": "Richmond, VA", // 2026-11-11
  "/ndt-training-lynchburg": "Lynchburg, VA", // 2026-11-11
  "/ndt-training-portsmouth-new-hampshire": "Portsmouth, NH", // 2026-11-11
  "/ndt-training-albany": "Albany, NY", // 2026-11-11
  "/ndt-training-erie": "Erie, PA", // 2026-11-11
  "/ndt-training-allentown": "Allentown, PA", // 2026-11-11
  "/ndt-training-toledo": "Toledo, OH", // 2026-11-11
  "/ndt-training-dayton": "Dayton, OH", // 2026-11-11
  "/ndt-training-grand-rapids": "Grand Rapids, MI", // 2026-11-11
  "/ndt-training-peoria": "Peoria, IL", // 2026-11-11
};
export const US_TRAINING_PATHS = Object.keys(US_TRAINING_PAGES);
