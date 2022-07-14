//젤리 기본 이미지
let whiteJellyImg = new Image();
whiteJellyImg.src = "images/Jelly/일반젤리1.png";

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

function jellyEat() {
  for (let i = 0; i < whiteJelly.length; i++) {
    if (whiteJelly[i].getEater() == false) {
      whitejellyEat(player, whiteJelly[i]);
     }
   }
}

//젤리먹기 충돌체크
function whitejellyEat(player, _jelly) {
    let eatJellyX = _jelly.x - player.x;
    let eatJellyWidth = _jelly.x + _jelly.width - (player.x + player.width);
    let eatJellyY = _jelly.y - player.y;
    let eatJellyHeight = _jelly.y + _jelly.height - (player.y + player.height);
    console.log(eatJellyHeight);
    
  if (
    eatJellyX < 80 &&
    eatJellyX > -80 &&
    eatJellyWidth < 130 &&
      eatJellyWidth > -130 &&
      eatJellyHeight > -55
  ) {
    _jelly.setEater();
    ctxMain.clearRect(_jelly.x, _jelly.y, _jelly.width, _jelly.height);
    point += 1111;
  } else if (_jelly.getEater() == false) {
    _jelly.draw();
  }
}

let whiteJelly = [
    new WhiteJelly({ x: 380, y: 15, width: 120, height: 430 }),
    new WhiteJelly({ x: 500, y: 15, width: 120, height: 430 }),
    new WhiteJelly({ x: 620, y: 15, width: 120, height: 430 }),
];

