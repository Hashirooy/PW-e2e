import { Page, test } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  readonly continueShoppingbutton = this.page.locator(
    '[id="continue-shopping"]'
  );
  readonly chekoutButton = this.page.locator('[id="checkout"]');
  readonly productPrice = this.page.locator(".inventory_details_price");
  constructor(page: Page) {
    super(page);
  }

  async ClickContinueShoppingbutton() {
    test.step("Нажатие на кнопку продолжить покупки", async () => {
      await this.continueShoppingbutton.click();
    });
  }

  async ClickChekoutButton() {
    test.step("нажатие на кнопку к оплате", async () => {
      await this.chekoutButton.click();
    });
  }

  async getProductPrice() {
    test.step("Взять цену продукта", async () => {
      await this.productPrice.textContent();
    });
  }
}
