import { BaseApiTest } from "../../utils/baseApi";
import { test } from "./users.fixture";

test("get token", async ({ usersApi }) => {
  const request = new BaseApiTest();
});

test("get list", async ({ usersApi }) => {
  const userList = await usersApi.getUserList();
  await usersApi.CheckNumerOfUsers(10, userList.length);
});

test("get single user", async ({ usersApi }) => {
  await usersApi.getSingleUser("1");
});
