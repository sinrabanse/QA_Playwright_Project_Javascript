import test from '@playwright/test' // Remove unused Imports
import {testData} from '../utils/testData.js'

export const testLocators = {
    username_field: '[data-test="username"]',
    password_field: '[data-test="password"]',
    login_button: '[data-test="login-button"]',
    title_page_locator: '//span[@class="title"]',
    productCard_1: `.inventory_item:has-text("${testData.productName_1}")`,
    addToCartButton_1: 'button:has-text("Add to cart")',
    productCard_2: `.inventory_item:has-text("${testData.productName_2}")`,
    addToCartButton_2: 'button:has-text("Add to cart")',
    cartNumber: '//span[@class="shopping_cart_badge"]',
    cartButton: '//a[@class="shopping_cart_link"]',
    cart_list: "//div[@class='cart_list']",
    cart_items: "//div[@class='cart_item']",
    checkoutButton: '//button[@id="checkout"]',
    firstNameLocator: '[data-test="firstName"]',
    lastNameLocator: '[data-test="lastName"]',
    postalCodeLocator: '[data-test="postalCode"]',
    checkoutContinueButton: '[data-test="continue"]',
    finishButton: '//button[@id="finish"]',
    thankYouMessageLocator: '//h2[@class="complete-header"]',
    underThankYouMessageLocator: '//div[@class="complete-text"]',
    error_page_locator: '//h3[@data-test="error"]',
}
