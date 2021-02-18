import { html } from "@depository/view";

export class Title {
  render({ children }) {
    return html`<h1>${children}</h1>`;
  }
}
