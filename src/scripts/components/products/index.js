import { LitElement, html, css } from 'lit-element';

export default class Products  extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      <h1>Products</h1>
    `;
  }
}

customElements.define('index', Index);