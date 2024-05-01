import { test } from "./baseAuth.fixture";

test("base authization", async ({ baseAuth }) => {
  await baseAuth.open();
  await baseAuth.pause();
});
