import { Page, test, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { allure } from "allure-playwright";
import { Users } from "../../testData/user";
import { getClients } from "../../utils/database";

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
      await this.fillElement(this.loginField, login);
    });
  }

  async typePasswordField(password: string) {
    await test.step("Заполнить поле пароль", async () => {
      await this.fillElement(this.passwordField, password);
    });
  }

  async clickLoginButton() {
    await test.step("Нажатие на кнопку Войти", async () => {
      await this.loginButton.click();
    });
  }

  async logInInSite() {
    const user = await getClients(1);
    if (user) {
      await test.step("Вход на сайт", async () => {
        await this.fillElement(this.loginField, user.user_name);
        await this.fillElement(
          this.passwordField,
          Users.standart_user.password
        );
        await this.clickLoginButton();
      });
    }
  }

  async CheckErrorMessage(textError: string) {
    await test.step("Проверка сообщения об ошибке", async () => {
      expect(await this.errorMessage.textContent()).toEqual(textError);
    });
  }
}
