import Ajv from "ajv";
import { test, expect } from "@playwright/test";

const ajv = new Ajv();

export const schemaValidate = (responseBody, schema: {}) => {
  test.step("check schema", async () => {
    const validate = ajv.compile(schema);
    const valid = validate(responseBody);
    expect(valid).toBeTruthy();
  });
};
