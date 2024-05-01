import { BaseApi } from "./baseApi";
import { test, expect } from "@playwright/test";

export class PostsService extends BaseApi {
  // methods for cheking
  async checkNumberofPosts(factualNumber: number, expectNumber: number) {
    test.step("Checking nubmer of posts", async () => {
      expect(factualNumber).toEqual(expectNumber);
    });
  }
}
