import { test as base } from "@playwright/test";
import { UsersService } from "../utils/usersService";

type TestFixture = {
  usersApi: UsersService;
};

export const test = base.extend<TestFixture>({
  usersApi: async ({ request }, use) => {
    const usersApi = new UsersService(request);
    use(usersApi);
  },
});
