import {expect, test} from '@playwright/test'
import {testData} from '../../utils/testData.js'
import {testLocators} from '../../utils/testLocators.js'
import {websiteURL} from '../../utils/testURL.js'

const users = [
    testData.standard_user,
    testData.error_user,
    testData.performance_glitch_user,
    testData.problem_user,
    testData.visual_user,
] // Why not separating the users and just import them here and then iterate on them directly.

test.describe('loginUsers', () => {
    for (const user of users) {
        test(`Testing with ${user}`, async ({page}) => {
            await page.goto(websiteURL.baseURL)
            await page.locator(testLocators.username_field).fill(`${user}`)
            await page
                .locator(testLocators.password_field)
                .fill(testData.password)
            await page.locator(testLocators.login_button).click()
            await expect(
                page.locator(testLocators.title_page_locator),
            ).toHaveText('Products')
        })
    }
})
