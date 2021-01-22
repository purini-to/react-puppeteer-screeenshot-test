module.exports = {
  preset: "jest-puppeteer",
  testRunner: "jest-circus/runner",
  setupFilesAfterEnv: ["./setupTests.ts"],
  testMatch: ["**/?(*.)+(spec|test).[t]s"],
  testPathIgnorePatterns: ["/node_modules/", "build"], //
  transform: {
    "^.+\\.ts?$": "react-scripts/config/jest/babelTransform",
  },
  cacheDirectory: "../node_modules/.cache/jest",
};
