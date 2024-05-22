import { allure } from "allure-playwright";
import { test } from "../../../../source/pageObjectFixtures/POMFixtures";

test("upload file", async ({ practisePage }) => {
  await allure.epic("Web interface");
  await allure.feature("UI features");
  await practisePage.open();
  await practisePage.upLoadFile();
  await practisePage.pause();
});
