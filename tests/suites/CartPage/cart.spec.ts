import { log } from "console";
import { test } from "./cart.fixture";

test("Нахад к покупкам", async ({
  loginPage,
  inventoryPage,
  cartPage,
  productPage,
}) => {
  await loginPage.open();
  await loginPage.logInInSite();
  await loginPage.pause();
  await inventoryPage.openCard(2);
  await loginPage.pause();
  await productPage.ClickAddToCardButton();
  await loginPage.pause();
  await inventoryPage.ClickGoToCart();
  await loginPage.pause();
});
