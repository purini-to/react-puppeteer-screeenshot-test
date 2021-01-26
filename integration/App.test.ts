import { Page } from "puppeteer";

describe("app", () => {
  it("Home", async () => {
    await page.goto("http://localhost:3000");
    await waitTranslate(page);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it("Pricing", async () => {
    await page.goto("http://localhost:3000/pricing");
    await waitTranslate(page);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it("Users", async () => {
    await page.goto("http://localhost:3000/users");
    await waitTranslate(page);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

export async function waitTranslate(
  page: Page,
  interval: number = 200,
  timeout: number = 5000
) {
  const t0 = new Date().getTime();
  let previousImageBase64: string;
  while (new Date().getTime() - t0 < timeout) {
    await page.waitForTimeout(interval);

    const currentImageBase64 = await page.screenshot({
      encoding: "base64",
      fullPage: true,
    });
    if (previousImageBase64 == null) {
      previousImageBase64 = currentImageBase64;
      continue;
    }

    // 直前と現在の画像(Base64)が一致したらアニメーション完了とみなして待機終了する
    if (currentImageBase64 === previousImageBase64) {
      return true;
    }

    previousImageBase64 = currentImageBase64;
  }

  throw new Error(
    `waitTranslate アニメーションの待機でタイムアウトしました。${timeout}ms`
  );
}
