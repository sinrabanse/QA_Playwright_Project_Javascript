import { expect, test } from "@playwright/test";

test.describe("loginLockedUser", () => {
  const baseURL = "https://www.saucedemo.com/inventory.html";
  const locked_out_user = "locked_out_user";
  const password = "secret_sauce";

  test("Valid", async ({ page }) => {
    const username_field = page.locator('[data-test="username"]');
    const password_field = page.locator('[data-test="password"]');
    const login_button = page.locator('[data-test="login-button"]');
    const title_page_locator = page.locator('//h3[@data-test="error"]');

    await page.goto(baseURL);
    await username_field.fill(locked_out_user);
    await password_field.fill(password);
    await login_button.click();
    await expect(title_page_locator).toHaveText(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
