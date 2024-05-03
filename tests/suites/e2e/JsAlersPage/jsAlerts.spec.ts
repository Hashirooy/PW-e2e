import { test } from "../../../../source/pageObjectFixtures/jsAlerts.fixture";

test("open page", async ({ jsAlert }) => {
  await jsAlert.open();
  await jsAlert.checkDialogText("I am a JS Alert");
  await jsAlert.page.pause();
});
