import { Page, test } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DradAndDropPage extends BasePage {
  readonly blockA = this.page.locator('[id="column-a"]');
  readonly blockB = this.page.locator('[id="column-b"]');

  constructor(page: Page) {
    super(page);
    this.url = "https://the-internet.herokuapp.com/drag_and_drop";
  }

  async dragAndDropCheking() {
    await test.step("Check drag and drop", async () => {
      await this.dragAndDrop(this.blockB, this.blockA);
    });
  }

  async dragAndDropByMoveCheking() {
    await this.dragAndDropByMove(this.blockB, this.blockA);
  }
}
