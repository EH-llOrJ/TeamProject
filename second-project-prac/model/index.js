// index.js 가 model js파일들을 모아서 사용하는 곳
const Sql = require("sequelize");
// const dotenv = require("dotenv").config();
// config.js에서 module.exports = config 내보내기를 하고
// require로 가져오기
const config = require("../config/config");
// 시퀄라이즈 객체 생성 옵션을 적용한 객체 만들어 놓는다.
const sequelize = new Sql(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);
const db = {};
db.sequelize = sequelize;

module.exports = db;
