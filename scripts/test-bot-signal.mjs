// Regression test for the load-time bot signal in index.html (2026-10-11).
// Runs the exact inline gtag <script> from index.html in a sandbox and checks:
//   - real-visitor environments (desktop/mobile browsers, in-app browsers, phones
//     whose model names contain "bot", IE11 without navigator.languages, iOS
//     webviews with outerWidth 0, background tabs with innerWidth 0) get the plain
//     gtag('config', id) call, unchanged;
//   - automation, headless, crawler and speed-test environments get
//     traffic_type 'bot_suspect' + bot_signal on the config, and bot_suspect=1.
// The GA4 data filter (Internal traffic, value bot_suspect) depends on this, so a
// broadened pattern that catches a real visitor must fail here, not in GA4.
// Run: node scripts/test-bot-signal.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]).find((s) => s.includes("gtag('config'"));
assert.ok(script, 'inline gtag script not found in index.html');
const MEASUREMENT_ID = (script.match(/gtag\('config', '(G-[A-Z0-9]+)'/) || [])[1];
assert.equal(MEASUREMENT_ID, 'G-XQZQGSF245');

const CHROME_BRANDS = [{ brand: 'Google Chrome', version: '129' }, { brand: 'Chromium', version: '129' }, { brand: 'Not=A?Brand', version: '8' }];
function run({ ua, webdriver = false, languages = ['en-US', 'en'], screen = { width: 1920, height: 1080 }, brands, hostname = 'atlantisndt.com', outer = 1280, inner = 1280 }) {
  const navigator = { userAgent: ua, webdriver, languages };
  if (brands) navigator.userAgentData = { brands, mobile: false, platform: 'Windows' };
  // The sandbox global plays the browser's window, so bare `dataLayer` resolves as in a page.
  const win = { navigator, screen, location: { hostname }, outerWidth: outer, outerHeight: outer, innerWidth: inner, innerHeight: inner, addEventListener() {},
    document: { readyState: 'loading', createElement: () => ({}), head: { appendChild() {} } }, Date };
  win.window = win;
  vm.runInNewContext(script, win);
  // JSON round-trip: values created in the sandbox realm compare cleanly with deepStrictEqual.
  const calls = JSON.parse(JSON.stringify((win.dataLayer || []).map((a) => Array.from(a))));
  const config = calls.filter((c) => c[0] === 'config');
  const userProps = calls.filter((c) => c[0] === 'set' && c[1] === 'user_properties');
  return { config, userProps, calls };
}

const HUMANS = {
  'Chrome Windows': { ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36', brands: CHROME_BRANDS },
  'Edge': { ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0', brands: [{ brand: 'Microsoft Edge', version: '129' }, ...CHROME_BRANDS.slice(1)] },
  'Firefox': { ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0' },
  'Safari macOS': { ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15', screen: { width: 1512, height: 982 } },
  'iPhone Safari': { ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1', screen: { width: 390, height: 844 } },
  'iPhone LinkedIn in-app (outerWidth 0)': { ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [LinkedInApp]/9.29.8740', screen: { width: 390, height: 844 }, outer: 0 },
  'iPhone Instagram in-app': { ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 341.0.4.27.95 (iPhone14,5; iOS 17_5; en_US; en; scale=3.00; 1170x2532; 627117405)' },
  'Chrome iOS': { ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/129.0.6668.69 Mobile/15E148 Safari/604.1' },
  'Android Facebook in-app (WebView)': { ua: 'Mozilla/5.0 (Linux; Android 14; SM-S918B Build/UP1A.231005.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/129.0.6668.81 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/483.0.0.48.62;]' },
  'Samsung Internet': { ua: 'Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/26.0 Chrome/122.0.0.0 Mobile Safari/537.36', brands: [{ brand: 'Samsung Internet', version: '26' }] },
  'CUBOT phone': { ua: 'Mozilla/5.0 (Linux; Android 11; CUBOT X50 Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.71 Mobile Safari/537.36' },
  'CUBOT phone (underscore)': { ua: 'Mozilla/5.0 (Linux; Android 9; CUBOT_P30) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.71 Mobile Safari/537.36' },
  'Opera': { ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 OPR/114.0.0.0' },
  'UC Browser': { ua: 'Mozilla/5.0 (Linux; U; Android 10; en-US; RMX2185 Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 UCBrowser/13.4.0.1306 Mobile Safari/537.36' },
  'WeChat in-app': { ua: 'Mozilla/5.0 (Linux; Android 13; V2219A Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5023 MMWEBSDK/20230202 MicroMessenger/8.0.33.2320(0x28002151) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64', languages: ['zh-CN'] },
  'Huawei Browser': { ua: 'Mozilla/5.0 (Linux; Android 12; HarmonyOS; NOH-AN00; HMSCore 6.13.0.302) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.196 HuaweiBrowser/15.0.4.312 Mobile Safari/537.36' },
  'Teams desktop webview': { ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0 Teams/24215.1007.3082.1590/49' },
  'IE11 (no navigator.languages)': { ua: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko', languages: undefined },
  'Chrome background tab (innerWidth 0)': { ua: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36', inner: 0, brands: CHROME_BRANDS },
  'Square-ish monitor 1920x1920': { ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36', screen: { width: 1920, height: 1920 } },
  'Laptop 1366x768': { ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36', screen: { width: 1366, height: 768 } },
};
const NORMAL_UA = HUMANS['Chrome Windows'].ua;
const BOTS = {
  webdriver: [{ ua: NORMAL_UA, webdriver: true, brands: CHROME_BRANDS }],
  user_agent: [
    { ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/129.0.0.0 Safari/537.36' },
    { ua: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.6668.70 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' },
    { ua: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36' },
    { ua: 'Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36 Chrome-Lighthouse' },
    { ua: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36 (compatible; Google-InspectionTool/1.0;)' },
    { ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 GTmetrix' },
    { ua: 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)' },
    { ua: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)' },
    { ua: 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)' },
    { ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 PTST/240901.120000' },
  ],
  ua_brand: [{ ua: NORMAL_UA, brands: [{ brand: 'HeadlessChrome', version: '129' }, { brand: 'Chromium', version: '129' }] }],
  no_languages: [{ ua: NORMAL_UA, languages: [] }, { ua: NORMAL_UA, languages: '' }],
  zero_screen: [{ ua: NORMAL_UA, screen: { width: 0, height: 0 } }],
  screen_1366: [{ ua: NORMAL_UA, screen: { width: 1366, height: 1366 } }],
};

for (const [name, env] of Object.entries(HUMANS)) {
  const r = run(env);
  assert.deepEqual(r.config, [['config', 'G-XQZQGSF245']], `real visitor flagged: ${name}`);
  assert.equal(r.userProps.length, 0, `real visitor got bot_suspect: ${name}`);
}
let botCases = 0;
for (const [signal, envs] of Object.entries(BOTS)) {
  for (const env of envs) {
    const r = run(env);
    assert.deepEqual(r.config, [['config', 'G-XQZQGSF245', { traffic_type: 'bot_suspect', bot_signal: signal }]], `${signal}: ${env.ua}`);
    assert.deepEqual(r.userProps, [['set', 'user_properties', { bot_suspect: '1' }]]);
    botCases++;
  }
}
// Off the production hostnames nothing is configured at all.
assert.equal(run({ ua: NORMAL_UA, hostname: 'localhost' }).config.length, 0);
console.log(`Bot signal passed: ${Object.keys(HUMANS).length} real-visitor environments untouched, ${botCases} bot environments tagged traffic_type=bot_suspect.`);
