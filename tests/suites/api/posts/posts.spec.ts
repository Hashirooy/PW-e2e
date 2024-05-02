import { test } from "../../../pageObjectFixtures/posts.fixture";

test.only("get posts of list posts", async ({ postsApi }) => {
  await postsApi.getToken();
  const postsList = await postsApi.getListOfPosts();
  await postsApi.checkNumberofPosts(postsList.length, 16);
});
