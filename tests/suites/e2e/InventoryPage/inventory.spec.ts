import { test } from "./inventore.fixture";

test("open backpack", async ({ inventoryPage, loginPage, page }) => {
  await loginPage.open();
  await loginPage.logInInSite();
  // await inventoryPage.getCardList(); todo: сделать нормальный expect на проверку количества объектов
  await inventoryPage.openCard(0);
  await loginPage.pause();
});

test("open item", async ({ inventoryPage, loginPage, page }) => {
  await loginPage.open();
  await loginPage.logInInSite();
  await inventoryPage.checkCardTitle("Sauce Labs Bike Light", 1);
  //await inventoryPage.openCard(1);
});
