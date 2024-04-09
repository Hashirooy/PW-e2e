import { TaskPage } from "../../pageObjects/pages/TaskPage";
import { test as base, Page } from "@playwright/test";

type TestFixtures = {
  taskPage: TaskPage;
};

export const test = base.extend<TestFixtures>({
  taskPage: async ({ page }, use) => {
    const taskPage = new TaskPage(page);
    await use(taskPage);
  },
});
