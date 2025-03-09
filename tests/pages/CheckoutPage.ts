import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  private page: Page;
  private checkoutButton = '[data-test="checkout"]';
  private firstNameInput = '[data-test="firstName"]';
  private lastNameInput = '[data-test="lastName"]';
  private postalCodeInput = '[data-test="postalCode"]';
  private continueButton = '[data-test="continue"]';
  private finishButton = '[data-test="finish"]';
  private confirmationMessage = '.complete-header';

  constructor(page: Page) {
    this.page = page;
  }

  async proceedToCheckout() {
    await this.page.click('.shopping_cart_link');
    await this.page.click(this.checkoutButton);
  }

  async fillCheckoutDetails(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
  }

  async completeCheckout() {
    await this.page.click(this.finishButton);
  }

  async verifyOrderCompletion() {
    await expect(this.page.locator(this.confirmationMessage)).toHaveText('Thank you for your order!');
  }
}
