import { describe } from "node:test";
import { test } from "../../../../source/pageObjectFixtures/POMFixtures";

test("add product", async ({ inventoryPage, loginPage, productPage, page }) => {
  await loginPage.open();
  await loginPage.logInInSite();
  await inventoryPage.openCard(0);
  await productPage.ClickAddToCardButton();
});

test("back to product", async ({ inventoryPage, loginPage, productPage }) => {
  await loginPage.open();
  await loginPage.logInInSite();
  await inventoryPage.openCard(0);
  await productPage.ClickBackToProduct();
});
