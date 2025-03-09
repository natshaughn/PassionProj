// import { test, expect } from '@playwright/test';
// import exp from 'constants';

// test('I am on the login page', async ({ page })=> {
//   await page.goto('https://www.saucedemo.com/');
//   await expect(page).toHaveTitle('Swag Labs');
// });

// test('I have logged in', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');

//   // Fill in the username and password fields using their IDs.
//   await page.locator('#user-name').fill('standard_user');
//   await page.locator('#password').fill('secret_sauce');

//   // Click the login button.
//   await page.locator('#login-button').click();
//   await expect(page).toHaveURL(/inventory.html/);
// });

// test('I enter the username', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('#user-name').fill('standard_user');
// })

// test('An error message should appear for incorrect login', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('#user-name').fill('wrong_user');
//   await page.locator('#password').fill('wrong_password');
//   await page.locator('#login-button').click();

//   const errorMessage = page.locator('[data-test="error"]');
//   await expect(errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service");
// });

// test('Add product to cart', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('#user-name').fill('standard_user');
//   await page.locator('#password').fill('secret_sauce');
//   await page.locator('#login-button').click();

//   // Add a product (example: Sauce Labs Backpack)
//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
// });

// test('I am on the inventory page', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('#user-name').fill('standard_user');
//   await page.locator('#password').fill('secret_sauce');
//   await page.locator('#login-button').click();
  
//   await expect(page.locator('.title')).toHaveText('Products');
// });

// test('The price of the product will be correct', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('#user-name').fill('standard_user');
//   await page.locator('#password').fill('secret_sauce');
//   await page.locator('#login-button').click();

//   const productName = 'Sauce Labs Backpack';
//   const expectedPrice = '$29.99';

//   const productLocator = page.locator('.inventory_item', { hasText: productName });
//   const actualPrice = productLocator.locator('.inventory_item_price');

//   await expect(actualPrice).toHaveText(expectedPrice);
// });

// test('Complete the checkout process', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('#user-name').fill('standard_user');
//   await page.locator('#password').fill('secret_sauce');
//   await page.locator('#login-button').click();

//   // Add a product
//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('.shopping_cart_link').click();

//   // Proceed to checkout
//   await page.locator('[data-test="checkout"]').click();
//   await page.locator('[data-test="firstName"]').fill('John');
//   await page.locator('[data-test="lastName"]').fill('Doe');
//   await page.locator('[data-test="postalCode"]').fill('12345');
//   await page.locator('[data-test="continue"]').click();
//   await page.locator('[data-test="finish"]').click();

//   await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
// });
