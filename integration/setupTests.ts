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

  await (page as any)._client.send("Animation.setPlaybackRate", {
    playbackRate: 1000,
  });

  // animation disabled
  await page.evaluate(() => {
    var newStyle = document.createElement("style");
    newStyle.innerText = `
*,
*::after,
*::before {
transition-delay: 0s !important;
transition-duration: 0s !important;
animation-delay: -0.0001s !important;
animation-duration: 0s !important;
animation-play-state: paused !important;
caret-color: transparent !important;
color-adjust: exact !important;
}
`;
    document.getElementsByTagName("HEAD").item(0).appendChild(newStyle);
  });
});
