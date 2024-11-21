import {page} from '@playwright/test'

export const testLocators = {
    username_field: page.locator('[data-test="username"]'),
    password_field: page.locator('[data-test="password"]'),
    login_button: page.locator('[data-test="login-button"]'),
    title_page_locator: page.locator('//span[@class="title"]'),
    productCard_1: page.locator(`.inventory_item:has-text("${productName_1}")`),
    addToCartButton_1: productCard_1.locator('button:has-text("Add to cart")'),
    productCard_2: page.locator(`.inventory_item:has-text("${productName_2}")`),
    addToCartButton_2: productCard_2.locator('button:has-text("Add to cart")'),
    cartNumber: page.locator('//span[@class="shopping_cart_badge"]'),
    cartButton: page.locator('//a[@class="shopping_cart_link"]'),
    cart_list: page.locator("//div[@class='cart_list']"),
    cart_items: cart_list.locator("//div[@class='cart_item']"),
    checkoutButton: page.locator('//button[@id="checkout"]'),
    firstNameLocator: page.locator('[data-test="firstName"]'),
    lastNameLocator: page.locator('[data-test="lastName"]'),
    postalCodeLocator: page.locator('[data-test="postalCode"]'),
    checkoutContinueButton: page.locator('[data-test="continue"]'),
    finishButton: page.locator('//button[@id="finish"]'),
    thankYouMessageLocator: page.locator('//h2[@class="complete-header"]'),
    underThankYouMessageLocator: page.locator('//div[@class="complete-text"]'),
}
