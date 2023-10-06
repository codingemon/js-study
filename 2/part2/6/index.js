// prototype

// Student(constructor)를 만들면 prototype이라는 공간이 자동으로 생긴다.
function Student(이름, 나이) {
  this.name = 이름;
  this.age = 15;
  this.sayHi = function () {
    console.log("안녕하세요" + this.name + "입니다");
  };
}

// 상속을 구현할 수 있는 또 하나의 문법 prototype
// prototype은 유전자
// prototype에 값을 추가하면 모든 자식들이 물려받기 가능하다.

Student.prototype.gender = "남";

// 상속
// Student가 가지고 있는것들을 상속 받음.
var 학생1 = new Student("Park");
var 학생2 = new Student("Kim");

// prototype의 동작원리
// (1) 학생1이 직접 name을 가지고 있는가? 그럼 출력!
학생1.name;

// (1) 학생1이 직접 gender를 가지고 있는가? 놉
// (2) 그럼학생1의 부모 유젅자가 gender를 가지고 있는가? 그럼 실행!
// 오브젝트는 이런 순서로 자료를 출력한다.
학생1.gender;

// prototype의 동작원리
// :내장함수는 어떻게 동작하는가
학생1.toString(); // (Object/Array에 붙일 수 있는 내장함수)
// 대체 어떻게 해놨길래 모든 Object가 쓸 수 있을까?
// (1)학생1이 toString()을 가지고있는가?
// (2)그럼 부모 유전자에 있는가?
// (3)그럼 부모의 부모 유전자에 있는거? .... 반복

var arr = [1, 2, 3];
var arr = new Array(1, 2, 3); // 실제 array가 만들어지는 방식(array 만드는 기계로 부터 하나 뽑음)

// arr의 부모유전자가 sort를 가지고 있어서 쓸 수 있는거다.
// arr.sort();
// arr.map();
// arr.push();
