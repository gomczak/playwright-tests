import { test, expect } from '@playwright/test';

test('log in page', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await expect(page.locator('h2')).toHaveText('Log in');
});