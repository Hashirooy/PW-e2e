import { validatePosts } from "../../source/schemas/postsSchema";
import { BaseApi } from "./baseApi";
import { test, expect, APIRequestContext } from "@playwright/test";

export class PostsService extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async getListOfPosts(token: string) {
    const res = await this.getReq(
      "https://freefakeapi.io/authapi/posts",
      token
    );
    return res;
  }
  // methods for cheking
  async checkNumberofPosts(factualNumber: number, expectNumber: number) {
    test.step("Checking nubmer of posts", async () => {
      expect(factualNumber).toEqual(expectNumber);
    });
  }
}
