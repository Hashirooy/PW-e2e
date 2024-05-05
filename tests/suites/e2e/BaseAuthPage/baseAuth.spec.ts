import { test } from "../../../../source/pageObjectFixtures/POMFixtures";

test("base authization", async ({ baseAuth }) => {
  await baseAuth.open();
  await baseAuth.pause();
});
