import "expect-puppeteer";
import { configureToMatchImageSnapshot } from "jest-image-snapshot";
import { ScreenshotOptions } from "puppeteer";

jest.setTimeout(10000);
jest.retryTimes(3);

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: {
    alpha: 0.3,
  },
  customSnapshotIdentifier: ({ defaultIdentifier }) => {
    return defaultIdentifier;
  },
});

expect.extend({
  toMatchImageSnapshot,
});

beforeEach(async () => {
  const screenshot = page.screenshot;
  (page as any).screenshot = async (options?: ScreenshotOptions) => {
    return screenshot.call(page, { fullPage: true, ...options });
  };
});
