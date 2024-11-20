import { expect, test } from "@playwright/test";

test.describe("loginEmptyUserCorrectPassword", () => {
  const baseURL = "https://www.saucedemo.com/inventory.html";
  const password = "secret_sauce";

  test("Valid", async ({ page }) => {
    const password_field = page.locator('[data-test="password"]');
    const login_button = page.locator('[data-test="login-button"]');
    const title_page_locator = page.locator('//h3[@data-test="error"]');

    await page.goto(baseURL);
    await password_field.fill(password);
    await login_button.click();
    await expect(title_page_locator).toHaveText(
      "Epic sadface: Username is required"
    );
  });
});
