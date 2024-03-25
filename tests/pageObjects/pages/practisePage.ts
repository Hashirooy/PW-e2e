import { Page, test } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PractisePage extends BasePage {
  readonly uploadButton = this.page.locator("[name='userfile']");
  constructor(page: Page) {
    super(page);
    this.url = "https://ps.uci.edu/~franklin/doc/file_upload.html";
  }

  async upLoadFile() {
    test.step("Загрузить файл", async () => {
      await this.uploadButton.setInputFiles("tests/images/list.png");
    });
  }
}
