import { InventoryPage } from "../../../pageObjects/pages/InventoryPage";
import { LoginPage } from "../../../pageObjects/pages/LoginPage";
import { ProductPage } from "../../../pageObjects/pages/ProductPage";
import { test as base, Page } from "@playwright/test";

type TestFixtures = {
  productPage: ProductPage;
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

  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },
});
