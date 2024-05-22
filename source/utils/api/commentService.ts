import { APIRequest, APIRequestContext } from "@playwright/test";
import { Page, test, expect } from "@playwright/test";
import { BaseApi } from "./baseApi";

export class CommentService extends BaseApi {
  readonly url = "https://freefakeapi.io/authapi/comments";
  constructor(request: APIRequestContext) {
    super(request);
  }

  async getCommentsCollections(token: string) {
    const res = await this.getReq(this.url, token);
    return res;
  }

  async checkStatusCode(factualStatus: number, expectedStatus: number) {
    test.step("Check status", async () => {
      expect(expectedStatus).toEqual(factualStatus);
    });
  }
}
