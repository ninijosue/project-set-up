import { LitElement, html, css } from 'lit-element';

class Index  extends LitElement {

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