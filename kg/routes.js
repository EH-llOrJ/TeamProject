const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { query } = require("express");
const { Template, resolveInclude } = require("ejs");
let dbScoreData;

const connection = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_database,
});

function getScore() {
  const db_getScore = "select name, score from members order by score desc";
  connection.query(db_getScore, (err, scoreData) => {
    if (err) console.log(err);
    else {
      dbScoreData = scoreData;
    }
  });
}

router.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

router.post("/signup", (req, res) => {
  let query1 = `${process.env.db_queryidFIRST}'${req.body.id}'`;
  connection.query(query1, (err, result) => {
    // 위 쿼리문 실행시 나오는 결과값이 result에 담김
    if (err) console.log("중복확인 쿼리문 에러", err);
    else {
      if (result[0] == undefined) {
        res.send("usable");
      } else {
        console.log("사용자 있음 다른 아이디 사용하셈");
        res.send("disusable");
      }
    }
  });
});

// 중복 검사 끝내고 회원가입 하는 포스트
router.post("/signUpPro", (req, res) => {
  let dbdb = {};
  dbdb[process.env.dbID] = req.body.hiddenId;
  dbdb[process.env.dbPW] = bcrypt.hashSync(req.body.password, 10);
  dbdb[process.env.dbNAME] = req.body.name;
  dbdb[process.env.dbPHONE] = req.body.phoneNum;
  dbdb[process.env.dbBIRTH] = req.body.birth;
  // dbdb 객체에 [키값] = 밸류값 으로 들어감
  console.log(dbdb);
  connection.query(process.env.db_signupquery, dbdb, (err, result) => {
    if (err) console.log("query err", err);
    else {
      console.log("가입성공");
      res.redirect("/kg/logout123");
    }
  });
});

router.get("/login", (req, res) => {
  let token = req.cookies.token;
  try {
    jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    res.redirect("/kg/logout1");
  } catch (err) {
    getScore();
    setTimeout(() => {
      res.render("login.ejs", { scoreData: dbScoreData });
    }, 200);
  }
});

router.post("/login", (req, res) => {
  const logincheck = process.env.db_loginquery + req.body.id + '";';
  connection.query(logincheck, (err, result) => {
    if (err) console.log("login check query string error", err);
    else {
      if (result[0] == undefined) {
        res.send("loginfail");
      } else if (!bcrypt.compareSync(req.body.pw, result[0].pw)) {
        res.send("loginfail");
      } else if (bcrypt.compareSync(req.body.pw, result[0].pw)) {
        let token = jwt.sign(
          {
            id: req.body.id,
          },
          process.env.JWT_TOKEN_SECRET,
          { expiresIn: "24h" }
        );
        req.session.accesstoken = token;
        res.send("loginsuc");
      }
    }
  });
});
// 마이페이지 에서 비밀번호 변경 페이지
router.post("/updatepw", (req, res) => {
  let changepw = bcrypt.hashSync(req.body.newpw, 10); // 변경하려는 비밀번호 암호화
  const changepwinfo = `update members set pw = '${changepw}' where id = '${req.body.id}'`;
  const checkpwinfo = `select pw from members where id = '${req.body.id}'`;
  connection.query(checkpwinfo, (err, result) => {
    console.log(result[0]);
    if (err) console.log("checkpw err", err);
    else {
      if (result[0] === undefined) {
        console.log("잘못된 요청");
        res.send("none id");
      } else if (!bcrypt.compareSync(req.body.nowpw, result[0].pw)) {
        console.log("현재 비밀번호 틀림");
        res.send("nowpwerr");
        // res.render("myinfo.ejs","nowpwerror")
      } else if (bcrypt.compareSync(req.body.nowpw, result[0].pw)) {
        console.log("비밀번호 변경 하겠슴");
        connection.query(changepwinfo, (err, result2) => {
          if (err) console.log(err);
          else {
            res.send("changesuc");
          }
        });
      }
    }
  });
});
router.get("/logout", (req, res) => {
  // 토큰이란 쿠키 삭제
  res.cookie("token", null, { maxAge: 0 });
  res.redirect("/");
});

router.get("/pwtokendel", (req, res) => {
  res.cookie("pwtoken", null, { maxAge: 0 });
  res.redirect("/");
});
router.get("/logout1", (req, res) => {
  let token = req.cookies.token;
  getScore();
  try {
    let decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    console.log(decoded.user.id);
    if (decoded) {
      let time = new Date();
      // const timecheck = process.env.dbregistDate + decoded.user.id + '";';
      const nameDate = process.env.db_nameAndDate + decoded.user.id + '";';
      console.log(nameDate);
      connection.query(nameDate, (err, result) => {
        if (err) console.log(err);
        else {
          res.render("logoutPage.ejs", {
            isId: decoded.user.id,
            time: result[0].registDate,
            name: result[0].name,
            scoreData: dbScoreData,
          });
        }
      });
    }
  } catch (err) {
    res.redirect("/kg/login");
  }
});

