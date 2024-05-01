import { test } from "../../../pageObjectFixtures/baseAuth.fixture";

test("base authization", async ({ baseAuth }) => {
  await baseAuth.open();
  await baseAuth.pause();
});
