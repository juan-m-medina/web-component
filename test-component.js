import "./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js";

class Content extends HTMLElement {
  constructor() {
    super();

    this._$content = null;
    this._$callback = null;

    this._root = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["callback"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "callback") {
      this._$callback = newValue;
    }
  }

  connectedCallback() {
    alert(`I am setup and my id is "${this.id}"`);
    let styleIdPrefix = this._isIE() ? `#${this.id} ` : "";
    this._root.innerHTML = `
        <style>
            ${styleIdPrefix}p {
                color: red;
            }
        </style>
        <div class="ltv-content-container">
            <p id="content">My Web Component</p>
            <button id="ltv-content-callback">Call back!</button>
        </div>
    `;

    this._$content = this._root.querySelector("#content");
    this._$callback = this._root.querySelector("#ltv-content-callback");
    this._$callback.addEventListener("click", () => {
      alert(`I was clicked and I have an id of "${this.id}"`);
    });
  }

  _isIE() {
    let ua = window.navigator.userAgent;
    return ua.indexOf("Trident/") > -1;
  }
}

window.customElements.define("ltv-content", Content);
