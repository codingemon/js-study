// 버튼0 누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// - 모든div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가

// 좋은 관습: 자주쓰는 셀렉터 변수에 넣어쓰기

// for 문
// for (횟수){
//     console.log("안녕");
// }

// for문법은 코드복붙보다는 반복실행이 맞음(별차이없음)

for (let i = 0; i < 5; i++) {
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      $(".tab-button").removeClass("orange");
      $(".tab-button").eq(i).addClass("orange");
      $(".tab-content").removeClass("show");
      $(".tab-content").eq(i).addClass("show");
    });
}

// $(".tab-button")
//   .eq(1)
//   .on("click", function () {
//     button.removeClass("orange");
//     button.eq(1).addClass("orange");
//     content.removeClass("show");
//     content.eq(1).addClass("show");
//   });

// $(".tab-button")
//   .eq(2)
//   .on("click", function () {
//     button.removeClass("orange");
//     button.eq(2).addClass("orange");
//     content.removeClass("show");
//     content.eq(2).addClass("show");
//   });
