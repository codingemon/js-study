var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// 등장 캐릭터의 속성부터 object 자료에 정리해두면 편리
var dino = {
  // 공룡 등장 좌표
  x: 10,
  y: 200,
  // 공룡 폭과 높이
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

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
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
var cactus = new Cactus();
cactus.draw();

// 애니메이션을 만들려면
// 1초에 60번 x++ 해줘야

var timer = 0;
var cactus여러개 = [];

function 프레임마다다실행할거() {
  requestAnimationFrame(프레임마다다실행할거);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (timer % 120 === 0) {
    var cactus = new Cactus();
    // 장애물 여러개 관리하기
    cactus여러개.push(cactus);
  }
  cactus여러개.forEach((a) => {
    a.draw();
  });
  dino.draw();
}
프레임마다다실행할거();
