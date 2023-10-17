// Web Components
// (Js문법으로 구현할 수 있는 브라우저 기본 기능임)
// 웹개발 잘하고 싶으면 브라우저 기능을 잘 알아야함 JS문법은 도구일 뿐

// 길고 복잡한 HTML 축약하는법
// <label>, <input> => <custom-input> 축약
// <커스텀태크>장점은 html 중복제거, 다른 페이지에서 재활용가능
// 일종에 함수 문법과 비슷한 긴문법을 재사용할 수 있게 만들기 때문이다.
// <커스텀태그>안에서도 파라미터문법같은거 구현가능
class 클래스 extends HTMLElement {
  connectedCallback() {
    // 내가 만든 태그가 HTML에 정착될 떄 실행할 코드 적는곳
    // 이게 더 빠름
    // let 변수 = document.createElement("label");
    // this.appendChild(변수)

    let name = this.getAttribute("name");

    // 2번째 방법인데 코딩애플이 사용한 방법임.
    this.innerHTML = `<label>이메일인풋</label><input><button>버튼</button>`;
  }
  // name이라는 attribute 바뀌는지 감시해주세요
  static get observedAttributes() {
    return ["name"];
  }
  // 바뀌면 이거 실행해줌
  attributeChangedCallback() {
    console.log(this.getAttribute("name"));
  }
}
customElements.define("custom-input", 클래스);

// attribute 변경감지기능 제공됨
// React, Vue 특징: props(attribute)변경되면 html자동 재랜더링됨
