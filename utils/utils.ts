import fs from 'fs';
import path from 'path';

import { Page } from '@playwright/test';

export type User = {
    id: string;
    username?: string | null;
    password?: string | null;
    confirmPassword?: string | null;
    email?: string | null;
    timezone?: string | null;
    timezoneLabel?: string | null;
    fullName?: string | null;
};

export function getUserById(id: string): User {
    const users: User[] = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, '../data/users.json'), 'utf-8')
    );
    const user = users.find((u) => u.id === id);
    if (!user) throw new Error(`User with id "${id}" not found`);
    return user;
}

export async function acceptCookiesIfPresent(page: Page): Promise<void> {
    const badge = page.locator('#cookiescript_badge');
    const accept = page.locator('#cookiescript_accept');

    if (await badge.isVisible({ timeout: 5000 })) {
        await badge.click();
    }

    if (await accept.isVisible({ timeout: 5000 })) {
        await accept.click();
    }
}
