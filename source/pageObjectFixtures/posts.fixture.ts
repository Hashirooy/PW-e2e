import { test as base } from "@playwright/test";
import { PostsService } from "../utils/postsService";
type TestFixture = {
  postsApi: PostsService;
};

export const test = base.extend<TestFixture>({
  postsApi: async ({ request }, use) => {
    const postsApi = new PostsService(request);
    use(postsApi);
  },
});
