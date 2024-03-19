import { describe } from "node:test";
import { test } from "./product.fixture";
import { ProductPage } from "../../pageObjects/pages/ProductPAge";

test("add product", async ({ inventoryPage, loginPage, productPage, page }) => {
  await loginPage.open();
  await loginPage.logInInSite();
  await inventoryPage.openCard(0);
  await loginPage.pause();
  await productPage.ClickAddToCardButton();
  await loginPage.pause();
});

test("back to product", async ({ inventoryPage, loginPage, productPage }) => {
  await loginPage.open();
  await loginPage.logInInSite();
  await inventoryPage.openCard(0);
  await loginPage.pause();
  await productPage.ClickBackToProduct();
  await loginPage.pause();
});
