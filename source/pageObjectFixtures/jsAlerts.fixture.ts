import { JsAlerts } from "../pageObjects/pages/jsAlertsPage";
import { test as base } from "@playwright/test";

type TestFixtures = {
  jsAlert: JsAlerts;
};

export const test = base.extend<TestFixtures>({
  jsAlert: ({ page }, use) => {
    const JsAlert = new JsAlerts(page);
    use(JsAlert);
  },
});
