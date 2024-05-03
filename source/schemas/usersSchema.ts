import Ajv from "ajv";
import { test, expect } from "@playwright/test";

const ajv = new Ajv();

const usersSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "array",
  items: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "Unique identifier for the user",
      },
      username: {
        type: "string",
        description: "Username of the user",
      },
      email: {
        type: "string",
        description: "Email address of the user",
      },
      session: {
        type: "string",
        description: "Session duration in seconds",
      },
      _links: {
        type: "object",
        properties: {
          self: {
            type: "object",
            properties: {
              href: {
                type: "string",
                description: "URL to the user itself",
              },
            },
            required: ["href"],
          },
        },
        required: ["self"],
      },
    },
    required: ["id", "username", "email", "session", "_links"],
  },
};

export const validateUsers = (data) => {
  const validate = ajv.compile(usersSchema);
  const valid = validate(data);
  if (!valid) console.log("WRONG SCHEMA", validate.errors);
  return valid;
};
