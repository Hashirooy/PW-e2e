import { APIRequestContext } from "@playwright/test";
import { allure } from "allure-playwright";

export class BaseApi {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async httpRequest(
    url: string,
    options: {
      method: "post" | "get" | "put" | "delete";
      body?: Record<string, unknown>;
      token?: string;
    }
  ) {
    const { method, body, token } = options;
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    const requestOptions = {
      headers,
      data: body,
    };
    const res = await this.request[method](url, requestOptions);
    await allure.attachment(
      "API Response",
      JSON.stringify(await res.json(), null, 2),
      "text/plain"
    );
    const responseBody = await res.json();

    // Получаем заголовки ответа
    const response = { body: responseBody, header: res };
    return response;
  }

  async postReq(url: string, body: Record<string, unknown>, token?: string) {
    return this.httpRequest(url, { method: "post", body, token });
  }

  async getReq(url: string, token?: string) {
    return this.httpRequest(url, { method: "get", token });
  }
}
