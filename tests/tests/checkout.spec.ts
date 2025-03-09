import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addProductToCart('sauce-labs-backpack');
  });

  test('User can complete the checkout process', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.proceedToCheckout();
    await checkoutPage.fillCheckoutDetails('John', 'Doe', '12345');
    await checkoutPage.completeCheckout();
    await checkoutPage.verifyOrderCompletion();
  });
});
