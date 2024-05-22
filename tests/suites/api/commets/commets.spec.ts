import { allure } from "allure-playwright";
import { test } from "../../../../source/pageObjectFixtures/POMFixtures";

test.describe("Comments spec", async () => {
  let token: string;
  test.beforeAll("Get token", async ({ postsApi }) => {
    const res = await postsApi.postReq("https://freefakeapi.io/authapi/login", {
      username: "MikePayne",
      password: "myBeaut1fu11P@ssW0rd!",
    });
    token = res.body.token;
  });

  test("Get list of comments", async ({ commentsApi }) => {
    await allure.epic("APi interface");
    await allure.feature("Comments features");
    const res = await commentsApi.getCommentsCollections(token);
  });

  test("Check response status", async ({ commentsApi }) => {
    await allure.epic("APi interface");
    await allure.feature("Comments features");
    const res = await commentsApi.getCommentsCollections(token);
    await commentsApi.checkStatusCode(200, res.header.status());
  });
});
