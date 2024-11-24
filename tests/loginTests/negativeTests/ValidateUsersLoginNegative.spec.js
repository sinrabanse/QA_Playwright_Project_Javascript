import {expect, test} from '@playwright/test'
import {testData} from '../../utils/testData.js'
import {testLocators} from '../../utils/testLocators.js'
import {websiteURL} from '../../utils/testURL.js'
import {testAssertions} from '../../utils/testAssertions.js'
// Separate the users data please. you need to make the test file clean and readable. Test files only contains tests.
;[
    // Why anonymous array?
    {
        user: testData.standard_user,
        password: testData.incorrect_password,
        error_message: testAssertions.wrong_pass_or_user_text,
    },
    {
        user: testData.incorrect_standard_user,
        password: testData.incorrect_password,
        error_message: testAssertions.wrong_pass_or_user_text,
    },
    {
        user: testData.incorrect_standard_user,
        password: testData.password,
        error_message: testAssertions.wrong_pass_or_user_text,
    },
    {
        user: testData.standard_user,
        password: null,
        error_message: testAssertions.requared_password_message, // you have a misspell here.
    },
    {
        user: null,
        password: testData.password,
        error_message: testAssertions.requared_username_message,
    },
    {
        user: null,
        password: null,
        error_message: testAssertions.requared_username_message,
    },
].forEach(({user, password, error_message}) => {
    // Why are you using forEach? forEach doesn't designed for this purpose. //
    // forEach() expects a synchronous function — it does not wait for promises. Make sure you are aware of the     implications while using promises (or async functions) as forEach callbacks.
    test.describe(`Testing with user: ${user}, password: ${password}`, () => {
        test(`Valid`, async ({page}) => {
            await page.goto(websiteURL.baseURL)
            await page.locator(testLocators.username_field).fill(user || '')
            await page.locator(testLocators.password_field).fill(password || '')
            await page.locator(testLocators.login_button).click()
            await expect(
                page.locator(testLocators.error_page_locator),
            ).toHaveText(error_message)
        })
    })
})
