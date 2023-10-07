// ES5 : Object.create

// prototype, function(){} 옛날문법임 => 더 쉽게 구현가능
// 상속기능을 구현하는 ES5 방법: Object.create()

// Object.create(프로토타입object);

var 부모 = { name: "choi", age: 60 };
// 부모가 가진 name,age를 그대로 물려받은 자식 object를 만들고 싶으면?
// - constructor 함수를 만들거나
// - Object.create를 이용하거나
var 자식 = Object.create(부모); // prototype을 부모로 해주세요.
자식.age = 20;
var 손자 = Object.create(자식);
