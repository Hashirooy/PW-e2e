import { allure } from "allure-playwright";
import { test } from "../../../../source/pageObjectFixtures/POMFixtures";

test.describe("Upload Page", async () => {
  test.describe("Upload file", async () => {
    test.beforeEach(({ page }, testInfo) => {
      allure.parentSuite(testInfo.titlePath[testInfo.titlePath.length - 3]);
      allure.subSuite(testInfo.titlePath[testInfo.titlePath.length - 2]);
    });
    test("upload file", async ({ practisePage }) => {
      await practisePage.open();
      await practisePage.upLoadFile();
      await practisePage.pause();
    });
  });
});
