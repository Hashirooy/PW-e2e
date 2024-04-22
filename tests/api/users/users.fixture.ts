import { expect } from "@playwright/test";
import { UsersApi } from "../../utils/usersApi";

import { test as base } from "@playwright/test";

type TestFixture = {
  usersApi: UsersApi;
};

export const test = base.extend<TestFixture>({
  usersApi: async ({}, use) => {
    const usersApi = new UsersApi();
    use(usersApi);
  },
});
