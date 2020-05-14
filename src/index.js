import {html, render} from "lit-html";

// Define a template
const myTemplate = (io) => html`<p>Hello ${io}</p>`;
const root = document.getElementById('root');
// Render the template to the document

render(myTemplate("word"), root);