// id 중복확인

let oScore = ""; // 기존 최고 점수
router.post("/updateScore", (req, res) => {
  let token = req.cookies.token;
  let decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
  const score = req.body.scoreFinal.replaceAll(",", ""); // 문자열 점수에서 , 제거 // 실시간 점수

  const originalScore = process.env.db_originalScore + decoded.user.id + '";';
  connection.query(originalScore, (err, origin) => {
    if (err) console.log(err);
    else {
      oScore = origin[0].score;
      if (Number(oScore) < Number(score)) {
        const scoreSql =
          process.env.db_scoreUpdate +
          score +
          process.env.db_scoreUpdate2 +
          decoded.user.id +
          '";';
        connection.query(scoreSql, (err, result) => {
          if (err) console.log(err);
          else res.send("updateSuc");
        });
      } else res.send("soSmall");
    }
  });
});

router.get("/maingame", (req, res) => {
  res.render("game.ejs");
});
router.get("/myinfo", (req, res) => {
  let token = req.cookies.token;
  console.log(token);
  if (!req.cookies.token) {
    res.redirect("/kg/error");
  } else {
    let decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    console.log(decoded);
    if (decoded) {
      connection.query(
        "select * from members where id = '" + decoded.user.id + "';",
        (err, result) => {
          if (err) {
            console.log(err);
            res.redirect("/kg/error");
          } else {
            let date = String(result[0].birth);
            console.log(date);
            res.render("myinfo.ejs", {
              id: result[0].id,
              name: result[0].name,
              phone: result[0].phone,
              birth: result[0].birth,
            });
          }
        }
      );
    }
  }
});

router.post("/resultsearchid", (req, res) => {
  let qs = `select id from members where name = '${req.body.name}' and phone = '${req.body.phone}'`;
  connection.query(qs, (err, result) => {
    console.log(result);
    if (err) console.log("쿼리에러" + err);
    else
      res.render("searchidsuc", {
        id: result,
      });
  });
});

router.post("/changepw", (req, res) => {
  const qs = `select id from members where id = '${req.body.id}' and phone = '${req.body.phone}' and name = '${req.body.name}'`;
  connection.query(qs, (err, result) => {
    console.log(result);
    if (err) console.log("qs err", err);
    else {
      if (result[0].id == undefined) {
        console.log("언디파인드 실행");
        res.send("fail");
        res.redirect("/kg/searchpw");
      } else if (result[0].id != undefined) {
        console.log("낫 언디파인드 실행");
        let token1 = jwt.sign(
          {
            type: "jwt",
            name: "GyeongHwan",
            id: req.body.id,
          },
          process.env.JWT_TOKEN_PWSECRET,
          {
            expiresIn: "3m",
            issuer: "GYEONG-1",
          }
        );
        res.cookie("pwtoken", token1);
        res.send("suc");
      }
    }
  });
});

router.get("/changepwhurryup", (req, res) => {
  let token = req.cookies.pwtoken;
  console.log(token);
  jwt.verify(token, process.env.JWT_TOKEN_PWSECRET, (err, result) => {
    if (err) {
      res.redirect("/kg/searchpw");
    } else {
      res.render("changepw.ejs");
    }
  });
});
router.post("/changepwhurryup", (req, res) => {
  let token = req.cookies.pwtoken;
  jwt.verify(token, process.env.JWT_TOKEN_PWSECRET, (err, decoded) => {
    if (err) res.redirect("/kg/searchpw");
    else {
      let newpw = bcrypt.hashSync(req.body.pw, 10);
      const qs = `update members set pw = '${newpw}' where id = '${decoded.id}'`;
      connection.query(qs, (err, result) => {
        if (err) console.log("pw change qs err", err);
        else {
          res.send("change suc");
        }
      });
    }
  });
});

router.get("/error", (req, res) => {
  res.render("error.ejs");
});

router.get("/searchinfo", (req, res) => {
  res.render("searchpassword.ejs");
});
router.get("/searchid", (req, res) => {
  res.render("searchid");
});
router.get("/searchpw", (req, res) => {
  res.render("searchpw");
});
module.exports = router;
