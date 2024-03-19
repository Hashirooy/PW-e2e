import { InventoryPage } from "../../pageObjects/pages/InventoryPage";
import { test as base, Page } from "@playwright/test";
import { LoginPage } from "../../pageObjects/pages/LoginPage";

type TestFixtures = {
  inventoryPage: InventoryPage;
  loginPage: LoginPage;
};

export const test = base.extend<TestFixtures>({
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});
