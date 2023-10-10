// import/export
// (library.js)
// .js파일을 만들어서 자스크립트를 보관합니다.

var a = 10;
// export default 내보낼거
var b = 20;
// export default a; // 하나만
// 여러개 export
export { a, b };
// 아니면 export var a = 10; 이런식으로 해줘도 괜찮음

var c = 30;
// export와 export default 동시 사용
export default c; //라고 해도 괜찮음
