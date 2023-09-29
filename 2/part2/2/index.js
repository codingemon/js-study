// ES6-style-function 2

// arguments의 단점
// a,b,c라는 파라미터만 콘솔창에 출력하고 싶다(반복문돌리고 싶다)
// arguments라는  자료를 쪼개고 그래야
function 함수(a, b, c) {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
// 함수(2,3,4);

// Rest 파라미터를 쓰자

// 여기서 ...쓰면'rest파라미터'
// 이자리에 오는 모든 파라미터를[]에 보관해줌
function 함수2(a, b, ...파라미터들) {
  console.log(파라미터들);
}
함수2(1, 2, 3, 4, 5, 6, 7, 8); // [3,4,5,6,7,8]

// argumnets: 모든 파라미터를[]에 담아준다.
// rest parameter: 이 자리에 오는 모든 파라미터를 []에 담아줌

// rest vs spread 구분하기
// 1. 함수 파라미터 자리에 붙으면 rest
// 2. 나머지는 spread

// Q.모든 파라미터들을 하나씩 콘솔창에 출력해주는 함수?
// rest는 파라미터가 몇개 들어올지 미리 지정안해줘도 된다
function 함수2(...rest) {
  for (var i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}
함수2(1, 2, 3, 4, 2, 4, 5, 5, 6, 7);

// rest 파라미터 주의점.
// 1. 가장 뒤에 써야함
// 2. 두번 이상 금지
