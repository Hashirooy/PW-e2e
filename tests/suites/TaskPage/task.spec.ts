import { auth } from "../../helpers/auth";
import { test } from "./task.fixture";

test("open task page", async ({ taskPage }) => {
  await taskPage.open();
  await auth();
  await taskPage.page.reload();
  await taskPage.page.pause();
});
