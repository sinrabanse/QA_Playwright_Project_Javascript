import { expect, test } from "@playwright/test";
import { testData } from "../../utils/testData.js";
import { testLocators } from "../../utils/testLocators.js";
import { websiteURL } from "../../utils/testURL.js";
import { testAssertions } from "../../utils/testAssertions.js";

const users = [testData.standard_user, testData.incorrect_standard_user];

const passwords = [testData.password, testData.incorrect_password];

test.describe("IncorrectPassword", () => {
  for (const user of users) {
    test(`For ${user}`, async ({ page }) => {
      await page.goto(websiteURL.baseURL);
      await page.locator(testLocators.username_field).fill(`${user}`);
      await page
        .locator(testLocators.password_field)
        .fill(testData.incorrect_password);
      await page.locator(testLocators.login_button).click();
      await expect(page.locator(testLocators.error_page_locator)).toHaveText(
        testAssertions.wrong_pass_or_user_text
      );
    });
  }
});

test.describe("IncorrectUser", () => {
  for (const password of passwords) {
    test(`For ${password}`, async ({ page }) => {
      await page.goto(websiteURL.baseURL);
      await page
        .locator(testLocators.username_field)
        .fill(testData.incorrect_standard_user);
      await page.locator(testLocators.password_field).fill(`${password}`);
      await page.locator(testLocators.login_button).click();
      await expect(page.locator(testLocators.error_page_locator)).toHaveText(
        testAssertions.wrong_pass_or_user_text
      );
    });
  }
});

test.describe("IncorrectUserAndPassword", () => {
  test(`Valid`, async ({ page }) => {
    await page.goto(websiteURL.baseURL);
    await page
      .locator(testLocators.username_field)
      .fill(testData.incorrect_standard_user);
    await page
      .locator(testLocators.password_field)
      .fill(testData.incorrect_password);
    await page.locator(testLocators.login_button).click();
    await expect(page.locator(testLocators.error_page_locator)).toHaveText(
      testAssertions.wrong_pass_or_user_text
    );
  });
});

test.describe("Empty Fields", () => {
  test("Correct User Empty Password", async ({ page }) => {
    await page.goto(websiteURL.baseURL);
    await page
      .locator(testLocators.username_field)
      .fill(testData.standard_user);
    await page.locator(testLocators.login_button).click();
    await expect(page.locator(testLocators.error_page_locator)).toHaveText(
      testAssertions.requared_password_message
    );
  });
  test("Empty User Correct Password", async ({ page }) => {
    await page.goto(websiteURL.baseURL);
    await page.locator(testLocators.password_field).fill(testData.password);
    await page.locator(testLocators.login_button).click();
    await expect(page.locator(testLocators.error_page_locator)).toHaveText(
      testAssertions.requared_username_message
    );
  });
  test("Empty User Empty Password", async ({ page }) => {
    await page.goto(websiteURL.baseURL);
    await page.locator(testLocators.login_button).click();
    await expect(page.locator(testLocators.error_page_locator)).toHaveText(
      testAssertions.requared_username_message
    );
  });
});
