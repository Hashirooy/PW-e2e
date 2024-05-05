import Ajv from "ajv";
import { test, expect } from "@playwright/test";

const ajv = new Ajv();

const postsSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "array",
  items: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "Unique identifier for the article",
      },
      title: {
        type: "string",
        description: "Title of the article",
      },
      content: {
        type: "string",
        description: "Content of the article",
      },
      slug: {
        type: "string",
        description: "URL-friendly version of the article title",
      },
      picture: {
        type: "string",
        description: "URL to the article's picture",
      },
      user: {
        type: "string",
        description: "URL to the user who created the article",
      },
      _links: {
        type: "object",
        properties: {
          self: {
            type: "object",
            properties: {
              href: {
                type: "string",
                description: "URL to the article itself",
              },
            },
            required: ["href"],
          },
          modify: {
            type: "object",
            properties: {
              href: {
                type: "string",
                description: "URL to modify the article",
              },
            },
            required: ["href"],
          },
          delete: {
            type: "object",
            properties: {
              href: {
                type: "string",
                description: "URL to delete the article",
              },
            },
            required: ["href"],
          },
        },
        required: ["self", "modify", "delete"],
      },
    },
    required: ["id", "title", "content", "slug", "picture", "user", "_links"],
  },
};

export const validatePosts = (data) => {
  test.step("check schema", async () => {
    const validate = ajv.compile(postsSchema);
    const valid = validate(data);
    //  if (!valid) console.log("WRONG SCHEMA", validate.errors);
    expect(valid).toBeTruthy();
  });
};
