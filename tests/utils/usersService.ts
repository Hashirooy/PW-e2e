import { Page, test, expect, APIRequestContext } from "@playwright/test";
import { BaseApi } from "./baseApi";

export class UsersService extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async getUserList(token: string) {
    const res = await this.getReq(
      "https://freefakeapi.io/authapi/users",
      token
    );
    console.log("users", res);
    return res;
  }
}
