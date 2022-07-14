let obj_Img = new Image();
obj_Img.src = "images/Hurdle/hurdle1.png";


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
    ctxMain.drawImage(obj_Img, this.x, this.y, this.width, this.height);
  }
}

//젤리먹기 함수
function jellyEat() {
  for (let i = 0; i < MM_obs.length; i++) {
    if (MM_obs[i].getEater() == false) {
      whitejellyEat(player, MM_obs[i]);
    }
  }
}

//젤리먹기 충돌체크
function whitejellyEat(player, _jelly) {
    let eatJellyX = _jelly.x - player.x;
    console.log(eatJellyX);
    let eatJellyWidth = _jelly.x + _jelly.width - (player.x + player.width);
    console.log(eatJellyWidth);
  let eatJellyY = _jelly.y - player.y;
  let eatJellyHeight = _jelly.y + _jelly.height - (player.y + player.height);
    if (
        eatJellyX < 110 &&
        eatJellyX > -110
    ) {
      _jelly.setEater();
      console.log("??????");    
    
  } else if (_jelly.getEater() == false) {
        _jelly.draw();        
  }
}

let MM_obs = [
  new WhiteJelly({ x: 380, y: 15, width: 120, height: 430 }),
  new WhiteJelly({ x: 500, y: 15, width: 120, height: 430 }),
  new WhiteJelly({ x: 620, y: 15, width: 120, height: 430 }),  
];