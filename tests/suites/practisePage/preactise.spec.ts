import { test } from "./preactise.fixture";

test.only("upload file", async ({ practisePage }) => {
  await practisePage.open();
  await practisePage.upLoadFile();
  await practisePage.pause();
});
