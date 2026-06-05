import { test, expect } from '@playwright/test';

test('Verify the fields in the Dashboard', async ({ page }) => {

  await page.goto('/dashboard');

  await expect(page).toHaveURL(/dashboard/);

});