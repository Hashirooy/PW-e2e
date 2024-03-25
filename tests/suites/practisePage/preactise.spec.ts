import { test } from "./preactise.fixture";

test("upload file", async ({ practisePage }) => {
  await practisePage.open();
  await practisePage.upLoadFile();
  await practisePage.pause();
});
