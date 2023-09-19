// 문제1
함수();
function 함수() {
  console.log(안녕); //undefined
  let 안녕 = "Hello!";
}

// 문제2
var 함수 = function () {
  console.log(안녕); // Hello
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
