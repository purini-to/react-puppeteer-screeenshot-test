describe("app", () => {
  it("Home", async () => {
    await page.goto("http://localhost:3000");
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it("Pricing", async () => {
    await page.goto("http://localhost:3000/pricing");
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it("Users", async () => {
    await page.goto("http://localhost:3000/users");
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
