import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class TaskPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = "https://memfis.fisgroup.ru/todo/list/";
  }
}
