import { allure } from "allure-playwright";
import { test } from "../../../../source/pageObjectFixtures/POMFixtures";

test.describe("Comments spec", async () => {
  test.describe("Positive test", async () => {
    let token: string;
    test.beforeAll("Get token", async ({ postsApi }, testInfo) => {
      allure.parentSuite(testInfo.titlePath[testInfo.titlePath.length - 3]);
      allure.subSuite(testInfo.titlePath[testInfo.titlePath.length - 2]);
      const res = await postsApi.postReq(
        "https://freefakeapi.io/authapi/login",
        {
          username: "MikePayne",
          password: "myBeaut1fu11P@ssW0rd!",
        }
      );
      token = res.body.token;
    });

    test("Get list of comments", async ({ commentsApi }) => {
      const res = await commentsApi.getCommentsCollections(token);
    });

    test("Check response status", async ({ commentsApi }) => {
      const res = await commentsApi.getCommentsCollections(token);
      await commentsApi.checkStatusCode(200, res.header.status());
    });
  });
});
