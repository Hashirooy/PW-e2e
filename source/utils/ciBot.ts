import TelegramBot from "node-telegram-bot-api";

const token = "7029758520:AAGQRk-50pLHZx-";
// const chatId = "ID_ВАШЕГО_ЧАТА";

const bot = new TelegramBot(token, {
  polling: true,
});

// // function sendMessage(message) {
// //   bot.sendMessage(chatId, message);
// // }

// bot.getChat().then((chat) => {
//   console.log(chat.id);
// });

// const message = "Чек ci/cd";

// bot
//   .sendMessage(, message)
//   .then(() => console.log("Сообщение отправлено"))
//   .catch((error) => console.error("Ошибка при отправке сообщения:", error));

// bot.on("message", (msg) => {
//   const chatId = msg.chat.id;
//   const message = "Привет Это сообщение от бота. Как я могу помочь?";

//   // Отправляем сообщение обратно пользователю
//   bot
//     .sendMessage(chatId, message)
//     .then(() => console.log("Сообщение отправлено"))
//     .catch((error) => console.error("Ошибка при отправке сообщения:", error));
// });
