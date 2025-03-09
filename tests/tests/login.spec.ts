import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {
  test('User can visit the login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await expect(page).toHaveTitle('Swag Labs');
  });

  test('User can successfully log in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.assertLoginSuccessful();
  });

  test('User sees an error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('wrong_user', 'wrong_password');
    await loginPage.assertLoginError("Epic sadface: Username and password do not match any user in this service");
  });
});
