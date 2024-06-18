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
  const TELEGRAM_CHAT_ID = "-4200233118";
  // const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  const TELEGRAM_BOT_TOKEN = "7029758520:AAGQRk-50pLHZx-10JR_fBy0KMLU06rw43M";
  // const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
  const report = await reportParser();
  const message = `New merge request:\n\nTests: ${report.tests}\nPassed: ${report.passed}\nFailed: ${report.failed}`;
  bot.sendMessage(TELEGRAM_CHAT_ID, message);
  bot.close();
};

sendMessage();
