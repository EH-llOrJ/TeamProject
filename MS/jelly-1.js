//젤리 기본 이미지
let whiteJellyImg = new Image();
whiteJellyImg.src = "images/Jelly/일반젤리1.png";

let yellowJellyImg = new Image();
yellowJellyImg.src = "images/Jelly/노란젤리1.png";

let redJellyImg = new Image();
redJellyImg.src = "images/Jelly/빨간젤리1.png";

let bigJellyImg = new Image();
bigJellyImg.src = "images/Jelly/왕젤리1.png";

const pointUp = document.getElementById("pointBox");
let pointHTML = pointUp.innerHTML;

const scoreUp = document.getElementById("endGame_score");
let scoreHTML = scoreUp.innerHTML;

//젤리 클래스
class WhiteJelly {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.eat = false;
    this.time = 0;
  }
  setEater() {
    this.eat = true;
  }
  getEater() {
    return this.eat;
  }
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(whiteJellyImg, this.x, this.y, this.width, this.height);
  }
}

class YellowJelly extends WhiteJelly {
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(yellowJellyImg, this.x, this.y, this.width, this.height);
  }
}

class RedJelly extends WhiteJelly {
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(redJellyImg, this.x, this.y, this.width, this.height);
  }
}

class BigJelly extends WhiteJelly {
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(bigJellyImg, this.x, this.y, this.width, this.height);
  }
}

//젤리먹기 함수
function jellyEat() {
  for (let i = 0; i < whiteJelly.length; i++) {
    if (whiteJelly[i].getEater() == false) {
      whitejellyEat(player, whiteJelly[i]);
    }
  }
  for (let i = 0; i < yellowJelly.length; i++) {
    if (yellowJelly[i].getEater() == false) {
      yellowjellyEat(player, yellowJelly[i]);
    }
  }
  for (let i = 0; i < redJelly.length; i++) {
    if (redJelly[i].getEater() == false) {
      redjellyEat(player, redJelly[i]);
    }
  }
  for (let i = 0; i < bigJelly.length; i++) {
    if (bigJelly[i].getEater() == false) {
      bigjellyEat(player, bigJelly[i]);
    }
  }
}

