import { allure } from "allure-playwright";
import { test } from "../../../../source/pageObjectFixtures/POMFixtures";

test("base authization", async ({ baseAuth }) => {
  await allure.epic("Web interface");
  await allure.feature("UI features");
  await baseAuth.open();
  await baseAuth.pause();
});
