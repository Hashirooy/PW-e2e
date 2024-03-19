import { Page, test } from "@playwright/test";
import { BasePage } from "./BasePage";
import { allure } from "allure-playwright";

export class LoginPage extends BasePage {
  readonly loginField = this.page.locator("[id=user-name]");
  readonly passwordField = this.page.locator("[id=password]");
  readonly loginButton = this.page.locator("[id=login-button]");
  readonly errorMessage = this.page.locator('[data-test="error"]');

  constructor(page: Page) {
    super(page);
    this.url = "https://www.saucedemo.com/";
  }

  async typeLoginField(login: string) {
    await test.step("Заполнить поле Логин", async () => {
      await this.loginField.fill(login);
    });
  }

  async typePasswordField(password: string) {
    await test.step("Заполнить поле пароль", async () => {
      await this.passwordField.fill(password);
    });
  }

  async clickLoginButton() {
    await test.step("Нажатие на кнопку Войти", async () => {
      await this.loginButton.click();
    });
  }

  async logInInSite() {
    await test.step("Вход на сайт", async () => {
      await this.fillElement(this.loginField, "standard_user");
      await this.fillElement(this.passwordField, "secret_sauce");
      await this.clickLoginButton();
    });
  }

  getErrorText() {
    return this.errorMessage.textContent();
  }
}
