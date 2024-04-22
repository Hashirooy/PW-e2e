// const { Sequelize } = require("sequelize");
// const config = require("../../config.json");

import { Sequelize, DataTypes } from "sequelize";
import config from "../../config.json" assert { type: "json" };
import { User } from "../types/user";

export const initializationDataBase = () => {
  const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
      host: config.development.host,
      dialect: "postgres",
    }
  );

  sequelize
    .authenticate()
    .then(() => {
      console.log("Соединение с базой данных установлено успешно.");
    })
    .catch((err) => {
      console.error("Ошибка соединения с базой данных:", err);
    });
};

export async function getClients(user_id): Promise<User | undefined> {
  const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
      host: config.development.host,
      dialect: "postgres",
      schema: "playwright",
    }
  );

  sequelize
    .authenticate()
    .then(() => {
      console.log("Соединение с базой данных установлено успешно.");
    })
    .catch((err) => {
      console.error("Ошибка соединения с базой данных:", err);
    });

  const user = sequelize.define(
    "users",
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_name: {
        type: DataTypes.STRING,
      },
      user_password: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false, // Отключаем автоматическое добавление полей createdAt и updatedAt
    }
  );

  try {
    // Получение всех записей из таблицы
    const users = await user.findAll({
      where: {
        user_id: user_id, // замените на нужное вам значение user_id
      },
    });

    const selectedUser = users.map((u) => u.dataValues)[0];

    // // Вывод результатов
    // let selectedUsers = [];
    // users.forEach((user) => {
    //   selectedUsers.push(user.toJSON());
    // });

    return selectedUser;
  } catch (error) {
    console.error("Ошибка при запросе данных:", error);
  }
}
