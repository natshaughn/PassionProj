import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Inventory Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('User can access the inventory page', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.verifyOnInventoryPage();
  });

  test('User can add a product to the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await inventoryPage.verifyCartCount('1');
  });

  test('Product price is correct', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.verifyProductPrice('Sauce Labs Backpack', '$29.99');
  });
});
