const dotenv = require("dotenv").config();

const config = {
  dev: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

module.exports = config;
