import {expect, test} from '@playwright/test'
import {testData} from '../utils/testData.js'
import {testLocators} from '../utils/testLocators.js'
import {websiteURL} from '../utils/testURL.js'

test.describe('sanityTest1', () => {
    test('Valid', async ({page}) => {
        await page.goto(websiteURL.baseURL)
        await testLocators.username_field.fill(testData.standard_user)
        await testLocators.password_field.fill(testData.password)
        await testLocators.login_button.click()
        await expect(testLocators.title_page_locator).toHaveText('Products')
        console.log("We are on the page 'Products'")
        await testLocators.addToCartButton_1.click()
        await testLocators.addToCartButton_2.click()
        await expect(testLocators.cartNumber).toHaveText('2')
        console.log('Number of products in cart is 2')
        await testLocators.cartButton.click()
        await expect(page).toHaveURL(websiteURL.cartURL)
        await expect(testLocators.title_page_locator).toHaveText('Your Cart')
        console.log('We are on the cart page')
        await expect(testLocators.cart_items).toHaveCount(2)
        console.log('In the cart there are 2 items')
        await testLocators.checkoutButton.click()
        await expect(page).toHaveURL(websiteURL.checkoutURL)
        await expect(testLocators.title_page_locator).toHaveText(
            'Checkout: Your Information',
        )
        console.log('We are on the checkout page')
        await testLocators.firstNameLocator.fill('Aleks')
        await testLocators.lastNameLocator.fill('Arkhipov')
        await testLocators.postalCodeLocator.fill('4455666')
        await testLocators.checkoutContinueButton.click()
        await expect(page).toHaveURL(websiteURL.checkoutsteptwoURL)
        await expect(testLocators.title_page_locator).toHaveText(
            'Checkout: Overview',
        )
        console.log('We are on the checkout overview page')
        await testLocators.finishButton.click()
        await expect(page).toHaveURL(websiteURL.finishURL)
        await expect(testLocators.title_page_locator).toHaveText(
            'Checkout: Complete!',
        )
        await expect(testLocators.thankYouMessageLocator).toHaveText(
            'Thank you for your order!',
        )
        await expect(testLocators.underThankYouMessageLocator).toHaveText(
            'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
        )
        console.log('Finish of test')

        //await page.pause();
    })
})
