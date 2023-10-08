// getter / setter

var 사람 = {
  name: "choi",
  age: 30,
  // 내년 age를 알고 싶음
  nextAge() {
    return this.age + 1;
  },
  // 나이를 변경하는 함수
  setAge(나이) {
    this.age = parseInt(나이);
  },
};

// age라는 자료를 꺼내고 싶으면?
// - 자료를 꺼내는 법을 만들어서 꺼냅니다. (유행하는 잡기술)

// 장점
// 1. object 자료가 복잡할 때 이득
// 사람.age[1].age2.age3 + 1  // 복잡
// 사람.nextAge();

// 2. object 자료 수정시
// 사람.age = '20'; // 데이터 수정시 실수 유발 가능
// 사람.age = 20; // 말고
사람.setAge(20); // 이러면 age가 20으로 변하는 함수
// setAge() 왜 만들었음?
// : 데이터 수정시 미리 검사가능 ( 안전장치 기능개발 가능
// 데이터를 꺼내거나 / 수정하거나 그럴대 편리 & 실수방지 & 관리가능

// 복잡한 소괄호 꼴보기 싫다면 set/get 키워드
var 사람2 = {
  name: "choi",
  age: 30,
  // get은 데이터 꺼내쓰는 함수에
  // getter
  // get함수들(getter) - return이 있어야한다.
  get nextAge() {
    return this.age + 1;
  },
  // set은 데이터 변경하는 함수에
  // setter
  // set함수들(setter) - 파라미터가 1개 있어야한다.
  set setAge(나이) {
    this.age = parseInt(나이);
  },
};

사람2.setAge = "20";
사람2.nextAge; // 소괄호를 쓰지않아도 나이를 꺼내준다.

// set/get 키워드 특징
// get함수들(getter) - return이 있어야한다.
// set함수들(setter) - 파라미터가 1개 있어야한다.

// class에서 사용하는 get/set
class 사람3 {
  constructor() {
    this.name = "Choi";
    this.age = 20;
  }
  // get을 써줄수도 있음.
  get nextAge() {
    return this.age + 1; // 내년 나이를 출력해주는 함수 제작 끝
  }
  // setter
  set setAge(나이) {
    this.age = 나이;
  }
}

var 사람임 = new 사람3();

// Object 다룰 떄 활용해보자
