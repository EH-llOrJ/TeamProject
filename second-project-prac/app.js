const express = require("express");
const mysql2 = require("mysql2");
const bcrypt = require("bcrypt");
const session = require("express-session");
const mailer = require("nodemailer");
const axios = require("axios");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false })); // body-parser 대용

app.listen(80, () => {
  console.log("80 server on");
});
