import { validatePosts } from "../../../../source/schemas/postsSchema";
import { test } from "../../../../source/pageObjectFixtures/POMFixtures";

test.describe("Posts test list", async () => {
  let token: string;
  test.beforeAll(async ({ postsApi }) => {
    const res = await postsApi.postReq("https://freefakeapi.io/authapi/login", {
      username: "MikePayne",
      password: "myBeaut1fu11P@ssW0rd!",
    });
    token = res.token;
  });
  test("get posts of list posts", async ({ postsApi }) => {
    const postsList = await postsApi.getListOfPosts(token);
    await postsApi.checkNumberofPosts(postsList.length, 16);
  });
  test("validate schema", async ({ postsApi }) => {
    const res = await postsApi.getListOfPosts(token);
    validatePosts(res);
  });

  test("Check limited posts", async ({ postsApi }) => {
    const limitedListPosts = await postsApi.getLimitedListOfPosts(6, token);
    await postsApi.checkNumberofPosts(limitedListPosts.length, 6);
  });

  test("Create posts", async ({ postsApi }) => {
    const res = await postsApi.createPosts(token);
  });
});
