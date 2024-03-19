import { LoginPage } from "../../pageObjects/pages/LoginPage";
import { test } from "./inventore.fixture";
import { Page, expect } from "@playwright/test";

test("open main page", async ({ inventoryPage, page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.fillElement(loginPage.loginField, "standard_user");
  await loginPage.fillElement(loginPage.passwordField, "secret_sauce");
  await loginPage.clickLoginButton();
});

test("open backpack", async ({ inventoryPage, loginPage, page }) => {
  await loginPage.open();
  await loginPage.logInInSite();
  // await inventoryPage.getCardList(); todo: сделать нормальный expect на проверку количества объектов
  await inventoryPage.openCard(0);
  await loginPage.pause();
});

test("get list of item", async ({ inventoryPage, loginPage, page }) => {
  await loginPage.open();
  await loginPage.logInInSite();
  await loginPage.pause();
  expect(inventoryPage.getCardList()).toEqual(6);
  await loginPage.pause();
});

test("open item", async ({ inventoryPage, loginPage, page }) => {
  await loginPage.open();
  await loginPage.logInInSite();
  await inventoryPage.getCardList();
  await inventoryPage.openCard(1);
  await loginPage.pause();
});
