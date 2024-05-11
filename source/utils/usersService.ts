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
    return res;
  }

  async checkListOfUsers(factualnumber: number, expectedNumber: number) {
    test.step("check number of users", async () => {
      expect(factualnumber).toEqual(expectedNumber);
    });
  }
  async checkStatusCode(factualStatus: number, expectStatus: number) {
    test.step("Check status response status code", async () => {
      expect(factualStatus).toEqual(expectStatus);
    });
  }
}
