import { expect, test } from "@playwright/test";
import { testData, validUsers } from "../../utils/testData.js";
import { testLocators } from "../../utils/testLocators.js";
import { websiteURL } from "../../utils/testURL.js";
import { testUIElements } from "../../utils/testUIElements.js";

test.describe("Validation valid users", () => {
  for (const user of validUsers) {
    test(`Testing with ${user}`, async ({ page }) => {
      await page.goto(websiteURL.baseURL);
      await page.locator(testLocators.username_field).fill(`${user}`);
      await page.locator(testLocators.password_field).fill(testData.password);
      await page.locator(testLocators.login_button).click();
      await expect(page.locator(testLocators.title_page_locator)).toHaveText(
        testUIElements.title_products_page
      );
    });
  }
});
