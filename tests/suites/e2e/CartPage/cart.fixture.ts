import { CartPage } from "../../../pageObjects/pages/CartPage";
import { InventoryPage } from "../../../pageObjects/pages/InventoryPage";
import { LoginPage } from "../../../pageObjects/pages/LoginPage";
import { ProductPage } from "../../../pageObjects/pages/ProductPage";

import { test as base } from "@playwright/test";

type TestFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  productPage: ProductPage;
  cartPage: CartPage;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    use(loginPage);
  },

  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    use(inventoryPage);
  },
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    use(productPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    use(cartPage);
  },
});
