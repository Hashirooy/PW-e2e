import { Page, test, expect, APIRequestContext } from "@playwright/test";
import { BaseApi } from "./baseApi";
import { validateUsers } from "../../source/schemas/usersSchema";

export class UsersService extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async getUserList(token: string) {
    const res = await this.getReq(
      "https://freefakeapi.io/authapi/users",
      token
    );

    return res;
  }

  async validateSchema(token: string) {
    const res = await this.getReq(
      "https://freefakeapi.io/authapi/users",
      token
    );
    test.step("validate schema", async () => {
      expect(validateUsers(res)).toBeTruthy();
    });
  }
}
