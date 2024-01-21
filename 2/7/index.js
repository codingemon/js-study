// 문제1
함수();
function 함수() {
  // let, const는 저런 행위 금지
  // undefined 자동으로 할당 안됨
  // var: 호이스팅시 undefined 할당 됨
  // let,const X
  console.log(안녕); //error
  let 안녕 = "Hello!";
}

// 문제2
함수(); // error
// function 함수(){} : 전부가 Hoisting 됨
// var 함수 = function(){}: 선언 부분만 Hositing
var 함수 = function () {
  console.log(안녕);
  var 안녕 = "Hello!";
};

// 문제3
let a = 1;
var 함수 = function () {
  a = 2;
};
console.log(a); // 1

// 문제4
let a = 1;
var b = 2;
window.a = 3;
window.b = 4;

console.log(a + b); //7

// 문제5
// // setTimeout 5회 반복시키기
// var i = 5; // 반복문이 다 실행되고 전역변수로 남아있음
// var 에서 let으로 바꾸자
for (let i = 0; i < 5; i++) {
  // 바로 실행되는 코드가 아님 (1~5회 후에 실행됨)
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// 문제6. 이벤트리스너 반복시키기
// let으로 바꾸면 해결.
var 버튼들 = document.querySelectorAll("button");
var 모달창들 = document.querySelectorAll("div");

for (let i = 0; i < 3; i++) {
  버튼들[i].addEventListener("click", function () {
    모달창들[i].style.display = "block";
  });
}
