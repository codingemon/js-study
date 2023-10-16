// for in / for of

// 반복문은 1.코드 여러번 실핼 할떄
// 2. Array,Object에서 자료 꺼내쓸 때

// 그냥 for 반복문(어려움)
// for (var i = 0; i < 3; i++) {}

// forEach()반복문(Array전용)
// [1, 2, 3].forEach();

// for in 반복문 (Object전용)
// : Object에 있던 값을 전부 하나씩 꺼내서 사용할 때
// 특징 :  1. enumerable 한 것만 반복해준다.
// var 오브젝트 = { name: "choi", age: 30 };
// Object.getOwnPropertyDescriptor(오브젝트, "name"); // 오브젝트.name의 숨겨진 정보 출력

//      작명    반복할 Object
// for (var key in 오브젝트) {
//   console.log(오브젝트[key]);
// }

// 2. 부모의 prototype도 반복해준다.
// 부모 prototype까지 반복할 일이 별로 없음.
// class 부모 {}
// 부모.prototype.name = "park";
// var 오브젝트 = new 부모();

// for (var key in 오브젝트) {
//   // 내가 직접 가지고 있는 값만 반복시키고 싶으면
//   if (오브젝트.hasOwnProperty(key)) {
//     console.log(오브젝트[key]);
//   }
// }

// 3. Object 자료형에만 쓴다.

// for of 반복문(iterable전용)
// Array, 문자, arguments, NodeList, Map, Set
// iterable한 자료형에만 사용가능

var 어레이 = [2, 3, 4, 5];

for (var 자료 of 어레이) {
  console.log(자료);
}

// document.getElementsByClassName(); [HTML1, HTML2] //이게 NodeList
// document.querySelectorAll();

// 어레이[Symbol.iterator](); // 이게 있으면 iterable한 자료형
