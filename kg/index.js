const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_database,
});

router.get("/", (req, res) => {
  res.render("main.ejs");
  if (req.session.token == undefined) req.session.accesstoken = "";
  console.log(req.session);
});

module.exports = router;
