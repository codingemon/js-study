// 함수 파라미터 넣읋때
function 더하기(a, b, c) {
  console.log(a + b + c);
}

// array 내의 모든 데이터를 파라미터로 집어넣고 싶은 경우
var 어레이 = [10, 20, 30];

// 더하기.apply(undefined, 어레이); // 옛날

// 그냥 더하기() 함수가 그대로 실행된다
// 그럼 굳이 apply를 쓴 이유는 파라미처호 array 집어넣기 가능하니까
더하기.apply(1, 어레이);

더하기(...어레이); // 요즘방식

// apply 함수 개념설명
var person = {
  인사: function () {
    console.log("안녕");
  },
};

// person.인사();//안녕
var person2 = {
  name: "이강인",
};

// person.인사()를 person2에 적용하고 싶을 때 apply를 쓰자
// person.인사.apply(person2)
// apply() 그냥 함수를 옮겨와서 실행해주세요.

// apply / call 비슷함
// 근데 apply는 파라미터를 array형태로 집어넣기 가능
person.인사.apply(person2); // 손흥민 안녕
person.인사.call(person2);
