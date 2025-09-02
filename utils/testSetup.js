import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = base.extend({
  page: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('qa.superadmin@atxtrax.com','DiGi@dm2033');
    await use(page);
  }
});
