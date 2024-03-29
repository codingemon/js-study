// 1. 직접 class 구조 만들어보기

// 갑자기 강아지 SNS를 만들고 싶어서 자바스크립트로 열심히 코딩하던 중,
// 여러 강아지 정보들을 담은 유사한 오브젝트 자료형을 테스트삼아 몇개 만들려고 합니다.

// var 강아지1 = { type : '말티즈', color : 'white' };
// var 강아지2 = { type : '진돗개', color : 'brown' };
// 이렇게 쭉 많이 만들고 싶은데 하드코딩하기 싫어서 class를 만들어 강아지 오브젝트들을 뽑고 싶습니다.

// 그럼 class를 어떻게 만드는게 좋을까요?

// class Dogs {
//     constructor(type, color){
//         this.type = type;
//         this.color = color
//     }
// }

// var 강아지1 = new Dogs('말티즈', 'white');
// var 강아지2 = new Dogs('진돗개', 'brown');

// // 2. 이번엔 고양이관련 object들을 만들고 싶습니다.

// // 이번엔 class를 이용해 고양이 오브젝트 여러개를 뽑고 싶습니다.

// // var 고양이1 = { type : '코숏', color : 'white', age : 5 };
// // var 고양이2 = { type : '러시안블루', color : 'brown', age : 2 };
// // type, color는 이전에 만든 강아지 object와 유사한데

// // 고양이들만 특별하게 age라는 속성을 하나 더 추가하고 싶습니다. 어떻게 class를 만들면 될까요?

// // 1번 문제에서 만들었던 강아지 class와 유사하기 때문에 extends라는 문법을 쓰는 것도 좋겠군요.

// class Cats extends Dogs {
//     constructor(type,color,age){
//       super(type, color);
//       this.age = age;
//     }
// }

// var 고양이 = new Cats('코숏', 'white', 5);

// 3. 고양이와 강아지 object들에 기능을 하나 추가하고 싶습니다.

// 모든 고양이와 강아지 object들은 .한살먹기() 라는 함수를 사용할 수 있습니다.
// (1) 한살먹기 함수는 강아지 class로부터 생성된 오브젝트가 사용하면 콘솔창에 에러를 출력해주어야합니다.
// (2) 한살먹기 함수는 고양이 class로 부터 생성된 오브젝트가 사용하면 현재 가지고있는 age 속성에 1을 더해주는 기능을 실행해야합니다.

// 한살먹기 함수는 어떻게 만들면 좋을까요? (검색이 필요할 수 있습니다)

// class Dogs {
//     constructor(type, color){
//         this.type = type;
//         this.color = color
//     }
//     agePlus(){
//         console.log('error')
//     }
// }

// var 강아지1 = new Dogs('말티즈', 'white');
// var 강아지2 = new Dogs('진돗개', 'brown');

// class Cats extends Dogs {
//     constructor(type,color,age){
//       super(type, color);
//       this.age = age;
//     }
//     agePlus(){
//         return this.age + 1;
//     }
// }

// var 고양이 = new Cats('코숏', 'white', 5);

class Dogs {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  agePlue() {
    if (this instanceof Cats) {
      this.age++;
    }
  }
}

// 자바스크립트는 instanceof 라는 고마운 연산자가 있습니다.
// a instanceof b 이렇게 쓰시면 a가 b로부터 생성된 오브젝트인지 아닌지를 true/false로 알려주는 연산자입니다.
// 그래서 한살먹기()라는 함수를 만들고 this.age++를 해주는 기능을 넣었는데 이 기능은 this가 instanceof Cat인 경우에만 실행하도록 if문을 추가했습니다.
// 그럼 이제 Cat으로 부터 생성된 오브젝트들만 한살먹기() 내부 기능을 사용가능합니다.

class Cats extends Dogs {
  constructor(type, color, age) {
    super(type, color);
    this.age = age;
  }
}

// 4. get/set을 이용해봅시다

// 자바스크립트로 간단한 게임 기능을 가진 오브젝트를 뽑는 class를 만들고 싶습니다.
// 다음 조건에 따라 class를 만들어보세요. class 이름은 Unit이라고 합시다.

// (1) 모든 Unit의 인스턴스는 공격력, 체력 속성이 있으며 기본 공격력은 5, 기본 체력은 100으로 설정되어 있어야 합니다.
// (2) 모든 Unit의 인스턴스는 전투력을 측정해주는 battlePoint라는 getter가 있습니다.
// console.log( 인스턴스.battlePoint ) 이렇게 사용하면 현재 공격력과 체력을 더한 값을 콘솔창에 출력해주어야합니다.

// (3) 모든 Unit의 인스턴스는 heal이라는 setter가 있습니다.
// 인스턴스.heal = 50 이렇게 사용하면 체력 속성이 50 증가해야합니다.

// *인스턴스는 class로부터 새로생성되는 오브젝트를 뜻합니다.

class Unit {
  constructor() {
    this.attack = 5;
    this.health = 100;
  }
  get battlePoint() {
    return this.health + this.attack;
  }
  set heal(a) {
    this.health = this.health + a;
  }
}

// 5. get/set을 이용해봅시다2

// 다음과 같은 오브젝트가 있습니다.

// var data = {
//   odd : [],
//   even : []
// }

// (1) data 오브젝트안에 setter 역할 함수를 하나 만들어보십시오.
// setter 함수에 1,2,3,4 이렇게 아무 자연수나 파라미터로 입력하면 홀수는 odd, 짝수는 even 이라는 속성에 array 형태로 저장되어야합니다.
// (2) data 오브젝트안에 getter 역할 함수를 하나 만들어보십시오.
// getter 함수를 사용하면 odd, even에 저장된 모든 데이터들이 숫자순으로 정렬되어 출력되어야합니다.

// 예를 들면
// data.setter함수(1,2,3,4,5) 이렇게 입력하면
// data = { odd : [1,3,5], even : [2,4] }
// 이렇게 저장이 되어야합니다.

// 빨리 위의 역할을 하는 함수 두개를 data 오브젝트 내에 만들어보십시오.
