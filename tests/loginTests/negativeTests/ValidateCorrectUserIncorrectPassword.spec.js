import { expect, test } from "@playwright/test";

test.describe("loginCorrectUserIncorrectPassword", () => {
  const baseURL = "https://www.saucedemo.com/inventory.html";
  const standard_user = "standard_user";
  const incorrect_password = "secret_sauc";

  test("Valid", async ({ page }) => {
    const username_field = page.locator('[data-test="username"]');
    const password_field = page.locator('[data-test="password"]');
    const login_button = page.locator('[data-test="login-button"]');
    const title_page_locator = page.locator('//h3[@data-test="error"]');

    await page.goto(baseURL);
    await username_field.fill(standard_user);
    await password_field.fill(incorrect_password);
    await login_button.click();
    await expect(title_page_locator).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
