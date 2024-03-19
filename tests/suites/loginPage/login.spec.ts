import { expect } from "@playwright/test";
import { test } from "./login.fixture";
import { createTask } from "../../helpers/createTask";

test("logIn without password", async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.typeLoginField("standard_user");
  await loginPage.clickLoginButton();
  await loginPage.pause();
  await expect(await loginPage.getErrorText()).toEqual(
    "Epic sadface: Password is required"
  );
});

test("logIn without login", async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.typePasswordField("secret_sauce");
  await loginPage.clickLoginButton();
  await loginPage.pause();
  await expect(await loginPage.getErrorText()).toEqual(
    "Epic sadface: Username is required"
  );
});
test("Incorrect password", async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.typeLoginField("standard_user");
  await loginPage.typePasswordField("sdf234fsdf");
  await loginPage.clickLoginButton();
  await loginPage.pause();
  expect(await loginPage.getErrorText()).toEqual(
    "Epic sadface: Username and password do not match any user in this service"
  );
});

test("Correct login on site", async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.typeLoginField("standard_user");
  await loginPage.typePasswordField("secret_sauce");
  await loginPage.clickLoginButton();
});

test.only("Api test", async ({}) => {
  await createTask();
});
