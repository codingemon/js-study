// Symbol Es6 부터 추가됨

// 쓸데없는 Symbol
// 만드는법

// 심볼의 용도 : Object 자료형의 비밀스런 key값
// var 심볼 = Symbol("설명");

// var weight = Symbol("내 시크릿 몸무게임");
// var tall = Symbol("내 시크릿 신장임");

// var person = { name: "choi", age: 29, [tall]: 173 };
// // person.weight = 100;
// person[weight] = 100; // 시크릿, 반복문에 출력 안됨, 반복문에서 출력안됨(enumerable X)
// // person[tall] = 173;

// for (var key in person) {
//   console.log(person[key]);
// }

// import 해온 파일/ 라이브러리 쓸 때 거기 있던 object에 자료를 추가하고 싶다면

// Symbol 특징 1. 설명이 같다고 같은 Symbol이 아님 Symbol 만들 때 마다 유니크한 Symbol이 생김
// var a = Symbol("설명1");
// var b = Symbol("설명1");

// a === b; // false

// Sybol 특징 2. 전역 변수같은 전역 Symbol?
// Symbol.for()로 만드는 전역 심볼
// var a = Symbol.for("설명1"); // 전역심볼이 됨
// var b = Symbol.for("설명1");

// a === b; // true

// 특징 3. 기본내장 Symbol들

var 어레이 = [2, 3, 4];
어레이[Symbol.iterator]; // array에 집어넣는 기본 Symbol
