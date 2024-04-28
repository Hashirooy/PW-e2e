import { test } from "./posts.fixture";

test("get posts list", async ({ postsApi }) => {
  const postsList = await postsApi.getPostList();
  await postsApi.checkNumberofPosts(postsList.length, 16);
});

test("delete posts", async ({ postsApi }) => {
  await postsApi.deletePosts("3");
});
