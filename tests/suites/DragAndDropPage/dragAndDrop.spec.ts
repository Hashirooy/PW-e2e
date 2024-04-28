import { test } from "./dragAndDrop.fixture";

test("drag drop", async ({ dragAndDrop }) => {
  await dragAndDrop.open();
  await dragAndDrop.dragAndDropCheking();
  await dragAndDrop.page.pause();
});

test.only("drag drop by move", async ({ dragAndDrop }) => {
  await dragAndDrop.open();
  await dragAndDrop.dragAndDropByMoveCheking();
  await dragAndDrop.page.pause();
});
