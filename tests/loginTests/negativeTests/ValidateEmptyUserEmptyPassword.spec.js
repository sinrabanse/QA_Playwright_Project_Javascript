import { expect, test } from "@playwright/test";

test.describe.only("loginEmptyUserEmptyPassword", () => {
  const baseURL = "https://www.saucedemo.com/inventory.html";

  test("Valid", async ({ page }) => {
    const login_button = page.locator('[data-test="login-button"]');
    const title_page_locator = page.locator('//h3[@data-test="error"]');

    await page.goto(baseURL);
    await login_button.click();
    await expect(title_page_locator).toHaveText(
      "Epic sadface: Username is required"
    );
  });
});
