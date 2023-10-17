// Map/ Set

// Map 자료형 key, value를 저장
// 자료간의 연관성을 표현하기 위해 쓴다.
// var person = new Map();
// // Object 자료형은 자료 이름으로 글자만 가능
// // Map 자료형은 다 가능
// person.set("name", "Choi");
// person.set("age", 20);
// person.set(666, "악마");
// person.set([1, 2, 2, 4], "내생일");

// //Map에서 자료 꺼내는 법
// person.get("age");
// // person.delete('age') // 자료삭제
// // 자료 갯수 세는 법
// person.size;

// // 웹UI 쓸때는 필요없음 자료간의 의존성같은거 나타내고 싶을때나, 수학연산 같을때 사용한다(가끔사용)

// // 반복문으로 Map에서 자료 꺼내는 법
// for (var key of person.keys()) {
//   console.log(key);
// }

// // Map 자료향에 직접 자료 집어넣을 땐
// var person2 = new Map([
//   ["name", "choi"],
//   ["age", 20],
//   [666, "악마"],
// ]);

// for (var key of person2.keys()) {
//   console.log(key);
// }

// Es6에서 부터 추가된
// Set 자료형
// 중복자료를 허용하지 않는 Array 비슷한것비슷한것

// 중복자료가 나옴 'tom'
var 출석부 = ["john", "jin", "sung", "tom", "tom"];
// Set은 중복을 허용하지 않음.
var 출석부2 = new Set(["john", "jin", "sung", "tom", "tom"]);

// 추가
출석부2.add("sally");
// 제거
// 출석부2.delete('sally')
//있는지 확인
출석부2.has("sally");
//몇개 들어있는지 확인
출석부2.size;

// Set자료형 <-> Array 자료형
// 활용문제:Array의 중복자료를 제거하고 싶으면?
var 음식메뉴 = ["불고기", "족발", "피자", "콜라", "피자"];

var 음식메뉴2 = new Set(["불고기", "족발", "피자", "콜라", "피자"]);

음식메뉴 = [...음식메뉴2]; // 중복자료가 제거됨.

// Set 자료형에 반복문 돌리기
