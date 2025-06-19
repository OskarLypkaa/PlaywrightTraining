import { test } from '../base/testBasics';
import { getUserById } from '../utils/utils';

test('Rejects public email on registration', async ({ homePage, forumsMainPage, forumsRegisterPage }) => {
    await test.step('Navigate to Registration Page', async () => {
        await homePage.navigateOnTabMenu('Support', 'R&D Forums');
        await forumsMainPage.clickRegisterLink();
        await forumsMainPage.agreeToTerms();
    });

    await test.step('Complete registration form', async () => {
        const user = getUserById('public_email_user');
        await forumsRegisterPage.fillRegistrationForm(user);
        await forumsRegisterPage.submit();
    });

    await test.step('Verify public email rejection error', async () => {
        await forumsRegisterPage.expectPublicEmailError();
    });
});
