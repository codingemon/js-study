// spread operator

// 1. Array에 붙이면 대괄호를 제거해준다.
var 어레이 = ["hello", "world"];
console.log(...어레이); // hello world 대괄호 제거 문법

// 2.문자에 붙이면
var 문자 = "hello";
// console.log(...문자); // hello라는 문자가 해체 된거처럼 나와짐 (h e l l o)
// console.log(문자[1]); // 문자도 array처럼 인덱싱이 가능하다.

// 어디다가 쓰면 좋을가??
// var a = [1,2,3];
// var b = [4,5];

// // var c = [...a];
// // console.log(c); // [1,2,3]
// var c = [...a, ...b];
// console.log(c) // [1,2,3,4,5]

// 쓸곳 1. 어레이 합치기
// Deep copy
// a에 있는 값을 b에 복사하고 싶음 그래서 a를 할당함
// var a = [1,2,3];
// // var b = a; //그냥 등호로 복사하면 값을 공유함 (reference data type (Array,Object))
// var b = [...a]; // Spread operator를 이용하자. Deep copy
// a[3] = 4;

// console.log(a);
// // b에는 직접 값을 수정한 적이 없는데 왜 4가 추가됨?
// console.log(b);

// 쓸곳2. 오브젝트 합치기
// var o2를 만들때 o1에 있던거 그대로 넣고 싶음
var o1 = { a: 1, b: 2 };
// var o2 = {c:3}
var o2 = { ...o1, c: 3 }; // spead operator 대괄호 벗기기, 중괄호 벗기기, 둘다ok
// 근데 카피하다가 값 중복이 일어나면?
// var o2 = {a:2, ...o1}
var o2 = { a: 1, ...o1, a: 2 }; // 가장 뒤에 있는걸 출력
// ...은 중괄호, 대괄호, 함수소괄호 안에서만 사용기능
console.log(o2);
