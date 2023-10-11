// 자바스크립트는 동기식처리 (Synchronous)
// - 한번에 코드 한줄씩 차례로 실행
// - 병렬처리가 가능하다? 노노
console.log(1);
console.log(2);
console.log(3);

// 비동기식처리 (Asynchronous)
// Web API 덕분에
// 오래걸리는 작업이 있으면 제껴두고 다른거부터 처리하는 방식
console.log(1); //1
// 오래걸리거나 실행까지 오래걸리는 함수들
setTimeout(() => {
  console.log(2);
}, 1000); //3  비동기식처리 도와주는 함수
// addEventListener('click', function(){})
// $.ajax()
console.log(3); //2

// 웹브라우저의 특수성

// js를 순차적으로 실행하려면?
// = 콜백함수를 사용함 (함수안에 들어가는 함수 = 콜백함수)
console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 1000);
// addEventListener('click', function(){})
// console.log(3);

// 첫째함수() 다음에 둘째함수()를 실행하고 싶음
//콜백함수를 이용한 함수 디자인
// 콜백함수는 함수 디자인 패턴일 뿐이다.
function 첫째함수(구멍) {
  console.log(1);
  구멍();
}

function 둘째함수() {
  console.log(2);
}

// 실패할 수 있음
// 첫째함수();
// 둘째함수();

첫째함수(둘째함수);

// 콜백함수의 문제점
촛쨰함수(function () {
  둘쨋함수(function () {
    셋째함수(function () {});
  });
});

// => 더 쉽게 쓰기 위한 Promise 패턴
촛째훔수()
  .then(function () {})
  .then(function () {});
