// Promise

// 성공/실패 판정 기계
// var 프로미스 = new Promise();

// (콜백함수 만드는거랑 비슷함)
// 근데 콜백함수보다는 약간 기능이 많음.
// 프로미스.then(function(){
//     // 프로미스가 성공일 경우 실행할 코드

// })
// .then(function(){

// })

// // 실패할 경우에도 코드실행 가능
// 프로미스.catch(function(){
//     // (일반 콜백함수)
//     // 1번 실행 후 2번 실행해주세요~
// })

// 프로미스.finally(function(){
// })

// 성공/실패 판정 기계인 Promise 디자인하는법
// 성공(resolve), 실패(reject)
// 어려운 연산이 끝나면 특정 코드를 실행하고 싶음
var 프로미스 = new Promise(function (성공, 실패) {
  var 어려운연산 = 1 + 1; // 1+1 연산이 끝나면
  성공(); // 성공() 판정을 내려주세요.
  //   실패();
  // 성공() //then 함수까지 전해짐
});

프로미스
  .then(function () {
    // console.log("성공했다");
    console.log();
  })
  .catch(function () {
    console.log("실패했어요");
  });

// 1. 콜백 대신 예쁜코드
// 2. 성공/실패의 경우에 맞춰 각각 다른 코드 실행 가능

// Promise 예시 2
// 1초 후에 성공하는 Promise
// 그리고 성공시 특정 코드를 실행하고 싶음
var 프로미스 = new Promise(function (성공, 실패) {
  setTimeout(function () {
    성공();
  }, 1000);
});

프로미스
  .then(function () {
    console.log("성공했다");
  })
  .catch(function () {
    console.log("실패했어요");
  });

// Promise의 3가지 상태
// 1. 성공하면 <resolved>
// 2. 판정 대기중이면 <pending>
// 3. 실패하면 <rejected>

// Promise에 대한 오해
// 비동기적 처리가 가능하게 바꿔주는 마법의 문법이 아님
// 그냥 콜백함수 디자인의 대체품일 뿐

// Promise가 적용된 곳들
// JQuery.ajax()
$.ajax()
  .done(function () {})
  .fail();
// fetch()
fetch().then().catch();
