import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ChekoutInformationPage extends BasePage {
  readonly firstNameField = this.page.locator('[data-test="firstName"]');
  readonly lastNameField = this.page.locator('[data-test="lastName"]');
  readonly postalCodeField = this.page.locator('[data-test="postalCode"]');
  readonly continueButton = this.page.locator('[data-test="continue"]');
  readonly cancelButton = this.page.locator('[data-test="cancel"]');
  constructor(page: Page) {
    super(page);
  }

  async ClickContinueButton() {
    await this.continueButton.click();
  }

  async ClickCancelButton() {
    await this.cancelButton.click();
  }
}
