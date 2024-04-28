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

  async dragAndDrop(
    sourceSelector: Locator,
    targetSelector: Locator
  ): Promise<void> {
    // Находим элемент, который нужно перетащить
    await targetSelector.dragTo(sourceSelector);
  }

  async dragAndDropByMove(selector: Locator, targetSelector: Locator) {
    const element = selector;
    const box = await element.boundingBox();

    if (!box) {
      throw new Error(
        `Element with selector '${selector}' not found or not visible.`
      );
    }

    const targetElement = targetSelector;
    const targetBox = await targetElement.boundingBox();
    if (!targetBox) {
      throw new Error(
        `Target element with selector '${targetSelector}' not found or not visible.`
      );
    }

    await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    // Нажимаем на элемент, чтобы начать перетаскивание
    await this.page.mouse.down();
    // Перемещаем курсор к целевому элементу
    await this.page.mouse.move(
      targetBox.x + targetBox.width / 2,
      targetBox.y + targetBox.height / 2
    );
    // Отпускаем кнопку мыши, чтобы завершить перетаскивание
    await this.page.mouse.up();
  }
}
