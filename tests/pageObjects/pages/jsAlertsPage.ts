import { Page, test, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class JsAlerts extends BasePage {
  readonly alertJsButton = this.page.getByRole("button", {
    name: "Click for JS Alert",
  });

  constructor(page: Page) {
    super(page);
    this.url = "https://the-internet.herokuapp.com/javascript_alerts";
  }

  async checkDialogText(alertText: string) {
    await this.getjsAlert(this.alertJsButton);
  }
}
