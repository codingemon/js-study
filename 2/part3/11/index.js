// shadow DOM

// shoadow DOM 만드는법
// document.querySelector("#mordor").attachShadow({ mode: "open" });
// document.querySelector("#mordor").shadowRoot.innerHTML =
//   "<p>심연에서 왓찌렁</p>";

// Web Components + shadow DOM = 완벽한 HTML 모듈
// Q.Web Component에 스타일도 넣고싶으면?
// - Shadow DOM 쓰면 좋음
// shadow DOM에 넣은 것들은 외부에 영향 X
class 클래스 extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    // 그냥 짜면 코드가 더러움
    // this.shadowRoot.innerHTML = `<label>이메일을 입력하세요</label><input>
    // <style>label {color :red}</style>`;

    // template (html임시보관함)
    // Web Component 생성도와주는 라이브러리 많음 Lit이런거 stencil 얘는 props, state도 지원
    this.shadowRoot.append(template1.content.cloneNode(true));

    // shadow DOM에 이벤트리스너도 부착가능
    let el = this.shadowRoot.querySelector("label");
    el.addEventListener("click", function () {
      console.log("클릭함");
    });
  }
}

customElements.define("custom-input", 클래스);
