import { test } from "../../../pageObjectFixtures/users.fixture";

test.describe("get token", async () => {
  let token: string;
  test.beforeAll(async ({ usersApi }) => {
    const res = await usersApi.postReq("https://freefakeapi.io/authapi/login", {
      username: "MikePayne",
      password: "myBeaut1fu11P@ssW0rd!",
    });
    token = res.token;
  });

  test.only("get list of users", async ({ usersApi }) => {
    await usersApi.getUserList(token);
  });
});
