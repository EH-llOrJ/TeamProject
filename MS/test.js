// // //위에 땅 착지 더 구현 및 장애물 충돌
let obsImg = new Image();
obsImg.src = "images/Hurdle/hurdle1.png";

class Obs {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this._col = false;
    this.time = 0;
  }
  set_collision() {
    this._col = true;
  }
  get_collision() {
    return this._col;
  }
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(obsImg, this.x, this.y, this.width, this.height);
  }
}


function What_col() {
    for (let i = 0; i < obs.length; i++) {
        if (obs[i].get_collision() == false) {
            obs_col(player, obs[i]);
        }
    }
}

//충돌체크
function obs_col(player, _obj) {
    let CollisionX = _obj.x - player.x;
    console.log(CollisionX);
    let CollisionWidth = _obj.x + _obj.width - (player.x + player.width);
    // console.log(CollisionWidth);
    let CollisionY = _obj.y - player.y;
    // console.log(CollisionY);
    let CollisionHeight = _obj.y + _obj.height - (player.y + player.height);
    // console.log(CollisionHeight);
    if (
        CollisionX < 55 &&
        CollisionX > -55 &&
        CollisionY < 55 &&
        CollisionY > -55 &&
        CollisionWidth < 55 &&
        CollisionWidth > -55 &&
        CollisionHeight < 55 &&
        CollisionHeight > -55
    ) { 
        _obj.set_collision();
        ctxMain.clearRect(_obj.x, _obj.y, _obj.width, _obj.height);
        //hp = -1;
        console.log("쿵")      ;
    } else if (_obj.get_collision() == false) {
    _obj.draw();
    }
}

let obs = [
  new Obs({x: 380, y: 350, width: 120, height: 43}),
  new Obs({x: 500, y: 350, width: 120, height: 43}),
  new Obs({x: 620, y: 350, width: 120, height: 43}), 
];