//젤리먹기 충돌체크
function whitejellyEat(player, _jelly) {
  let eatJellyX = _jelly.x - player.x;
  let eatJellyWidth = _jelly.x + _jelly.width - (player.x + player.width);
  let eatJellyY = _jelly.y - player.y;
  let eatJellyHeight = _jelly.y + _jelly.height - (player.y + player.height);
  if (
    eatJellyX < 55 &&
    eatJellyX > -55 &&
    eatJellyY < 55 &&
    eatJellyY > -55 &&
    eatJellyWidth < 55 &&
    eatJellyWidth > -55 &&
    eatJellyHeight < 55 &&
    eatJellyHeight > -55
  ) {
    _jelly.setEater();
    // ctxMain.clearRect(_jelly.x, _jelly.y, _jelly.width, _jelly.height);
    pointHTML = parseInt(pointHTML) + 1111;
    scoreHTML = parseInt(scoreHTML) + 1111;
    pointUp.innerHTML = pointHTML.toLocaleString("ko-KR");
    scoreUp.innerHTML = scoreHTML.toLocaleString("ko-KR");
  } else if (_jelly.getEater() == false) {
    _jelly.draw();
  }
}
function yellowjellyEat(player, _jelly) {
  let eatJellyX = _jelly.x - player.x;
  let eatJellyWidth = _jelly.x + _jelly.width - (player.x + player.width);
  let eatJellyY = _jelly.y - player.y;
  let eatJellyHeight = _jelly.y + _jelly.height - (player.y + player.height);
  if (
    eatJellyX < 55 &&
    eatJellyX > -55 &&
    eatJellyY < 55 &&
    eatJellyY > -55 &&
    eatJellyWidth < 55 &&
    eatJellyWidth > -55 &&
    eatJellyHeight < 55 &&
    eatJellyHeight > -55
  ) {
    _jelly.setEater();
    ctxMain.clearRect(_jelly.x, _jelly.y, _jelly.width, _jelly.height);
    pointHTML = parseInt(pointHTML) + 3333;
    scoreHTML = parseInt(scoreHTML) + 3333;
    pointUp.innerHTML = pointHTML.toLocaleString("ko-KR");
    scoreUp.innerHTML = scoreHTML.toLocaleString("ko-KR");
  } else if (_jelly.getEater() == false) {
    _jelly.draw();
  }
}
function redjellyEat(player, _jelly) {
  let eatJellyX = _jelly.x - player.x;
  let eatJellyWidth = _jelly.x + _jelly.width - (player.x + player.width);
  let eatJellyY = _jelly.y - player.y;
  let eatJellyHeight = _jelly.y + _jelly.height - (player.y + player.height);
  if (
    eatJellyX < 55 &&
    eatJellyX > -55 &&
    eatJellyY < 55 &&
    eatJellyY > -55 &&
    eatJellyWidth < 55 &&
    eatJellyWidth > -55 &&
    eatJellyHeight < 55 &&
    eatJellyHeight > -55
  ) {
    _jelly.setEater();
    ctxMain.clearRect(_jelly.x, _jelly.y, _jelly.width, _jelly.height);
    pointHTML = parseInt(pointHTML) + 5555;
    scoreHTML = parseInt(scoreHTML) + 5555;
    pointUp.innerHTML = pointHTML.toLocaleString("ko-KR");
    scoreUp.innerHTML = scoreHTML.toLocaleString("ko-KR");
  } else if (_jelly.getEater() == false) {
    _jelly.draw();
  }
}
function bigjellyEat(player, _jelly) {
  let eatJellyX = _jelly.x - player.x;
  let eatJellyWidth = _jelly.x + _jelly.width - (player.x + player.width);
  let eatJellyY = _jelly.y - player.y;
  let eatJellyHeight = _jelly.y + _jelly.height - (player.y + player.height);
  if (
    eatJellyX < 55 &&
    eatJellyX > -55 &&
    eatJellyY < 55 &&
    eatJellyY > -55 &&
    eatJellyWidth < 55 &&
    eatJellyWidth > -55 &&
    eatJellyHeight < 55 &&
    eatJellyHeight > -55
  ) {
    _jelly.setEater();
    ctxMain.clearRect(_jelly.x, _jelly.y, _jelly.width, _jelly.height);
    pointHTML = parseInt(pointHTML) + 33333;
    scoreHTML = parseInt(scoreHTML) + 33333;
    pointUp.innerHTML = pointHTML.toLocaleString("ko-KR");
    scoreUp.innerHTML = scoreHTML.toLocaleString("ko-KR");
  } else if (_jelly.getEater() == false) {
    _jelly.draw();
  }
}

let whiteJelly = [
  new WhiteJelly({ x: 510, y: 380, width: 40, height: 40 }),
  new WhiteJelly({ x: 535, y: 355, width: 40, height: 40 }),
  new WhiteJelly({ x: 560, y: 330, width: 40, height: 40 }),
  new WhiteJelly({ x: 585, y: 355, width: 40, height: 40 }),
  new WhiteJelly({ x: 610, y: 380, width: 40, height: 40 }),

  new WhiteJelly({ x: 1760, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 1810, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 1860, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 1910, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 1960, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2010, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2060, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2110, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2160, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2210, y: 450, width: 40, height: 40 }),

  new WhiteJelly({ x: 2310, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2360, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2410, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2460, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2510, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2510, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2560, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2610, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2660, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2710, y: 450, width: 40, height: 40 }),

  new WhiteJelly({ x: 2810, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2860, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2910, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 2960, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 3010, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 3060, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 3110, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 3160, y: 450, width: 40, height: 40 }),
  new WhiteJelly({ x: 3210, y: 450, width: 40, height: 40 }),
];

