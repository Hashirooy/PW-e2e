import { Page, test, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {
  readonly sandwichButton = this.page.locator("[id='react-burger-menu-btn']");
  readonly allMenuButton = this.page.locator("[id='inventory_sidebar_link']");
  readonly allAbout = this.page.locator("[id='about_sidebar_link']");
  readonly logoutButton = this.page.locator("[id='logout_sidebar_link']");
  readonly resetAppButton = this.page.locator("[id='reset_sidebar_link']");
  readonly listOfCard = this.page.locator(".inventory_item");
  readonly cardTitle = this.page.locator(".inventory_item_name");
  readonly goToCart = this.page.locator("[id='shopping_cart_container']");
  constructor(page: Page) {
    super(page);
    this.url = "https://www.saucedemo.com/inventory.html";
  }

  getCardList() {
    return this.getListOfelements(this.listOfCard);
  }

  async openCard(i: number) {
    await test.step("нажать на заголовок карточки", async () => {
      await this.cardTitle.nth(i).click();
    });
  }
  async ClickGoToCart() {
    await test.step("Нажать на кнопку переход в корзину", async () => {
      await this.goToCart.click();
    });
  }

  async checkCardTitle(expectedText: string, i: number): Promise<void> {
    await test.step("Проверяем заголовок карточки", async () => {
      await expect(await this.cardTitle.nth(i).innerText()).toContain(
        expectedText
      );
    });
  }
}
