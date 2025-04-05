import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";
import os from 'os';



test.describe('Login tests @loginTagTitle', {
    tag: '@logintag',
}, () => {
    test('log in page', {
        annotation: [
            {
                type: 'issue',
                description: 'https://github.com/microsoft/playwright/issues/23180'
            },
        ],
    },
        async ({ page }) => {
            await page.goto('http://localhost:3000/login');
            await expect(page.locator('h2')).toHaveText('Log in');
        });

    test('log in page 2', async ({ page }) => {
        await allure.epic("Web interface");
        await allure.feature("Essential features");
        await allure.story("Authentication");
        await allure.issue("AUTH-123");
        await allure.tms("123");
        await allure.link("ABC-123", "jira ticket", "jira");
        await allure.link("ABC-123", "", "xray");
        await allure.parameter("browser", "chrome");

        const environmentInfo = {
            os_platform: os.platform(),
            os_release: os.release(),
            os_version: os.version(),
            node_version: process.version,
            env_url: "https://env.example.com/",
        };

        console.log("Environment Info:", environmentInfo);

        await page.goto('http://localhost:3000/login');
        await expect(page.locator('h2')).toHaveText('Log in');
    });
});