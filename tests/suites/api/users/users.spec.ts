import { allure } from "allure-playwright";
import { test } from "../../../../source/pageObjectFixtures/POMFixtures";
import { schemaValidate } from "../../../../source/schemas/schemaValidate";
import { usersSchema, userResp } from "../../../../source/schemas/usersSchema";

test.describe("Users Service", async () => {
  let token: string;
  test.beforeAll("Get token", async ({ usersApi }) => {
    const res = await usersApi.postReq("https://freefakeapi.io/authapi/login", {
      username: "MikePayne",
      password: "myBeaut1fu11P@ssW0rd!",
    });
    token = res.body.token;
  });
  test("check status 200 OK", async ({ usersApi }) => {
    await allure.epic("APi interface");
    await allure.feature("Users features");
    const res = await usersApi.getUserList(token);
    await usersApi.checkStatusCode(res.header.status(), 200);
  });

  test("get list of users", async ({ usersApi }) => {
    await allure.epic("APi interface");
    await allure.feature("Users features");
    const res = await usersApi.getUserList(token);
    await usersApi.checkListOfUsers(res.body.length, 10);
  });

  test("validate schema", async ({ usersApi }) => {
    await allure.epic("APi interface");
    await allure.feature("Users features");
    const res = await usersApi.getUserList(token);
    schemaValidate(res.body, usersSchema);
  });
});
