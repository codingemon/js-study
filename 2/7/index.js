// 문제1
함수();
function 함수() {
  // let, const는 저런 행위 금지
  // undefined 자동으로 할당 안됨
  // var: Hoisitng시 undefined 할당 됨
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

// 문제3..
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
