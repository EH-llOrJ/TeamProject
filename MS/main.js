//캔버스 변수 선언, 할당
let canvasMain = document.getElementById("main");
let ctxMain = canvasMain.getContext("2d");

//캔버스 크기
canvasMain.width = 2000;
canvasMain.height = 600;

//중력설정
let gravity = 0.02;

//플레이어 설정 speed 낮추면 플레이어 움직임 속도 up
let player = {
  x: 120,
  y: 400,
  width: 80,
  height: 90,
  yspeed: 0,
  index: 0,
  speed: 3,
  time: 0,
  state: "run",
  draw() {
    this.time++;
    if (this.time % this.speed === 0) {
      if (this.index < 3) {
        this.index++;
      } else {
        this.index = 0;
      }
    }
    //히트박스 설정
    // ctxMain.fillStyle = "green";
    // ctxMain.fillRect(this.x, this.y, this.width, this.height);
    //포인트박스 설정
    // ctxMain.fillStyle = "yellow";
    // ctxMain.fillRect(this.x + 17, this.y + 20, 50, 50);
    //조건 ? 맞는거 : 틀린거
    ctxMain.drawImage(
      this.state == "run"
        ? runPlayer[this.index]
        : this.state == "slide"
        ? slidePlayer[this.index]
        : this.state == "jump"
        ? jumpPlayer[this.index]
        : this.state == "dbjumpstart"
        ? dbjumpstartPlayer[this.index]
        : this.state == "dbjump"
        ? dbjumpPlayer[this.index]
        : this.state == "dbjumplast"
        // ? collPlayer[this.index]
        // : this.state == "coll"
        ? dbjumplastPlayer[this.index]
        : null,
        
      this.x,
      this.y,
      this.width,
      this.height
    );
  },
  update() {
    this.draw();
    this.y += this.yspeed;
    this.yspeed += gravity;

    //땅에 붙으면 하락값 0
    for (let i = 0; i < floor.length; i++)
      if (this.y + this.height > floor[i].height) {
        this.yspeed += gravity;
      } else this.yspeed = 0;
  },
};

//플레이어 이미지 프레임변경
//달리기 이미지
let runPlayer = new Array();
let imglinkRun = [
  "images/Character/Taehoon/Run/Run1.png",
  "images/Character/Taehoon/Run/Run2.png",
  "images/Character/Taehoon/Run/Run3.png",
  "images/Character/Taehoon/Run/Run4.png",
];
for (let i = 0; i < 4; i++) {
  runPlayer.push(new Image());
  runPlayer[i].src = imglinkRun[i];
}
//슬라이드 이미지
let slidePlayer = new Array();
let imglinkSlide = [
  "images/Character/Taehoon/Slide/Slide1.png",
  "images/Character/Taehoon/Slide/Slide2.png",
  "images/Character/Taehoon/Slide/Slide1.png",
  "images/Character/Taehoon/Slide/Slide2.png",
];
for (let i = 0; i < 4; i++) {
  slidePlayer.push(new Image());
  slidePlayer[i].src = imglinkSlide[i];
}
//점프 이미지
let jumpPlayer = new Array();
let imglinkJump = [
  "images/Character/Taehoon/Jump/Jump1.png",
  "images/Character/Taehoon/Jump/Jump2.png",
  "images/Character/Taehoon/Jump/Jump1.png",
  "images/Character/Taehoon/Jump/Jump2.png",
];
for (let i = 0; i < 4; i++) {
  jumpPlayer.push(new Image());
  jumpPlayer[i].src = imglinkJump[i];
}
//더블점프 이미지
//더블점프 스타트
let dbjumpstartPlayer = new Array();
let imglinkDbjumpstart = [
  "images/Character/Taehoon/Jump/DbjumpStart.png",
  "images/Character/Taehoon/Jump/DbjumpStart.png",
  "images/Character/Taehoon/Jump/DbjumpStart.png",
  "images/Character/Taehoon/Jump/DbjumpStart.png",
];
for (let i = 0; i < 4; i++) {
  dbjumpstartPlayer.push(new Image());
  dbjumpstartPlayer[i].src = imglinkDbjumpstart[i];
}
let dbjumpPlayer = new Array();
let imglinkDbjump = [
  "images/Character/Taehoon/Jump/Dbjump1.png",
  "images/Character/Taehoon/Jump/Dbjump2.png",
  "images/Character/Taehoon/Jump/Dbjump3.png",
  "images/Character/Taehoon/Jump/Dbjump4.png",
];
for (let i = 0; i < 4; i++) {
  dbjumpPlayer.push(new Image());
  dbjumpPlayer[i].src = imglinkDbjump[i];
}
let dbjumplastPlayer = new Array();
let imglinkDbjumplast = [
  "images/Character/Taehoon/Jump/Dbjumplast.png",
  "images/Character/Taehoon/Jump/Dbjumplast.png",
  "images/Character/Taehoon/Jump/Dbjumplast.png",
  "images/Character/Taehoon/Jump/Dbjumplast.png",
];
for (let i = 0; i < 4; i++) {
  dbjumplastPlayer.push(new Image());
  dbjumplastPlayer[i].src = imglinkDbjumplast[i];
}

