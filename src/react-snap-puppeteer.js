// react-snap-puppeteer.js
const chromium = require("chrome-aws-lambda");

module.exports = async () => {
   const executablePath = await chromium.executablePath;
   return {
      executablePath,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
   };
};
