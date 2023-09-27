// 자바스크립트 함수 업그레이드하기 (default parameter/arguments)

// b자리에 파라미터 안넣었을 때만 발동 b = 10, 수학연산자도 가능 (2 * 5)
// 함수도 입력가능
function 함수더하기(a, b = 10) {
  // b자리에 아무것도 안넣을 경우 10을 넣어주세요
  console.log(a + b);
}
더하기(1);
// 파라미터가 2개 들어가는 함수인데 1개만 써도 에러가 안남
// 함수의 default 파라미터

// 함수도 입력가능
function 임시함수() {}
function 함수더하기1(a, b = 임시함수()) {
  console.log(a + b);
}

// 함수의 arguments
// function 함수(a,b,c){
//     // 모든 파라미터를 한꺼번에 싸잡아서 다루고 싶을 경우
//     // argumnets 사용하자
//     console.log(arguments);
//     // 모든 파라미터를 []안에 넣은 변수
// }
// 함수(1,2,3);

// 입력한 파라미터를 전부 콘솔창에 출력해주는 함수
function 함수(a, b, c) {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

함수(2, 3, 4); // 2 3 4 하나하나 출력된다 순서대로
