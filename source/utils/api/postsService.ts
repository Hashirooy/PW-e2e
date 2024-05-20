import { BaseApi } from "./baseApi";
import { test, expect, APIRequestContext } from "@playwright/test";
import { generatePostData } from "../generator/postsGenerator";

export class PostsService extends BaseApi {
  readonly url = "https://freefakeapi.io/authapi/posts";
  constructor(request: APIRequestContext) {
    super(request);
  }

  async getListOfPosts(token: string) {
    const res = await this.getReq(this.url, token);
    return res.body;
  }

  async getLimitedListOfPosts(limitNumber: number, token: string) {
    const res = await this.getReq(this.url + `?limit=${limitNumber}`, token);
    return res.body;
  }

  async createPosts(token: string) {
    const body = generatePostData();
    const res = await this.postReq(this.url, body, token);
    return res.body;
  }

  async upDatePost(token: string, id: string) {
    const body = generatePostData();
    body.id = id;
    const res = await this.putReq(this.url + "/" + id, body, token);
    return res;
  }

  // methods for cheking
  async checkNumberofPosts(factualNumber: number, expectNumber: number) {
    test.step("Checking nubmer of posts", async () => {
      expect(factualNumber).toEqual(expectNumber);
    });
  }
  async checkStatusCode(factualStatus: number, expectStatus: number) {
    test.step("Check status response status code", async () => {
      expect(factualStatus).toEqual(expectStatus);
    });
  }
}
