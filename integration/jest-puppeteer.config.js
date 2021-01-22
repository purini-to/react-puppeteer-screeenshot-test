const viewport = {
  width: 1366,
  height: 768,
};

module.exports = {
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-infobars",
    `--window-size=${viewport.width},${viewport.height}`,
  ],
  defaultViewport: {
    width: viewport.width,
    height: viewport.height,
  },
  browserContext: "incognito",
  server: {
    command: `BROWSER=none npm start`,
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  },
};