//피격시 이미지

//점프기능
function jumpSkill() {
  //점프시 점프값 증가 & 이미지 변경
  if (jump == true) {
    player.y -= 7.57;
    jumpTimer++;
  }

  //더블점프
  if (dbjump == true) {
    player.y -= 0.45;
    jumpTimer++;
  }

  //더블 점프 이미지 변경
  if (player.state == "dbjumpstart" && jumpTimer > 30) {
    player.state = "dbjump";
  }
  if (player.state == "dbjump" && jumpTimer > 110) {
    player.state = "dbjumplast";
  }
  //더블 점프 & 점프타이머 100 넘어가면 상승 끝
  if (player.state == "dbjump" && jumpTimer > 10) {
    player.y -= 0;
  }
}

// //충돌 클래스
// class Collision {
//   constructor({ x, y, width, height }) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.aaa = true;
//     this.time = 0;
//     this.a = false;
//   }
//   set() {
//     this.a = true;
//   }
//   get() {
//     return this.a;
//   }
// }

// function skycoll(player, _obs) {
//   let tempX = player.x - _obs.x;
//   if (player.height == 55 && tempX > -110 && tempX < 320) {
//     // console.log("정상");//정상적으로 장애물 통과하는 과정
//   } else if (player.height == 90 && tempX > -82 && tempX < 320 && this.a == true) {
//     //충돌일 때
//     console.log("충돌");
//     this.aaa = false; 
//     //this.time++;
//   } else if (this.aaa == false && tempX > 320) {
//     // this.a = true;
//     this.aaa = true;
//   }
// }



//점수선언
let point = 0;
let pointImg = new Image();
pointImg.src = "images/Map/point.png";

//폰트적용 점수
let font = new FontFace("pointFont", "url(images/Font/CookieRunRegular.ttf)");
font.load().then(function () {
  ctxMain.font = "25px pointFont";
});

//점수표
let drawScore = {
  draw() {
    ctxMain.fillStyle = "black";
    ctxMain.fillText(point.toLocaleString("ko-KR"), 450, 120, 300);
    ctxMain.drawImage(pointImg, 410, 97, 30, 30);
  },
};

//전역변수(frame=프레임, jumpTimer = 점프시간)
let frame = 0;
let jumpTimer = 0;
let jump = false;
let dbjump = false;

//키 코드 확인3
// addEventListener("keydown", function () {
//   console.log(this.event);
// });

let isSliding = false;
let floatPlayer = false;

//키 이벤트
document.addEventListener("keydown", function (key) {
  if (player.state == "run") {
    switch (key.code) {
      case "Space":
        if (isSliding == true) {
          isSliding = false;
          player.state = "run";
          player.height = 90;
          player.width = 80;
          player.state = "jump";
        }
        player.y = player.y - 0.1;
        player.state = "jump";
        jump = true;
        floatPlayer = true;
        break;
    }
  }
  if (player.state == "jump" && jumpTimer > 10) {
    switch (key.code) {
      case "Space":
        jumpTimer = 0;
        player.yspeed = 0;
        player.state = "dbjumpstart";
        dbjump = true;
        break;
    }
  }

  switch (key.code) {
    case "KeyA":
      player.x -= 10;
      break;

    case "KeyD":
      player.x += 10;
      break;

    case "ArrowDown":
      if (
        player.state == "jump" ||
        jump == "true" ||
        player.state == "dbjumpstart" ||
        player.state == "dbjump" ||
        player.state == "dbjumplast"
      ) {
        return;
      } else if (player.state == "run") {
        player.state = "slide";
        player.height = 55;
        player.width = 95;

        if (!isSliding) {
          player.y = player.y + 35;
          isSliding = true;
        }
        break;
      }
  }
});

