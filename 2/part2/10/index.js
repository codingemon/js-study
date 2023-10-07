// ES6 : Class

// 상속기능을 구현하는 ES6 : class
// constructor 만드는 신문법
class 부모 {
  constructor(aaa) {
    this.name = aaa;
    // 함수를 추가해주고 싶으면
    // 1. constructor에 추가하든가
    // 자식이 직접 함수를 가짐
    // this.sayHi = function () {
    //   console.log("Hello");
    // };
  }
  // 2. 여기에 쓰던가
  // 여기에 쓰면 자식 오브젝트에 추가 안됨
  // 부모.prototype에 추가됨
  sayHi() {
    console.log("안뇽");
  }
}

// 부모.prototype.sayHello = function(){}

var 자식 = new 부모();
// 자식.__proto__;
// Object.getPrototypeOf(자식);

// 파라미터
var 자식 = new 부모("이이잉");

// 객체지향 문법은 왜 쓰냐면
// - object여러개 만들어 쓰려고 하는것
