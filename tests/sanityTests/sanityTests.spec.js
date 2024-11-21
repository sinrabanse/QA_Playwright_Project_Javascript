import { expect, test } from "@playwright/test";
import { testData } from "../utils/testData.js";
import { testLocators } from "../utils/testLocators.js";
import { websiteURL } from "../utils/testURL.js";

test.describe.only("sanityTest1", () => {
  test("Valid", async ({ page }) => {
    await page.goto(websiteURL.baseURL);
    await page
      .locator(testLocators.username_field)
      .fill(testData.standard_user);
    await page.locator(testLocators.password_field).fill(testData.password);
    await page.locator(testLocators.login_button).click();
    await expect(page.locator(testLocators.title_page_locator)).toHaveText(
      "Products"
    );
    await page.locator(testLocators.addToCartButton_1).click();
    await page.locator(testLocators.addToCartButton_2).click();
    await expect(page.locator(testLocators.cartNumber)).toHaveText("2");
    await page.locator(testLocators.cartButton).click();
    await expect(page).toHaveURL(websiteURL.cartURL);
    await expect(page.locator(testLocators.title_page_locator)).toHaveText(
      "Your Cart"
    );
    await expect(page.locator(testLocators.cart_items)).toHaveCount(2);
    await page.locator(testLocators.checkoutButton).click();
    await expect(page).toHaveURL(websiteURL.checkoutURL);
    await expect(page.locator(testLocators.title_page_locator)).toHaveText(
      "Checkout: Your Information"
    );
    await page.locator(testLocators.firstNameLocator).fill("Aleks");
    await page.locator(testLocators.lastNameLocator).fill("Arkhipov");
    await page.locator(testLocators.postalCodeLocator).fill("4455666");
    await page.locator(testLocators.checkoutContinueButton).click();
    await expect(page).toHaveURL(websiteURL.checkoutsteptwoURL);
    await expect(page.locator(testLocators.title_page_locator)).toHaveText(
      "Checkout: Overview"
    );
    await page.locator(testLocators.finishButton).click();
    await expect(page).toHaveURL(websiteURL.finishURL);
    await expect(page.locator(testLocators.title_page_locator)).toHaveText(
      "Checkout: Complete!"
    );
    await expect(page.locator(testLocators.thankYouMessageLocator)).toHaveText(
      "Thank you for your order!"
    );
    await expect(
      page.locator(testLocators.underThankYouMessageLocator)
    ).toHaveText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
    console.log("Finish of test");

    //await page.pause();
  });
});
