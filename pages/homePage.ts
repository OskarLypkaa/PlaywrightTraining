import { Page, expect } from '@playwright/test';

export class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateOnTabMenu(tabName: string, linkName: string): Promise<void> {
        const tab = this.page.getByRole('button', { name: tabName });
        await expect(tab).toBeVisible({ timeout: 10000 });
        await tab.click();

        const link = this.page.getByRole('link', { name: linkName });
        await expect(link).toBeVisible({ timeout: 10000 });
        await link.click();
    }
}
