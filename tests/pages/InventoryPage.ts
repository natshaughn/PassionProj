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
    await this.page.click(`[data-test="add-to-cart-${productId}"]`);
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
