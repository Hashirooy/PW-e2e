import { PractisePage } from "../pageObjects/pages/practisePage";
import { test as base, Page } from "@playwright/test";

type TestFixtures = {
  practisePage: PractisePage;
};

export const test = base.extend<TestFixtures>({
  practisePage: async ({ page }, use) => {
    const practisePage = new PractisePage(page);
    await use(practisePage);
  },
});
