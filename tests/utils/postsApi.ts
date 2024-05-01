import { BaseApi } from "./baseApi";
import { test, expect, APIRequestContext } from "@playwright/test";

export class PostsService extends BaseApi {
  private token: string;
  constructor(request: APIRequestContext) {
    super(request);
  }
  async getToken() {
    const res = await this.postReq("https://freefakeapi.io/authapi/login", {
      username: "MikePayne",
      password: "myBeaut1fu11P@ssW0rd!",
    });
    this.token = res.token;
  }

  async getListOfPosts() {
    const res = await this.getReq(
      "https://freefakeapi.io/authapi/posts",
      this.token
    );
    console.log("posts", res);
    return res;
  }
  // methods for cheking
  async checkNumberofPosts(factualNumber: number, expectNumber: number) {
    test.step("Checking nubmer of posts", async () => {
      expect(factualNumber).toEqual(expectNumber);
    });
  }
}
