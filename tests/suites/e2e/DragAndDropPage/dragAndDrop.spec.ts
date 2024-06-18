import { allure } from "allure-playwright";
import { test } from "../../../../source/pageObjectFixtures/POMFixtures";
test.describe("DragDrop Page", async () => {
  test.describe("dragAndDrop", async () => {
    test.beforeAll(({}, testInfo) => {
      allure.parentSuite(testInfo.titlePath[testInfo.titlePath.length - 3]);
      allure.subSuite(testInfo.titlePath[testInfo.titlePath.length - 2]);
    });
    test("drag drop", async ({ dragAndDrop }) => {
      await dragAndDrop.open();
      await dragAndDrop.dragAndDropCheking();
      await dragAndDrop.page.pause();
    });

    test("drag drop by move", async ({ dragAndDrop }) => {
      await dragAndDrop.open();
      await dragAndDrop.dragAndDropByMoveCheking();
      await dragAndDrop.page.pause();
    });
  });
});
