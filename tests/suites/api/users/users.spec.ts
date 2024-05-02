import { test } from "../../../pageObjectFixtures/users.fixture";

test("get token", async ({ usersApi }) => {
  await usersApi.getUserList();
});
