import { expect, test } from "@playwright/test";
import {
  baseURL,
  standard_user,
  password,
} from "/Users/sinrabanse/PlayWrightProject/utils/testData.js";

test.describe("sanityTest1", () => {
  //const baseURL = "https://www.saucedemo.com/inventory.html";
  //const standard_user = "standard_user";
  //const password = "secret_sauce";

  //test
  test("Valid", async ({ page }) => {
    const username_field = page.locator('[data-test="username"]');
    const password_field = page.locator('[data-test="password"]');
    const login_button = page.locator('[data-test="login-button"]');
    const title_page_locator = page.locator('//span[@class="title"]');
    const productName_1 = "Sauce Labs Backpack";
    const productName_2 = "Sauce Labs Fleece Jacket";
    const productCard_1 = page.locator(
      `.inventory_item:has-text("${productName_1}")`
    );
    const addToCartButton_1 = productCard_1.locator(
      'button:has-text("Add to cart")'
    );
    const productCard_2 = page.locator(
      `.inventory_item:has-text("${productName_2}")`
    );
    const addToCartButton_2 = productCard_2.locator(
      'button:has-text("Add to cart")'
    );
    const cartNumber = page.locator('//span[@class="shopping_cart_badge"]');
    const cartButton = page.locator('//a[@class="shopping_cart_link"]');
    const cartURL = "https://www.saucedemo.com/cart.html";
    const cart_list = page.locator("//div[@class='cart_list']");
    const cart_items = cart_list.locator("//div[@class='cart_item']");
    const checkoutButton = page.locator('//button[@id="checkout"]');
    const checkoutURL = "https://www.saucedemo.com/checkout-step-one.html";
    const firstNameLocator = page.locator('[data-test="firstName"]');
    const lastNameLocator = page.locator('[data-test="lastName"]');
    const postalCodeLocator = page.locator('[data-test="postalCode"]');
    const checkoutContinueButton = page.locator('[data-test="continue"]');
    const checkoutsteptwoURL =
      "https://www.saucedemo.com/checkout-step-two.html";
    const finishButton = page.locator('//button[@id="finish"]');
    const finishURL = "https://www.saucedemo.com/checkout-complete.html";
    const thankYouMessageLocator = page.locator(
      '//h2[@class="complete-header"]'
    );
    const underThankYouMessageLocator = page.locator(
      '//div[@class="complete-text"]'
    );

    await page.goto(baseURL);
    await username_field.fill(standard_user);
    await password_field.fill(password);
    await login_button.click();
    await expect(title_page_locator).toHaveText("Products");
    console.log("We are on the page 'Products'");
    await addToCartButton_1.click();
    await addToCartButton_2.click();
    await expect(cartNumber).toHaveText("2");
    console.log("Number of products in cart is 2");
    await cartButton.click();
    await expect(page).toHaveURL(cartURL);
    await expect(title_page_locator).toHaveText("Your Cart");
    console.log("We are on the cart page");
    await expect(cart_items).toHaveCount(2);
    console.log("In the cart there are 2 items");
    await checkoutButton.click();
    await expect(page).toHaveURL(checkoutURL);
    await expect(title_page_locator).toHaveText("Checkout: Your Information");
    console.log("We are on the checkout page");
    await firstNameLocator.fill("Aleks");
    await lastNameLocator.fill("Arkhipov");
    await postalCodeLocator.fill("4455666");
    await checkoutContinueButton.click();
    await expect(page).toHaveURL(checkoutsteptwoURL);
    await expect(title_page_locator).toHaveText("Checkout: Overview");
    console.log("We are on the checkout overview page");
    await finishButton.click();
    await expect(page).toHaveURL(finishURL);
    await expect(title_page_locator).toHaveText("Checkout: Complete!");
    await expect(thankYouMessageLocator).toHaveText(
      "Thank you for your order!"
    );
    await expect(underThankYouMessageLocator).toHaveText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
    console.log("Finish of test");

    //await page.pause();
  });
});
