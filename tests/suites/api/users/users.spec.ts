import { validatePosts } from "../../../../source/schemas/postsSchema";
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
    const res = await usersApi.getUserList(token);
    await usersApi.validateSchema(token);
  });

  test.only("validate schema", async ({ usersApi }) => {
    await usersApi.validateSchema(token);
  });
});
