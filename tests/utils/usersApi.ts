import { Page, test, expect, APIRequestContext } from "@playwright/test";
import { BaseApi } from "./baseApi";

export class UsersService extends BaseApi {
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

  async getUserList() {
    const res = await this.getReq(
      "https://freefakeapi.io/authapi/users",
      this.token
    );

    return res;
  }
}
