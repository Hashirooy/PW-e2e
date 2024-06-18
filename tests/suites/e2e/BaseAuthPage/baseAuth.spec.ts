import { allure } from "allure-playwright";
import { test } from "../../../../source/pageObjectFixtures/POMFixtures";
test.describe("Autp method", async () => {
  test.describe("base authization", async () => {
    test.beforeAll(({}, testInfo) => {
      allure.parentSuite(testInfo.titlePath[testInfo.titlePath.length - 3]);
      allure.subSuite(testInfo.titlePath[testInfo.titlePath.length - 2]);
    });
    test("base authization", async ({ baseAuth }) => {
      await baseAuth.open();
      await baseAuth.pause();
    });
  });
});
