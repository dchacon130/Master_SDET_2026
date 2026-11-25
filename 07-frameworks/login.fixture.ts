import { test as base, expect } from '@playwright/test';
import { LoginPage } from './login.page';

export const test = base.extend<{ loginPage: LoginPage }>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await use(loginPage);
    }
});

export { expect }