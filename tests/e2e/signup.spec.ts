import { test, expect } from '@playwright/test';

test('sign up page', async ({ page }) => {
    await page.goto('http://localhost:3000/signup');
    await expect(page.locator('h2')).toHaveText('Sign up');
});