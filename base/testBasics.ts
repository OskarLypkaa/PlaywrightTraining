import { test as baseTest } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ForumsMainPage } from '../pages/forumsMainPage';
import { ForumsRegisterPage } from '../pages/forumsRegisterPage';
import { acceptCookiesIfPresent } from '../utils/utils';
import { config } from '../utils/config';

type Fixtures = {
    homePage: HomePage;
    forumsMainPage: ForumsMainPage;
    forumsRegisterPage: ForumsRegisterPage;
};

export const test = baseTest.extend<Fixtures>({
    homePage: async ({ page }, use) => {
        const home = new HomePage(page);
        await use(home);
    },
    forumsMainPage: async ({ page }, use) => {
        const forum = new ForumsMainPage(page);
        await use(forum);
    },
    forumsRegisterPage: async ({ page }, use) => {
        const register = new ForumsRegisterPage(page);
        await use(register);
    }
});

test.beforeEach(async ({ page }) => {
    await page.goto(config.baseUrl);
    await acceptCookiesIfPresent(page);
});

test.afterEach(async ({ page }) => {
    await page.close();
});
