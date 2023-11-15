// 버튼0 누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// - 모든div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가

// 좋은 관습: 자주쓰는 셀렉터 변수에 넣어쓰기

// for 문
// for (횟수){
//     console.log("안녕")
// }

// for문법은 코드복붙보다는 반복실행이 맞음(별차이없음)
// for (let i = 0; i < 5; i++)  내가 5개를 띄우게 했던것 밑은 답
// for (let i = 0; i < $(".tab-button").length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       탭열기(i);
//     });
// }

$(".list").click(function (e) {
  // if (e.target == document.querySelectorAll(".tab-button")[0]) {
  //   탭열기(0);
  // }  if (e.target == document.querySelectorAll(".tab-button")[1]) {
  //   탭열기(1);
  // }  if (e.target == document.querySelectorAll(".tab-button")[2]) {
  //   탭열기(2);
  // }

  // 탭열기(지금누른버튼에 숨겨져 있는 Data-id);
  // 숫자로 변환해서 쓰면 더 정확할듯
  탭열기(e.target.dataset.id);
});

// '숫자'를 넣어줘야지 여러가지 숫자를 대입해서 잘 작동합니다
function 탭열기(숫자) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(숫자).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(숫자).addClass("show");
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
