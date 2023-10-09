// destructuring

// array 데이터를 전부 변수에 담으려면?
// var arr = [2, 3, 4];

// var a = arr[0];
// var b = arr[1];

// a모양만 맞춰 변수를 선언하면 변수가 생긴다.
// 직관적으로 만들어 써라
// var [a, b, c] = [2, 3, 4];

// array destructuring할 때 몇개를 빼먹는다면?
// - 등호로 기본값 지정 가능 (디폴트변수 지정)
// var [a,b,c = 10] = [2,3]; // c -> 10 (디볼트때문에 10이 된다.)
// var [a,b,c = 10] = []; // undefined

// object 데이터를 꺼내 변수에 담으려면?

// 이거 말고
// var obj = {name : 'Kim', age: 30};
// var name = obj.name;
// var age = obj.age;

// - 변수명을 Key 명과 똑같이 써야한다.
// var { name , age = 29 } = {name : 'kim', age: 30};
// - 기본값 지정가능
// var { name , age = 29 } = {name : 'kim'};

// var {name : 나이, age = 31} = {name : 'kim'}

// 디폴트를 주고 싶으면 이렇게
// var {name : 나이 = 'Park'} = { };

// 반대로 변수들을 object에 집어넣고 싶은 경우
// var name = 'choi';
// var age = 30;

// var obj = { name : name, age : age} // 이런거 매우 흔함

// 축약 해서 쓸 수 있다.
// var obj = {name, age};

// 함수 파라미터 만들 때도 destructuring 문법 사용가능
var obj = { name: "choi", age: 29 };

// object 데이터들을 파라미터로 만들고 싶을 경우
// name, age라는 이름의 파라미터 변수를 입력가능하다.
function 함수({ name, age }) {
  console.log(name);
  console.log(age);
}

// 파라미터 변수 {name, age}에 이걸 각각 대입해주자
함수({ name: "choi", age: 29 });

// Q1. 변수를 마구 만들었는데 말입니다..
// var [number, address] = [ 30, 'seoul' ];
// var {address : a , number = 20 } = { address, number };
// 약간 복잡해서 여러분께 물어보겠습니다.

// a와 address와 number라는 변수는 각각 무슨 값을 가지고 있을까요?
var { address: a, number = 20 } = { address: "seoul", number: 30 };

// Q2. 다음과 같은 Object에서 데이터를 뽑아서 변수를 만들고 싶습니다.

// let 신체정보 = {
//   body: {
//     height: 190,
//     weight: 70
//   },
//   size: ["상의 Large", "바지 30인치"],
// };
// 여러분의 뛰어난 신체 정보를 담은 Object입니다.

// 여기서 키, 몸무게, 상의사이즈, 하의사이즈 정보를 각각 뽑아서 4개의 변수를 만들고 싶습니다.

// 어떻게 만들면 될까요?

// (참고 : 데이터가 얼마나 복잡하든간에 좌우 형태를 똑같이 맞추시면 destructuring 문법으로 변수를 만들 수 있습니다.)

let 신체정보 = {
  body: {
    height: 190,
    weight: 70,
  },
  size: ["상의 Large", "바지 30인치"],
};

let {
  body: { height, weight },
  size: [상의, 하의],
} = 신체정보;
