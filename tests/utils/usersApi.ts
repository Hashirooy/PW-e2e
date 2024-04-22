import { Page, test, expect } from "@playwright/test";
import { BaseApiTest } from "./baseApi";

export class UsersApi extends BaseApiTest {
  async getUserList() {
    await this.setup();
    const response = await this.get("https://freefakeapi.io/authapi/users");
    await this.teardown();
    return response;
  }

  async getSingleUser(userId: string) {
    await this.setup();
    const response = await this.get(
      "https://freefakeapi.io/authapi/users/" + userId
    );
    await this.teardown();
  }

  async CheckNumerOfUsers(expectNumber: number, factualnumber: number) {
    test.step("Проверяем число юзеров", async () => {
      expect(expectNumber).toEqual(factualnumber);
    });
  }
}
