import { expect, test } from "@playwright/test";
import { testLocators } from "../../utils/testLocators.js";
import { websiteURL } from "../../utils/testURL.js";
import { loginTestCases } from "../../utils/loginTestCases.js";

loginTestCases.forEach(({ user, password, error_message }) => {
  test.describe(`Testing with user: ${user}, password: ${password}`, () => {
    test(`Valid`, async ({ page }) => {
      await page.goto(websiteURL.baseURL);
      await page.locator(testLocators.username_field).fill(user || "");
      await page.locator(testLocators.password_field).fill(password || "");
      await page.locator(testLocators.login_button).click();
      await expect(page.locator(testLocators.error_page_locator)).toHaveText(
        error_message
      );
    });
  });
});
