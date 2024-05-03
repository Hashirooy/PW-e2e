import { test } from "../../../pageObjectFixtures/posts.fixture";

test.describe("Posts test list", async () => {
  let token: string;
  test.beforeAll(async ({ postsApi }) => {
    const res = await postsApi.postReq("https://freefakeapi.io/authapi/login", {
      username: "MikePayne",
      password: "myBeaut1fu11P@ssW0rd!",
    });
    token = res.token;
  });
  test.only("get posts of list posts", async ({ postsApi }) => {
    const postsList = await postsApi.getListOfPosts(token);
    await postsApi.checkNumberofPosts(postsList.length, 16);
  });
});
