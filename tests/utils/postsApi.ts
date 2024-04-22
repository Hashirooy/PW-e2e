import { BaseApiTest } from "./baseApi";
import { Page, test, expect } from "@playwright/test";
import { allure } from "allure-playwright";

export class PostsApi extends BaseApiTest {
  async getPostList() {
    await this.setup();
    const response = await this.get("https://freefakeapi.io/authapi/posts");
    await this.teardown();
    return response;
  }

  async checkNumberofPosts(factualNumber: number, expectNumber: number) {
    test.step("Checking nubmer of posts", async () => {
      expect(factualNumber).toEqual(expectNumber);
    });
  }
}
