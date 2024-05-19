import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class BaseAuthPage extends BasePage {
  constructor(page: Page) {
    const user = "admin";
    const password = "admin";
    page.setExtraHTTPHeaders({
      Authorization: "Basic " + btoa(user + ":" + password),
    });
    super(page);
    this.url = "https://the-internet.herokuapp.com/basic_auth";
  }
}
