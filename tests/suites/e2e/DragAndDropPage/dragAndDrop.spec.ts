import { test } from "../../../../source/pageObjectFixtures/POMFixtures";

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
