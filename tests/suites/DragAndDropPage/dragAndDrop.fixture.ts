import { DradAndDropPage } from "../../pageObjects/pages/DragAndDropPage";
import { test as base, Page } from "@playwright/test";

type TestFixtures = {
  dragAndDrop: DradAndDropPage;
};

export const test = base.extend<TestFixtures>({
  dragAndDrop: ({ page }, use) => {
    const dragAndDrop = new DradAndDropPage(page);
    use(dragAndDrop);
  },
});
