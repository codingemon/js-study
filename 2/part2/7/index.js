// prototype (2)

function Student(이름, 나이) {
  this.name = 이름;
  this.age = 15;
  this.sayHi = function () {
    console.log("안녕하세요" + this.name + "입니다");
  };
}

Student.prototype.gender = "남";

var 학생1 = new Student("Park");
var 학생2 = new Student("Kim");

var arr = [1, 2, 3];
var arr = new Array(1, 2, 3);
var obj = { name: "Kim" };
var obj = new Object();

// 1) prototype은 함수에만 몰래 생성된다.
// 2) 내 부모 유전자(부모의 prototype)를 검사하고 싶다면 __proto__  // 부모의 유전자를 출력해주세요

// 3) __proto__를 잉ㅇ해 부모 강제 등록
var 부모 = { name: "kim" };
var 자식 = {};
자식.__proto__ = 부모; // 나의 부모유전자는 이걸로 해주세요
자식.name;

// 4) 콘솔창에서 알려주는 prototype chain
