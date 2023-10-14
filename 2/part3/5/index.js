//연습문제

// Q1. 이미지로딩 체크하는 Promise 만들기
// 이미지 로딩은 load 이벤트리스너 쓰면 된다.

// var 이미지로딩 = new Promise(function (성공, 실패) {
//   var img = document.querySelector("#test");
//   img.addEventListener("load", function () {
//     성공();
//   });

//   img.addEventListener("error", function () {
//     실패();
//   });
// });

// 이미지로딩
//   .then(function () {
//     console.log("로딩성공");
//   })
//   .catch(function () {
//     console.log("로딩실패");
//   });

// Q2.Ajax 요청 성공/ 실패 알려주는 Promise 만들기
// (JQuery 문법)
// var 프로미스 = new Promise((성공, 실패 )=>{
//     $.get("http://codingapple1.github.io/hello.txt").done(function (결과) {
//     성공(결과);
//   });
// })

// 프로미스.then(function(결과){
//     console.log(결과)
// })

// Q3.Ajax 요청 성공시 또 다른곳으로 Ajax요청

// var 프로미스 = new Promise((성공, 실패) => {
//   $.get("http://codingapple1.github.io/hello.txt").done(function (결과) {
//     성공(결과);
//   });
// });

// 프로미스
//   .then(function (결과) {
//     console.log(결과);
//     // hello2.txt를 요청
//     return new Promise((성공, 실패) => {
//       var 프로미스 = new Promise((성공, 실패) => {
//         $.get("http://codingapple1.github.io/hello.txt").done(function (결과) {
//           성공(결과);
//         });
//       });
//     }); // .then()에서 new Promise()를 배출하면 뒤에 then을 또 쓸수 있구나~
//   })
//   .then(function (결과) {
//     // hello2.txt 요청 성공하면 이거 실행
//     console.log(결과);
//   });

// 위에 축약

var 프로미스 = ajax해주는함수("http://codingapple1.github.io/hello.txt");

프로미스
  .then(function (결과) {
    console.log(결과);
    // hello2.txt를 요청
    return ajax해주는함수("http://codingapple1.github.io/hello2.txt"); // .then()에서 new Promise()를 배출하면 뒤에 then을 또 쓸수 있구나~
  })
  .then(function (결과) {
    // hello2.txt 요청 성공하면 이거 실행
    console.log(결과);
  });

function ajax해주는함수(URL) {
  return new Promise((성공, 실패) => {
    $.get(URL).done(function (결과) {
      성공(결과);
    });
  });
}
