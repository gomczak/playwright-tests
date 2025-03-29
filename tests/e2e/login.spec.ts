import { test, expect } from '@playwright/test';

test.describe('Login tests', {
    tag: '@logintag',
}, () => {
    test('log in page', async ({ page }) => {
        await page.goto('http://localhost:3000/login');
        await expect(page.locator('h2')).toHaveText('Log in');
    });

    test('log in page 2', async ({ page }) => {
        await page.goto('http://localhost:3000/login');
        await expect(page.locator('h2')).toHaveText('Log in');
    });
});