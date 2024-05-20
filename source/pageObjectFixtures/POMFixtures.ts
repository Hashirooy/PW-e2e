import { BaseAuthPage } from "../pageObjects/pages/BaseAuthPage";
import { test as base } from "@playwright/test";
import { CartPage } from "../pageObjects/pages/CartPage";
import { InventoryPage } from "../pageObjects/pages/InventoryPage";
import { LoginPage } from "../pageObjects/pages/LoginPage";
import { ProductPage } from "../pageObjects/pages/ProductPage";
import { DradAndDropPage } from "../pageObjects/pages/DragAndDropPage";
import { PostsService } from "../utils/api/postsService";
import { PractisePage } from "../pageObjects/pages/practisePage";
import { UsersService } from "../utils/api/usersService";

type TestFixtures = {
  baseAuth: BaseAuthPage;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  productPage: ProductPage;
  cartPage: CartPage;
  dragAndDrop: DradAndDropPage;
  postsApi: PostsService;
  practisePage: PractisePage;
  usersApi: UsersService;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    use(loginPage);
  },

  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    use(inventoryPage);
  },
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    use(productPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    use(cartPage);
  },
  baseAuth: ({ page }, use) => {
    const baseAuth = new BaseAuthPage(page);
    use(baseAuth);
  },
  dragAndDrop: ({ page }, use) => {
    const dragAndDrop = new DradAndDropPage(page);
    use(dragAndDrop);
  },
  postsApi: async ({ request }, use) => {
    const postsApi = new PostsService(request);
    use(postsApi);
  },
  practisePage: async ({ page }, use) => {
    const practisePage = new PractisePage(page);
    await use(practisePage);
  },
  usersApi: async ({ request }, use) => {
    const usersApi = new UsersService(request);
    use(usersApi);
  },
});
