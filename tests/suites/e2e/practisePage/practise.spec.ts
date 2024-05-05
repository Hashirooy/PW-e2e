import { test } from "../../../../source/pageObjectFixtures/POMFixtures";

test("upload file", async ({ practisePage }) => {
  await practisePage.open();
  await practisePage.upLoadFile();
  await practisePage.pause();
});
