import { test } from "./posts.fixture";

test.only("get posts list", async ({ postsApi }) => {
  const postsList = await postsApi.getPostList();
  await postsApi.checkNumberofPosts(postsList.length, 16);
});
