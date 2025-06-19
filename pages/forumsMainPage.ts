import { Page, expect } from '@playwright/test';

export class ForumsMainPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickRegisterLink(): Promise<void> {
        await this.page.locator('li.rightside a[href*="mode=register"]').click();
    }

    async agreeToTerms(): Promise<void> {
        await expect(this.page.locator('#agreed')).toBeVisible({ timeout: 10000 });
        await this.page.locator('#agreed').click();
    }
}
