import {expect, test} from '@playwright/test'
import {testData} from '../utils/testData.js'
import {testLocators} from '../utils/testLocators.js'
import {websiteURL} from '../utils/testURL.js'

test.describe('sanityTest1', () => {
    test('Valid', async ({page}) => { // Make a meaningful test case name. no one will know what you are testing here.
        await page.goto(websiteURL.baseURL)
        await page
            .locator(testLocators.username_field)
            .fill(testData.standard_user)
        await page.locator(testLocators.password_field).fill(testData.password)
        await page.locator(testLocators.login_button).click()
        await expect(page.locator(testLocators.title_page_locator)).toHaveText(
            testData.title_products_page,
        )
        await page
            .locator(testLocators.productCard_1)
            .locator(testLocators.addToCartButton_1)
            .click()
        await page
            .locator(testLocators.productCard_2)
            .locator(testLocators.addToCartButton_2)
            .click()
        await expect(page.locator(testLocators.cartNumber)).toHaveText('2')
        await page.locator(testLocators.cartButton).click()
        await expect(page).toHaveURL(websiteURL.cartURL)
        await expect(page.locator(testLocators.title_page_locator)).toHaveText(
            testData.title_cart_page,
        )
        await expect(page.locator(testLocators.cart_items)).toHaveCount(2)
        await page.locator(testLocators.checkoutButton).click()
        await expect(page).toHaveURL(websiteURL.checkoutURL)
        await expect(page.locator(testLocators.title_page_locator)).toHaveText(
            testData.title_checkout_page,
        )
        await page
            .locator(testLocators.firstNameLocator)
            .fill(testData.customer_first_name)
        await page
            .locator(testLocators.lastNameLocator)
            .fill(testData.customer_last_name)
        await page
            .locator(testLocators.postalCodeLocator)
            .fill(testData.customer_postal_code)
        await page.locator(testLocators.checkoutContinueButton).click()
        await expect(page).toHaveURL(websiteURL.checkoutsteptwoURL)
        await expect(page.locator(testLocators.title_page_locator)).toHaveText(
            testData.title_checkout_overview,
        )
        await page.locator(testLocators.finishButton).click()
        await expect(page).toHaveURL(websiteURL.finishURL)
        await expect(page.locator(testLocators.title_page_locator)).toHaveText(
            testData.title_checkout_complete,
        )
        await expect(
            page.locator(testLocators.thankYouMessageLocator),
        ).toHaveText(testData.thank_you_message)
        await expect(
            page.locator(testLocators.underThankYouMessageLocator),
        ).toHaveText(testData.under_thank_you_message)
    })
})
