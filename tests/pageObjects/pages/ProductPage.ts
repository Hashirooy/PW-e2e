import { Page, test } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
  readonly productTitle = this.page.locator(
    '[class="inventory_details_name large_size"]'
  );
  readonly productDetails = this.page.locator(
    '[class="inventory_details_desc large_size"]'
  );
  readonly productPrice = this.page.locator(
    '[class="inventory_details_price"]'
  );
  readonly addToCardButton = this.page.locator(
    "[class='btn btn_primary btn_small btn_inventory']"
  );
  readonly backToProductButton = this.page.locator("[id='back-to-products']");
  readonly goToCart = this.page.locator("[id='shopping_cart_container']");
  constructor(page: Page) {
    super(page);
  }

  async ClickBackToProduct() {
    test.step("Нажатие на кнопку назад к продуктам", async () => {
      await this.backToProductButton.click();
    });
  }

  async ClickAddToCardButton() {
    test.step("Нажатие на кнопку Добавить товар", async () => {
      await this.addToCardButton.click();
    });
  }

  async ClickGoToCart() {
    test.step("Нажать на кнопку переход в корзину", async () => {
      await this.goToCart.click();
    });
  }
}
