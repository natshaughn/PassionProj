import { Page, expect } from '@playwright/test';

export class InventoryPage {
  private page: Page;
  private pageTitle = '.title';
  private cartBadge = '.shopping_cart_badge';

  constructor(page: Page) {
    this.page = page;
  }

  async verifyOnInventoryPage() {
    await expect(this.page.locator(this.pageTitle)).toHaveText('Products');
  }

  async addProductToCart(productId: string) {
    const selector = `[data-test="add-to-cart-${productId}"]`;
    await this.page.waitForSelector(selector, { state: 'visible' });
    const button = this.page.locator(selector);
    await button.scrollIntoViewIfNeeded();
    await button.click({ force: true });
  }
  
  

  async verifyCartCount(expectedCount: string) {
    await expect(this.page.locator(this.cartBadge)).toHaveText(expectedCount);
  }

  async verifyProductPrice(productName: string, expectedPrice: string) {
    const productLocator = this.page.locator('.inventory_item', { hasText: productName });
    const priceLocator = productLocator.locator('.inventory_item_price');
    await expect(priceLocator).toHaveText(expectedPrice);
  }
}
