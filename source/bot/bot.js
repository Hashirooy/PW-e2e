import TelegramBot from "node-telegram-bot-api";
import fs from "fs";
// import { reportParser } from "./getDataReport";

export const reportParser = async () => {
  const data = await fs.promises.readFile("ctrf/ctrf-report.json", "utf8");
  const jsonData = JSON.parse(data);
  const results = {
    tests: jsonData.results.summary.tests,
    passed: jsonData.results.summary.passed,
    failed: jsonData.results.summary.failed,
  };
  return results;
};

const sendMessage = async () => {
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CI_COMMIT_SHA = process.env.CI_COMMIT_SHA;
  const GITLAB_USER_NAME = process.env.GITLAB_USER_NAME;
  const CI_JOB_STATUS = process.env.CI_JOB_STATUS;
  if (process.env.CI_JOB_STATUS !== "success") {
    const statusEmoji = "\uD120"; // Эмодзи "🚫", альтернативный вариант для "U+274C"
  } else {
    const statusEmoji = "\u2714"; // Эмодзи "✅", альтернативный вариант для "U+2705"
  }
  const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
  const report = await reportParser();
  const message = `New commit:${CI_COMMIT_SHA}\nUser: ${GITLAB_USER_NAME}\nTests: ${report.tests}\nStatus:${statusEmoji}\nPassed: ${report.passed}\nFailed: ${report.failed}`;
  bot
    .sendMessage(TELEGRAM_CHAT_ID, message)
    .then(() => bot.close())
    .catch((error) => console.error(error));
};

sendMessage();
