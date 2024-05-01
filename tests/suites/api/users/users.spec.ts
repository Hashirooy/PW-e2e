import { test } from "../../../pageObjectFixtures/users.fixture";

test.only("get token", async ({ usersApi }) => {
  await usersApi.getToken();
  await usersApi.getUserList();
});
