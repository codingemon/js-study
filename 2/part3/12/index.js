// ?./ ?? 연산자 (optional chaining)

// 여러 문자, 숫자를 한 변수에 저장하려면
var user = {
  name: "kim",
  age: 20,
};

// console.log(user.age);

// optional chaining
//   왼쪽이 비어있으면, 오른쪽 안해줌
// ?.왼쪽이 null, undefined면 점안찍어주고 Undefined 남겨줌
// 언제씀? - 중첩된 object 자료에서 자료뽑을 때 reference 에러없이 안전하게 뽑을 수 있음
console.log(user?.age);

// 예시

var user1 = {
  name: "choi",
  age: { value: 20 },
};

// console.log(user.age.value); // 여기서 코드실행 중단
console.log(user.age?.value); // 에러가 안남(if문 쓰기 귀찮다)
// 그냥 오브젝트에서 ? 를 쓰면 아무 쓸모가 없다.

// ?? nullish coalescing 연산자
// 왼쪽이 undefined, null 이면  '으잉' 이거 보여주쇼
console.log(undefined ?? "으잉");

// 예시
var user3;

console.log(user ?? "로딩중");
