// extends / spuer

// 이거랑 유사한 class를 하나 더 만들고 싶으면? extends를 사용 (class 상속)
// class 부모 {

// }

// 그냥 class 하나 더 하드코딩하면 안되나?
// -> 복사/상속할 값이 많으면 힘들기 때문
// -> 그래서 extends로 class를 복사한다.

// class 하나 만들기
class 할아버지 {
  constructor(name) {
    this.성 = "Kim";
    this.이름 = name;
  }
  sayHi() {
    console.log("안녕");
  }
}

var 할아버지1 = new 할아버지("만덕");

// 이거랑 유사한 class를 만들고 싶다면 (할아버지의 속성들 그대로 물려받고 싶다면

class 아버지 extends 할아버지 {
  constructor(name) {
    // extends 해서 만든 class는 this 그냥 못씀
    // super() 다음에 써야함
    // 부모 class의 constructor를 의미
    super(name); // 할아버지의 constructor를 여기에 펄쳤으니까
    // super의 파라미터에 아무것도 안넣으면 undefined가 나옴.
    this.나이 = 50;
  }
  sayHi() {
    console.log("안녕하세요 저는 아버지예요");
    super.sayHi(); // 부모 class의 Prototype을 의미
    // 이러면 두개의 텍스트가 출력된다.
  }
}

var 아버지1 = new 아버지("만수"); // 제대로 잘나옴 super가 없으면 안나옴

// super()의 또 다른 용도
