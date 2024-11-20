import { expect, test } from "@playwright/test";

test.describe("loginPerformanceGlitchUser", () => {
  const baseURL = "https://www.saucedemo.com/inventory.html";
  const performance_glitch_user = "performance_glitch_user";
  const password = "secret_sauce";

  test("Valid", async ({ page }) => {
    const username_field = page.locator('[data-test="username"]');
    const password_field = page.locator('[data-test="password"]');
    const login_button = page.locator('[data-test="login-button"]');
    const title_page_locator = page.locator('//span[@class="title"]');

    await page.goto(baseURL);
    await username_field.fill(performance_glitch_user);
    await password_field.fill(password);
    await login_button.click();
    await expect(title_page_locator).toHaveText("Products");
  });
});
