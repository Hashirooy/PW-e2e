import { allure } from "allure-playwright";
import { test } from "../../../../source/pageObjectFixtures/POMFixtures";

test("drag drop", async ({ dragAndDrop }) => {
  await allure.epic("Web interface");
  await allure.feature("UI features");
  await dragAndDrop.open();
  await dragAndDrop.dragAndDropCheking();
  await dragAndDrop.page.pause();
});

test("drag drop by move", async ({ dragAndDrop }) => {
  await allure.epic("Web interface");
  await allure.feature("UI features");
  await dragAndDrop.open();
  await dragAndDrop.dragAndDropByMoveCheking();
  await dragAndDrop.page.pause();
});
