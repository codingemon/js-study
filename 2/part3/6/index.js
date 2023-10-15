// async / await

// Prmise 순차적실행을 위해 콜백함수 대신 쓸 수 있는 코딩 패턴
// var 프로미스 = new Promise(function (성공, 실패) {
//   setTimeout(function () {
//     성공();
//   }, 1000);
// });

// 프로미스
//   .then(function () {
//     console.log("성공했어요");
//   })
//   .catch(function () {
//     console.log("실패했어요");
//   });

// async/await
// 연산이 끝나면 특정코드를 실행하고 싶음 - 콜백함수 써보겠음
// function 더하기(콜백){
//     1 + 1
//     콜백()
// }

// 더하기(함수);

// // async를 function 앞에 붙이면 함수가 Promise 역할가능
// // 함수 실행 후에 Promise 오브젝트가 남는다.
// async function 더하기() {
//   1 + 1;
// }

// 더하기().then(function () {
//   console.log("성공이예요");
// });

// // 연산결과 출력
// // 성공만 가능
// async function 더하기2() {
//   return 1 + 1;
// }

// 더하기().then(function (결과) {
//   console.log(결과);
// });

// // 강제로 살패를 보내줄 수도 있다.
// async function 실패보내기() {
//   return Promise.reject("실패");
// }

// 실패보내기().then(function (결과) {
//   console.log(결과);
// });

// // async function 안에서 쓰는 await
// async function 더하기3() {
//   // 함수 안에서 Promise 쓰기
//   var 프로미스 = new Promise(function (성공, 실패) {
//     var 힘든연산 = 1 + 1;
//     성공(100); // 결과
//   });
//   // async function 안에서 쓰는 await then 대신 사용가능
//   // await은 프로미스 실패시 에러나고 멈춘다.
//   // 방지하려면 trt{}catch{}
//   try {
//     var 결과 = await 프로미스; // awiat 프로미스 해결될때까지 기다려주세요
//     console.log(결과);
//   } catch {
//     console.log("프로미스 연산이 안됨");
//   } // 100
//   //   프로미스.then(function () {
//   //     console.log("성공했음");
//   //   });
// }

// 더하기3();

// Q.<button>을 누르면 성공판정하는 Promise
async function 눌러보자() {
  var 프로미스 = new Promise(function (성공, 실패) {
    document.getElementById("button").addEventListener("click", function () {
      성공("성공했습니다.");
    });
  });
  try {
    var 결과 = await 프로미스;
    console.log(결과);
  } catch {
    console.log("실패예요");
  }
}
눌러보자();
