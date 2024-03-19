import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutOverviewPage extends BasePage {
  readonly finishButton = this.page.locator('[data-test="finish"]');
  constructor(page: Page) {
    super(page);
  }
}