let yellowJelly = [
  new YellowJelly({ x: 810, y: 380, width: 40, height: 40 }),
  new YellowJelly({ x: 835, y: 355, width: 40, height: 40 }),
  new YellowJelly({ x: 860, y: 330, width: 40, height: 40 }),
  new YellowJelly({ x: 885, y: 355, width: 40, height: 40 }),
  new YellowJelly({ x: 910, y: 380, width: 40, height: 40 }),

  new YellowJelly({ x: 2240, y: 360, width: 40, height: 40 }),
  new YellowJelly({ x: 2270, y: 340, width: 40, height: 40 }),
  new YellowJelly({ x: 2300, y: 320, width: 40, height: 40 }),
  new YellowJelly({ x: 2360, y: 300, width: 40, height: 40 }),
  new YellowJelly({ x: 2410, y: 300, width: 40, height: 40 }),
  new YellowJelly({ x: 2460, y: 300, width: 40, height: 40 }),
  new YellowJelly({ x: 2510, y: 300, width: 40, height: 40 }),
  new YellowJelly({ x: 2560, y: 300, width: 40, height: 40 }),
  new YellowJelly({ x: 2610, y: 300, width: 40, height: 40 }),
  new YellowJelly({ x: 2660, y: 300, width: 40, height: 40 }),
  new YellowJelly({ x: 2710, y: 300, width: 40, height: 40 }),

  new YellowJelly({ x: 3310, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 3360, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 3410, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 3460, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 3510, y: 450, width: 40, height: 40 }),
  new YellowJelly({ x: 3560, y: 450, width: 40, height: 40 }),

  new YellowJelly({ x: 3860, y: 460, width: 40, height: 40 }),
  new YellowJelly({ x: 3910, y: 460, width: 40, height: 40 }),
  new YellowJelly({ x: 3960, y: 460, width: 40, height: 40 }),
  new YellowJelly({ x: 4010, y: 460, width: 40, height: 40 }),
  new YellowJelly({ x: 4060, y: 460, width: 40, height: 40 }),
  new YellowJelly({ x: 4110, y: 460, width: 40, height: 40 }),
  new YellowJelly({ x: 4160, y: 460, width: 40, height: 40 }),
];

let redJelly = [
  new RedJelly({ x: 1110, y: 380, width: 40, height: 40 }),
  new RedJelly({ x: 1135, y: 355, width: 40, height: 40 }),
  new RedJelly({ x: 1160, y: 330, width: 40, height: 40 }),
  new RedJelly({ x: 1185, y: 355, width: 40, height: 40 }),
  new RedJelly({ x: 1210, y: 380, width: 40, height: 40 }),

  new RedJelly({ x: 2810, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 2860, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 2910, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 2960, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 3010, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 3060, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 3110, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 3160, y: 270, width: 40, height: 40 }),
  new RedJelly({ x: 3210, y: 270, width: 40, height: 40 }),

  new RedJelly({ x: 3660, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 3710, y: 450, width: 40, height: 40 }),
  new RedJelly({ x: 3760, y: 450, width: 40, height: 40 }),
];

let bigJelly = [
  new BigJelly({ x: 1410, y: 260, width: 100, height: 100 }),
  new BigJelly({ x: 1440, y: 235, width: 100, height: 100 }),
  new BigJelly({ x: 1470, y: 210, width: 100, height: 100 }),
  new BigJelly({ x: 1500, y: 235, width: 100, height: 100 }),
  new BigJelly({ x: 1530, y: 260, width: 100, height: 100 }),

  new BigJelly({ x: 3310, y: 110, width: 100, height: 100 }),
  new BigJelly({ x: 3390, y: 80, width: 100, height: 100 }),
  new BigJelly({ x: 3470, y: 110, width: 100, height: 100 }),
];
