import { test } from "./task.fixture";

test("open task page", async ({ taskPage }) => {
  await taskPage.open();
});
