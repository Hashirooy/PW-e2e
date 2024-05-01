import { test as base } from "@playwright/test";
import { UsersService } from "../../../utils/usersApi";

type TestFixture = {
  usersApi: UsersService;
};

export const test = base.extend<TestFixture>({
  usersApi: async ({ request }, use) => {
    const usersApi = new UsersService(request);
    use(usersApi);
  },
});
