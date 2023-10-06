// Primitive/Reference Data types

// 그냥 문자와 숫자는 Primitive data type
// 변수에 값이 그대로 저장됨
var 변수 = "dddd";
1234;

// Array, Object는 변수에 값이 저장이 안된다.
// : 변수에 reference가 저장된다.
var 어레이 = [1, 2, 3]; // 변수에 reference가 저장됨. 저쪽에 있어요 (화살표)
// obj에는 {name : 'kim'}이 저쪽에 있습니다~라는 화살표가 들어잇다.
var object = { name: "kim" };

// Reference data type 다루기 : 복사
var 이름1 = { name: "김" };
var 이름2 = 이름1; // 밑 때문에 이름2도 박으로 바뀜. 화살표를 복사한다고 생각하면 편함
이름1.name = "박"; // {name:'박'}

// 이름1에는 {name: '김'} 이게 저장되는게 아니라, {name:'김'}이 저기있어요
// 라는 화살표(reference)가 저장됨
// 그래서 array, object 함부로 복사하면 클남

// Reference data type 다루기2
// var name1 = { name : '김'};
// var name2 = { name : '김'};

// name1 == name2 // 화살표를 저장한거 그래서 다름.

// Reference data type 다루기3
// 오브젝트를 변경해주는 함수
var name1 = { name: "김" };
function 변경(obj) {
  // obj.name = 'Park'
  obj = { name: "park" }; // 오브젝트를 재할당해주는 함수(실패. 안바뀜)
  // 그 파라미터 변수에 = {} 해봤자. 원래 name1 오브젝트는 변화가 없다.
}

// 변경(name1); // {name : 'Park'}
변경(name1); // 변경 안됨
// 파라미터는 변수생성 & 할당과 똑같다.
// 변경 (var obj = 이름1); // 이렇게 이해함
