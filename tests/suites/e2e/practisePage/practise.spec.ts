import { test } from "../../../pageObjectFixtures/practise.fixture";

test("upload file", async ({ practisePage }) => {
  await practisePage.open();
  await practisePage.upLoadFile();
  await practisePage.pause();
});
