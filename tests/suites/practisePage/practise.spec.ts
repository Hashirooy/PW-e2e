import { test } from "./practise.fixture";

test("upload file", async ({ practisePage }) => {
  await practisePage.open();
  await practisePage.upLoadFile();
  await practisePage.pause();
});
