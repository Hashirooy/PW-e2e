import { test } from "../../../../source/pageObjectFixtures/POMFixtures";
import { postsSchema } from "../../../../source/schemas/postsSchema";
import { schemaValidate } from "../../../../source/schemas/schemaValidate";

test.describe("Posts test list", async () => {
  let token: string;
  test.beforeAll(async ({ postsApi }) => {
    const res = await postsApi.postReq("https://freefakeapi.io/authapi/login", {
      username: "MikePayne",
      password: "myBeaut1fu11P@ssW0rd!",
    });
    token = res.body.token;
  });
  test("get posts of list posts", async ({ postsApi }) => {
    const postsList = await postsApi.getListOfPosts(token);
    await postsApi.checkNumberofPosts(postsList.length, 16);
  });
  test("validate schema", async ({ postsApi }) => {
    const res = await postsApi.getListOfPosts(token);
    schemaValidate(res, postsSchema);
  });

  test("Check limited posts", async ({ postsApi }) => {
    const limitedListPosts = await postsApi.getLimitedListOfPosts(6, token);
    await postsApi.checkNumberofPosts(limitedListPosts.length, 6);
  });

  test("Create posts", async ({ postsApi }) => {
    const res = await postsApi.createPosts(token);
  });

  test("Update post", async ({ postsApi }) => {
    const res = await postsApi.upDatePost(token, "103");
    await postsApi.checkStatusCode(res.header.status(), 201);
  });
});
