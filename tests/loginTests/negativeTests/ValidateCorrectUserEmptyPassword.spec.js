import { expect, test } from "@playwright/test";

test.describe("loginCorrectUserEmptyPassword", () => {
  const baseURL = "https://www.saucedemo.com/inventory.html";
  const standard_user = "standard_user";

  test("Valid", async ({ page }) => {
    const username_field = page.locator('[data-test="username"]');
    const login_button = page.locator('[data-test="login-button"]');
    const title_page_locator = page.locator('//h3[@data-test="error"]');

    await page.goto(baseURL);
    await username_field.fill(standard_user);
    await login_button.click();
    await expect(title_page_locator).toHaveText(
      "Epic sadface: Password is required"
    );
  });
});
