import fs from "fs";

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

// const report = await reportParser();
// console.log(report);
// const TELEGRAM_CHAT_ID = "-4200233118";
// const TELEGRAM_BOT_TOKEN = "7029758520:AAGQRk-50pLHZx-10JR_fBy0KMLU06rw43M";

// const formData = new FormData();
// formData.append("chat_id", TELEGRAM_CHAT_ID);
// formData.append("disable_web_page_preview", "1");
// formData.append(
//   "text",
//   `New merge request:\n\nTests: ${report.tests}\nPassed: ${report.passed}\nFailed: ${report.failed}`
// );
// const URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
// // Настройка запроса

// // Выполнение запроса
// axios
//   .post(URL, formData)
//   .then((response) => {
//     console.log("Request sent successfully");
//   })
//   .catch((error) => {
//     console.error("Error sending request:", error.message);
//   });
