import { Page, expect } from '@playwright/test';
import { User } from '../utils/utils';

export class ForumsRegisterPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillRegistrationForm(user: User): Promise<void> {
        if (user.username)
            await this.page.locator('#username').fill(user.username);

        if (user.password)
            await this.page.locator('#new_password').fill(user.password);

        if (user.confirmPassword)
            await this.page.locator('#password_confirm').fill(user.confirmPassword);

        if (user.email)
            await this.page.locator('#email').fill(user.email);

        if (user.fullName)
            await this.page.locator('#pf_fullname').fill(user.fullName);

        if (user.timezoneLabel) {
            const timezoneSelect = this.page.locator('select#timezone');
            if (await timezoneSelect.isVisible()) {
                await timezoneSelect.selectOption({ label: user.timezoneLabel });
            } else {
                await this.page.locator('select[name="tz_date"]').selectOption({ label: user.timezoneLabel });
            }
        }
    }

    async submit(): Promise<void> {
        const submitBtn = this.page.locator('#submit');
        await expect(submitBtn).toBeVisible({ timeout: 5000 });
        await submitBtn.click();
    }

    async expectPublicEmailError(): Promise<void> {
        const error = this.page.locator('dd.error');
        await expect(error).toBeVisible({ timeout: 10000 });
        await expect(error).toHaveText(/Public email are not allowed/, { timeout: 10000 });
    }
}
