import { ChekoutInformationPage } from "../../pageObjects/pages/ChekoutInformationPage";

import { test as base } from "@playwright/test";

type TestFixtures = {
  chekoutInformationPage: ChekoutInformationPage;
};

export const test = base.extend<TestFixtures>({
  chekoutInformationPage: async ({ page }, use) => {
    const chekoutInformationPage = new ChekoutInformationPage(page);
    await use(chekoutInformationPage);
  },
});
