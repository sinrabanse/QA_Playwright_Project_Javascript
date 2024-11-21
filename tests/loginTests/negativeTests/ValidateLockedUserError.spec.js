import { expect, test } from "@playwright/test";
import { testData } from "../../utils/testData.js";
import { testLocators } from "../../utils/testLocators.js";
import { websiteURL } from "../../utils/testURL.js";
import { testAssertions } from "../../utils/testAssertions.js";

test.describe("loginLockedUser", () => {
  test("Valid", async ({ page }) => {
    await page.goto(websiteURL.baseURL);
    await page
      .locator(testLocators.username_field)
      .fill(testData.locked_out_user);
    await page.locator(testLocators.password_field).fill(testData.password);
    await page.locator(testLocators.login_button).click();
    await expect(page.locator(testLocators.error_page_locator)).toHaveText(
      testAssertions.locked_out_user_error_text
    );
  });
});
