import { allure } from "allure-playwright";
import { error } from "console";
import { chromium, Page, Browser } from "playwright";

export class BaseApiTest {
  protected page: Page | null = null;
  protected browser: Browser | null = null;
  protected token: string | undefined;
  protected url = "https://freefakeapi.io/authapi/login";

  async setup() {
    this.browser = await chromium.launch();
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    try {
      const reponse = await this.post(this.url, {
        username: "MikePayne",
        password: "myBeaut1fu11P@ssW0rd!",
      });

      await this.page.setExtraHTTPHeaders({
        Authorization: `Bearer ${JSON.parse(reponse).token}`,
      });
    } catch (error) {
      throw new Error("error in getting token");
    }
  }

  async teardown() {
    if (this.page) {
      await this.page.close();
    }
    if (this.browser) {
      // Проверяем, что экземпляр браузера существует
      await this.browser.close(); // Закрываем браузер
    }
  }

  // async getToken() {
  //   await this.setup();
  //   try {
  //     const response = await this.post("https://freefakeapi.io/authapi/login", {
  //       username: "MikePayne",
  //       password: "myBeaut1fu11P@ssW0rd!",
  //     });
  //     this.token = JSON.parse(response).token;
  //     await this.page?.pause();
  //   } catch (error) {
  //     throw new Error(`API request failed with status: ${error.message}`);
  //   } finally {
  //   }
  // }

  async get(url: string): Promise<string> {
    if (!this.page) {
      throw new Error("Page is not initialized. Call setup() first.");
    }
    const response = await this.page.goto(url);
    if (!response) {
      throw new Error("Failed to get a response from the API.");
    }
    if (response.status() !== 200) {
      throw new Error(`API request failed with status: ${response.status()}`);
    }
    const respObj = await response.json();
    allure.attachment(
      "API Response",
      JSON.stringify(respObj, null, 2),
      "text/plain"
    );
    return respObj;
  }

  async post(url: string, data: Record<string, any>): Promise<string> {
    if (!this.page) {
      throw new Error("Page is not initialized. Call setup() first.");
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return "API request failed with status:";
    } else {
      const responseText = await response.text();
      // console.log(responseText);
      allure.attachment("API Response", responseText, "text/plain");
      return responseText;
    }
  }
}
