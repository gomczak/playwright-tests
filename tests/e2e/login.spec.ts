import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";


test.describe('Login tests', {
    tag: '@logintag',
}, () => {
    allure.epic("TEST Web interface");

    test('log in page', {
        annotation: {
            type: 'issue',
            description: 'https://github.com/microsoft/playwright/issues/23180',
        },
    },
        async ({ page }) => {
            await page.goto('http://localhost:3000/login');
            await expect(page.locator('h2')).toHaveText('Log in');
        });

    test('log in page 2', async ({ page }) => {
        await allure.epic("Web interface");
        await allure.feature("Essential features");
        await allure.story("Authentication");
        await allure.issue("123");
        await allure.link("ABC-123", "Related Jira issue", "jira");

        await page.goto('http://localhost:3000/login');
        await expect(page.locator('h2')).toHaveText('Log in');
    });
});