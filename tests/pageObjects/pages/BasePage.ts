import { Locator, Page, test } from "@playwright/test";

export class BasePage {
  page: Page;
  url: string;

  constructor(page: Page) {
    this.page = page;
    this.url = "";
  }

  async open(url = this.url) {
    await test.step("Открываем страницу", async () => {
      await this.page.goto(url);
    });
  }

  async pause() {
    await test.step("Сделать паузу", async () => {
      await this.page.waitForTimeout(1000);
    });
  }

  async getListOfelements(locator) {
    await test.step("Получить число объектов", async () => {
      const elements = await locator.all();
      console.log(elements.length);
      return elements.length;
    });
  }

  public async fillElement(element: Locator, text: string): Promise<void> {
    await test.step("Заполняем элемент", async () => {
      await element.click();
      await element.fill(text);
    });
  }
}
