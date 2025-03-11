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

  test('Add all 6 products to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await inventoryPage.addProductToCart('sauce-labs-bike-light');
    await inventoryPage.addProductToCart('sauce-labs-bolt-t-shirt');
    await inventoryPage.addProductToCart('sauce-labs-fleece-jacket');
    await inventoryPage.addProductToCart('sauce-labs-onesie');
    await inventoryPage.addProductToCart('test.allthethings()-t-shirt-(red)');
    await inventoryPage.verifyCartCount('6');
  });
  
});