document.addEventListener("keyup", function (key) {
  switch (key.code) {
    case "ArrowDown":
      if (player.state == "slide") {
        player.state = "run";
        isSliding = false;
        player.height = 90;
        player.width = 80;
        player.y = player.y - 35;

        break;
      }
  }
});

let a = true;

//게임실행
function game() {
  // if (!continueAnimating) { return; }
  //멈춤 버튼 클릭시 애니메이션 멈춤
  if (!continueAnimating) {
    cancelAnimationFrame(game);
  } else { requestAnimationFrame(game) }; 
  
  frame++;
  // requestAnimationFrame(game);

  //전체 영역 클리어
  ctxMain.clearRect(0, 0, canvasMain.width, canvasMain.height);
  ctxBackground.clearRect(0, 0, canvasBackground.width, canvasBackground.width);

  //땅 올라타기
  //밑에 땅  
  for (let i = 0; i < floor.length; i++) {
    if (
      player.y + player.height >= floor[i].y &&
      player.x + player.width - 10 >= floor[i].x &&
      player.x + 30 <= floor[i].x + floor[i].width
    ) {
      player.yspeed = 0;
      floatPlayer = false;
      jumpTimer = 0;
      jump = false;
      dbjump = false;
      if (player.state != "slide") {
        player.state = "run";
        player.y = 420;
      }
    }
  }
  //위에 땅 play.y값이랑 floatFloor의 y값의 차이가 조금 있음
  if(player.y+50 <= floatFloor[0].y && player.state != "dbjumpstart") {
    for (let i = 0; i < floatFloor.length; i++) {
      if (
        player.y + player.height >= floatFloor[i].y &&
        player.x + player.width - 10 >= floatFloor[i].x &&
        player.x + 30 <= floatFloor[i].x + floatFloor[i].width
      ) {
        player.y = floatFloor[i].y - player.height;
        player.yspeed = 0;
        jumpTimer = 0;
        jump = false;
        dbjump = false;
        if (player.state != "slide") {
          player.state = "run";
        }
      }
    }
  }

  for (let i = 0; i < skyHurdle.length; i++) {
    if (skyHurdle[i].x < 200 && skyHurdle[i].x > 0 && player.height == 90 && a == true) {
      console.log("충돌");
      a = false;
      console.log(skyHurdle[i].x);
      console.log(a);
    }
  }
  
  

  
  
  // console.log(obs[0].x);
  // console.log(player.y);
  // console.log(skyHurdle[0].x); //200 쯤
  //허들이 높은 값에서 200으로 좁혀지고 play.x값 120 차 80 80~90사이쯤?
  //console.log(skyHurdle[0].height); height 0~430(지정값)
  //console.log(player.height);//평상시 90 앉을 때만 55
  //충돌은 x값의 차와 height55가 아닐 때로?
  
  

  jellyEat();
  jumpSkill();

  //맵그리기, 땅그리기, 점수 그리기, 젤리 그리기, 캐릭터 그리기
  background.draw();
  floor.forEach((floor) => {
    floor.draw();
  });
  floatFloor.forEach((floor) => {
    floor.draw();
  });
  skyHurdle.forEach((skyHurdle) => {
    skyHurdle.draw();
  });
  // obs.forEach((obs) => {
  //   obs.draw();
  // });
  // MM_obs.forEach((MM_obs) => {
  //   MM_obs.draw();
  // })
  


  drawScore.draw();
  player.update();

  //hp.js함수 실행
  breadDraw();
  jamDraw();
}
//실행
game();
