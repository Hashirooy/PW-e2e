import { expect } from "@playwright/test";
import { test } from "../../../../source/pageObjectFixtures/POMFixtures";
import { allure } from "allure-playwright";
import { LoginPage } from "../../../../source/pageObjects/pages/LoginPage";
import exp from "constants";

test.describe("Login test UI", async () => {
  test.describe("Negative Login test", async () => {
    test.beforeEach(async ({ page }, testInfo) => {
      allure.parentSuite(testInfo.titlePath[testInfo.titlePath.length - 3]);
      allure.subSuite(testInfo.titlePath[testInfo.titlePath.length - 2]);
    });
    test("logIn without login", async ({ loginPage }) => {
      await loginPage.open();
      await loginPage.typePasswordField("secret_sauce");
      await loginPage.clickLoginButton();
      await loginPage.CheckErrorMessage("Epic sadface: Username is required");
    });
    test("Incorrect password", async ({ loginPage }) => {
      await loginPage.open();
      await loginPage.typeLoginField("standard_user");
      await loginPage.typePasswordField("sdf234fsdf");
      await loginPage.clickLoginButton();
      await loginPage.CheckErrorMessage(
        "Epic sadface: Username and password do not match any user in this service"
      );
    });

    test("logIn without password", async ({ loginPage }) => {
      await loginPage.open();
      await loginPage.typeLoginField("standard_user");
      await loginPage.clickLoginButton();
      await loginPage.CheckErrorMessage("Epic sadface: Password is required");
    });
  });

  test.describe("Positive tests", async () => {
    test.beforeEach(async ({ page }, testInfo) => {
      allure.parentSuite(testInfo.titlePath[testInfo.titlePath.length - 3]);
      allure.subSuite(testInfo.titlePath[testInfo.titlePath.length - 2]);
    });
    test("Correct login on site", async ({ loginPage }) => {
      await loginPage.open();
      await loginPage.typeLoginField("standard_user");
      await loginPage.typePasswordField("secret_sauce");
      await loginPage.clickLoginButton();
    });

    // test("login field is visible", async ({ loginPage }) => {
    //   expect(loginPage.loginField).toBeVisible();
    // });
  });
});
