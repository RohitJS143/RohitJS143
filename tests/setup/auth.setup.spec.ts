import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ENV } from '../../configs/env';

test('authenticate', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(ENV.USERNAME!, ENV.PASSWORD!);

  // Wait until login succeeds
  await page.waitForURL(/dashboard/);
  // await page.waitForLoadState('networkidle');

  await page.context().storageState({
    path: 'storage/auth.json'
  });

});