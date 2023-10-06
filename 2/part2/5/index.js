// constructor

// constructor 문법의 용도
// - objcet를 마구 복사하고 싶을 때 사용한다.
// - 비슷한 object 여러개 만들 때

// 예시 : 학생 출석부를 만들어보자.
// Q. 비슷한 학생 objcet를 여러개 만들려면?
// A. constructor 라는 objcet 생성 기계를 만들자.

// var 학생1 = {
//     name:'kim',
//     age:15,
//     sayHi : function(){
//         console.log('안녕하세요' + this.name + '입니다')
//     }
// };

function Student(이름, 나이) {
  // 이것은 constructor 이걸 쓰면 object마구 뽑기 가능
  // this는 새로생성되는 object를 뜻함
  //   this.name = 'kim'
  // this.age = 15
  this.name = 이름;
  this.age = 나이;
  this.sayHi = function () {
    console.log("안녕하세요" + this.name + "입니다");
  };
}

var 학생1 = new Student("Park"); // 이러면 object 뽑힘

학생1.sayHi(); // 안녕하세요 Kim 입니다.

// this : 기계에서 새로생성도니느 objec(instance)
// 기계 : object생성기계(constructor, 생성자)

function Product(상품명, 가격) {
  this.name = 상품명;
  this.price = 가격;
  this.부가세 = function () {
    console.log(this.price * 0.1);
  };
}

var product1 = new Product("shirts", 50000);
var product2 = new Product("pants", 60000);
