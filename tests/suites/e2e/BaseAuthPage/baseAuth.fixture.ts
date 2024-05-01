import { BaseAuthPage } from "../../../pageObjects/pages/BaseAuthPage";
import { test as base } from "@playwright/test";

type TestFixtures = {
  baseAuth: BaseAuthPage;
};

export const test = base.extend<TestFixtures>({
  baseAuth: ({ page }, use) => {
    const baseAuth = new BaseAuthPage(page);
    use(baseAuth);
  },
});
