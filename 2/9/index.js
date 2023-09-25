// Quiz : template literals

// Q1. 여기 문자가 있습니다.
// 자주 안씀
// var pants = 20;
// var socks = 100;

// function 해체분석기(문자들, 변수들1, 변수들2) {
//   console(문자들[1] + 변수들2 + 문자들[0] + 변수들1);
// }

// 해체분석기`바지${pants} 양말${socks}`;

// Q2
var pants = 0;
var socks = 100;

function 해체분석기(글자들, 변수들1, 변수들2) {
  if (변수들1 == 0) {
    console.log(`바지 다 팔렸어요` + 변수들2);
  }
}

해체분석기`바지${pants} 양말${socks}`;
