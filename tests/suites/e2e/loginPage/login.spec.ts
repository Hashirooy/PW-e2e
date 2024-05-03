import { expect } from "@playwright/test";
import { test } from "../../../../source/pageObjectFixtures/login.fixture";

test.describe("Negative Login test", async () => {
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

test("Correct login on site", async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.typeLoginField("standard_user");
  await loginPage.typePasswordField("secret_sauce");
  await loginPage.clickLoginButton();
});
