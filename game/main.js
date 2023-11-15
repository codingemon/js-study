var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// 등장 캐릭터의 속성부터 object 자료에 정리
var dino = {
  // 도라에몽 등장 좌표
  x: 10,
  y: 200,
  // 도라에몽 폭과 높이
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img2, this.x, this.y);
  },
};

// 이미지 넣기
var img1 = new Image();
img1.src = "./Img/jingu.png";
var img2 = new Image();
img2.src = "./Img/doraemon.png";

// 장애물도 역시 속성부터 object자료에 정리해두면 편리
// 장애물들은 width, height 이런게 각가 다를 수도 -> 비슷한 Object가 많이 필요
class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    // ctx.fillRect(this.x, this.y, this.width, this.height); 히트박스
    ctx.drawImage(img1, this.x, this.y);
  }
}
var cactus = new Cactus();
cactus.draw();

// 애니메이션을 만들려면
// 1초에 60번 x++ 해줘야

var timer = 0;
var cactus여러개 = [];
var 점프timer = 0;
var animattion;

function 프레임마다다실행할거() {
  animattion = requestAnimationFrame(프레임마다다실행할거);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 장애물 소환
  if (timer % 200 === 0) {
    var cactus = new Cactus();
    // 장애물 여러개 관리하기
    cactus여러개.push(cactus);
  }
  cactus여러개.forEach((a, i, o) => {
    // x좌표가 0미만이면 제거
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x--;

    충돌하냐(dino, a);

    a.draw();
  });

  // 점프기능

  if (점프중 == true) {
    dino.y--;
    점프timer++;
  }
  if (점프중 == false) {
    if (dino.y < 200) dino.y++;
  }
  if (점프timer > 100) {
    점프중 = false;
    점프timer = 0;
  }
  dino.draw();
}
프레임마다다실행할거();

// 충돌확인

function 충돌하냐(dino, cactus) {
  var x축차이 = cactus.x - (dino.x + dino.width);
  var y축차이 = cactus.y - (dino.y + dino.height);
  if (x축차이 < 0 && y축차이 < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animattion);
  }
}

var 점프중 = false;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    점프중 = true;
  }
});
