import { validatePosts } from "../../../../source/schemas/postsSchema";
import { test } from "../../../../source/pageObjectFixtures/POMFixtures";

test.describe("get token", async () => {
  let token: string;
  test.beforeAll(async ({ usersApi }) => {
    const res = await usersApi.postReq("https://freefakeapi.io/authapi/login", {
      username: "MikePayne",
      password: "myBeaut1fu11P@ssW0rd!",
    });
    token = res.token;
  });

  test("get list of users", async ({ usersApi }) => {
    const res = await usersApi.getUserList(token);
    await usersApi.validateSchema(token);
  });

  test("validate schema", async ({ usersApi }) => {
    await usersApi.validateSchema(token);
  });
});
