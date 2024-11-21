import {expect, test} from '@playwright/test'
import {testData} from '../../utils/testData.js'
import {testLocators} from '../../utils/testLocators.js'
import {websiteURL} from '../../utils/testURL.js'

test.describe('loginErrorUser', () => {
    test('Valid', async ({page}) => {
        const error_user = 'error_user'

        await page.goto(websiteURL.baseURL)
        await testLocators.username_field.fill(error_user)
        await testLocators.password_field.fill(testData.password)
        await testLocators.login_button.click()
        await expect(testLocators.title_page_locator).toHaveText('Products')
    })
})
